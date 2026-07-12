import type { CollectionConfig } from "payload";

import {
  isAdminOrEditor,
  publishedOrAuthenticated,
  seoFields,
  slugField,
} from "@/cms/access/roles";
import { revalidateCollection } from "@/cms/hooks/revalidate";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "author", "featured", "_status", "publishedAt"],
    group: "Content",
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
    { name: "excerpt", type: "textarea" },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "markdown",
      type: "textarea",
      admin: {
        description:
          "Optional Markdown source for future dual-format workflows",
      },
    },
    { name: "coverImage", type: "upload", relationTo: "media" },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: "tags",
      type: "text",
      hasMany: true,
    },
    {
      name: "relatedPosts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
    },
    {
      name: "readingTime",
      type: "number",
      admin: { description: "Minutes — auto-estimate later" },
    },
    { name: "featured", type: "checkbox", defaultValue: false },
    {
      name: "publishedAt",
      type: "date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" } },
    },
    ...seoFields,
  ],
  hooks: {
    afterChange: [revalidateCollection("posts")],
  },
};
