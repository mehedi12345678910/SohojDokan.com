import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import Process from "./sections/Process";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Quote from "./sections/Quote";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Pricing />
        <FAQ />
        <Quote />
      </main>
      <Footer />
    </>
  );
}