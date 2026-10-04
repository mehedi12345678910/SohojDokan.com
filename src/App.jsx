// import React from 'react';
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Hero from "./sections/Hero";
// import Services from "./sections/Services";
// import WhyUs from "./sections/WhyUs";
// import Process from "./sections/Process";
// import Pricing from "./sections/Pricing";
// import FAQ from "./sections/FAQ";
// import Quote from "./sections/Quote";
// import Pricingsection from './sections/Pricingsection';

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Hero />
//         <Services />
//         <WhyUs />
//         <Process />
//         <Pricing />
//         <FAQ />
//         <Quote />
//         <Pricingsection/>
//       </main>
//       <Footer />
//     </>
//   );
// }



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import Process from "./sections/Process";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Quote from "./sections/Quote";
import Pricingsection from './sections/pricingsection';
// Home Page Component (Jekhane shob section thakbe, chahile Pricing bad dite paren)
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Pricing />
      <FAQ />
      <Quote />
      <Pricingsection/>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Alada Pricing Page */}
          <Route path="/pricingsection" element={<div className=""><Pricingsection /></div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}