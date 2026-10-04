import React from 'react';
export default function Pricing() {
  return (
    <section id="" className="bg-slate-50 py-14">
      <div className="section-shell text-center">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-extrabold text-brand-blue">Simple Pricing</span>
        <h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">Choose What Fits Your Project</h2>
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            ["Basic", "$15", "Simple logo / icon tracing"],
            ["Standard", "$35", "Detailed illustration / product"],
            ["Premium", "$65", "Complex artwork & full package"]
          ].map(([name, price, text], i) => (
            <div key={name} className={`rounded-2xl bg-white p-6 text-left shadow-card ${i === 1 ? "ring-2 ring-brand-blue" : ""}`}>
              {i === 1 && <span className="rounded-full bg-blue-100 px-2 py-1 text-[9px] font-black text-brand-blue">POPULAR</span>}
              <h3 className="mt-2 text-lg font-black">{name}</h3>
              <div className="mt-2 text-3xl font-black text-brand-blue">{price}</div>
              <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              <a href="#quote" className="mt-5 block rounded-xl bg-brand-blue px-4 py-3 text-center text-xs font-extrabold text-white">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
