import type { Project } from "@/types/portfolio";
import { HOME_PROJECTS } from "@/features/home/sections/featured-work/constants";
import { HOME_SERVICES } from "@/features/home/sections/services/constants";
import { FAQ_ITEMS } from "@/features/home/sections/faq/constants";
import { TECH_CATEGORIES } from "@/features/home/sections/technology/constants";
import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT_DESCRIPTION,
  SITE_TAGLINE,
  SOCIAL_LINKS,
} from "@/constants/site";
import { FOOTER_NAVIGATION, PRIMARY_NAVIGATION } from "@/constants/navigation";

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
  NewsletterInput,
} from "./types";

function mapProject(project: Project, index: number): DomainProject {
  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    category: project.category,
    shortDescription: project.summary,
    fullDescription: project.description,
    featuredImage: project.coverImage
      ? { id: project.id, url: project.coverImage, alt: project.title }
      : null,
    gallery: (project.gallery ?? []).map((url, i) => ({
      id: `${project.id}-g-${i}`,
      url,
      alt: project.title,
    })),
    technologies: project.technologies ?? [],
    client: project.client ?? null,
    projectStatus: project.status,
    year: project.year ?? null,
    githubUrl: project.githubUrl ?? null,
    liveUrl: project.liveUrl ?? null,
    featured: Boolean(project.featured),
    order: index,
    status: "published",
  };
}

/**
 * Static CMS adapter — mirrors current site constants.
 * Default provider so the UI remains visually identical with zero Payload data.
 */
export class StaticCmsAdapter implements CmsAdapter {
  readonly name = "static" as const;

  async getProjects(): Promise<DomainProject[]> {
    return HOME_PROJECTS.map(mapProject);
  }

  async getProjectBySlug(slug: string): Promise<DomainProject | null> {
    const projects = await this.getProjects();
    return projects.find((p) => p.slug === slug) ?? null;
  }

  async getServices(): Promise<DomainService[]> {
    return HOME_SERVICES.map((service, index) => ({
      id: service.id,
      slug: service.slug,
      name: service.title,
      description: service.description,
      features: [...(service.features ?? [])],
      technologies: [...(service.technologies ?? [])],
      icon: service.slug,
      image: service.image
        ? { id: service.id, url: service.image, alt: service.title }
        : null,
      order: index,
      faqs: [],
      status: "published" as const,
    }));
  }

  async getServiceBySlug(slug: string): Promise<DomainService | null> {
    const services = await this.getServices();
    return services.find((s) => s.slug === slug) ?? null;
  }

  async getFaqs(): Promise<DomainFaq[]> {
    return FAQ_ITEMS.map((item, index) => ({
      id: item.id,
      question: item.question,
      answer: item.answer,
      order: index,
    }));
  }

  async getPosts(): Promise<DomainPost[]> {
    return [];
  }

  async getPostBySlug(): Promise<DomainPost | null> {
    return null;
  }

  async getTestimonials(): Promise<DomainTestimonial[]> {
    return [];
  }

  async getTechnologies(): Promise<DomainTechnology[]> {
    const items: DomainTechnology[] = [];
    TECH_CATEGORIES.forEach((category, catIndex) => {
      category.technologies.forEach((name, itemIndex) => {
        items.push({
          id: `${category.id}-${itemIndex}`,
          name,
          slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          category: category.id,
          icon: null,
          order: catIndex * 100 + itemIndex,
        });
      });
    });
    return items;
  }

  async getSiteSettings(): Promise<DomainSiteSettings> {
    return {
      companyName: SITE_NAME,
      tagline: SITE_TAGLINE,
      description: SITE_DESCRIPTION,
      shortDescription: SITE_SHORT_DESCRIPTION,
      email: CONTACT_EMAIL,
      theme: "dark",
      analytics: null,
    };
  }

  async getSocialLinks(): Promise<DomainSocialLink[]> {
    return Object.entries(SOCIAL_LINKS).map(([platform, url]) => ({
      platform,
      url,
      label: platform,
    }));
  }

  async getNavigation() {
    const primary: DomainNavLink[] = PRIMARY_NAVIGATION.items.map((item) => ({
      label: item.label,
      href: item.href,
      status: (item.status as DomainNavLink["status"]) ?? "live",
    }));
    return {
      primary,
      cta: {
        label: PRIMARY_NAVIGATION.cta.label,
        href: PRIMARY_NAVIGATION.cta.href,
        status: "live" as const,
      },
    };
  }

  async getFooterLinks() {
    const map = (
      items: { label: string; href: string; status?: string }[],
    ): DomainNavLink[] =>
      items.map((item) => ({
        label: item.label,
        href: item.href,
        status: (item.status as DomainNavLink["status"]) ?? "live",
      }));

    return {
      company: map(FOOTER_NAVIGATION.company),
      resources: map(FOOTER_NAVIGATION.resources),
      legal: map(FOOTER_NAVIGATION.legal),
      newsletterEnabled: FOOTER_NAVIGATION.newsletterReady,
    };
  }

  async createContactRequest(
    _input: ContactRequestInput,
  ): Promise<{ id: string }> {
    // Static mode — accept and return synthetic id (API already validates)
    return { id: `static_contact_${Date.now()}` };
  }

  async subscribeNewsletter(_input: NewsletterInput): Promise<{ id: string }> {
    return { id: `static_newsletter_${Date.now()}` };
  }
}
