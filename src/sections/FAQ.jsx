import React from 'react';
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faq = [
  ["What file formats do you deliver?", "We can deliver AI, SVG, EPS, PDF and PNG files depending on your project needs."],
  ["Do you manually trace the artwork?", "Yes. The service is designed around manual tracing and clean editable paths rather than a simple auto-trace."],
  ["How fast is the turnaround?", "Simple jobs can be completed quickly; exact timing depends on image complexity and the number of elements."],
  ["Can you trace any image?", "We handle logos, illustrations, sketches, apparel artwork, product images, icons and many other image types."]
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-white py-14">
      <div className="section-shell max-w-4xl">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-extrabold text-brand-blue">FAQ</span>
          <h2 className="mt-3 text-3xl font-black text-brand-dark">Frequently Asked Questions</h2>
        </div>
        <div className="mt-8 space-y-3">
          {faq.map(([q,a], i) => (
            <div key={q} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left text-sm font-extrabold">
                {q}<ChevronDown className={`transition ${open === i ? "rotate-180 text-brand-blue" : ""}`} size={18}/>
              </button>
              {open === i && <div className="px-5 pb-5 text-xs leading-6 text-slate-500">{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
