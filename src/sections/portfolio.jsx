import React, { useState } from 'react';
import { 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Tag, 
  Zap, 
  FileCode2, 
  Printer, 
  Clock 
} from 'lucide-react';

// Portfolio Project Data matching categories
const portfolioProjects = [
  {
    id: 1,
    title: "Logo Vector Tracing",
    category: "Logos & Branding",
    description: "Clean and accurate vector tracing for brand logos.",
    beforeImg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-blue-50 text-blue-600"
  },
  {
    id: 2,
    title: "Illustration Tracing",
    category: "Illustrations",
    description: "Detailed vector tracing for illustrations and artwork.",
    beforeImg: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-purple-50 text-purple-600"
  },
  {
    id: 3,
    title: "T-Shirt Design",
    category: "T-Shirt Designs",
    description: "Convert artwork to print-ready vector files for apparel.",
    beforeImg: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-orange-50 text-orange-600"
  },
  {
    id: 4,
    title: "Book Cover Design",
    category: "Book Covers",
    description: "High-quality vector tracing for publishing materials.",
    beforeImg: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-emerald-50 text-emerald-600"
  },
  {
    id: 5,
    title: "Sketch to Vector",
    category: "Sketch to Vector",
    description: "Hand-drawn sketches to clean vector artwork.",
    beforeImg: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-rose-50 text-rose-600"
  },
  {
    id: 6,
    title: "Icon & Graphic",
    category: "Icons & Graphics",
    description: "Scalable vector icons and custom graphics.",
    beforeImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-teal-50 text-teal-600"
  },
  {
    id: 7,
    title: "Product Image",
    category: "Product Images",
    description: "Vector tracing for product images, packaging and eCommerce.",
    beforeImg: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-amber-50 text-amber-600"
  },
  {
    id: 8,
    title: "Mascot & Character",
    category: "Illustrations",
    description: "Vector tracing for characters and mascots.",
    beforeImg: "https://images.unsplash.com/photo-1563089145-599997674d42?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-violet-50 text-violet-600"
  },
  {
    id: 9,
    title: "Packaging Design",
    category: "Other",
    description: "Vector files for labels, packaging and product branding.",
    beforeImg: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-indigo-50 text-indigo-600"
  },
  {
    id: 10,
    title: "Pattern & Artwork",
    category: "Illustrations",
    description: "Seamless patterns and custom artwork to vector.",
    beforeImg: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-pink-50 text-pink-600"
  },
  {
    id: 11,
    title: "Vehicle Illustration",
    category: "Other",
    description: "High-quality vehicle vector illustrations.",
    beforeImg: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-emerald-50 text-emerald-600"
  },
  {
    id: 12,
    title: "Badge & Emblem",
    category: "Logos & Branding",
    description: "Vector tracing for badges, stickers and emblems.",
    beforeImg: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=300&auto=format&fit=crop&q=60",
    afterImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=60",
    iconBg: "bg-red-50 text-red-600"
  }
];

const categories = [
  "All Projects",
  "Logos & Branding",
  "Illustrations",
  "T-Shirt Designs",
  "Book Covers",
  "Product Images",
  "Icons & Graphics",
  "Sketch to Vector",
  "Other"
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? portfolioProjects
    : portfolioProjects.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 px-4 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Header & Category Filter Pills */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold uppercase tracking-wider border border-blue-100 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Our Recent Masterpieces
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Our Vector Tracing Portfolio
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Browse through our wide range of professional raster-to-vector conversions. Click categories below to filter.
          </p>

          {/* Filter Categories Container */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                  activeCategory === cat 
                    ? "bg-blue-600 text-white shadow-blue-600/20 shadow-md scale-105" 
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Before / After Preview Box */}
                <div className="relative rounded-2xl bg-slate-100 p-3 overflow-hidden border border-slate-100 mb-4 flex items-center justify-between gap-2">
                  
                  {/* Before Image */}
                  <div className="relative w-1/2 aspect-square rounded-xl overflow-hidden bg-white shadow-inner">
                    <img 
                      src={project.beforeImg} 
                      alt="Before" 
                      className="w-full h-full object-cover grayscale contrast-125 opacity-75 group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute bottom-1.5 left-1.5 bg-slate-900/70 backdrop-blur-sm text-white text-[9px] font-extrabold px-2 py-0.5 rounded">
                      Before
                    </span>
                  </div>

                  {/* Conversion Arrow Badge in Middle */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md border-2 border-white">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>

                  {/* After Image */}
                  <div className="relative w-1/2 aspect-square rounded-xl overflow-hidden bg-white shadow-inner">
                    <img 
                      src={project.afterImg} 
                      alt="After" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute bottom-1.5 right-1.5 bg-blue-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded">
                      After
                    </span>
                  </div>
                </div>

                {/* Project Title & Description */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer action */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Manual Vector
                </span>
                <a 
                  href="#quote" 
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition"
                >
                  Order Similar <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Results & Banner Section (Match with Image bottom section) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Trusted Results
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Same Design. Infinite Possibilities.
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              No matter the image type or industry, we can convert your raster image into a clean, editable and high-quality vector file that's ready for print, web or any other use.
            </p>
            <div className="pt-2">
              <a 
                href="#quote" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/20 transition-all"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                <Tag className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">Logos</h4>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">Illustrations</h4>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-2">
                <Printer className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">T-Shirts</h4>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <FileCode2 className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">Product Images</h4>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">Book Covers</h4>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-800">And More...</h4>
            </div>
          </div>

        </div>

        {/* Bottom Dark Call to Action Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-slate-800">
          <div className="space-y-3 z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              Ready to See Your Design in Vector?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Send us your image and get a high-quality vector file, fast, reliable and affordable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
            {/* Format Badges */}
            <div className="flex items-center gap-1.5 bg-slate-900/80 p-2 rounded-2xl border border-slate-800">
              <span className="px-2.5 py-1 bg-orange-600 text-white text-[10px] font-black rounded-lg">AI</span>
              <span className="px-2.5 py-1 bg-blue-600 text-white text-[10px] font-black rounded-lg">SVG</span>
              <span className="px-2.5 py-1 bg-indigo-600 text-white text-[10px] font-black rounded-lg">EPS</span>
              <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-black rounded-lg">PDF</span>
              <span className="px-2.5 py-1 bg-emerald-600 text-white text-[10px] font-black rounded-lg">PNG</span>
            </div>

            <a 
              href="#quote" 
              className="px-6 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all flex items-center gap-2 shrink-0"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}