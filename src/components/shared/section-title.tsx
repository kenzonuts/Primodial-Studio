import { Text } from "@/components/typography";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <header
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Text as="p" variant="label" className="text-accent-blue">
          {eyebrow}
        </Text>
      ) : null}
      <Text as="h2" variant="heading-xl" balance>
        {title}
      </Text>
      {description ? (
        <Text as="p" variant="body-lg" muted balance>
          {description}
        </Text>
      ) : null}
    </header>
  );
}

export { SectionTitle, type SectionTitleProps };
