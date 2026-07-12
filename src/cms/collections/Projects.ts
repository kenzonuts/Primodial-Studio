import type { CollectionConfig } from "payload";

import {
  isAdminOrEditor,
  publishedOrAuthenticated,
  seoFields,
  slugField,
} from "@/cms/access/roles";
import { revalidateCollection } from "@/cms/hooks/revalidate";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "featured", "year", "_status"],
    group: "Work",
  },
  versions: {
    drafts: true,
  },
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
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Web", value: "web" },
        { label: "Mobile", value: "mobile" },
        { label: "AI", value: "ai" },
        { label: "Roblox", value: "roblox" },
        { label: "Branding", value: "branding" },
        { label: "UI/UX", value: "ui-ux" },
        { label: "3D", value: "3d" },
      ],
    },
    {
      name: "filters",
      type: "select",
      hasMany: true,
      options: [
        { label: "Web", value: "web" },
        { label: "Mobile", value: "mobile" },
        { label: "AI", value: "ai" },
        { label: "Roblox", value: "roblox" },
        { label: "Branding", value: "branding" },
        { label: "UI/UX", value: "ui-ux" },
        { label: "3D", value: "3d" },
      ],
    },
    { name: "shortDescription", type: "textarea", required: true },
    { name: "fullDescription", type: "textarea" },
    { name: "featuredImage", type: "upload", relationTo: "media" },
    {
      name: "gallery",
      type: "array",
      fields: [
        { name: "image", type: "upload", relationTo: "media", required: true },
        { name: "caption", type: "text" },
      ],
    },
    {
      name: "technologyStack",
      type: "relationship",
      relationTo: "technologies",
      hasMany: true,
    },
    {
      name: "technologiesText",
      type: "text",
      hasMany: true,
      admin: { description: "Fallback plain labels when no taxonomy link" },
    },
    { name: "client", type: "text" },
    {
      name: "projectStatus",
      type: "select",
      defaultValue: "shipped",
      options: [
        { label: "Concept", value: "concept" },
        { label: "In Progress", value: "in-progress" },
        { label: "Shipped", value: "shipped" },
        { label: "Archived", value: "archived" },
      ],
    },
    { name: "year", type: "number" },
    { name: "githubUrl", type: "text" },
    { name: "liveUrl", type: "text" },
    {
      name: "caseStudy",
      type: "relationship",
      relationTo: "case-studies",
    },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "order", type: "number", defaultValue: 0 },
    ...seoFields,
  ],
  hooks: {
    afterChange: [revalidateCollection("projects")],
  },
};
