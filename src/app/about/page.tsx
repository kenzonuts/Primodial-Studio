import { SectionRedirect } from "@/components/routing/section-redirect";

/** Reserved route — redirect until dedicated About page ships. */
export default function AboutPage() {
  return <SectionRedirect sectionId="about" />;
}
