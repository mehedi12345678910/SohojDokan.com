// import React from 'react';
// import { ArrowRight, Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const links = ["Home", "Services", "Portfolio", "Process", "Why Us", "Pricing", "FAQ"];

//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
//       <div className="section-shell flex h-[68px] items-center justify-between">
//         <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
//           <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-blue text-white shadow-lg shadow-blue-200">
//             <span className="text-xl font-black">✦</span>
//           </div>
//           <div className="leading-none">
//             <div className="text-[18px] font-extrabold tracking-tight text-brand-blue">VectorTracePro</div>
//             <div className="mt-1 text-[7px] font-bold tracking-[.18em] text-slate-400">RASTER TO VECTOR. PERFECTLY DONE.</div>
//           </div>
//         </a>

//         <nav className="hidden items-center gap-7 lg:flex">
//           {links.map((link) => (
//             <a
//               key={link}
//               href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
//               className={`text-[12px] font-semibold transition hover:text-brand-blue ${
//                 link === "Home" ? "text-brand-blue" : "text-slate-700"
//               }`}
//             >
//               {link}
//             </a>
//           ))}
//         </nav>

//         <a href="#quote" className="hidden rounded-xl bg-brand-orange px-5 py-3 text-[12px] font-extrabold text-white shadow-lg shadow-orange-100 transition hover:-translate-y-0.5 lg:flex lg:items-center lg:gap-2">
//           Get a Free Quote <ArrowRight size={14} />
//         </a>

//         <button className="btn btn-ghost btn-sm lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {open && (
//         <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 lg:hidden">
//           <div className="flex flex-col gap-2">
//             {links.map((link) => (
//               <a
//                 key={link}
//                 href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
//                 onClick={() => setOpen(false)}
//                 className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-blue-50 hover:text-brand-blue"
//               >
//                 {link}
//               </a>
//             ))}
//             <a href="#quote" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-brand-orange px-4 py-3 text-center text-sm font-bold text-white">
//               Get a Free Quote
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


// import React, { useState } from 'react';
// import { ArrowRight, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const links = ["Home", "Services", "Portfolio", "Process", "Why Us", "Pricing", "FAQ"];

//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-[68px] items-center justify-between">
        
//         {/* Logo */}
//         <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
//           <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
//             <span className="text-xl font-black">✦</span>
//           </div>
//           <div className="leading-none">
//             <div className="text-[18px] font-extrabold tracking-tight text-blue-600">VectorTracePro</div>
//             <div className="mt-1 text-[7px] font-bold tracking-[.18em] text-slate-400">RASTER TO VECTOR. PERFECTLY DONE.</div>
//           </div>
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden items-center gap-7 lg:flex">
//           {links.map((link) => (
//             <a
//               key={link}
//               href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
//               className={`text-[12px] font-semibold transition hover:text-blue-600 ${
//                 link === "Home" ? "text-blue-600" : "text-slate-700"
//               }`}
//             >
//               {link}
//             </a>
//           ))}
//         </nav>

//         {/* Desktop CTA Button */}
//         <a 
//           href="#quote" 
//           className="hidden rounded-xl bg-orange-500 px-5 py-3 text-[12px] font-extrabold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600 hover:-translate-y-0.5 lg:flex lg:items-center lg:gap-2"
//         >
//           Get a Free Quote <ArrowRight size={14} />
//         </a>

//         {/* Mobile Menu Toggle Button */}
//         <button 
//           className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 lg:hidden" 
//           onClick={() => setOpen(!open)} 
//           aria-label="Toggle menu"
//         >
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {open && (
//         <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 lg:hidden shadow-xl">
//           <div className="flex flex-col gap-2">
//             {links.map((link) => (
//               <a
//                 key={link}
//                 href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
//                 onClick={() => setOpen(false)}
//                 className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
//               >
//                 {link}
//               </a>
//             ))}
//             <a 
//               href="#quote" 
//               onClick={() => setOpen(false)} 
//               className="mt-2 rounded-xl bg-orange-500 px-4 py-3 text-center text-sm font-bold text-white shadow-md shadow-orange-100 hover:bg-orange-600 transition"
//             >
//               Get a Free Quote
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", type: "scroll", to: "home" },
    { name: "Services", type: "route", to: "/ServiceSetion" },
    { name: "Portfolio", type: "route", to: "/portfolio" },
    { name: "Process", type: "route", to: "process" },
    { name: "Why Us", type: "route", to: "/whyus" },
    { name: "Pricing", type: "route", to: "/pricingsection" }, // Eta alada page-e jabe
    { name: "FAQ", type: "route", to: "/faqsection" },
    { name: "Contact", type: "route", to: "/contact" },
  ];

  // Handle smooth scroll for home page sections
  const handleNavClick = (e, item) => {
    setOpen(false);
    if (item.type === "route") {
      return; // Link component nijei route handle korbe
    }
    
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(item.to);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(item.to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-[68px] items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
            <span className="text-xl font-black">✦</span>
          </div>
          <div className="leading-none">
            <div className="text-[18px] font-extrabold tracking-tight text-blue-600">VectorTracePro</div>
            <div className="mt-1 text-[7px] font-bold tracking-[.18em] text-slate-400">RASTER TO VECTOR. PERFECTLY DONE.</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            if (link.type === "route") {
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-[12px] font-semibold transition hover:text-blue-600 ${
                    location.pathname === link.to ? "text-blue-600" : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            }
            return (
              <a
                key={link.name}
                href={`#${link.to}`}
                onClick={(e) => handleNavClick(e, link)}
                className="text-[12px] font-semibold text-slate-700 transition hover:text-blue-600"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <a 
          href="#quote" 
          onClick={(e) => handleNavClick(e, { type: "scroll", to: "quote" })}
          className="hidden rounded-xl bg-orange-500 px-5 py-3 text-[12px] font-extrabold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600 hover:-translate-y-0.5 lg:flex lg:items-center lg:gap-2 cursor-pointer"
        >
          Get a Free Quote <ArrowRight size={14} />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 lg:hidden" 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 lg:hidden shadow-xl">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              if (link.type === "route") {
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
                      location.pathname === link.to ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={`#${link.to}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              );
            })}
            <a 
              href="#quote" 
              onClick={(e) => handleNavClick(e, { type: "scroll", to: "quote" })} 
              className="mt-2 rounded-xl bg-orange-500 px-4 py-3 text-center text-sm font-bold text-white shadow-md shadow-orange-100 hover:bg-orange-600 transition cursor-pointer"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}