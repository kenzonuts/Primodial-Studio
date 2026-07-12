import { Plus_Jakarta_Sans } from "next/font/google";

/**
 * Plus Jakarta Sans — brand typeface for headings and body.
 * Loaded via next/font for zero-layout-shift, self-hosted performance.
 */
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});
