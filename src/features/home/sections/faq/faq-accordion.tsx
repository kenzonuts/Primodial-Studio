"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/features/home/sections/faq/constants";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn(
        "rounded-2xl border border-border/80 bg-surface/40 px-5 md:px-6",
        className,
      )}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-border/70"
        >
          <AccordionTrigger className="py-5 text-left text-[0.9375rem] font-medium tracking-tight text-foreground hover:no-underline data-[state=open]:text-foreground">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-[0.9375rem] leading-relaxed text-text-secondary">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export { FaqAccordion, type FaqAccordionProps };
