import { unstable_cache } from "next/cache";

import { getCmsAdapter } from "@/adapters/cms";
import type { ContactRequestInput, NewsletterInput } from "@/adapters/cms";

const REVALIDATE = Number(process.env.CMS_REVALIDATE_SECONDS || 60);

function cached<T>(
  key: string,
  tags: string[],
  fn: () => Promise<T>,
): Promise<T> {
  return unstable_cache(fn, [key], {
    revalidate: REVALIDATE,
    tags,
  })();
}

export const projectsRepository = {
  findAll: () =>
    cached("projects:all", ["projects"], () => getCmsAdapter().getProjects()),
  findBySlug: (slug: string) =>
    cached(`projects:${slug}`, ["projects", `projects:${slug}`], () =>
      getCmsAdapter().getProjectBySlug(slug),
    ),
};

export const servicesRepository = {
  findAll: () =>
    cached("services:all", ["services"], () => getCmsAdapter().getServices()),
  findBySlug: (slug: string) =>
    cached(`services:${slug}`, ["services", `services:${slug}`], () =>
      getCmsAdapter().getServiceBySlug(slug),
    ),
};

export const faqsRepository = {
  findAll: () => cached("faqs:all", ["faqs"], () => getCmsAdapter().getFaqs()),
};

export const postsRepository = {
  findAll: () =>
    cached("posts:all", ["posts"], () => getCmsAdapter().getPosts()),
  findBySlug: (slug: string) =>
    cached(`posts:${slug}`, ["posts", `posts:${slug}`], () =>
      getCmsAdapter().getPostBySlug(slug),
    ),
};

export const testimonialsRepository = {
  findAll: () =>
    cached("testimonials:all", ["testimonials"], () =>
      getCmsAdapter().getTestimonials(),
    ),
};

export const technologiesRepository = {
  findAll: () =>
    cached("technologies:all", ["technologies"], () =>
      getCmsAdapter().getTechnologies(),
    ),
};

export const siteRepository = {
  getSettings: () =>
    cached("site:settings", ["site-settings"], () =>
      getCmsAdapter().getSiteSettings(),
    ),
  getSocialLinks: () =>
    cached("site:social", ["social-links"], () =>
      getCmsAdapter().getSocialLinks(),
    ),
  getNavigation: () =>
    cached("site:navigation", ["navigation"], () =>
      getCmsAdapter().getNavigation(),
    ),
  getFooterLinks: () =>
    cached("site:footer", ["footer-links"], () =>
      getCmsAdapter().getFooterLinks(),
    ),
};

export const inboxRepository = {
  createContactRequest: (input: ContactRequestInput) =>
    getCmsAdapter().createContactRequest(input),
  subscribeNewsletter: (input: NewsletterInput) =>
    getCmsAdapter().subscribeNewsletter(input),
};
