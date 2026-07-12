import { SectionRedirect } from "@/components/routing/section-redirect";

/** Reserved route — redirect until dedicated Work index ships. */
export default function WorkPage() {
  return <SectionRedirect sectionId="portfolio" />;
}
