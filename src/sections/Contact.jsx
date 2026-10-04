import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  UploadCloud, 
  Send, 
  PhoneCall, 
  Zap, 
  ShieldCheck, 
  Lock, 
  Headphones, 
  ArrowRight, 
  Play 
} from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    deliveryTime: '',
    details: '',
    agreePrivacy: false,
    agreeUpdates: false
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Quote request sent successfully!");
  };

  return (
    <section id="quote" className="py-16 px-4 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Main Grid: Contact Info & Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Information (4 cols) */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Contact Information</h3>
              <p className="text-sm text-slate-500 mt-1">
                Feel free to reach us directly or use the form and we'll get back to you soon.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</h4>
                    <a href="mailto:info@vectortracepro.com" className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition">
                      info@vectortracepro.com
                    </a>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy("info@vectortracepro.com", "email")}
                  className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Call / WhatsApp */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call / WhatsApp</h4>
                    <a href="tel:+447123456789" className="text-sm font-semibold text-slate-900 hover:text-emerald-600 transition">
                      +44 7123 456789
                    </a>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy("+44 7123 456789", "phone")}
                  className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Location</h4>
                  <p className="text-sm font-semibold text-slate-900">London, United Kingdom</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Hours</h4>
                  <p className="text-sm font-semibold text-slate-900">Mon – Fri: 9:00 AM – 6:00 PM (GMT)</p>
                  <p className="text-xs text-slate-500 mt-0.5">Sat – Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Mockup Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-44 flex flex-col justify-end p-4">
              {/* Background illustrative overlay */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              <div className="relative z-10 flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg w-fit shadow-sm mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">London, UK</span>
              </div>

              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="relative z-10 w-full py-2.5 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold rounded-xl text-center shadow-sm transition border border-slate-200"
              >
                View on Google Maps →
              </a>
            </div>

          </div>

          {/* Right Column: Get a Free Quote Form (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
                Free Quote
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Get a Free Quote</h3>
              <p className="text-sm text-slate-500 mt-1">
                Fill out the form below and attach your image. The more details you provide, the more accurate quote we can give you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="John Smith" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition bg-slate-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="you@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Row 2: Project Type & Delivery Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="projectType" 
                    required 
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition bg-slate-50/50 text-slate-600"
                  >
                    <option value="">Select project type</option>
                    <option value="Logo Tracing">Logo Tracing (£10)</option>
                    <option value="Illustration Vector">Illustration Vector (£20)</option>
                    <option value="Complex Artwork">Complex Artwork (£35)</option>
                    <option value="Bulk / Custom">Bulk / Custom (£50+)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Expected Delivery Time <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="deliveryTime" 
                    required 
                    value={formData.deliveryTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition bg-slate-50/50 text-slate-600"
                  >
                    <option value="">Select timeline</option>
                    <option value="Express (12 Hours)">Express (12 Hours)</option>
                    <option value="Standard (1-2 Days)">Standard (1-2 Days)</option>
                    <option value="Flexible (3-5 Days)">Flexible (3-5 Days)</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Project Details
                </label>
                <textarea 
                  name="details" 
                  rows="4" 
                  placeholder="Tell us about your project (e.g. logo, illustration, t-shirt design, number of images, any special requirements, etc.)"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition bg-slate-50/50 resize-none"
                ></textarea>
              </div>

              {/* Upload Your Image Box & Accepted Formats */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50">
                <div className="md:col-span-7 text-center md:text-left space-y-2">
                  <div className="flex justify-center md:justify-start">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Drag & drop your files here or click to browse</h4>
                    <p className="text-xs text-slate-500 mt-0.5">You can upload JPG, PNG, PDF or other formats (Max 10MB each)</p>
                  </div>
                </div>

                <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Accepted File Formats</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['JPG', 'PNG', 'PDF', 'AI', 'SVG', 'EPS'].map((fmt, idx) => {
                      const colors = {
                        JPG: 'bg-blue-600 text-white',
                        PNG: 'bg-emerald-600 text-white',
                        PDF: 'bg-red-600 text-white',
                        AI: 'bg-orange-600 text-white',
                        SVG: 'bg-purple-600 text-white',
                        EPS: 'bg-indigo-600 text-white',
                      };
                      return (
                        <span key={idx} className={`text-[10px] font-black px-2.5 py-1 rounded-lg ${colors[fmt] || 'bg-slate-800 text-white'}`}>
                          {fmt}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="agreePrivacy" 
                    required 
                    checked={formData.agreePrivacy}
                    onChange={handleChange}
                    className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-600">
                    I agree to the <a href="#privacy" className="text-blue-600 underline">privacy policy</a>. My files are confidential and will not be shared. <span className="text-red-500">*</span>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="agreeUpdates" 
                    checked={formData.agreeUpdates}
                    onChange={handleChange}
                    className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-600">
                    Send me updates and helpful tips about vector design (optional).
                  </span>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button 
                  type="submit"
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 transition-all"
                >
                  Send My Quote Request <Send className="w-4 h-4" />
                </button>
                <a 
                  href="tel:+447123456789"
                  className="w-full sm:w-auto py-4 px-6 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-blue-600" /> Request a Call Back
                </a>
              </div>

            </form>
          </div>

        </div>

        {/* 4 Feature Cards Banner in Middle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Fast Turnaround</h4>
              <p className="text-xs text-slate-500 mt-0.5">Get your vector files within 6–24 hours, depending on complexity.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">High-Quality Results</h4>
              <p className="text-xs text-slate-500 mt-0.5">Clean, accurate and professionally traced vector files.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">100% Confidential</h4>
              <p className="text-xs text-slate-500 mt-0.5">Your images and files are always safe and never shared with anyone.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Friendly Support</h4>
              <p className="text-xs text-slate-500 mt-0.5">We're always here to answer your questions and make sure you get exactly what you need.</p>
            </div>
          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-blue-800/40">
          <div className="space-y-3 z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-900/60 px-3 py-1 rounded-full border border-blue-700/50">
              Let's Work Together
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              Send us your image now and get a high-quality, editable vector file at a competitive price. Fast, reliable and professional service.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 z-10 shrink-0">
            <a 
              href="#quote" 
              className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-900/50 flex items-center gap-2 transition-all"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="mailto:info@vectortracepro.com" 
              className="px-6 py-3.5 rounded-xl bg-blue-900/40 hover:bg-blue-900 text-white font-medium text-sm border border-blue-700/50 flex items-center gap-2 transition-all backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}