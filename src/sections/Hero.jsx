// import React from 'react';
// import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";

// const heroImg = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90";

// export default function Hero() {
//   return (
//     <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-white">
//       <div className="absolute -left-36 top-14 h-72 w-72 rounded-full bg-brand-blue/10 blur-2xl"/>
//       <div className="absolute right-[-100px] top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"/>
//       <div className="section-shell relative grid min-h-[520px] items-center gap-10 py-14 lg:grid-cols-[1.02fr_.98fr] lg:py-12">
//         <div>
//           <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-[11px] font-extrabold text-brand-blue">Our Services</span>
//           <h1 className="mt-3 max-w-2xl text-4xl font-black leading-[1.04] tracking-tight text-brand-dark sm:text-5xl">
//             Professional <span className="text-brand-blue">Vector Tracing Services</span>
//           </h1>
//           <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
//             We convert any type of low-resolution or pixel-based image into clean, editable,
//             high-quality vector files. From logos and illustrations to product images and artwork,
//             we deliver accurate, print-ready vectors.
//           </p>

//           <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
//             {[
//               ["100%", "Manual Tracing"],
//               ["AI, SVG", "Editable Files"],
//               ["High Quality", "Print-Ready"],
//               ["Fast", "Turnaround"]
//             ].map(([a,b], i) => (
//               <div key={b} className="flex items-center gap-2">
//                 <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-brand-blue shadow-card">
//                   {i === 0 ? <CheckCircle2 size={18}/> : <Sparkles size={18}/>}
//                 </span>
//                 <div>
//                   <div className="text-[11px] font-black text-slate-900">{a}</div>
//                   <div className="text-[9px] font-semibold text-slate-500">{b}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-7 flex flex-wrap gap-3">
//             <a href="#quote" className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-xs font-extrabold text-white shadow-lg shadow-blue-200">
//               Get a Free Quote <ArrowRight size={14}/>
//             </a>
//             <a href="#services" className="inline-flex items-center gap-2 rounded-xl border border-brand-blue/50 bg-white px-5 py-3 text-xs font-extrabold text-brand-blue">
//               <Play size={14} fill="currentColor"/> View Samples
//             </a>
//           </div>
//         </div>

//         <div className="relative min-h-[330px]">
//           <div className="hero-blob right-0 top-16"/>
//           <div className="absolute right-3 top-8 rounded-2xl border border-white bg-white/90 px-4 py-2 text-center shadow-soft">
//             <b className="block text-sm">Raster</b><span className="text-[10px] text-slate-500">(Low Resolution)</span>
//           </div>
//           <div className="absolute bottom-12 right-4 z-10 rounded-2xl border border-white bg-white/90 px-4 py-2 text-center shadow-soft">
//             <b className="block text-sm">Vector</b><span className="text-[10px] text-slate-500">(High Resolution)</span>
//           </div>
//           <div className="absolute inset-x-5 top-14 overflow-hidden rounded-[32px] border border-white/60 bg-white/40 shadow-soft">
//             <img src={heroImg} alt="Vector tracing sample" className="h-[300px] w-full object-cover" />
//             <div className="absolute inset-y-0 left-1/2 w-px bg-white/90"/>
//             <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-blue shadow-xl">↔</span>
//           </div>
//           <div className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold text-slate-800 shadow-soft">
//             Same Design • Infinite Possibilities
//           </div>
//           <div className="absolute right-0 top-28 hidden gap-2 sm:flex sm:flex-col">
//             {["AI","SVG","EPS","PDF","PNG"].map((x, i) => (
//               <span key={x} className={`grid h-9 w-9 place-items-center rounded-lg text-[10px] font-black text-white ${i === 0 ? "bg-slate-900" : "bg-brand-blue"}`}>{x}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useRef } from 'react';
// import {
//   ArrowRight,
//   CheckCircle2,
//   Play,
//   Sparkles,
//   ShieldCheck,
//   Zap,
//   Layers,
//   FileCode2,
//   SlidersHorizontal
// } from "lucide-react";

// // Image URL matching the reference design concept (sneaker comparison)
// const heroImg = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90";

// export default function Hero() {
//   const [sliderPosition, setSliderPosition] = useState(50);
//   const [isDragging, setIsDragging] = useState(false);
//   const containerRef = useRef(null);

//   const handleSliderMove = (clientX) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = clientX - rect.left;
//     const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
//     setSliderPosition(percentage);
//   };

//   const handleTouchMove = (e) => {
//     if (e.touches[0]) {
//       handleSliderMove(e.touches[0].clientX);
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     handleSliderMove(e.clientX);
//   };

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-gradient-to-b from-blue-50/90 via-white to-white py-12 lg:py-20 font-sans"
//     >
//       {}
//       <div className="absolute -left-36 top-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
//       <div className="absolute right-[-100px] top-1/3 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

//           {}
//           <div className="lg:col-span-7 space-y-6 text-left">

//             {/* Badge */}
//             <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-3.5 py-1 text-xs font-extrabold text-blue-600 shadow-sm">
//               <Sparkles size={13} className="text-blue-500 animate-pulse" />
//               Our Services
//             </div>

//             {/* Main Headline */}
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
//               Professional <br className="hidden sm:inline" />
//               <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Vector Tracing Services
//               </span>
//             </h1>

//             {/* Description text matching reference */}
//             <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed font-medium">
//               We convert any type of low-resolution or pixel-based image into clean, editable, high-quality vector files. From logos and illustrations to product images, t-shirt designs, book covers, and complex artwork — we deliver accurate, scalable vectors for print, web, and production.
//             </p>

//             {/* Feature Cards Grid (5 items) */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">

//               {/* Item 1 */}
//               <div className="flex items-start gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner">
//                   <CheckCircle2 size={16} />
//                 </span>
//                 <div>
//                   <div className="text-xs font-black text-slate-900">100%</div>
//                   <div className="text-[10px] font-semibold text-slate-500 leading-tight">Manual Tracing</div>
//                 </div>
//               </div>

//               {/* Item 2 */}
//               <div className="flex items-start gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 shadow-inner">
//                   <FileCode2 size={16} />
//                 </span>
//                 <div>
//                   <div className="text-xs font-black text-slate-900">AI, SVG</div>
//                   <div className="text-[10px] font-semibold text-slate-500 leading-tight">Editable Files</div>
//                 </div>
//               </div>

//               {/* Item 3 */}
//               <div className="flex items-start gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shadow-inner">
//                   <ShieldCheck size={16} />
//                 </span>
//                 <div>
//                   <div className="text-xs font-black text-slate-900">Print-Ready</div>
//                   <div className="text-[10px] font-semibold text-slate-500 leading-tight">High Quality</div>
//                 </div>
//               </div>

//               {/* Item 4 */}
//               <div className="flex items-start gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-inner">
//                   <Zap size={16} />
//                 </span>
//                 <div>
//                   <div className="text-xs font-black text-slate-900">Fast</div>
//                   <div className="text-[10px] font-semibold text-slate-500 leading-tight">Turnaround</div>
//                 </div>
//               </div>

//               {/* Item 5 */}
//               <div className="col-span-2 sm:col-span-1 flex items-start gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600 shadow-inner">
//                   <Layers size={16} />
//                 </span>
//                 <div>
//                   <div className="text-xs font-black text-slate-900">All Image Types</div>
//                   <div className="text-[10px] font-semibold text-slate-500 leading-tight">Any Niche</div>
//                 </div>
//               </div>

//             </div>

//             {/* Action Buttons */}
//             <div className="pt-3 flex flex-wrap items-center gap-4">
//               <a
//                 href="#quote"
//                 className="inline-flex items-center gap-2.5 rounded-2xl bg-blue-600 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-xl shadow-blue-500/25 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
//               >
//                 Get a Free Quote <ArrowRight size={16} />
//               </a>
//               <a
//                 href="#services"
//                 className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-blue-600/30 bg-white/80 backdrop-blur-sm px-6 py-3.5 text-xs sm:text-sm font-extrabold text-blue-600 hover:bg-blue-50/50 hover:border-blue-600 transition-all"
//               >
//                 <Play size={15} fill="currentColor" /> View Samples
//               </a>
//             </div>

//           </div>

//           {}
//           <div className="lg:col-span-5 relative">

//             {/* Background glowing accents */}
//             <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[36px] blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>

//             <div className="relative">

//               {/* Top Floating Tags */}
//               <div className="absolute -top-5 left-4 z-20 rounded-2xl border border-white/80 bg-white/95 px-4 py-2 text-center shadow-lg backdrop-blur-md">
//                 <b className="block text-xs sm:text-sm font-extrabold text-slate-900">Raster</b>
//                 <span className="text-[9px] sm:text-[10px] font-medium text-slate-500">(Low Resolution)</span>
//               </div>

//               <div className="absolute -top-5 right-4 z-20 rounded-2xl border border-white/80 bg-white/95 px-4 py-2 text-center shadow-lg backdrop-blur-md">
//                 <b className="block text-xs sm:text-sm font-extrabold text-slate-900">Vector</b>
//                 <span className="text-[9px] sm:text-[10px] font-medium text-slate-500">(High Resolution)</span>
//               </div>

//               {/* Interactive Image Comparison Container */}
//               <div
//                 ref={containerRef}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={() => setIsDragging(false)}
//                 onMouseLeave={() => setIsDragging(false)}
//                 onTouchMove={handleTouchMove}
//                 className="relative h-[340px] sm:h-[400px] w-full overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-2xl select-none cursor-ew-resize"
//               >
//                 {/* Right Image (Vector - Clean High Res) */}
//                 <img
//                   src={heroImg}
//                   alt="Vector Traced High Resolution"
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />

//                 {/* Left Image Overlay (Raster - Pixelated simulation with CSS filters/clip-path) */}
//                 <div
//                   className="absolute "
//                   style={{ width: `${sliderPosition}%` }}
//                 >
//                   <img
//                     src={heroImg}
//                     alt="Raster Low Resolution"
//                     className="absolute inset-0 h-full w-full object-cover max-w-none filter contrast-150 saturate-200"
//                     style={{
//                       width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
//                       imageRendering: 'pixelated'
//                     }}
//                   />
//                   {/* Pixelation overlay effect grid */}
//                   <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:6px_6px] opacity-25 pointer-events-none"></div>
//                 </div>

//                 {/* Slider Divider Bar & Handle */}
//                 <div
//                   className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-30"
//                   style={{ left: `${sliderPosition}%` }}
//                 >
//                   <div
//                     onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); }}
//                     onTouchStart={() => setIsDragging(true)}
//                     className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl border border-slate-100 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
//                   >
//                     <SlidersHorizontal size={18} />
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Format Badges on the Far Right */}
//               <div className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2 z-20">
//                 {[
//                   { label: "AI", bg: "bg-slate-900" },
//                   { label: "SVG", bg: "bg-blue-600" },
//                   { label: "EPS", bg: "bg-purple-600" },
//                   { label: "PDF", bg: "bg-red-600" },
//                   { label: "PNG", bg: "bg-emerald-600" }
//                 ].map((item, idx) => (
//                   <span
//                     key={item.label}
//                     className={`flex h-9 w-9 items-center justify-center rounded-xl text-[10px] font-black text-white shadow-lg ${item.bg} transform hover:scale-110 transition-transform`}
//                   >
//                     {item.label}
//                   </span>
//                 ))}
//               </div>

//               {/* Bottom Curved Arrow Note Badge */}
//               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-2xl bg-white/95 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-slate-800 shadow-xl border border-slate-100 flex items-center gap-2 backdrop-blur-md">
//                 <span className="text-cyan-500 font-serif italic text-lg leading-none">↳</span>
//                 Same Design • Infinite Possibilities
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useRef, useEffect } from 'react';
// import {
//   ArrowRight,
//   CheckCircle2,
//   Play,
//   ShieldCheck,
//   Clock,
//   Lock,
//   RefreshCw,
//   SlidersHorizontal,
//   ChevronLeft,
//   ChevronRight
// } from "lucide-react";

// // Slide images
// const shoeImg = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90";
// const tigerImg = "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1200&q=90";

// export default function HeroCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [sliderPosition, setSliderPosition] = useState(50);
//   const [isDragging, setIsDragging] = useState(false);
//   const containerRef = useRef(null);

//   const slides = [
//     {
//       id: "shoe",
//       tag: "Our Services",
//       headlinePrimary: "Professional",
//       headlineHighlight: "Vector Tracing Services",
//       description: "We convert any type of low-resolution or pixel-based image into clean, editable, high-quality vector files. From logos and illustrations to product images and artwork, we deliver accurate, print-ready vectors.",
//       bulletType: "grid-4",
//       bullets: [
//         ["100%", "Manual Tracing"],
//         ["AI, SVG", "Editable Files"],
//         ["High Quality", "Print-Ready"],
//         ["Fast", "Turnaround"]
//       ],
//       image: shoeImg,
//       badgeLeftText: "Raster",
//       badgeLeftSub: "(Low Resolution)",
//       badgeRightText: "Vector",
//       badgeRightSub: "(High Resolution)",
//       bottomNote: "Same Design • Infinite Possibilities",
//       formats: ["AI", "SVG", "EPS", "PDF", "PNG"]
//     },
//     {
//       id: "tiger",
//       tag: "Professional Vector Tracing Service",
//       headlinePrimary: "Raster to Vector",
//       headlineHighlight: "For Any Type of Image",
//       description: "Turn your low-resolution or pixel-based images into clean, editable, high-quality vector files. Logos, illustrations, T-shirt designs, book covers, icons, product graphics — any niche, any image.",
//       bulletType: "grid-6",
//       bullets: [
//         "100% Manual Tracing",
//         "Clean & Editable Files",
//         "Print-Ready Quality",
//         "Accurate Reproduction",
//         "Fast Turnaround",
//         "All File Formats"
//       ],
//       image: tigerImg,
//       badgeLeftText: "Raster",
//       badgeLeftSub: "(Low Resolution)",
//       badgeRightText: "Vector",
//       badgeRightSub: "(High Resolution)",
//       bottomNote: null,
//       formats: ["Ai", "SVG", "EPS", "PDF", "PNG"]
//     }
//   ];

//   const activeSlideData = slides[currentSlide];

//   // Reset comparison slider when changing slides
//   useEffect(() => {
//     setSliderPosition(50);
//   }, [currentSlide]);

//   const handleSliderMove = (clientX) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = clientX - rect.left;
//     const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
//     setSliderPosition(percentage);
//   };

//   const handleTouchMove = (e) => {
//     if (e.touches[0]) {
//       handleSliderMove(e.touches[0].clientX);
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     handleSliderMove(e.clientX);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-white py-12 lg:py-20 font-sans transition-colors duration-500"
//     >
//       {}
//       <div className="absolute -left-36 top-14 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
//       <div className="absolute right-[-100px] top-1/4 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none" />

//       {/* Carousel Navigation Arrow Controls (Absolute Floating on Sides) */}
//       <div className="absolute inset-y-0 left-2 sm:left-6 flex items-center z-30 pointer-events-none">
//         <button
//           onClick={prevSlide}
//           aria-label="Previous Slide"
//           className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 border border-slate-100"
//         >
//           <ChevronLeft size={24} />
//         </button>
//       </div>

//       <div className="absolute inset-y-0 right-2 sm:right-6 flex items-center z-30 pointer-events-none">
//         <button
//           onClick={nextSlide}
//           aria-label="Next Slide"
//           className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 border border-slate-100"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[520px]">

//           {/* Left Column: Content */}
//           <div className="lg:col-span-7 space-y-6 text-left transition-all duration-300">

//             {/* Top Badge */}
//             <div className="inline-flex items-center rounded-full bg-blue-100/90 px-3.5 py-1 text-[11px] sm:text-xs font-extrabold text-blue-700 shadow-sm">
//               {activeSlideData.tag}
//             </div>

//             {/* Main Headline */}
//             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
//               {activeSlideData.headlinePrimary} <br />
//               <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 {activeSlideData.headlineHighlight}
//               </span>
//             </h1>

//             {/* Description Paragraph */}
//             <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed font-medium">
//               {activeSlideData.description}
//             </p>

//             {/* Bullets: Shoe Grid vs Tiger Grid */}
//             {activeSlideData.bulletType === "grid-4" ? (
//               <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-1">
//                 {activeSlideData.bullets.map(([a, b], i) => (
//                   <div key={b} className="flex items-center gap-2.5">
//                     <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-blue-600 shadow-md border border-slate-100">
//                       {i === 0 ? <CheckCircle2 size={18} /> : <span className="text-xs font-black">{a}</span>}
//                     </span>
//                     <div>
//                       <div className="text-[11px] font-black text-slate-900">{a}</div>
//                       <div className="text-[9px] font-semibold text-slate-500">{b}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2.5 gap-x-4 pt-1">
//                 {activeSlideData.bullets.map((item, index) => (
//                   <div key={index} className="flex items-center gap-2.5">
//                     <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
//                       <CheckCircle2 size={13} strokeWidth={3} />
//                     </span>
//                     <span className="text-xs sm:text-sm font-bold text-slate-800">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Action Buttons */}
//             <div className="pt-4 flex flex-wrap items-center gap-4">
//               <a
//                 href="#quote"
//                 className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-xl shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 hover:scale-[1.02] active:scale-[0.98] transition-all"
//               >
//                 Get a Free Quote <ArrowRight size={16} />
//               </a>
//               <a
//                 href="#samples"
//                 className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-blue-600/40 bg-white/90 backdrop-blur-sm px-6 py-3.5 text-xs sm:text-sm font-extrabold text-blue-600 hover:bg-blue-50/60 hover:border-blue-600 transition-all shadow-sm"
//               >
//                 <Play size={15} fill="currentColor" /> View Samples
//               </a>
//             </div>

//           </div>

//           {/* Right Column: Interactive Comparison Slider */}
//           <div className="lg:col-span-5 relative">

//             {/* Ambient Back Glow */}
//             <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-amber-500 rounded-[38px] blur-xl opacity-20 pointer-events-none"></div>

//             <div className="relative">

//               {/* Optional Arrow Guide */}
//               {currentSlide === 1 && (
//                 <div className="absolute -top-7 right-16 z-20 text-orange-500 font-serif italic text-xl font-bold flex items-center gap-1 pointer-events-none animate-bounce">
//                   <span>curve</span>
//                   <svg className="w-10 h-6 stroke-orange-500 fill-none" viewBox="0 0 50 30">
//                     <path d="M5 25 C 20 5, 35 5, 45 20" strokeWidth="3" strokeLinecap="round" />
//                     <path d="M35 15 L 45 20 L 40 28" strokeWidth="3" strokeLinecap="round" strokeJoin="round" />
//                   </svg>
//                 </div>
//               )}

//               {/* Interactive Image Container */}
//               <div
//                 ref={containerRef}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={() => setIsDragging(false)}
//                 onMouseLeave={() => setIsDragging(false)}
//                 onTouchMove={handleTouchMove}
//                 className="relative h-[340px] sm:h-[410px] w-full overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-2xl select-none cursor-ew-resize"
//               >
//                 {/* Right Side: Clean Vector High-Res Image */}
//                 <img
//                   src={activeSlideData.image}
//                   alt="Vector Traced High Resolution"
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />

//                 {/* Left Side: Pixelated Raster Simulation */}
//                 <div
//                   className="absolute inset-0 overflow-hidden transition-all duration-75"
//                   style={{ width: `${sliderPosition}%` }}
//                 >
//                   <img
//                     src={activeSlideData.image}
//                     alt="Raster Low Resolution"
//                     className="absolute inset-0 h-full w-full object-cover max-w-none filter contrast-125 saturate-150"
//                     style={{
//                       width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
//                       imageRendering: 'pixelated'
//                     }}
//                   />
//                   {/* Subtle pixelation grid overlay */}
//                   <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:5px_5px] opacity-20 pointer-events-none"></div>
//                 </div>

//                 {/* Slider Divider Bar & Handle */}
//                 <div
//                   className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] z-30 transition-all duration-75"
//                   style={{ left: `${sliderPosition}%` }}
//                 >
//                   <div
//                     onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); }}
//                     onTouchStart={() => setIsDragging(true)}
//                     className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-2xl border-2 border-slate-100 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
//                   >
//                     {currentSlide === 0 ? <span className="font-black text-sm">↔</span> : <SlidersHorizontal size={20} />}
//                   </div>
//                 </div>

//                 {/* Bottom Left Raster Label */}
//                 <div className="absolute bottom-4 left-4 z-20 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-1.5 text-center shadow-lg backdrop-blur-md">
//                   <b className="block text-xs font-black text-slate-900">{activeSlideData.badgeLeftText}</b>
//                   <span className="text-[9px] font-semibold text-slate-500">{activeSlideData.badgeLeftSub}</span>
//                 </div>

//                 {/* Bottom Right Vector Label */}
//                 <div className="absolute bottom-4 right-4 z-20 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-1.5 text-center shadow-lg backdrop-blur-md">
//                   <b className="block text-xs font-black text-slate-900">{activeSlideData.badgeRightText}</b>
//                   <span className="text-[9px] font-semibold text-slate-500">{activeSlideData.badgeRightSub}</span>
//                 </div>

//               </div>

//               {/* Bottom Note (Shoe slide only) */}
//               {activeSlideData.bottomNote && (
//                 <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold text-slate-800 shadow-lg border border-slate-100 z-20">
//                   {activeSlideData.bottomNote}
//                 </div>
//               )}

//               {/* Right Side Vertical Format Badges */}
//               <div className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2 z-20">
//                 {activeSlideData.formats.map((x, i) => (
//                   <span
//                     key={x}
//                     className={`flex h-9 w-9 items-center justify-center rounded-xl text-[10px] sm:text-xs font-black text-white shadow-lg ${i === 0 && currentSlide === 0 ? "bg-slate-900" : i === 0 ? "bg-amber-700" : "bg-blue-600"} transform hover:scale-110 transition-transform`}
//                   >
//                     {x}
//                   </span>
//                 ))}
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* Carousel Pagination Dots */}
//         <div className="mt-12 flex justify-center items-center gap-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//               className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "w-10 bg-blue-600" : "w-3 bg-slate-300 hover:bg-slate-400"}`}
//             />
//           ))}
//         </div>

//         {/* Bottom Trust Bar */}
//         <div className="mt-12 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-6">
//           <div className="flex items-center gap-3">
//             <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 shadow-sm border border-amber-100">
//               <ShieldCheck size={20} />
//             </span>
//             <div>
//               <div className="text-xs sm:text-sm font-black text-slate-900">High Quality Output</div>
//               <div className="text-[10px] sm:text-xs font-medium text-slate-500">Immaculate accuracy</div>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm border border-blue-100">
//               <Clock size={20} />
//             </span>
//             <div>
//               <div className="text-xs sm:text-sm font-black text-slate-900">On-Time Delivery</div>
//               <div className="text-[10px] sm:text-xs font-medium text-slate-500">Fast turnaround times</div>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 shadow-sm border border-purple-100">
//               <Lock size={20} />
//             </span>
//             <div>
//               <div className="text-xs sm:text-sm font-black text-slate-900">100% Confidential</div>
//               <div className="text-[10px] sm:text-xs font-medium text-slate-500">Secure file handling</div>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-100">
//               <RefreshCw size={20} />
//             </span>
//             <div>
//               <div className="text-xs sm:text-sm font-black text-slate-900">Unlimited Revisions</div>
//               <div className="text-[10px] sm:text-xs font-medium text-slate-500">Until you are thrilled</div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// import React, { useState, useRef } from 'react';
// import {
//   ArrowRight,
//   CheckCircle2,
//   Play,
//   Sparkles,
//   ShieldCheck,
//   Clock,
//   Lock,
//   RotateCcw,
//   Check
// } from "lucide-react";

// const shoeImg = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90";
// const tigerImg = "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=90";

// export default function DualHero() {
//   const [activeTab, setActiveTab] = useState('tiger'); // 'shoe' or 'tiger'

//   // Slider states for before/after interactive comparison
//   const [sliderPosition, setSliderPosition] = useState(50);
//   const [isDragging, setIsDragging] = useState(false);
//   const containerRef = useRef(null);

//   const handleMouseDown = () => setIsDragging(true);
//   const handleMouseUp = () => setIsDragging(false);

//   const handleMouseMove = (e) => {
//     if (!isDragging || !containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
//     setSliderPosition(percentage);
//   };

//   const handleTouchMove = (e) => {
//     if (!containerRef.current || !e.touches[0]) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = e.touches[0].clientX - rect.left;
//     const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
//     setSliderPosition(percentage);
//   };

//   return (
//     <div className="w-full bg-gradient-to-b from-blue-50/80 via-white to-white font-sans text-slate-800">
//       {/* Design Switcher Bar for Previewing Both Options */}
//       <div className="w-full bg-slate-900 py-3 px-4 text-center sticky top-0 z-50 shadow-md">
//         <div className="inline-flex items-center gap-2 bg-slate-800 p-1 rounded-xl border border-slate-700">
//           <button
//             onClick={() => setActiveTab('tiger')}
//             className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
//               activeTab === 'tiger'
//                 ? 'bg-blue-600 text-white shadow-sm'
//                 : 'text-slate-300 hover:text-white'
//             }`}
//           >
//             Tiger Design (Style 1)
//           </button>
//           <button
//             onClick={() => setActiveTab('shoe')}
//             className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
//               activeTab === 'shoe'
//                 ? 'bg-blue-600 text-white shadow-sm'
//                 : 'text-slate-300 hover:text-white'
//             }`}
//           >
//             Shoe Design (Style 2)
//           </button>
//         </div>
//       </div>

//       {/* Main Hero Section */}
//       <section className="relative overflow-hidden pt-6 pb-12 lg:py-16">
//         {/* Background ambient glowing blobs */}
//         <div className="absolute -left-36 top-14 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none"/>
//         <div className="absolute right-[-100px] top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl pointer-events-none"/>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

//             {/* Left Column: Content */}
//             <div className="lg:col-span-7 flex flex-col items-start">

//               {/* Top Badge */}
//               <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-3.5 py-1 text-xs font-extrabold text-blue-600 border border-blue-200">
//                 <Sparkles size={13} />
//                 {activeTab === 'tiger' ? 'Professional Vector Tracing Service' : 'Our Services'}
//               </span>

//               {/* Dynamic Headline */}
//               <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-slate-900">
//                 {activeTab === 'tiger' ? (
//                   <>
//                     Raster to Vector <br />
//                     <span className="text-blue-600">For Any Type of Image</span>
//                   </>
//                 ) : (
//                   <>
//                     Professional <br />
//                     <span className="text-blue-600">Vector Tracing Services</span>
//                   </>
//                 )}
//               </h1>

//               {/* Description */}
//               <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl">
//                 {activeTab === 'tiger'
//                   ? 'Turn your low-resolution or pixel-based images into clean, editable, high-quality vector files. Logos, illustrations, T-shirt designs, book covers, icons, product graphics — any niche, any image.'
//                   : 'We convert any type of low-resolution or pixel-based image into clean, editable, high-quality vector files. From logos and illustrations to product images and artwork, we deliver accurate, print-ready vectors.'}
//               </p>

//               {/* Checkmark Features Grid (Differs slightly between designs to match screenshots) */}
//               {activeTab === 'tiger' ? (
//                 <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 w-full max-w-2xl">
//                   {[
//                     "100% Manual Tracing",
//                     "Clean & Editable Files",
//                     "Print-Ready Quality",
//                     "Accurate Reproduction",
//                     "Fast Turnaround",
//                     "All File Formats"
//                   ].map((text, idx) => (
//                     <div key={idx} className="flex items-center gap-2">
//                       <span className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white shrink-0 shadow-sm">
//                         <Check size={12} strokeWidth={3} />
//                       </span>
//                       <span className="text-xs font-bold text-slate-700">{text}</span>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
//                   {[
//                     ["100%", "Manual Tracing", <CheckCircle2 size={16} key={1}/>],
//                     ["AI, SVG", "Editable Files", <Sparkles size={16} key={2}/>],
//                     ["High Quality", "Print-Ready", <CheckCircle2 size={16} key={3}/>],
//                     ["Fast", "Turnaround", <Sparkles size={16} key={4}/>]
//                   ].map(([a, b, icon], i) => (
//                     <div key={b} className="flex items-center gap-2 bg-white/60 p-2.5 rounded-xl border border-slate-100 shadow-sm">
//                       <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600">
//                         {icon}
//                       </span>
//                       <div>
//                         <div className="text-[11px] font-black text-slate-900">{a}</div>
//                         <div className="text-[9px] font-semibold text-slate-500">{b}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Call to Action Buttons */}
//               <div className="mt-8 flex flex-wrap gap-3.5">
//                 <a
//                   href="#quote"
//                   className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
//                 >
//                   Get a Free Quote <ArrowRight size={16}/>
//                 </a>
//                 <a
//                   href="#samples"
//                   className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-slate-800 shadow-sm transition-all"
//                 >
//                   <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white">
//                     <Play size={10} fill="currentColor"/>
//                   </span>
//                   View Samples
//                 </a>
//               </div>

//             </div>

//             {/* Right Column: Interactive Comparison Image & Floating Badges */}
//             <div className="lg:col-span-5 relative flex justify-center items-center">

//               <div className="relative w-full max-w-[480px]">

//                 {/* Top Labels: Raster vs Vector */}
//                 <div className="absolute -top-5 left-2 z-20 rounded-xl border border-slate-100 bg-white/95 px-3 py-1.5 text-center shadow-md backdrop-blur-sm">
//                   <b className="block text-xs font-bold text-slate-900">Raster</b>
//                   <span className="text-[9px] text-slate-500 font-medium">(Low Resolution)</span>
//                 </div>

//                 <div className="absolute -top-5 right-12 z-20 rounded-xl border border-slate-100 bg-white/95 px-3 py-1.5 text-center shadow-md backdrop-blur-sm">
//                   <b className="block text-xs font-bold text-slate-900">Vector</b>
//                   <span className="text-[9px] text-slate-500 font-medium">(High Resolution)</span>
//                 </div>

//                 {/* Interactive Before/After Container */}
//                 <div
//                   ref={containerRef}
//                   onMouseDown={handleMouseDown}
//                   onMouseUp={handleMouseUp}
//                   onMouseMove={handleMouseMove}
//                   onMouseLeave={handleMouseUp}
//                   onTouchStart={handleMouseDown}
//                   onTouchEnd={handleMouseUp}
//                   onTouchMove={handleTouchMove}
//                   className="relative h-[320px] sm:h-[360px] w-full overflow-hidden rounded-[28px] border-2 border-white bg-slate-100 shadow-xl select-none cursor-ew-resize"
//                 >
//                   {/* Background Layer (Raster / Pixelated look simulation) */}
//                   <div className="absolute inset-0 w-full h-full bg-slate-200">
//                     <img
//                       src={activeTab === 'tiger' ? tigerImg : shoeImg}
//                       alt="Raster version"
//                       className="w-full h-full object-cover filter contrast-125 brightness-95"
//                       style={{ imageRendering: 'pixelated' }}
//                     />
//                     <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]"></div>
//                   </div>

//                   {/* Foreground Layer (Vector / Crisp clean look) - Clipped by sliderPosition */}
//                   <div
//                     className="absolute inset-0 h-full overflow-hidden"
//                     style={{ width: `${sliderPosition}%` }}
//                   >
//                     <img
//                       src={activeTab === 'tiger' ? tigerImg : shoeImg}
//                       alt="Vector version"
//                       className="absolute inset-0 h-full w-full max-w-none object-cover"
//                       style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', height: '100%' }}
//                     />
//                   </div>

//                   {/* Slider Divider Bar */}
//                   <div
//                     className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-30 pointer-events-none"
//                     style={{ left: `${sliderPosition}%` }}
//                   >
//                     <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl border border-slate-100">
//                       <span className="font-bold text-xs">↔</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Side File Format Badges Stack */}
//                 <div className="absolute -right-3 top-16 z-20 hidden sm:flex flex-col gap-1.5">
//                   {[
//                     { name: "Ai", bg: "bg-amber-800" },
//                     { name: "SVG", bg: "bg-blue-600" },
//                     { name: "EPS", bg: "bg-purple-600" },
//                     { name: "PDF", bg: "bg-red-600" },
//                     { name: "PNG", bg: "bg-emerald-600" }
//                   ].map((item, idx) => (
//                     <span
//                       key={item.name}
//                       className={`grid h-8 w-8 place-items-center rounded-lg text-[10px] font-black text-white shadow-md ${item.bg} transform hover:scale-105 transition-transform`}
//                     >
//                       {item.name}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Bottom Center Curved Arrow Note or Tag */}
//                 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-full bg-white/95 px-4 py-1.5 text-xs font-extrabold text-slate-800 shadow-md border border-slate-100 flex items-center gap-1.5">
//                   <span className="text-blue-600">✦</span> Same Design • Infinite Possibilities
//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* Bottom Trust & Guarantee Footer Bar */}
//           <div className="mt-16 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               { title: "High Quality Output", icon: <ShieldCheck className="text-orange-500" size={18} /> },
//               { title: "On-Time Delivery", icon: <Clock className="text-blue-500" size={18} /> },
//               { title: "100% Confidential", icon: <Lock className="text-indigo-500" size={18} /> },
//               { title: "Unlimited Revisions", icon: <RotateCcw className="text-purple-500" size={18} /> }
//             ].map((item, idx) => (
//               <div key={idx} className="flex items-center justify-center sm:justify-start gap-3 bg-white/80 p-3.5 rounded-2xl border border-slate-100 shadow-sm">
//                 <div className="p-2 rounded-xl bg-slate-50">{item.icon}</div>
//                 <span className="text-xs font-bold text-slate-800">{item.title}</span>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  ShieldCheck,
  Clock,
  Lock,
  RefreshCw,
  SlidersHorizontal,
} from "lucide-react";

// Image assets matching references
const shoeImg =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90";
const tigerImg =
  "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1200&q=90";

export default function HeroSwitcher() {
  const [activeTab, setActiveTab] = useState("shoe"); // 'shoe' or 'tiger'
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Reset slider on tab switch
  useEffect(() => {
    setSliderPosition(50);
  }, [activeTab]);

  // Handle slider position logic
  const handleSliderMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  // Global mouse & touch event listeners for seamless dragging
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      handleSliderMove(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !e.touches[0]) return;
      handleSliderMove(e.touches[0].clientX);
    };

    const handleStopDragging = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleStopDragging);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleStopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleStopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleStopDragging);
    };
  }, [isDragging, handleSliderMove]);

  const currentData =
    activeTab === "shoe"
      ? {
          id: "shoe",
          tag: "Our Services",
          headlinePrimary: "Professional",
          headlineHighlight: "Vector Tracing Services",
          description:
            "We convert any type of low-resolution or pixel-based image into clean, editable, high-quality vector files. From logos and illustrations to product images and artwork, we deliver accurate, print-ready vectors.",
          bulletType: "grid-4",
          bullets: [
            ["100%", "Manual Tracing"],
            ["AI, SVG", "Editable Files"],
            ["High Quality", "Print-Ready"],
            ["Fast", "Turnaround"],
          ],
          image: shoeImg,
          bottomNote: "Same Design • Infinite Possibilities",
          formats: ["AI", "SVG", "EPS", "PDF", "PNG"],
        }
      : {
          id: "tiger",
          tag: "Professional Vector Tracing Service",
          headlinePrimary: "Raster to Vector",
          headlineHighlight: "For Any Type of Image",
          description:
            "Turn your low-resolution or pixel-based images into clean, editable, high-quality vector files. Logos, illustrations, T-shirt designs, book covers, icons, product graphics — any niche, any image.",
          bulletType: "grid-6",
          bullets: [
            "100% Manual Tracing",
            "Clean & Editable Files",
            "Print-Ready Quality",
            "Accurate Reproduction",
            "Fast Turnaround",
            "All File Formats",
          ],
          image: tigerImg,
          bottomNote: null,
          formats: ["Ai", "SVG", "EPS", "PDF", "PNG"],
        };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/90 via-white to-white py-8 lg:py-16 font-sans">
      {/* Background Blobs */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute right-[-80px] top-1/3 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Style Switcher Header Bar */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100/80 backdrop-blur-md border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab("shoe")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                activeTab === "shoe"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Style 1: Shoe Vector
            </button>
            <button
              onClick={() => setActiveTab("tiger")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                activeTab === "tiger"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Style 2: Tiger Vector
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Bullets */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 text-left">
            {/* Tag */}
            <div className="inline-flex items-center rounded-full bg-blue-100/90 px-3.5 py-1 text-[11px] sm:text-xs font-extrabold text-blue-700 shadow-sm">
              {currentData.tag}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              {currentData.headlinePrimary} <br className="hidden sm:inline" />
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {currentData.headlineHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed font-medium">
              {currentData.description}
            </p>

            {/* Bullets Grid */}
            {currentData.bulletType === "grid-4" ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 pt-1">
                {currentData.bullets.map(([a, b], i) => (
                  <div
                    key={b}
                    className="flex items-center gap-2.5 bg-white/60 p-2 sm:p-0 rounded-xl border border-slate-100 sm:border-0 shadow-sm sm:shadow-none"
                  >
                    <span className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-xl bg-white text-blue-600 shadow-sm border border-slate-100">
                      {i === 0 ? (
                        <CheckCircle2 size={16} />
                      ) : (
                        <span className="text-xs font-black">{a}</span>
                      )}
                    </span>
                    <div>
                      <div className="text-[11px] font-black text-slate-900">
                        {a}
                      </div>
                      <div className="text-[9px] font-semibold text-slate-500">
                        {b}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {currentData.bullets.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/60 p-2 sm:p-0 rounded-xl border border-slate-100 sm:border-0"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                      <CheckCircle2 size={13} strokeWidth={3} />
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 sm:px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 transition-all"
              >
                Get a Free Quote <ArrowRight size={15} />
              </a>
              <a
                href="#samples"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-600/40 bg-white px-5 sm:px-6 py-3 text-xs sm:text-sm font-extrabold text-blue-600 hover:bg-blue-50 transition-all shadow-sm"
              >
                <Play size={14} fill="currentColor" /> View Samples
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Image Comparison Slider */}
          <div className="lg:col-span-5 relative">
            {/* Glow wrapper */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-amber-500 rounded-[32px] blur-lg opacity-25 pointer-events-none"></div>

            <div className="relative">
              {/* Tiger Curve Arrow Indicator */}
              {activeTab === "tiger" && (
                <div className="absolute -top-6 right-12 z-20 text-orange-500 font-serif italic text-sm sm:text-base font-bold flex items-center gap-1 pointer-events-none">
                  <span>curve</span>
                  <svg
                    className="w-8 h-5 stroke-orange-500 fill-none"
                    viewBox="0 0 50 30"
                  >
                    <path
                      d="M5 25 C 20 5, 35 5, 45 20"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M35 15 L 45 20 L 40 28"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeJoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* Responsive Comparison Container */}
              <div
                ref={containerRef}
                onClick={(e) => handleSliderMove(e.clientX)}
                className="relative h-[300px] sm:h-[380px] lg:h-[400px] w-full overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-2xl select-none cursor-ew-resize touch-none"
              >
                {/* Right Side: Clean Vector High-Res */}
                <img
                  src={currentData.image}
                  alt="Vector Traced High Resolution"
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                />

                {/* Left Side: Pixelated Raster Simulation */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentData.image}
                    alt="Raster Low Resolution"
                    className="absolute inset-0 h-full w-full object-cover max-w-none filter contrast-125 saturate-150"
                    style={{
                      width: containerRef.current
                        ? `${containerRef.current.offsetWidth}px`
                        : "100%",
                      imageRendering: "pixelated",
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px] opacity-15 pointer-events-none"></div>
                </div>

                {/* Divider Line & Grab Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-30 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      setIsDragging(true);
                    }}
                    onTouchStart={(e) => {
                      e.stopPropagation();
                      setIsDragging(true);
                    }}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl border-2 border-slate-100 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform pointer-events-auto"
                  >
                    {activeTab === "shoe" ? (
                      <span className="font-black text-xs">↔</span>
                    ) : (
                      <SlidersHorizontal size={18} />
                    )}
                  </div>
                </div>

                {/* Raster Badge Bottom Left */}
                <div className="absolute bottom-3 left-3 z-20 rounded-xl border border-white/80 bg-white/95 px-3 py-1 text-center shadow-md backdrop-blur-sm pointer-events-none">
                  <b className="block text-[11px] font-black text-slate-900">
                    Raster
                  </b>
                  <span className="text-[8px] font-semibold text-slate-500">
                    (Low Res)
                  </span>
                </div>

                {/* Vector Badge Bottom Right */}
                <div className="absolute bottom-3 right-3 z-20 rounded-xl border border-white/80 bg-white/95 px-3 py-1 text-center shadow-md backdrop-blur-sm pointer-events-none">
                  <b className="block text-[11px] font-black text-slate-900">
                    Vector
                  </b>
                  <span className="text-[8px] font-semibold text-slate-500">
                    (High Res)
                  </span>
                </div>
              </div>

              {/* Bottom Note (Shoe view) */}
              {currentData.bottomNote && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-[11px] font-extrabold text-slate-800 shadow-lg border border-slate-100 z-20">
                  {currentData.bottomNote}
                </div>
              )}

              {/* Right Side Format Badges */}
              <div className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-20">
                {currentData.formats.map((x, i) => (
                  <span
                    key={x}
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-[9px] sm:text-[10px] font-black text-white shadow-md ${
                      i === 0 && activeTab === "shoe"
                        ? "bg-slate-900"
                        : i === 0
                          ? "bg-amber-700"
                          : "bg-blue-600"
                    }`}
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 bg-white/50 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-slate-100 sm:border-0 shadow-sm sm:shadow-none">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shadow-sm border border-amber-100">
              <ShieldCheck size={18} />
            </span>
            <div>
              <div className="text-xs font-black text-slate-900">
                High Quality Output
              </div>
              <div className="text-[10px] text-slate-500">
                Immaculate accuracy
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/50 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-slate-100 sm:border-0 shadow-sm sm:shadow-none">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm border border-blue-100">
              <Clock size={18} />
            </span>
            <div>
              <div className="text-xs font-black text-slate-900">
                On-Time Delivery
              </div>
              <div className="text-[10px] text-slate-500">
                Fast turnaround times
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/50 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-slate-100 sm:border-0 shadow-sm sm:shadow-none">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 shadow-sm border border-purple-100">
              <Lock size={18} />
            </span>
            <div>
              <div className="text-xs font-black text-slate-900">
                100% Confidential
              </div>
              <div className="text-[10px] text-slate-500">
                Secure file handling
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/50 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-slate-100 sm:border-0 shadow-sm sm:shadow-none">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-100">
              <RefreshCw size={18} />
            </span>
            <div>
              <div className="text-xs font-black text-slate-900">
                Unlimited Revisions
              </div>
              <div className="text-[10px] text-slate-500">
                Until you are thrilled
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
