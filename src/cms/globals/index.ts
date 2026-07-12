import type { GlobalConfig } from "payload";

import { anyone, isAdminOrEditor, seoFields } from "@/cms/access/roles";

const navLinkFields = [
  { name: "label", type: "text" as const, required: true },
  { name: "href", type: "text" as const, required: true },
  {
    name: "status",
    type: "select" as const,
    defaultValue: "live",
    options: [
      { label: "Live", value: "live" },
      { label: "Planned", value: "planned" },
      { label: "Hidden", value: "hidden" },
    ],
  },
];

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Company Settings",
  access: {
    read: anyone,
    update: isAdminOrEditor,
  },
  fields: [
    { name: "companyName", type: "text", required: true },
    { name: "tagline", type: "text" },
    { name: "description", type: "textarea" },
    { name: "shortDescription", type: "textarea" },
    { name: "logo", type: "upload", relationTo: "media" },
    { name: "logoWhite", type: "upload", relationTo: "media" },
    { name: "logoDark", type: "upload", relationTo: "media" },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text" },
    { name: "address", type: "textarea" },
    {
      name: "theme",
      type: "select",
      defaultValue: "dark",
      options: [
        { label: "Dark", value: "dark" },
        { label: "Light", value: "light" },
        { label: "System", value: "system" },
      ],
    },
    {
      name: "analytics",
      type: "group",
      fields: [
        { name: "googleAnalyticsId", type: "text" },
        { name: "plausibleDomain", type: "text" },
        { name: "gtmId", type: "text" },
      ],
    },
  ],
};

export const SeoSettings: GlobalConfig = {
  slug: "seo-settings",
  label: "Default SEO",
  access: {
    read: anyone,
    update: isAdminOrEditor,
  },
  fields: [
    { name: "defaultTitle", type: "text" },
    {
      name: "titleTemplate",
      type: "text",
      defaultValue: "%s · Primordial Studio",
    },
    { name: "defaultDescription", type: "textarea" },
    { name: "ogImage", type: "upload", relationTo: "media" },
    { name: "twitterHandle", type: "text" },
    { name: "robotsIndex", type: "checkbox", defaultValue: true },
  ],
};

export const Navigation: GlobalConfig = {
  slug: "navigation",
  access: {
    read: anyone,
    update: isAdminOrEditor,
  },
  fields: [
    {
      name: "primary",
      type: "array",
      fields: [
        ...navLinkFields,
        {
          name: "megaMenu",
          type: "array",
          fields: [
            { name: "columnTitle", type: "text" },
            {
              name: "items",
              type: "array",
              fields: navLinkFields,
            },
          ],
        },
      ],
    },
    {
      name: "cta",
      type: "group",
      fields: navLinkFields,
    },
  ],
};

export const FooterLinks: GlobalConfig = {
  slug: "footer-links",
  access: {
    read: anyone,
    update: isAdminOrEditor,
  },
  fields: [
    {
      name: "company",
      type: "array",
      fields: navLinkFields,
    },
    {
      name: "resources",
      type: "array",
      fields: navLinkFields,
    },
    {
      name: "legal",
      type: "array",
      fields: navLinkFields,
    },
    { name: "newsletterEnabled", type: "checkbox", defaultValue: true },
  ],
};

export const SocialLinks: GlobalConfig = {
  slug: "social-links",
  access: {
    read: anyone,
    update: isAdminOrEditor,
  },
  fields: [
    {
      name: "links",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          options: [
            { label: "GitHub", value: "github" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "Instagram", value: "instagram" },
            { label: "X", value: "x" },
            { label: "Behance", value: "behance" },
            { label: "Dribbble", value: "dribbble" },
            { label: "Discord", value: "discord" },
            { label: "Email", value: "email" },
            { label: "Other", value: "other" },
          ],
        },
        { name: "url", type: "text", required: true },
        { name: "label", type: "text" },
      ],
    },
  ],
};

export const Homepage: GlobalConfig = {
  slug: "homepage",
  access: {
    read: anyone,
    update: isAdminOrEditor,
  },
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "headline", type: "text" },
        { name: "description", type: "textarea" },
        { name: "primaryCtaLabel", type: "text" },
        { name: "primaryCtaHref", type: "text" },
        { name: "secondaryCtaLabel", type: "text" },
        { name: "secondaryCtaHref", type: "text" },
      ],
    },
    {
      name: "cta",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "headline", type: "text" },
        { name: "description", type: "textarea" },
        { name: "primaryLabel", type: "text" },
        { name: "primaryHref", type: "text" },
        { name: "secondaryLabel", type: "text" },
        { name: "secondaryHref", type: "text" },
      ],
    },
    {
      name: "sections",
      type: "array",
      admin: { description: "Enable/order homepage sections (IA control)" },
      fields: [
        { name: "id", type: "text", required: true },
        { name: "enabled", type: "checkbox", defaultValue: true },
        { name: "order", type: "number", defaultValue: 0 },
      ],
    },
    ...seoFields,
  ],
};

export const globals: GlobalConfig[] = [
  SiteSettings,
  SeoSettings,
  Navigation,
  FooterLinks,
  SocialLinks,
  Homepage,
];
