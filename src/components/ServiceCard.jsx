import React from 'react';
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="group rounded-2xl border border-slate-100 bg-white p-3 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center gap-2 px-2 pb-3 pt-1">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-blue text-white">
          <Icon size={16} />
        </span>
        <h3 className="text-sm font-extrabold text-slate-900">{service.title}</h3>
      </div>

      <div className="before-after grid h-44 grid-cols-2">
        <div className="relative overflow-hidden">
          <img src={service.image} alt={`${service.title} before`} className="h-full w-full object-cover grayscale" />
          <span className="absolute bottom-2 left-2 rounded-md bg-slate-600 px-2 py-1 text-[9px] font-bold text-white">Before</span>
        </div>
        <div className="relative overflow-hidden">
          <img src={service.image} alt={`${service.title} after`} className="h-full w-full object-cover" />
          <span className="absolute bottom-2 left-2 rounded-md bg-brand-blue px-2 py-1 text-[9px] font-bold text-white">After</span>
        </div>
      </div>

      <p className="px-2 pt-3 text-[11px] leading-5 text-slate-500">{service.description}</p>
      <a href="#quote" className="inline-flex items-center gap-1 px-2 pb-1 pt-2 text-[12px] font-extrabold text-brand-blue hover:gap-2">
        Learn More <ArrowRight size={13}/>
      </a>
    </article>
  );
}
