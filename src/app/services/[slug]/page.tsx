import { SectionRedirect } from "@/components/routing/section-redirect";

/** Reserved route — redirect until service detail pages ship. */
export default function ServiceDetailPage() {
  return <SectionRedirect sectionId="services" />;
}
