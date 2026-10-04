import React from 'react';
import { 
  Upload, 
  PenTool, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Clock, 
  Zap, 
  Sparkles, 
  FileCheck 
} from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-16 px-4 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Header: Our 4-Step Process */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold uppercase tracking-wider border border-blue-100 shadow-sm">
            Our 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            A Simple Process, Professional Results
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            From your image to final vector files, we make the process smooth, transparent and hassle-free.
          </p>
        </div>

        {/* 4 Steps Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm relative flex flex-col justify-between group hover:shadow-lg transition">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-600/20">
                  01
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step One</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Send Your Image</h3>
              
              {/* Mini graphic illustration box */}
              <div className="bg-blue-50/60 rounded-2xl p-4 border border-blue-100/60 flex flex-col items-center justify-center text-center space-y-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-xs font-bold text-slate-600">🖼️</div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white shadow-md flex items-center justify-center">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-xs font-bold text-slate-600">🎨</div>
                </div>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-sm">
                  Upload Image
                </button>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Upload your image or share the details. You can send any type of image – logo, illustration, photo, sketch, etc.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm relative flex flex-col justify-between group hover:shadow-lg transition">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-orange-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-orange-600/20">
                  02
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step Two</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">We Trace & Recreate</h3>
              
              {/* Mini graphic illustration box */}
              <div className="bg-orange-50/60 rounded-2xl p-4 border border-orange-100/60 flex flex-col items-center justify-center text-center space-y-3 h-[116px]">
                <div className="flex items-center justify-center gap-3 text-orange-600">
                  <PenTool className="w-8 h-8" />
                  <span className="text-xl">✏️</span>
                </div>
                <div className="w-full bg-orange-200/60 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-orange-600 h-full w-3/4 rounded-full"></div>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Our experts manually trace your image with precision, recreating clean and accurate vector paths.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm relative flex flex-col justify-between group hover:shadow-lg transition">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-emerald-600/20">
                  03
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step Three</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Quality Check</h3>
              
              {/* Mini graphic illustration box */}
              <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100/60 flex items-center justify-center gap-3 h-[116px]">
                <div className="text-3xl">🐯</div>
                <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-md">
                  <Search className="w-6 h-6" />
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                We carefully review every detail, ensuring smooth paths, correct shapes and print-ready quality.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm relative flex flex-col justify-between group hover:shadow-lg transition">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-purple-600/20">
                  04
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step Four</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Deliver Final Files</h3>
              
              {/* Mini format badges box */}
              <div className="bg-purple-50/60 rounded-2xl p-4 border border-purple-100/60 flex flex-wrap gap-2 items-center justify-center h-[116px]">
                <span className="px-2.5 py-1 bg-amber-600 text-white font-black text-[10px] rounded-lg">AI</span>
                <span className="px-2.5 py-1 bg-blue-600 text-white font-black text-[10px] rounded-lg">SVG</span>
                <span className="px-2.5 py-1 bg-purple-600 text-white font-black text-[10px] rounded-lg">EPS</span>
                <span className="px-2.5 py-1 bg-red-600 text-white font-black text-[10px] rounded-lg">PDF</span>
                <span className="px-2.5 py-1 bg-emerald-600 text-white font-black text-[10px] rounded-lg">PNG</span>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                You will receive high-quality, editable vector files in your required formats, ready for print, web or any other use.
              </p>
            </div>
          </div>

        </div>

        {/* See the Transformation Banner (Step by Step Visual) */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              See the Transformation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              From Raster to Vector – Step by Step
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Here's a real example showing how we convert a low-resolution image into a clean, detailed vector.
            </p>
          </div>

          {/* 4 Steps Grid with Tiger Illustrations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            
            {/* Stage 1 */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center space-y-3 relative">
              <span className="text-xs font-extrabold text-slate-600 block">1. Original Image (Raster)</span>
              <div className="w-28 h-28 mx-auto rounded-xl overflow-hidden shadow-md bg-white border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300&auto=format&fit=crop&q=60" 
                  alt="Original Raster Tiger" 
                  className="w-full h-full object-cover filter contrast-125"
                />
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center space-y-3 relative">
              <span className="text-xs font-extrabold text-slate-600 block">2. Manual Tracing</span>
              <div className="w-28 h-28 mx-auto rounded-xl overflow-hidden shadow-md bg-white border border-slate-200 flex items-center justify-center p-2">
                <span className="text-5xl">🖌️</span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center space-y-3 relative">
              <span className="text-xs font-extrabold text-slate-600 block">3. Clean Vector Paths</span>
              <div className="w-28 h-28 mx-auto rounded-xl overflow-hidden shadow-md bg-white border border-slate-200 flex items-center justify-center p-2">
                <span className="text-5xl">📐</span>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center space-y-3 relative">
              <span className="text-xs font-extrabold text-slate-600 block">4. Final Vector (Editable File)</span>
              <div className="w-28 h-28 mx-auto rounded-xl overflow-hidden shadow-md bg-white border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=60" 
                  alt="Final Vector Tiger" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 3 Bottom Cards: Checklist, File Formats, Fast & Reliable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Checklist */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900">Our Quality Checklist</h4>
                <p className="text-xs text-slate-500">We check every file carefully to make sure you get the best results.</p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {[
                "100% manual tracing (no auto-trace)",
                "Clean and smooth vector paths",
                "Accurate shapes and details",
                "Properly organized layers",
                "Editable and scalable files",
                "Print-ready quality (300 DPI)",
                "Color matching (if required)",
                "Final review before delivery"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: File Formats We Deliver */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-slate-900">File Formats We Deliver</h4>
                  <p className="text-xs text-slate-500">We provide fully editable vector files in all major formats.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
                <span className="w-10 h-10 rounded-xl bg-amber-600 text-white font-black text-xs flex items-center justify-center mb-2 shadow-md">AI</span>
                <span className="text-[11px] font-bold text-slate-800">Adobe Illustrator</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
                <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center mb-2 shadow-md">SVG</span>
                <span className="text-[11px] font-bold text-slate-800">Scalable Vector</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
                <span className="w-10 h-10 rounded-xl bg-purple-600 text-white font-black text-xs flex items-center justify-center mb-2 shadow-md">EPS</span>
                <span className="text-[11px] font-bold text-slate-800">Encapsulated PostScript</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
                <span className="w-10 h-10 rounded-xl bg-red-600 text-white font-black text-xs flex items-center justify-center mb-2 shadow-md">PDF</span>
                <span className="text-[11px] font-bold text-slate-800">Print Ready PDF</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm col-span-2">
                <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center mb-2 shadow-md">PNG</span>
                <span className="text-[11px] font-bold text-slate-800">High-Resolution PNG</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-medium text-center">
              Compatible with Adobe Illustrator, CorelDRAW, Inkscape, etc.
            </div>
          </div>

          {/* Card 3: Fast & Reliable */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900">Fast & Reliable</h4>
                <p className="text-xs text-slate-500">Most projects are completed within 24–48 hours, depending on complexity.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-extrabold text-slate-900">Simple Images</h5>
                  <p className="text-xs text-orange-700 font-bold mt-0.5">6–12 Hours</p>
                </div>
                <Clock className="w-5 h-5 text-orange-600" />
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-extrabold text-slate-900">Moderate Complexity</h5>
                  <p className="text-xs text-blue-700 font-bold mt-0.5">12–24 Hours</p>
                </div>
                <Clock className="w-5 h-5 text-blue-600" />
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-extrabold text-slate-900">Complex Projects</h5>
                  <p className="text-xs text-purple-700 font-bold mt-0.5">24–48 Hours</p>
                </div>
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Dark CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-slate-800">
          <div className="space-y-3 z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
              Ready to Get Started?
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              Let's Turn Your Image Into a Perfect Vector
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Send us your image today and get a high-quality, editable vector file. Fast, reliable and affordable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 shrink-0">
            <a 
              href="#quote" 
              className="px-6 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all flex items-center gap-2"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#portfolio" 
              className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white font-medium text-sm border border-slate-700 transition-all"
            >
              View Our Portfolio
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}