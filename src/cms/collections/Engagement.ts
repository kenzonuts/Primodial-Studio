import type { CollectionConfig } from "payload";

import { anyone, isAdminOrEditor } from "@/cms/access/roles";
import { revalidateCollection } from "@/cms/hooks/revalidate";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  admin: {
    useAsTitle: "question",
    defaultColumns: ["question", "order", "published"],
    group: "Content",
  },
  access: {
    read: anyone,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "textarea", required: true },
    { name: "order", type: "number", defaultValue: 0 },
    { name: "published", type: "checkbox", defaultValue: true },
  ],
  hooks: {
    afterChange: [revalidateCollection("faqs")],
  },
};

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "authorName",
    group: "Content",
  },
  access: {
    read: anyone,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: "quote", type: "textarea", required: true },
    { name: "authorName", type: "text", required: true },
    { name: "authorRole", type: "text" },
    { name: "company", type: "text" },
    { name: "avatar", type: "upload", relationTo: "media" },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "order", type: "number", defaultValue: 0 },
    { name: "published", type: "checkbox", defaultValue: true },
  ],
  hooks: {
    afterChange: [revalidateCollection("testimonials")],
  },
};

export const ContactRequests: CollectionConfig = {
  slug: "contact-requests",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["fullName", "email", "projectType", "createdAt"],
    group: "Inbox",
  },
  access: {
    read: isAdminOrEditor,
    create: anyone,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: "fullName", type: "text", required: true },
    { name: "company", type: "text" },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text" },
    { name: "projectType", type: "text" },
    { name: "budget", type: "text" },
    { name: "description", type: "textarea" },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "In Review", value: "in-review" },
        { label: "Contacted", value: "contacted" },
        { label: "Closed", value: "closed" },
      ],
    },
    { name: "source", type: "text", defaultValue: "website" },
    { name: "locale", type: "text", defaultValue: "en" },
  ],
};

export const NewsletterSubscribers: CollectionConfig = {
  slug: "newsletter-subscribers",
  admin: {
    useAsTitle: "email",
    group: "Inbox",
  },
  access: {
    read: isAdminOrEditor,
    create: anyone,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: "email", type: "email", required: true, unique: true },
    {
      name: "status",
      type: "select",
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Unsubscribed", value: "unsubscribed" },
      ],
    },
    { name: "source", type: "text", defaultValue: "website" },
  ],
};
