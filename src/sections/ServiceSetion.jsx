import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Image as ImageIcon, 
  Shirt, 
  BookOpen, 
  Edit3, 
  Settings, 
  Box, 
  Smile,
  Upload,
  Cpu,
  CheckCheck,
  Send
} from 'lucide-react';

const ServicesSetion = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { name: 'All', icon: Layers },
    { name: 'Logo & Branding', icon: Sparkles },
    { name: 'Illustration', icon: ImageIcon },
    { name: 'Apparel & Merchandise', icon: Shirt },
    { name: 'Print & Publishing', icon: BookOpen },
    { name: 'Icon & Graphic', icon: Settings },
    { name: 'Product & Packaging', icon: Box },
    { name: 'Other', icon: Smile },
  ];

  const services = [
    {
      id: 1,
      category: 'Logo & Branding',
      title: 'Logo to Vector',
      icon: Sparkles,
      iconBg: 'bg-blue-600',
      beforeImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
      afterImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=150&auto=format&fit=crop&q=80',
      description: 'Clean and accurate vector tracing for logos, brand identity and business graphics.'
    },
    {
      id: 2,
      category: 'Illustration',
      title: 'Illustration Tracing',
      icon: ImageIcon,
      iconBg: 'bg-purple-600',
      beforeImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=150&auto=format&fit=crop&q=80',
      afterImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=150&auto=format&fit=crop&q=80',
      description: 'Detailed vector tracing for illustrations, artwork and custom designs.'
    },
    {
      id: 3,
      category: 'Apparel & Merchandise',
      title: 'T-Shirt Design',
      icon: Shirt,
      iconBg: 'bg-orange-500',
      beforeImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=150&auto=format&fit=crop&q=80',
      afterImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=150&auto=format&fit=crop&q=80',
      description: 'Convert artwork, sketches or raster images to print-ready vector files for apparel.'
    },
    {
      id: 4,
      category: 'Print & Publishing',
      title: 'Book Cover Design',
      icon: BookOpen,
      iconBg: 'bg-emerald-600',
      beforeImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&auto=format&fit=crop&q=80',
      afterImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=150&auto=format&fit=crop&q=80',
      description: 'High-quality vector tracing for book covers, magazines and publishing materials.'
    },
    {
      id: 5,
      category: 'Illustration',
      title: 'Sketch to Vector',
      icon: Edit3,
      iconBg: 'bg-pink-600',
      beforeImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=150&auto=format&fit=crop&q=80',
      afterImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=150&auto=format&fit=crop&q=80',
      description: 'Hand-drawn sketches to clean, professional vector artwork.'
    },
    {
      id: 6,
      category: 'Icon & Graphic',
      title: 'Icon & Graphic',
      icon: Settings,
      iconBg: 'bg-cyan-500',
      beforeImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
      afterImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=150&auto=format&fit=crop&q=80',
      description: 'Scalable vector icons, infographics and custom graphics for web and print.'
    },
    {
      id: 7,
      category: 'Product & Packaging',
      title: 'Product Image',
      icon: Box,
      iconBg: 'bg-amber-500',
      beforeImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&auto=format&fit=crop&q=80',
      afterImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=150&auto=format&fit=crop&q=80',
      description: 'Vector tracing for product images, packaging, labels and eCommerce listings.'
    },
    {
      id: 8,
      category: 'Other',
      title: 'Any Other Image',
      icon: Smile,
      iconBg: 'bg-purple-500',
      beforeImage: 'https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=150&auto=format&fit=crop&q=80',
      afterImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=150&auto=format&fit=crop&q=80',
      description: 'We can trace any type of image — characters, patterns, artwork, photos and more.'
    }
  ];

  const filteredServices = activeTab === 'All' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Vector Tracing Services
            </h1>
            <p className="text-slate-500 mt-1 text-sm sm:text-base">
              We work with all types of images and illustrator, delivering clean, accurate and fully editable vector files.
            </p>
          </div>
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search size={18} />
            </span>
            <input 
              type="text" 
              placeholder="Find a service..." 
              className="input input-bordered w-full pl-10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            const isActive = activeTab === cat.name;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all shadow-sm ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-blue-200' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <IconComponent size={16} className={isActive ? 'text-white' : 'text-blue-500'} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredServices.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <div key={service.id} className="card bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${service.iconBg} p-2.5 rounded-xl text-white shadow-sm`}>
                      <ServiceIcon size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800 text-base">{service.title}</h3>
                  </div>

                  {/* Before / After Preview Box */}
                  <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-100 flex items-center justify-between gap-2">
                    <div className="text-center w-1/2">
                      <div className="bg-white rounded-lg p-2 shadow-sm mb-1 h-20 flex items-center justify-center overflow-hidden border border-slate-100">
                        <img src={service.beforeImage} alt="Before" className="object-cover h-full w-full rounded" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full">Before</span>
                    </div>
                    <div className="text-slate-400 font-bold">vs</div>
                    <div className="text-center w-1/2">
                      <div className="bg-white rounded-lg p-2 shadow-sm mb-1 h-20 flex items-center justify-center overflow-hidden border border-blue-100">
                        <img src={service.afterImage} alt="After" className="object-cover h-full w-full rounded" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-white bg-blue-600 px-2 py-0.5 rounded-full">After</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div>
                  <a href="#learn-more" className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-xs sm:text-sm hover:text-blue-700 transition-colors">
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 rounded-3xl p-6 sm:p-10 mb-16 border border-blue-100 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 z-10">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-100/80 px-3 py-1 rounded-full mb-3 inline-block">
                Why Choose Our Services
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                High-Quality Vectors for Every Project
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6">
                We combine skill, experience and attention to detail to deliver vector files that are clean, accurate and ready for any use.
              </p>
              <button className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg shadow-blue-200 px-6 normal-case text-sm">
                Get a Free Quote <ArrowRight size={16} />
              </button>
            </div>

            {/* Middle Feature List */}
            <div className="lg:col-span-3 z-10 space-y-3">
              {[
                "100% Manual Tracing",
                "Clean & Optimized Paths",
                "Accurate Reproduction",
                "Editable Files (AI, SVG, EPS, PDF, PNG)",
                "Print-Ready Quality",
                "Fast Turnaround",
                "All Image Types & Niches",
                "Unlimited Revisions"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-700 text-xs sm:text-sm font-medium">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Right Graphic Mockup */}
            <div className="lg:col-span-3 flex justify-center relative">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white max-w-xs w-full">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-slate-400">Turn Any Image Into Clean, Editable Vector</span>
                  <div className="badge badge-error text-white font-bold text-[10px]">AI</div>
                </div>
                <div className="bg-slate-900 rounded-xl p-3 text-white flex items-center justify-center relative overflow-hidden h-36">
                  <img 
                    src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&auto=format&fit=crop&q=80" 
                    alt="Vector artwork" 
                    className="w-full h-full object-cover rounded-lg opacity-90"
                  />
                  <div className="absolute bottom-2 right-2 bg-blue-600 p-1.5 rounded-lg shadow">
                    <Edit3 size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Process Section */}
        <div className="text-center">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-2 inline-block">
            Our Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            A Simple 4-Step Process
          </h2>
          <p className="text-slate-500 text-sm mb-10 max-w-lg mx-auto">
            From your image to final vector files, we make the process smooth and hassle-free.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Send Your Image", desc: "Upload your image or share the brief.", icon: Upload, bg: "bg-blue-600" },
              { step: "02", title: "We Trace & Recreate", desc: "100% manual tracing for clean and precise vectors.", icon: Cpu, bg: "bg-blue-500" },
              { step: "03", title: "Quality Check", desc: "We ensure perfect details and print-ready quality.", icon: Settings, bg: "bg-purple-600" },
              { step: "04", title: "Deliver Files", desc: "Receive editable files in your required formats.", icon: Send, bg: "bg-emerald-500" }
            ].map((p, i) => {
              const StepIcon = p.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center relative flex flex-col items-center">
                  <div className={`${p.bg} text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-md mb-4`}>
                    <StepIcon size={22} />
                  </div>
                  <span className="text-xs font-bold text-blue-600 mb-1">STEP {p.step}</span>
                  <h3 className="font-bold text-slate-800 text-base mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesSetion;