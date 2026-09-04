/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Schedule from './components/Schedule';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="w-full max-w-[480px] mx-auto relative bg-white min-h-screen shadow-2xl flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <FAQ />
      <Location />
      <Schedule />
      <FinalCTA />
      <Footer />
      
      <FloatingWhatsApp />
      <FloatingNav />
    </div>
  );
}
