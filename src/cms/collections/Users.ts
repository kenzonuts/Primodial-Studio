import type { CollectionConfig } from "payload";

import { isAdmin, isAdminOrEditor } from "@/cms/access/roles";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "role", "updatedAt"],
    group: "System",
  },
  access: {
    read: isAdminOrEditor,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    admin: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
        { label: "Viewer", value: "viewer" },
      ],
      access: {
        update: ({ req: { user } }) =>
          (user as { role?: string } | null)?.role === "admin",
      },
    },
  ],
};
