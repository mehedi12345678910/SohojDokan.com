import React from 'react';
import { CheckCircle2, PenTool } from "lucide-react";
import { benefits } from "../data";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-14">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-extrabold text-brand-blue">Why Choose Our Services</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
            High-Quality Vectors<br/>for <span className="text-brand-blue">Every Project</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            We combine skill, experience and attention to detail to deliver vector files that are clean,
            accurate and ready for any workflow.
          </p>
          <a href="#quote" className="mt-6 inline-flex rounded-xl bg-brand-blue px-5 py-3 text-xs font-extrabold text-white shadow-lg shadow-blue-200">
            Get a Free Quote →
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 size={17} className="shrink-0 text-brand-blue"/>
              {item}
            </div>
          ))}
          <div className="relative mt-2 overflow-hidden rounded-2xl bg-white shadow-card sm:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=85"
              alt="Designer working on vector artwork"
              className="h-44 w-full object-cover sm:h-52"
            />
            <div className="absolute bottom-3 left-3 rounded-xl bg-white/90 px-4 py-2 text-xs font-extrabold text-slate-800 shadow">
              Turn Any Image Into a Clean, Editable Vector
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
