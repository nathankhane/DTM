"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { sourceIndex } from "@/content/sources";

export interface MythAccordionProps {
  items: { 
    myth: string; 
    fact: string; 
    cites: string[] 
  }[];
}

export default function MythAccordion({ items }: MythAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((m, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="text-left text-lg font-medium hover:text-teal-600 transition-colors">
            {m.myth}
          </AccordionTrigger>
          <AccordionContent>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300 mb-4">{m.fact}</p>
            {m.cites?.length ? (
              <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Cited:{" "}
                {m.cites.map((id, i) => (
                  <span key={id}>
                    <a 
                      href={`/sources#${id}`} 
                      className="underline hover:text-teal-600 transition-colors"
                    >
                      [{sourceIndex[id]}]
                    </a>
                    {i < m.cites.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

