import React from 'react';
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, services } from "../data";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const categoryOk = active === "All" || s.category === active;
      const searchOk = `${s.title} ${s.description}`.toLowerCase().includes(search.toLowerCase());
      return categoryOk && searchOk;
    });
  }, [active, search]);

  return (
    <section id="services" className="soft-grid bg-slate-50/70 py-14">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-center md:text-left">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-extrabold text-brand-blue">What We Do</span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-brand-dark sm:text-4xl">Our Vector Tracing Services</h2>
            <p className="mt-2 text-sm text-slate-500">We work with all types of images and industries, delivering clean, accurate and fully editable vector files.</p>
          </div>
          <label className="input input-sm flex w-full max-w-xs items-center gap-2 rounded-full border-slate-200 bg-white">
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="grow text-xs" placeholder="Find a service..." />
            <Search size={16} className="text-slate-400"/>
          </label>
        </div>

        <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} className={`whitespace-nowrap rounded-full px-4 py-2 text-[10px] font-extrabold transition ${active === cat ? "bg-brand-blue text-white shadow-lg shadow-blue-100" : "bg-transparent text-slate-700 hover:bg-white"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </div>
    </section>
  );
}
