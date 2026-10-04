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



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Hero from "./sections/Hero";
// import Services from "./sections/Services";
// import WhyUs from "./sections/WhyUs";
// import Process from "./sections/Process";
// import Pricing from "./sections/Pricing";
// import FAQ from "./sections/FAQ";
// import Quote from "./sections/Quote";
// import Pricingsection from './sections/pricingsection';
// import Contact from './sections/Contact';
// // Home Page Component (Jekhane shob section thakbe, chahile Pricing bad dite paren)
// function Home() {
//   return (
//     <>
//       <Hero />
//       <Services />
//       <WhyUs />
//       <Process />
//       <Pricing />
//       <FAQ />
//       <Quote />
//       <Pricingsection/>
//       <Contact/>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <main>
//         <Routes>
//           {/* Main Home Page */}
//           <Route path="/" element={<Home />} />
          
//           {/* Alada Pricing Page */}
//           <Route path="/pricingsection" element={<div className=""><Pricingsection /></div>} />
//           <Route path="/contact" element={<div className=""><Contact /></div>} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
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
import FAQ from "./sections/FAQ";
import Quote from "./sections/Quote";
import Pricingsection from './sections/pricingsection';
import Contact from './sections/Contact';

// Home Page (Ekhane Pricingsection ebong Contact thakbe na, egula alada page-e thakbe)
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <FAQ />
      <Quote />
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
          
          {/* Alada Pricing Section Page */}
          <Route path="/pricingsection" element={<div className="pt-4"><Pricingsection /></div>} />
          
          {/* Alada Contact Section Page */}
          <Route path="/contact" element={<div className="pt-4"><Contact /></div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}