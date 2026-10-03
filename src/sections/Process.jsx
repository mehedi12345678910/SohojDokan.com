import React from 'react';
import { steps } from "../data";

export default function Process() {
  return (
    <section id="process" className="bg-white py-14">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-extrabold text-brand-blue">Our Process</span>
          <h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">A Simple 4-Step Process</h2>
          <p className="mt-2 text-sm text-slate-500">From your image to final vector files, we make the process smooth and hassle-free.</p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-card">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-blue text-white shadow-lg shadow-blue-100">
                  <Icon size={22}/>
                </div>
                <span className="mt-3 block text-[10px] font-black text-slate-300">{step.number}</span>
                <h3 className="mt-1 text-sm font-extrabold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-[11px] leading-5 text-slate-500">{step.text}</p>
                {i < steps.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-2xl font-bold text-brand-blue md:block">→</span>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
