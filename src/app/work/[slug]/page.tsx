import { projectSectionId } from "@/constants/routes";
import { SectionRedirect } from "@/components/routing/section-redirect";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

/** Reserved route — scroll to the matching portfolio card until case studies ship. */
export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  return <SectionRedirect sectionId={projectSectionId(slug)} />;
}
