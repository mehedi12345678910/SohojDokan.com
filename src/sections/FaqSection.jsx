import React, { useState } from 'react';
import { 
  HelpCircle, 
  FileText, 
  FolderDown, 
  DollarSign, 
  Clock, 
  RotateCcw, 
  ShoppingCart, 
  Settings, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Headphones,
  Mail
} from 'lucide-react';

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState('All Questions');
  const [openIndex, setOpenIndex] = useState(0); // First item open by default like in image

  const categories = [
    { name: 'All Questions', icon: HelpCircle },
    { name: 'General', icon: FileText },
    { name: 'File & Format', icon: FolderDown },
    { name: 'Pricing & Payment', icon: DollarSign },
    { name: 'Turnaround Time', icon: Clock },
    { name: 'Revisions', icon: RotateCcw },
    { name: 'Orders', icon: ShoppingCart },
    { name: 'Technical', icon: Settings },
  ];

  const faqList = [
    {
      num: '01',
      question: 'What is vector tracing?',
      answer: 'Vector tracing is the process of converting a raster image (like JPG, PNG or low-resolution image) into a clean, scalable vector file. Vector files can be resized to any size without losing quality, making them perfect for logos, printing, t-shirt designs, illustrations and more.'
    },
    {
      num: '02',
      question: 'What file formats will I receive?',
      answer: 'You will receive fully editable vector files in all major industry-standard formats including AI, EPS, SVG, PDF, and high-resolution PNG.'
    },
    {
      num: '03',
      question: 'How long does it take to complete an order?',
      answer: 'Most projects are completed and delivered within 24 to 48 hours depending on the complexity of the image. Simple images can be done in 6-12 hours.'
    },
    {
      num: '04',
      question: 'How much does vector tracing cost?',
      answer: 'Our pricing depends on the complexity of the artwork. Simple logos start at affordable rates, while detailed illustrations are custom quoted.'
    },
    {
      num: '05',
      question: 'Do you offer revisions?',
      answer: 'Yes! We offer unlimited revisions until you are 100% satisfied with the traced vector result.'
    },
    {
      num: '06',
      question: 'What types of images can you trace?',
      answer: 'We can trace logos, sketches, raster photos, product images, illustrations, t-shirt designs, and embroidery patterns.'
    },
    {
      num: '07',
      question: 'Will the traced file look exactly like my original image?',
      answer: 'Yes, our expert designers manually trace your image to match your original details precisely while smoothing out imperfections and jagged edges.'
    },
    {
      num: '08',
      question: 'Is my image safe and confidential?',
      answer: 'Absolute privacy is guaranteed. Your files are handled securely and never shared or used publicly without your permission.'
    },
    {
      num: '09',
      question: 'Can you work with low-quality or blurry images?',
      answer: 'Yes, that is our specialty! We regularly convert blurry screenshots, low-res JPEGs, and napkin sketches into crystal-clear vector files.'
    },
    {
      num: '10',
      question: 'Do you offer bulk discounts?',
      answer: 'Yes, we offer special discount rates for agencies or clients with large batches of images to trace.'
    },
    {
      num: '11',
      question: 'How do I place an order?',
      answer: 'Simply upload your image through our quote form, share your requirements, and our team will get started right away.'
    },
    {
      num: '12',
      question: 'What if I\'m not satisfied with the result?',
      answer: 'We work closely with you through revisions. If you are still not satisfied, we ensure proper resolution or support.'
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Category Horizontal Scroll Bar */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.name;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Layout: Sidebar + Accordion List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Got questions about our vector tracing service? Browse through our FAQs or reach out directly.
              </p>

              {/* Sidebar Navigation List */}
              <div className="space-y-1 pt-2">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  const isActive = activeTab === cat.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(cat.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition ${
                        isActive 
                          ? 'bg-blue-50 text-blue-600 border border-blue-100' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span>{cat.name}</span>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Still Have a Question Card */}
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6 rounded-3xl border border-emerald-100 shadow-sm space-y-4 relative overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-slate-900">Still Have a Question?</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Can't find the answer you're looking for? Our team is here to help.
                </p>
              </div>
              <a 
                href="#contact" 
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Accordion List Column (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            {faqList.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden shadow-sm ${
                    isOpen ? 'border-blue-500 ring-1 ring-blue-500/20' : 'border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                        isOpen ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {faq.num}
                      </span>
                      <span className={`text-sm font-extrabold ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                      isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Dark CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-slate-800">
          <div className="space-y-3 z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
              Still Have Questions?
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              We're Here to Help!
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Get in touch with us and we'll be happy to assist you with any questions about our vector tracing service.
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
              href="/contact" 
              className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white font-medium text-sm border border-slate-700 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-blue-400" /> Contact Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}