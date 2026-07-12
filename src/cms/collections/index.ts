import type { CollectionConfig } from "payload";

export {
  Faqs,
  Testimonials,
  ContactRequests,
  NewsletterSubscribers,
} from "./Engagement";
export { Users } from "./Users";
export { Media } from "./Media";
export { Projects } from "./Projects";
export { Services, CaseStudies } from "./Services";
export { Posts } from "./Posts";
export { Categories, Technologies, Authors } from "./Taxonomy";

/** Convenience list for payload.config */
import { Users } from "./Users";
import { Media } from "./Media";
import { Projects } from "./Projects";
import { Services, CaseStudies } from "./Services";
import { Posts } from "./Posts";
import { Categories, Technologies, Authors } from "./Taxonomy";
import {
  Faqs,
  Testimonials,
  ContactRequests,
  NewsletterSubscribers,
} from "./Engagement";

export const collections: CollectionConfig[] = [
  Users,
  Media,
  Projects,
  Services,
  CaseStudies,
  Posts,
  Authors,
  Categories,
  Technologies,
  Testimonials,
  Faqs,
  ContactRequests,
  NewsletterSubscribers,
];
