import { serializeJsonLd } from "@/lib/seo";

type JsonLdProps = {
  data: unknown | unknown[];
};

/**
 * Reusable JSON-LD injector — safe for RSC.
 */
export function JsonLd({ data }: JsonLdProps) {
  const payloads = Array.isArray(data) ? data : [data];

  return (
    <>
      {payloads.map((item, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(item) }}
        />
      ))}
    </>
  );
}
