import type { CollectionConfig } from "payload";

import { anyone, isAdminOrEditor } from "@/cms/access/roles";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "Media",
  },
  access: {
    read: anyone,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*", "video/*", "application/pdf", "image/svg+xml"],
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, position: "centre" },
      { name: "card", width: 800, height: 600, position: "centre" },
      { name: "hero", width: 1920, height: undefined, position: "centre" },
      { name: "og", width: 1200, height: 630, position: "centre" },
    ],
    formatOptions: {
      format: "webp",
      options: { quality: 82 },
    },
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "text",
    },
  ],
};
