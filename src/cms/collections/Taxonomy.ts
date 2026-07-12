import type { CollectionConfig } from "payload";

import { anyone, isAdminOrEditor, slugField } from "@/cms/access/roles";
import { revalidateCollection } from "@/cms/hooks/revalidate";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "title",
    group: "Taxonomy",
  },
  access: {
    read: anyone,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: "title", type: "text", required: true },
    slugField("title"),
    { name: "description", type: "textarea" },
  ],
};

export const Technologies: CollectionConfig = {
  slug: "technologies",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "order"],
    group: "Taxonomy",
  },
  access: {
    read: anyone,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: "name", type: "text", required: true },
    slugField("name"),
    {
      name: "category",
      type: "select",
      options: [
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
        { label: "Mobile", value: "mobile" },
        { label: "Design", value: "design" },
        { label: "AI", value: "ai" },
        { label: "Cloud", value: "cloud" },
        { label: "Creative", value: "creative" },
        { label: "Other", value: "other" },
      ],
    },
    { name: "icon", type: "text", admin: { description: "Lucide icon name" } },
    { name: "order", type: "number", defaultValue: 0 },
  ],
  hooks: {
    afterChange: [revalidateCollection("technologies")],
  },
};

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "name",
    group: "Content",
  },
  access: {
    read: anyone,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    { name: "name", type: "text", required: true },
    slugField("name"),
    { name: "role", type: "text" },
    { name: "bio", type: "textarea" },
    { name: "avatar", type: "upload", relationTo: "media" },
    { name: "email", type: "email" },
    {
      name: "social",
      type: "group",
      fields: [
        { name: "x", type: "text" },
        { name: "linkedin", type: "text" },
        { name: "github", type: "text" },
        { name: "website", type: "text" },
      ],
    },
  ],
};
