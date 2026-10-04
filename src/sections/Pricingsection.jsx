import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  PlusCircle, 
  Clock, 
  Mail, 
  MessageCircle, 
  Percent, 
  Play 
} from 'lucide-react';

export default function Pricing() {
  const [billingType, setBillingType] = useState('one-time');

  return (
    <section id="pricingsection" className="bg-slate-50 py-14 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Top Header & Toggle */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold border border-blue-200">
            Our Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Simple Plans for <span className="text-blue-600">Every Project</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            High-quality vector tracing for any type of image. Choose a plan or request a custom quote for complex projects.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex bg-slate-200 p-1.5 rounded-full border border-slate-300 mt-6">
            <button
              onClick={() => setBillingType('one-time')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingType === 'one-time'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              One-Time Project
            </button>
            <button
              onClick={() => setBillingType('bulk')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingType === 'bulk'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bulk / Ongoing
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Basic */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Basic</h3>
                  <p className="text-xs text-slate-500">Simple Images</p>
                </div>
              </div>

              <div className="my-6">
                <span className="text-4xl font-black text-slate-900">£10</span>
                <span className="text-xs text-slate-500 ml-1">per image</span>
                <p className="text-xs text-slate-500 mt-2">Best for simple logos, icons or low-detail images.</p>
              </div>

              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> Simple design / low detail</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> Manual vector tracing</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> Clean and smooth paths</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> High-quality editable files</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> 1-2 days delivery</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> Unlimited revisions</li>
              </ul>
            </div>

            <button className="w-full py-3 px-4 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium flex items-center justify-center gap-2 transition-all">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Standard */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Standard</h3>
                  <p className="text-xs text-slate-500">Moderate Complexity</p>
                </div>
              </div>

              <div className="my-6">
                <span className="text-4xl font-black text-slate-900">£20</span>
                <span className="text-xs text-slate-500 ml-1">per image</span>
                <p className="text-xs text-slate-500 mt-2">Best for detailed logos, illustrations and medium complexity designs.</p>
              </div>

              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-orange-600 mt-1 shrink-0" /> Moderate detail and complexity</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-orange-600 mt-1 shrink-0" /> Manual vector tracing</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-orange-600 mt-1 shrink-0" /> Clean and accurate paths</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-orange-600 mt-1 shrink-0" /> High-quality editable files</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-orange-600 mt-1 shrink-0" /> 2-3 days delivery</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-orange-600 mt-1 shrink-0" /> Unlimited revisions</li>
              </ul>
            </div>

            <button className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-600/20">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Advanced (Most Popular) */}
          <div className="bg-gradient-to-b from-purple-50 to-white rounded-3xl p-6 border-2 border-purple-500 flex flex-col justify-between relative shadow-lg shadow-purple-500/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Advanced</h3>
                  <p className="text-xs text-purple-600">Complex Images</p>
                </div>
              </div>

              <div className="my-6">
                <span className="text-4xl font-black text-slate-900">£35</span>
                <span className="text-xs text-slate-500 ml-1">per image</span>
                <p className="text-xs text-slate-500 mt-2">Best for complex illustrations, t-shirt designs, artwork and more.</p>
              </div>

              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-600 mt-1 shrink-0" /> High detail and complex design</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-600 mt-1 shrink-0" /> Manual vector tracing</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-600 mt-1 shrink-0" /> Precise and clean paths</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-600 mt-1 shrink-0" /> High-quality editable files</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-600 mt-1 shrink-0" /> 3-5 days delivery</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-600 mt-1 shrink-0" /> Unlimited revisions</li>
              </ul>
            </div>

            <button className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-600/20">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 4: Custom / Bulk */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Custom / Bulk</h3>
                  <p className="text-xs text-slate-500">Large or Ongoing Projects</p>
                </div>
              </div>

              <div className="my-6">
                <span className="text-2xl text-slate-400 font-medium">From</span>
                <span className="text-4xl font-black ml-1 text-slate-900">£50</span>
                <p className="text-xs text-slate-500 mt-2">Best for very complex designs, multi-image orders or ongoing work.</p>
              </div>

              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" /> Any level of complexity</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" /> Manual vector tracing</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" /> Clean and optimized files</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" /> All required file formats</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" /> Priority delivery (optional)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" /> Volume discounts available</li>
              </ul>
            </div>

            <button className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Extra Details Grid (File Formats, Add-On Services, Turnaround Time) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* File Formats Included */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-base text-slate-900 mb-1 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" /> File Formats Included
            </h4>
            <p className="text-xs text-slate-500 mb-6">You will receive high-quality, editable vector files in the following formats.</p>
            <div className="grid grid-cols-5 gap-2 text-center">
              {['AI', 'SVG', 'EPS', 'PDF', 'PNG'].map((fmt, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex flex-col items-center justify-center">
                  <span className="font-extrabold text-sm text-blue-600">{fmt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add-On Services */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-base text-slate-900 mb-1 flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-blue-600" /> Add-On Services
            </h4>
            <p className="text-xs text-slate-500 mb-4">Need something extra? We've got you covered.</p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex justify-between items-center py-1 border-b border-slate-100">
                <span>✓ Source file (.AI + EPS + SVG + PDF + PNG)</span>
                <span className="font-semibold text-emerald-600">£0 Included</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-slate-100">
                <span>✓ Color change / variations</span>
                <span className="font-semibold text-slate-900">£5</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-slate-100">
                <span>✓ Extra revision (beyond unlimited)</span>
                <span className="font-semibold text-slate-900">£5</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-slate-100">
                <span>✓ Express delivery (within 12 hours)</span>
                <span className="font-semibold text-slate-900">£10</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>✓ Complex background removal</span>
                <span className="font-semibold text-slate-900">£10+</span>
              </li>
            </ul>
          </div>

          {/* Turnaround Time */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-base text-slate-900 mb-1 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" /> Turnaround Time
            </h4>
            <p className="text-xs text-slate-500 mb-4">We deliver most projects within 24-72 hours.</p>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span>Simple Images</span>
                <span className="font-bold text-blue-600">6-12 Hours</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span>Moderate Complexity</span>
                <span className="font-bold text-blue-600">1-2 Days</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span>Complex Images</span>
                <span className="font-bold text-blue-600">2-5 Days</span>
              </div>
            </div>
          </div>

        </div>

        {/* Custom Quote & Volume Discounts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
          
          {/* Need a Custom Quote */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg text-slate-900">Need a Custom Quote?</h4>
              </div>
              <p className="text-sm text-slate-600">Have a large project, multiple images or a special requirement? Get a personalized quote with the best pricing.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-medium text-sm flex items-center gap-2 transition-all shadow-md">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm flex items-center gap-2 transition-all border border-slate-200">
                <MessageCircle className="w-4 h-4 text-blue-600" /> Contact Us
              </button>
            </div>
          </div>

          {/* Volume Discounts */}
          <div className="flex flex-col justify-between space-y-4 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8 pt-6 lg:pt-0">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <Percent className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg text-slate-900">Volume Discounts</h4>
              </div>
              <p className="text-sm text-slate-600">Get special pricing for bulk orders and ongoing projects.</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">✓ Discounts for 10+ images</li>
              <li className="flex items-center gap-2">✓ Special rates for ongoing work</li>
              <li className="flex items-center gap-2">✓ Dedicated support</li>
              <li className="flex items-center gap-2">✓ Consistent quality & faster turnaround</li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-500/30">
              Ready to Get Started?
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Turn Your Image Into a Perfect Vector Today!
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              Send us your image & get a high-quality, editable vector file. Fast, reliable and affordable.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 z-10 shrink-0">
            <button className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-900/50 flex items-center gap-2 transition-all">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 text-white font-medium text-sm border border-blue-400/30 flex items-center gap-2 transition-all backdrop-blur-sm">
              <Play className="w-4 h-4 fill-white" /> View Our Portfolio
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}