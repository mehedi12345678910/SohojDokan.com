import {
  BadgeCheck, BookOpen, Box, Brush, CircleDot, Gem, Image as ImageIcon,
  Layers3, Package, PenTool, Shirt, Sparkles
} from "lucide-react";

export const categories = [
  "All", "Logo & Branding", "Illustration", "Apparel & Merchandise",
  "Print & Publishing", "Icon & Graphic", "Product & Packaging", "Other"
];

export const services = [
  {
    title: "Logo to Vector",
    icon: Gem,
    description: "Clean and accurate vector tracing for logos, brand identity and business graphics.",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=85",
    category: "Logo & Branding"
  },
  {
    title: "Illustration Tracing",
    icon: Brush,
    description: "Detailed vector tracing for illustrations, artwork and custom designs.",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=85",
    category: "Illustration"
  },
  {
    title: "T-Shirt Design",
    icon: Shirt,
    description: "Convert artwork, sketches or raster images to print-ready vector files for apparel.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    category: "Apparel & Merchandise"
  },
  {
    title: "Book Cover Design",
    icon: BookOpen,
    description: "High-quality vector tracing for book covers, magazines and publishing materials.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=900&q=85",
    category: "Print & Publishing"
  },
  {
    title: "Sketch to Vector",
    icon: PenTool,
    description: "Hand-drawn sketches to clean, professional vector artwork.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
    category: "Illustration"
  },
  {
    title: "Icon & Graphic",
    icon: CircleDot,
    description: "Scalable vector icons, infographics and custom graphics for web and print.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
    category: "Icon & Graphic"
  },
  {
    title: "Product Image",
    icon: Package,
    description: "Vector tracing for product images, packaging, labels and eCommerce listings.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    category: "Product & Packaging"
  },
  {
    title: "Any Other Image",
    icon: Sparkles,
    description: "We can trace any type of image — characters, patterns, artwork, photos and more.",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85",
    category: "Other"
  }
];

export const benefits = [
  "100% Manual Tracing",
  "Clean & Optimized Paths",
  "Accurate Reproduction",
  "Editable Files (AI, SVG, EPS, PDF, PNG)",
  "Print-Ready Quality",
  "Fast Turnaround",
  "All Image Types & Niches",
  "Unlimited Revisions"
];

export const steps = [
  { number: "01", title: "Send Your Image", text: "Upload your image or share the details.", icon: Layers3 },
  { number: "02", title: "We Trace & Recreate", text: "100% manual tracing for clean and accurate vectors.", icon: CircleDot },
  { number: "03", title: "Quality Check", text: "We ensure perfect details and print-ready quality.", icon: BadgeCheck },
  { number: "04", title: "Deliver Files", text: "Receive editable files in your required formats.", icon: Package }
];
