

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
