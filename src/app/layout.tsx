import type { Metadata, Viewport } from "next";

import { AppProviders } from "@/components/providers/app-providers";
import { plusJakartaSans } from "@/lib/fonts";
import {
  buildMetadata,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
  serializeJsonLd,
} from "@/lib/seo";
import "@/styles/globals.css";

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = getOrganizationJsonLd();
  const websiteJsonLd = getWebSiteJsonLd();

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(websiteJsonLd),
          }}
        />
        <a
          href="#main-content"
          className="sr-only bg-primary text-primary-foreground focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <AppProviders>
          <div id="root" className="relative min-h-dvh">
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
