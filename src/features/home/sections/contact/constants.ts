import { CONTACT_EMAIL, ROUTES } from "@/constants/site";

export const CONTACT_SECTION_COPY = {
  eyebrow: "Contact",
  headline: "Tell us what you want to build.",
  description:
    "Share a brief overview of your product, timeline, and goals. We typically respond within one to two business days with next steps.",
  email: CONTACT_EMAIL,
  location: {
    label: "Location",
    value: "Global · Remote-first",
    note: "Physical studio address coming soon",
  },
  hours: {
    label: "Working hours",
    value: "Mon – Fri · 09:00–18:00 (GMT+7)",
  },
  response: {
    label: "Response time",
    value: "Within 1–2 business days",
  },
} as const;

export const PROJECT_TYPE_OPTIONS = [
  { value: "software-development", label: "Software Development" },
  { value: "website-development", label: "Website Development" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "brand-identity", label: "Brand Identity" },
  { value: "artificial-intelligence", label: "Artificial Intelligence" },
  { value: "creative-technology", label: "Creative Technology" },
  { value: "roblox-development", label: "Roblox Development" },
  { value: "other", label: "Other" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under-5k", label: "Under $5K" },
  { value: "5k-10k", label: "$5K – $10K" },
  { value: "10k-25k", label: "$10K – $25K" },
  { value: "25k-plus", label: "$25K+" },
  { value: "custom", label: "Custom" },
] as const;

export const DESCRIPTION_MAX_LENGTH = 2000;

export type ContactFormValues = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
  /** Honeypot / CRM metadata reserved */
  source?: string;
  locale?: string;
};

export const CONTACT_FORM_DEFAULTS: ContactFormValues = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  description: "",
  source: "website",
  locale: "en",
};

/** Future integrations — wire without changing form architecture */
export const CONTACT_INTEGRATIONS = {
  apiEndpoint: "/api/contact",
  calendlyUrl: null as string | null,
  crmReady: true,
  analyticsEvent: "contact_form_submit",
} as const;

export const CONTACT_PRIVACY_NOTE = {
  label: "Privacy",
  href: ROUTES.privacy,
} as const;
