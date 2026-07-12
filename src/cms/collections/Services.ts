import type { CollectionConfig } from "payload";

import {
  isAdminOrEditor,
  publishedOrAuthenticated,
  seoFields,
  slugField,
} from "@/cms/access/roles";
import { revalidateCollection } from "@/cms/hooks/revalidate";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "order", "_status"],
    group: "Work",
  },
  versions: { drafts: true },
  access: {
    read: publishedOrAuthenticated,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: "name", type: "text", required: true },
    slugField("name"),
    { name: "description", type: "textarea", required: true },
    {
      name: "features",
      type: "array",
      fields: [{ name: "item", type: "text", required: true }],
    },
    {
      name: "technologies",
      type: "relationship",
      relationTo: "technologies",
      hasMany: true,
    },
    {
      name: "icon",
      type: "text",
      admin: { description: "Lucide icon name used by the UI" },
    },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "order", type: "number", defaultValue: 0 },
    {
      name: "faqs",
      type: "array",
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
    ...seoFields,
  ],
  hooks: {
    afterChange: [revalidateCollection("services")],
  },
};

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: {
    useAsTitle: "title",
    group: "Work",
  },
  versions: { drafts: true },
  access: {
    read: publishedOrAuthenticated,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: "title", type: "text", required: true },
    slugField("title"),
    {
      name: "project",
      type: "relationship",
      relationTo: "projects",
    },
    { name: "summary", type: "textarea" },
    { name: "body", type: "richText" },
    { name: "results", type: "textarea" },
    ...seoFields,
  ],
  hooks: {
    afterChange: [revalidateCollection("case-studies")],
  },
};
