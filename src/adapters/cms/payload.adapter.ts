import { getPayload } from "payload";

import config from "@payload-config";

import { StaticCmsAdapter } from "./static.adapter";
import type {
  CmsAdapter,
  ContactRequestInput,
  DomainFaq,
  DomainNavLink,
  DomainPost,
  DomainProject,
  DomainService,
  DomainSiteSettings,
  DomainSocialLink,
  DomainTechnology,
  DomainTestimonial,
  MediaAsset,
  NewsletterInput,
} from "./types";

function mediaUrl(file: unknown): MediaAsset | null {
  if (!file || typeof file !== "object") return null;
  const m = file as {
    id?: string | number;
    url?: string | null;
    alt?: string | null;
    width?: number | null;
    height?: number | null;
    mimeType?: string | null;
  };
  if (!m.url) return null;
  return {
    id: String(m.id ?? m.url),
    url: m.url,
    alt: m.alt ?? "",
    width: m.width,
    height: m.height,
    mimeType: m.mimeType,
  };
}

/**
 * Payload Local API adapter — falls back to static seed when DB is empty / unavailable.
 */
export class PayloadCmsAdapter implements CmsAdapter {
  readonly name = "payload" as const;
  private fallback = new StaticCmsAdapter();

  private async payload() {
    return getPayload({ config });
  }

  async getProjects(): Promise<DomainProject[]> {
    try {
      const payload = await this.payload();
      const result = await payload.find({
        collection: "projects",
        depth: 2,
        limit: 100,
        where: { _status: { equals: "published" } },
        sort: "order",
      });

      if (!result.docs.length) return this.fallback.getProjects();

      return result.docs.map((doc, index) => ({
        id: String(doc.id),
        slug: String(doc.slug),
        title: String(doc.title),
        category: String(doc.category),
        shortDescription: String(doc.shortDescription),
        fullDescription: (doc.fullDescription as string) ?? null,
        featuredImage: mediaUrl(doc.featuredImage),
        gallery: Array.isArray(doc.gallery)
          ? (doc.gallery
              .map((g) => mediaUrl((g as { image?: unknown }).image))
              .filter(Boolean) as MediaAsset[])
          : [],
        technologies: Array.isArray(doc.technologiesText)
          ? (doc.technologiesText as string[])
          : [],
        client: (doc.client as string) ?? null,
        projectStatus: String(doc.projectStatus ?? "shipped"),
        year: (doc.year as number) ?? null,
        githubUrl: (doc.githubUrl as string) ?? null,
        liveUrl: (doc.liveUrl as string) ?? null,
        featured: Boolean(doc.featured),
        order: (doc.order as number) ?? index,
        status: "published",
      }));
    } catch {
      return this.fallback.getProjects();
    }
  }

  async getProjectBySlug(slug: string): Promise<DomainProject | null> {
    const projects = await this.getProjects();
    return projects.find((p) => p.slug === slug) ?? null;
  }

  async getServices(): Promise<DomainService[]> {
    try {
      const payload = await this.payload();
      const result = await payload.find({
        collection: "services",
        depth: 1,
        limit: 50,
        where: { _status: { equals: "published" } },
        sort: "order",
      });
      if (!result.docs.length) return this.fallback.getServices();

      return result.docs.map((doc, index) => ({
        id: String(doc.id),
        slug: String(doc.slug),
        name: String(doc.name),
        description: String(doc.description),
        features: Array.isArray(doc.features)
          ? doc.features.map((f) => String((f as { item?: string }).item ?? ""))
          : [],
        technologies: [],
        icon: (doc.icon as string) ?? null,
        image: mediaUrl(doc.image),
        order: (doc.order as number) ?? index,
        faqs: Array.isArray(doc.faqs)
          ? doc.faqs.map((f) => ({
              question: String((f as { question: string }).question),
              answer: String((f as { answer: string }).answer),
            }))
          : [],
        status: "published" as const,
      }));
    } catch {
      return this.fallback.getServices();
    }
  }

  async getServiceBySlug(slug: string): Promise<DomainService | null> {
    const services = await this.getServices();
    return services.find((s) => s.slug === slug) ?? null;
  }

  async getFaqs(): Promise<DomainFaq[]> {
    try {
      const payload = await this.payload();
      const result = await payload.find({
        collection: "faqs",
        limit: 50,
        where: { published: { equals: true } },
        sort: "order",
      });
      if (!result.docs.length) return this.fallback.getFaqs();
      return result.docs.map((doc, index) => ({
        id: String(doc.id),
        question: String(doc.question),
        answer: String(doc.answer),
        order: (doc.order as number) ?? index,
      }));
    } catch {
      return this.fallback.getFaqs();
    }
  }

  async getPosts(): Promise<DomainPost[]> {
    try {
      const payload = await this.payload();
      const result = await payload.find({
        collection: "posts",
        depth: 1,
        limit: 50,
        where: { _status: { equals: "published" } },
        sort: "-publishedAt",
      });
      return result.docs.map((doc) => ({
        id: String(doc.id),
        slug: String(doc.slug),
        title: String(doc.title),
        excerpt: (doc.excerpt as string) ?? null,
        authorName:
          typeof doc.author === "object" && doc.author
            ? String((doc.author as { name?: string }).name ?? "")
            : null,
        readingTime: (doc.readingTime as number) ?? null,
        featured: Boolean(doc.featured),
        publishedAt: doc.publishedAt ? String(doc.publishedAt) : null,
        coverImage: mediaUrl(doc.coverImage),
        tags: Array.isArray(doc.tags) ? (doc.tags as string[]) : [],
        status: "published",
      }));
    } catch {
      return this.fallback.getPosts();
    }
  }

  async getPostBySlug(slug: string): Promise<DomainPost | null> {
    const posts = await this.getPosts();
    return posts.find((p) => p.slug === slug) ?? null;
  }

  async getTestimonials(): Promise<DomainTestimonial[]> {
    try {
      const payload = await this.payload();
      const result = await payload.find({
        collection: "testimonials",
        limit: 50,
        where: { published: { equals: true } },
        sort: "order",
      });
      return result.docs.map((doc, index) => ({
        id: String(doc.id),
        quote: String(doc.quote),
        authorName: String(doc.authorName),
        authorRole: (doc.authorRole as string) ?? null,
        company: (doc.company as string) ?? null,
        featured: Boolean(doc.featured),
        order: (doc.order as number) ?? index,
      }));
    } catch {
      return this.fallback.getTestimonials();
    }
  }

  async getTechnologies(): Promise<DomainTechnology[]> {
    try {
      const payload = await this.payload();
      const result = await payload.find({
        collection: "technologies",
        limit: 200,
        sort: "order",
      });
      if (!result.docs.length) return this.fallback.getTechnologies();
      return result.docs.map((doc, index) => ({
        id: String(doc.id),
        name: String(doc.name),
        slug: String(doc.slug),
        category: (doc.category as string) ?? null,
        icon: (doc.icon as string) ?? null,
        order: (doc.order as number) ?? index,
      }));
    } catch {
      return this.fallback.getTechnologies();
    }
  }

  async getSiteSettings(): Promise<DomainSiteSettings> {
    try {
      const payload = await this.payload();
      const doc = await payload.findGlobal({ slug: "site-settings" });
      if (!doc?.companyName) return this.fallback.getSiteSettings();
      return {
        companyName: String(doc.companyName),
        tagline: (doc.tagline as string) ?? null,
        description: (doc.description as string) ?? null,
        shortDescription: (doc.shortDescription as string) ?? null,
        email: String(doc.email),
        phone: (doc.phone as string) ?? null,
        address: (doc.address as string) ?? null,
        theme: (doc.theme as string) ?? "dark",
        analytics: (doc.analytics as DomainSiteSettings["analytics"]) ?? null,
      };
    } catch {
      return this.fallback.getSiteSettings();
    }
  }

  async getSocialLinks(): Promise<DomainSocialLink[]> {
    try {
      const payload = await this.payload();
      const doc = await payload.findGlobal({ slug: "social-links" });
      const links = Array.isArray(doc?.links) ? doc.links : [];
      if (!links.length) return this.fallback.getSocialLinks();
      return links.map((link) => ({
        platform: String((link as { platform: string }).platform),
        url: String((link as { url: string }).url),
        label: ((link as { label?: string }).label as string) ?? null,
      }));
    } catch {
      return this.fallback.getSocialLinks();
    }
  }

  async getNavigation() {
    try {
      const payload = await this.payload();
      const doc = await payload.findGlobal({ slug: "navigation" });
      const primaryRaw = Array.isArray(doc?.primary) ? doc.primary : [];
      if (!primaryRaw.length) return this.fallback.getNavigation();

      const primary: DomainNavLink[] = primaryRaw.map((item) => ({
        label: String((item as { label: string }).label),
        href: String((item as { href: string }).href),
        status:
          ((item as { status?: DomainNavLink["status"] })
            .status as DomainNavLink["status"]) ?? "live",
      }));

      const cta = doc?.cta as { label?: string; href?: string } | undefined;
      return {
        primary,
        cta:
          cta?.label && cta?.href
            ? { label: cta.label, href: cta.href, status: "live" as const }
            : null,
      };
    } catch {
      return this.fallback.getNavigation();
    }
  }

  async getFooterLinks() {
    try {
      const payload = await this.payload();
      const doc = await payload.findGlobal({ slug: "footer-links" });
      const map = (items: unknown): DomainNavLink[] =>
        Array.isArray(items)
          ? items.map((item) => ({
              label: String((item as { label: string }).label),
              href: String((item as { href: string }).href),
              status:
                ((item as { status?: DomainNavLink["status"] })
                  .status as DomainNavLink["status"]) ?? "live",
            }))
          : [];

      if (!doc?.company) return this.fallback.getFooterLinks();

      return {
        company: map(doc.company),
        resources: map(doc.resources),
        legal: map(doc.legal),
        newsletterEnabled: Boolean(doc.newsletterEnabled ?? true),
      };
    } catch {
      return this.fallback.getFooterLinks();
    }
  }

  async createContactRequest(
    input: ContactRequestInput,
  ): Promise<{ id: string }> {
    try {
      const payload = await this.payload();
      const doc = await payload.create({
        collection: "contact-requests",
        data: {
          fullName: input.fullName,
          company: input.company,
          email: input.email,
          phone: input.phone,
          projectType: input.projectType,
          budget: input.budget,
          description: input.description,
          source: input.source ?? "website",
          locale: input.locale ?? "en",
          status: "new",
        },
      });
      return { id: String(doc.id) };
    } catch {
      return this.fallback.createContactRequest(input);
    }
  }

  async subscribeNewsletter(input: NewsletterInput): Promise<{ id: string }> {
    try {
      const payload = await this.payload();
      const doc = await payload.create({
        collection: "newsletter-subscribers",
        data: {
          email: input.email,
          source: input.source ?? "website",
          status: "active",
        },
      });
      return { id: String(doc.id) };
    } catch {
      return this.fallback.subscribeNewsletter(input);
    }
  }
}
