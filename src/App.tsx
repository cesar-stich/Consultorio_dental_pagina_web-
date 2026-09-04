/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
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
    <div className="w-full relative bg-white min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="w-full flex-grow">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <FAQ />
        <Location />
        <Schedule />
        <FinalCTA />
      </main>
      <Footer />

      <FloatingWhatsApp />
      <FloatingNav />
    </div>
  );
}
