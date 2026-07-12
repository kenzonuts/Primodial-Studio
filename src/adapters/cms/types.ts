/**
 * CMS-agnostic domain models — UI and services depend on these, never Payload types.
 */

export type CmsProviderName =
  "static" | "payload" | "sanity" | "contentful" | "strapi";

export type PublishStatus = "draft" | "published";

export type SeoMeta = {
  title?: string | null;
  description?: string | null;
  canonicalUrl?: string | null;
  ogImageUrl?: string | null;
  noIndex?: boolean | null;
};

export type MediaAsset = {
  id: string;
  url: string;
  alt: string;
  width?: number | null;
  height?: number | null;
  mimeType?: string | null;
};

export type DomainProject = {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string | null;
  featuredImage?: MediaAsset | null;
  gallery: MediaAsset[];
  technologies: string[];
  client?: string | null;
  projectStatus: string;
  year?: number | null;
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured: boolean;
  order: number;
  seo?: SeoMeta | null;
  status: PublishStatus;
};

export type DomainService = {
  id: string;
  slug: string;
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  icon?: string | null;
  image?: MediaAsset | null;
  order: number;
  faqs: { question: string; answer: string }[];
  seo?: SeoMeta | null;
  status: PublishStatus;
};

export type DomainFaq = {
  id: string;
  question: string;
  answer: string;
  order: number;
};

export type DomainPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  authorName?: string | null;
  readingTime?: number | null;
  featured: boolean;
  publishedAt?: string | null;
  coverImage?: MediaAsset | null;
  tags: string[];
  seo?: SeoMeta | null;
  status: PublishStatus;
};

export type DomainTestimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorRole?: string | null;
  company?: string | null;
  featured: boolean;
  order: number;
};

export type DomainTechnology = {
  id: string;
  name: string;
  slug: string;
  category?: string | null;
  icon?: string | null;
  order: number;
};

export type DomainSiteSettings = {
  companyName: string;
  tagline?: string | null;
  description?: string | null;
  shortDescription?: string | null;
  email: string;
  phone?: string | null;
  address?: string | null;
  theme?: string | null;
  analytics?: {
    googleAnalyticsId?: string | null;
    plausibleDomain?: string | null;
    gtmId?: string | null;
  } | null;
};

export type DomainSocialLink = {
  platform: string;
  url: string;
  label?: string | null;
};

export type DomainNavLink = {
  label: string;
  href: string;
  status?: "live" | "planned" | "hidden";
};

export type ContactRequestInput = {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  description?: string;
  source?: string;
  locale?: string;
};

export type NewsletterInput = {
  email: string;
  source?: string;
};

/**
 * Provider contract — swap Payload / Sanity / Contentful / static without touching UI.
 */
export interface CmsAdapter {
  readonly name: CmsProviderName;

  getProjects(): Promise<DomainProject[]>;
  getProjectBySlug(slug: string): Promise<DomainProject | null>;

  getServices(): Promise<DomainService[]>;
  getServiceBySlug(slug: string): Promise<DomainService | null>;

  getFaqs(): Promise<DomainFaq[]>;
  getPosts(): Promise<DomainPost[]>;
  getPostBySlug(slug: string): Promise<DomainPost | null>;
  getTestimonials(): Promise<DomainTestimonial[]>;
  getTechnologies(): Promise<DomainTechnology[]>;

  getSiteSettings(): Promise<DomainSiteSettings>;
  getSocialLinks(): Promise<DomainSocialLink[]>;
  getNavigation(): Promise<{
    primary: DomainNavLink[];
    cta?: DomainNavLink | null;
  }>;
  getFooterLinks(): Promise<{
    company: DomainNavLink[];
    resources: DomainNavLink[];
    legal: DomainNavLink[];
    newsletterEnabled: boolean;
  }>;

  createContactRequest(input: ContactRequestInput): Promise<{ id: string }>;
  subscribeNewsletter(input: NewsletterInput): Promise<{ id: string }>;
}
