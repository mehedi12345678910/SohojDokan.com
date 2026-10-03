import React from 'react';
import { ArrowRight, Play } from "lucide-react";

export default function Quote() {
  return (
    <section id="quote" className="px-3 pb-10">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-brand-blue to-indigo-800 px-7 py-9 text-white shadow-2xl shadow-blue-100 sm:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_.8fr]">
          <div>
            <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-extrabold">Ready to Get Started?</span>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Need a Custom Vector Tracing Service?</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
              Get high-quality, editable vector files for any type of image. Fast, reliable and affordable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@vectortracepro.com" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-xs font-extrabold text-white">
                Get a Free Quote <ArrowRight size={14}/>
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-extrabold text-brand-blue">
                <Play size={13} fill="currentColor"/> View Samples
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-3 rotate-2">
              {[
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=85",
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=85",
                "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=85"
              ].map((src, i) => <img key={src} src={src} alt={`Sample ${i+1}`} className="h-32 w-full rounded-xl object-cover shadow-xl" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
