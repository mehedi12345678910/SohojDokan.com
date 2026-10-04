import React from 'react';
import { 
  CheckCircle2, 
  PenTool, 
  Layers, 
  Monitor, 
  Image as ImageIcon, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  ArrowRight, 
  Play,
  Check
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans p-4 sm:p-6 md:p-10 antialiased selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-8">

        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Hero Card: Raster vs Vector with Magnifier */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
            {/* Background subtle pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

            <div className="flex justify-between items-center mb-6">
              <div className="text-center flex-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">Original</span>
                <span className="text-xs text-slate-500 font-medium">(Raster)</span>
              </div>
              <div className="h-8 w-px bg-slate-100"></div>
              <div className="text-center flex-1">
                <span className="text-xs uppercase tracking-wider text-blue-600 font-bold block mb-1">Vector</span>
                <span className="text-xs text-slate-500 font-medium">(Editable & Scalable)</span>
              </div>
            </div>

            {/* Visual Comparison Area */}
            <div className="relative flex items-center justify-center my-4 py-4">
              {/* Pixelated Tiger Left */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-2 bg-amber-50/40 border border-amber-100 flex items-center justify-center relative shadow-inner">
                <svg className="w-full h-full pixelated opacity-90 filter contrast-125" viewBox="0 0 100 100">
                  {/* Pixelated Tiger Mockup SVG */}
                  <rect width="100" height="100" rx="12" fill="#d97706" />
                  <path d="M20,30 L40,20 L60,20 L80,30 L85,60 L70,85 L30,85 L15,60 Z" fill="#b45309" />
                  <path d="M30,40 L50,30 L70,40 L65,70 L35,70 Z" fill="#fde68a" />
                  <circle cx="38" cy="45" r="5" fill="#1e293b" />
                  <circle cx="62" cy="45" r="5" fill="#1e293b" />
                  <path d="M45,60 L55,60 L50,70 Z" fill="#1e293b" />
                </svg>
              </div>

              {/* Smooth Vector Tiger Right */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl p-2 bg-gradient-to-br from-blue-500/10 to-orange-500/10 border border-blue-100 flex items-center justify-center relative -ml-10 shadow-lg">
                <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100">
                  <path d="M15,25 Q50,5 85,25 Q95,60 80,85 Q50,95 20,85 Q5,60 15,25 Z" fill="#ea580c" />
                  <path d="M25,35 Q50,20 75,35 Q82,60 70,80 Q50,88 30,80 Q18,60 25,35 Z" fill="#f97316" />
                  {/* Tiger Stripes */}
                  <path d="M25,35 L35,45 L28,55 Z" fill="#0f172a" />
                  <path d="M75,35 L65,45 L72,55 Z" fill="#0f172a" />
                  <path d="M40,20 L50,32 L60,20 Z" fill="#0f172a" />
                  {/* Eyes */}
                  <circle cx="37" cy="48" r="6" fill="#fbbf24" />
                  <circle cx="37" cy="48" r="2.5" fill="#0f172a" />
                  <circle cx="63" cy="48" r="6" fill="#fbbf24" />
                  <circle cx="63" cy="48" r="2.5" fill="#0f172a" />
                  <path d="M42,65 Q50,72 58,65 Q50,78 42,65 Z" fill="#0f172a" />
                </svg>
              </div>

              {/* Magnifying Glass Overlay */}
              <div className="absolute right-6 bottom-2 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center ring-4 ring-orange-500/20 transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-1 rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
                  <svg className="w-24 h-24 transform scale-125" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="#f97316" />
                    <circle cx="50" cy="50" r="30" fill="#fbbf24" />
                    <circle cx="50" cy="50" r="14" fill="#1e293b" />
                    <circle cx="53" cy="47" r="4" fill="#ffffff" />
                  </svg>
                </div>
              </div>

              {/* Orange transition arrow curve */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500 pointer-events-none">
                <svg className="w-10 h-10 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Crisp Vector Lines</span>
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <Check className="w-3.5 h-3.5" /> 100% Scalable
              </span>
            </div>
          </div>

          {/* Right Hero Card: Our Key Advantages */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                Our Key Advantages
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                Why Work With Us?
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mb-6">
                We combine skill, experience and attention to detail to deliver vector files that are clean, accurate and ready for any use.
              </p>
            </div>

            {/* 6 Advantage Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Advantage 1 */}
              <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-rose-500/20">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">100% Manual Tracing</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Every image is traced manually to ensure clean and accurate results.</p>
                </div>
              </div>

              {/* Advantage 2 */}
              <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-600/20">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">Clean & Organized Files</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Well-structured layers and paths for easy editing.</p>
                </div>
              </div>

              {/* Advantage 3 */}
              <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">Editable and Scalable</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Files are fully editable and can be resized without losing quality.</p>
                </div>
              </div>

              {/* Advantage 4 */}
              <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-purple-600/20">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">All Image Types & Niches</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">We can trace logos, illustrations, photos, sketches, product images and more.</p>
                </div>
              </div>

              {/* Advantage 5 */}
              <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-amber-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">Fast Turnaround</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">We deliver your files quickly without compromising quality.</p>
                </div>
              </div>

              {/* Advantage 6 */}
              <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">Confidential and Secure</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Your files are handled with complete privacy and security.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                Real-World Results
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Same Design. <span className="text-blue-600">Better Quality.</span>
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              We convert your low-resolution images, sketches or photos into clean, high-quality vector files with smooth paths and accurate details.
            </p>
          </div>

          {/* Comparison Pairs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Nike Swoosh Comparison */}
            <div className="bg-slate-50/60 rounded-2xl p-5 border border-slate-100 flex flex-col items-center">
              <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center border border-slate-200/60 shadow-xs relative">
                  <span className="absolute top-2 left-2 text-[10px] uppercase font-bold text-slate-400">Before</span>
                  <div className="h-20 flex items-center justify-center py-2">
                    <svg className="w-20 h-10 opacity-75 filter blur-[0.4px]" viewBox="0 0 100 50">
                      <path d="M10,40 Q40,45 80,10 Q50,25 30,35 Z" fill="#222" />
                    </svg>
                  </div>
                  <span className="mt-2 px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full">Before</span>
                </div>
                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center border border-slate-200/60 shadow-xs relative">
                  <span className="absolute top-2 left-2 text-[10px] uppercase font-bold text-blue-600">After</span>
                  <div className="h-20 flex items-center justify-center py-2">
                    <svg className="w-20 h-10" viewBox="0 0 100 50">
                      <path d="M10,40 Q40,45 80,10 Q50,25 30,35 Z" fill="#000" />
                    </svg>
                  </div>
                  <span className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-sm shadow-blue-600/30">After</span>
                </div>
              </div>
              <div className="absolute z-10 translate-y-36 bg-white border border-slate-200 rounded-full p-1.5 shadow-sm text-slate-600 hidden sm:flex items-center justify-center">
                <span className="text-[10px] font-bold px-1">&lt;&gt;</span>
              </div>
            </div>

            {/* Tiger Head Comparison */}
            <div className="bg-slate-50/60 rounded-2xl p-5 border border-slate-100 flex flex-col items-center">
              <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center border border-slate-200/60 shadow-xs relative">
                  <span className="absolute top-2 left-2 text-[10px] uppercase font-bold text-slate-400">Before</span>
                  <div className="h-20 flex items-center justify-center py-2">
                    <svg className="w-16 h-16 opacity-70 pixelated filter contrast-125" viewBox="0 0 100 100">
                      <rect width="100" height="100" rx="10" fill="#d97706" />
                      <circle cx="35" cy="45" r="4" fill="#000" />
                      <circle cx="65" cy="45" r="4" fill="#000" />
                    </svg>
                  </div>
                  <span className="mt-2 px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full">Before</span>
                </div>
                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center border border-slate-200/60 shadow-xs relative">
                  <span className="absolute top-2 left-2 text-[10px] uppercase font-bold text-blue-600">After</span>
                  <div className="h-20 flex items-center justify-center py-2">
                    <svg className="w-16 h-16 drop-shadow-sm" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="#ea580c" />
                      <path d="M25,35 Q50,20 75,35 Q80,65 50,85 Q20,65 25,35 Z" fill="#f97316" />
                      <circle cx="38" cy="48" r="5" fill="#0f172a" />
                      <circle cx="62" cy="48" r="5" fill="#0f172a" />
                    </svg>
                  </div>
                  <span className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-sm shadow-blue-600/30">After</span>
                </div>
              </div>
            </div>

            {/* Mario/Character Comparison */}
            <div className="bg-slate-50/60 rounded-2xl p-5 border border-slate-100 flex flex-col items-center">
              <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center border border-slate-200/60 shadow-xs relative">
                  <span className="absolute top-2 left-2 text-[10px] uppercase font-bold text-slate-400">Before</span>
                  <div className="h-20 flex items-center justify-center py-2">
                    <svg className="w-16 h-16 opacity-70 pixelated filter contrast-125" viewBox="0 0 100 100">
                      <rect width="100" height="100" rx="10" fill="#dc2626" />
                      <circle cx="50" cy="50" r="20" fill="#fde047" />
                    </svg>
                  </div>
                  <span className="mt-2 px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full">Before</span>
                </div>
                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center border border-slate-200/60 shadow-xs relative">
                  <span className="absolute top-2 left-2 text-[10px] uppercase font-bold text-blue-600">After</span>
                  <div className="h-20 flex items-center justify-center py-2">
                    <svg className="w-16 h-16 drop-shadow-sm" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="#2563eb" />
                      <circle cx="50" cy="50" r="25" fill="#facc15" />
                      <path d="M40,40 L60,40 L50,60 Z" fill="#dc2626" />
                    </svg>
                  </div>
                  <span className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-sm shadow-blue-600/30">After</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: We Work With All Kinds of Images */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                Wide Range of Image Types
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-6">
                We Work With All Kinds of Images
              </h3>
            </div>

            {/* 8 Category Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50/40 hover:border-blue-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center mb-2 shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Logos & Branding</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50/40 hover:border-blue-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center mb-2 shadow-xs">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Illustrations & Artwork</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50/40 hover:border-blue-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-400 text-white flex items-center justify-center mb-2 shadow-xs">
                  <PenTool className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">T-Shirt Designs</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50/40 hover:border-blue-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-2 shadow-xs">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Book Covers</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50/40 hover:border-blue-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center mb-2 shadow-xs">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Product Images</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50/40 hover:border-blue-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center mb-2 shadow-xs">
                  <Monitor className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Icons & Graphics</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50/40 hover:border-blue-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center mb-2 shadow-xs">
                  <PenTool className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Sketches & Drawings</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50/40 hover:border-blue-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center mb-2 shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Any Other Image</span>
              </div>
            </div>
          </div>

          {/* Column 2: Get Files in Your Preferred Format */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                File Formats
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Get Files in Your Preferred Format
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                We deliver fully editable vector files in all major formats.
              </p>
            </div>

            {/* Format Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 flex flex-col items-center text-center shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white font-bold flex items-center justify-center text-sm shadow-sm mb-2">
                  Ai
                </div>
                <span className="text-xs font-bold text-slate-800">Adobe Illustrator</span>
                <span className="text-[10px] text-slate-400">(AI)</span>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex flex-col items-center text-center shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-sm mb-2">
                  SVG
                </div>
                <span className="text-xs font-bold text-slate-800">Scalable Vector</span>
                <span className="text-[10px] text-slate-400">(SVG)</span>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex flex-col items-center text-center shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center text-xs shadow-sm mb-2">
                  EPS
                </div>
                <span className="text-xs font-bold text-slate-800">Encapsulated</span>
                <span className="text-[10px] text-slate-400">(EPS)</span>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 flex flex-col items-center text-center shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-rose-600 text-white font-bold flex items-center justify-center text-xs shadow-sm mb-2">
                  PDF
                </div>
                <span className="text-xs font-bold text-slate-800">Print Ready</span>
                <span className="text-[10px] text-slate-400">PDF</span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col items-center text-center shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-sm mb-2">
                  PNG
                </div>
                <span className="text-xs font-bold text-slate-800">High-Resolution</span>
                <span className="text-[10px] text-slate-400">PNG</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex flex-col items-center text-center shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-600 font-medium flex items-center justify-center text-[10px] mb-2">
                  + More
                </div>
                <span className="text-xs font-bold text-slate-800">Other Formats</span>
                <span className="text-[10px] text-slate-400">Available</span>
              </div>

            </div>
          </div>

          {/* Column 3: One Vector File, Many Possibilities */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                Perfect for Multiple Uses
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                One Vector File, Many Possibilities
              </h3>

              {/* Checklist */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600">Print on any size without losing quality</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600">Use in web, social media and digital platforms</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600">Edit colors, text and shapes easily</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600">Suitable for professional and commercial use</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600">Ready for merchandise, packaging, signage and more</span>
                </div>
              </div>
            </div>

            {/* Mockup Preview Item Row (T-shirt, Mug, Cap) */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-around gap-2">
              <div className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center p-2 shadow-sm text-white text-[10px] font-bold">
                T-SHIRT
              </div>
              <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center p-2 shadow-sm text-slate-800 text-[10px] font-bold">
                MUG
              </div>
              <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center p-2 shadow-sm text-white text-[10px] font-bold">
                CAP
              </div>
            </div>

          </div>

        </div>

        {}
        <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl text-white relative overflow-hidden">
          {/* Background Decorative Glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* CTA Text & Buttons */}
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-500/30 inline-block">
                Ready to Get Started?
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Send Your Image and Get a High-Quality Vector File
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                We are ready to help you with your project. Get clean, accurate and fully editable vector files for any type of image.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 transition-all flex items-center gap-2 text-sm">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-700/80 transition-all flex items-center gap-2 text-sm shadow-md">
                  <Play className="w-4 h-4 fill-white" /> View Our Portfolio
                </button>
              </div>
            </div>

            {/* Laptop & Workspace Graphic Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md bg-slate-800/90 rounded-2xl p-3 border border-slate-700/80 shadow-2xl backdrop-blur-sm">
                {/* Laptop Screen mockup */}
                <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 flex flex-col items-center">
                  <div className="w-full flex items-center justify-between mb-2 px-1">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">vector_tiger_final.ai</span>
                  </div>

                  {/* Vector Art Preview on Laptop */}
                  <div className="w-full h-36 bg-slate-900 rounded-lg flex items-center justify-center p-2 border border-slate-800/50 relative overflow-hidden">
                    <svg className="w-28 h-28 drop-shadow-lg" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="#f97316" />
                      <path d="M25,35 Q50,20 75,35 Q80,65 50,85 Q20,65 25,35 Z" fill="#ea580c" />
                      <circle cx="38" cy="48" r="6" fill="#fbbf24" />
                      <circle cx="38" cy="48" r="2.5" fill="#0f172a" />
                      <circle cx="63" cy="48" r="6" fill="#fbbf24" />
                      <circle cx="63" cy="48" r="2.5" fill="#0f172a" />
                      <path d="M42,65 Q50,72 58,65 Q50,78 42,65 Z" fill="#0f172a" />
                    </svg>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="mt-2 mx-auto w-24 h-1.5 bg-slate-700 rounded-full"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}