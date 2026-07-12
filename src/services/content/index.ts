import {
  faqsRepository,
  inboxRepository,
  postsRepository,
  projectsRepository,
  servicesRepository,
  siteRepository,
  technologiesRepository,
  testimonialsRepository,
} from "@/repositories";
import type { ContactRequestInput, NewsletterInput } from "@/adapters/cms";

/**
 * Application services — UI and route handlers call these, never adapters/CMS directly.
 */

export const contentService = {
  projects: {
    list: () => projectsRepository.findAll(),
    bySlug: (slug: string) => projectsRepository.findBySlug(slug),
  },
  services: {
    list: () => servicesRepository.findAll(),
    bySlug: (slug: string) => servicesRepository.findBySlug(slug),
  },
  faqs: {
    list: () => faqsRepository.findAll(),
  },
  posts: {
    list: () => postsRepository.findAll(),
    bySlug: (slug: string) => postsRepository.findBySlug(slug),
  },
  testimonials: {
    list: () => testimonialsRepository.findAll(),
  },
  technologies: {
    list: () => technologiesRepository.findAll(),
  },
  site: {
    settings: () => siteRepository.getSettings(),
    social: () => siteRepository.getSocialLinks(),
    navigation: () => siteRepository.getNavigation(),
    footer: () => siteRepository.getFooterLinks(),
  },
};

export const engagementService = {
  submitContact: (input: ContactRequestInput) =>
    inboxRepository.createContactRequest(input),
  subscribe: (input: NewsletterInput) =>
    inboxRepository.subscribeNewsletter(input),
};

/** Sitemap entries derived from CMS content */
export async function getDynamicSitemapEntries(): Promise<
  { path: string; lastModified?: Date }[]
> {
  /**
   * Launch gate: `/work/*`, `/services/*`, and `/blog/*` are reserved redirects
   * until dedicated templates ship. Do not advertise thin URLs in the sitemap.
   * Re-enable listing when real detail pages render content (not SectionRedirect).
   */
  return [];
}
