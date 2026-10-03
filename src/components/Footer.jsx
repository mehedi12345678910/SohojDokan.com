import React from 'react';
import { ArrowUp, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-950 text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-xl font-extrabold text-white">VectorTracePro</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Professional raster-to-vector tracing for logos, illustrations, apparel,
            products, packaging and more.
          </p>
        </div>
        <div>
          <h4 className="font-bold">Quick Links</h4>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Mail size={15}/> hello@vectortracepro.com</span>
            <span className="flex items-center gap-2"><Phone size={15}/> +1 000 000 0000</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col items-center justify-between gap-4 py-5 text-xs text-slate-500 sm:flex-row">
          <span>© 2026 VectorTracePro. All rights reserved.</span>
          <a href="#home" className="flex items-center gap-2 hover:text-white">Back to top <ArrowUp size={13}/></a>
        </div>
      </div>
    </footer>
  );
}
