import path from "path";
import { fileURLToPath } from "url";

import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { collections } from "@/cms/collections";
import { globals } from "@/cms/globals";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Payload CMS configuration — Primordial Studio content platform.
 * Swap `sqliteAdapter` for Postgres in production via CMS_DATABASE_URI.
 */
export default buildConfig({
  admin: {
    user: "users",
    meta: {
      titleSuffix: "· Primordial Studio CMS",
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections,
  globals,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "dev-only-change-me-primordial-studio",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url:
        process.env.DATABASE_URI ||
        `file:${path.resolve(dirname, "../../data/payload.db")}`,
    },
  }),
  // sharp types drift between package versions; Payload accepts the runtime export
  sharp: sharp as never,
  plugins: [],
});
