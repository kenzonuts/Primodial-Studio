import type { Access, Field } from "payload";

export type UserRole = "admin" | "editor" | "viewer";

type UserWithRole = {
  role?: UserRole | null;
};

export const anyone: Access = () => true;

export const authenticated: Access = ({ req: { user } }) => Boolean(user);

export const isAdmin: Access = ({ req: { user } }) =>
  (user as UserWithRole | null)?.role === "admin";

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  const role = (user as UserWithRole | null)?.role;
  return role === "admin" || role === "editor";
};

export const isAdminOrEditorOrViewer: Access = ({ req: { user } }) => {
  const role = (user as UserWithRole | null)?.role;
  return role === "admin" || role === "editor" || role === "viewer";
};

/** Published content is public; drafts require auth */
export const publishedOrAuthenticated: Access = ({ req: { user } }) => {
  if (user) return true;
  return {
    _status: {
      equals: "published",
    },
  };
};

export const seoFields: Field[] = [
  {
    name: "seo",
    type: "group",
    label: "SEO",
    fields: [
      { name: "title", type: "text" },
      { name: "description", type: "textarea" },
      { name: "canonicalUrl", type: "text" },
      {
        name: "ogImage",
        type: "upload",
        relationTo: "media",
      },
      {
        name: "noIndex",
        type: "checkbox",
        defaultValue: false,
      },
    ],
  },
];

export const slugField = (fieldToUse = "title"): Field => ({
  name: "slug",
  type: "text",
  required: true,
  unique: true,
  index: true,
  admin: {
    position: "sidebar",
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        if (typeof value === "string" && value.length > 0) {
          return value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
        }
        const source = data?.[fieldToUse];
        if (typeof source === "string") {
          return source
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
        }
        return value;
      },
    ],
  },
});
