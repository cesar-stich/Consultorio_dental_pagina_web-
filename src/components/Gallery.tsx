import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const installations = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % installations.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + installations.length) % installations.length);

  return (
    <section id="instalaciones" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto w-full">
        {/* Symmetrical Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100 mb-3">
            Instalaciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conoce Nuestra Clínica
          </h2>
        </div>

        {/* Symmetrical Carousel Card - Pure Image Slider */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-lg">
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {installations.map((item) => (
              <div key={item.id} className="w-full shrink-0 relative aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src={item.url}
                  alt={`Instalación dental ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-lg hover:bg-white transition-all active:scale-95 cursor-pointer"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-lg hover:bg-white transition-all active:scale-95 cursor-pointer"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>

          {/* Symmetrical Slide Indicators */}
          <div className="absolute top-4 right-4 bg-slate-950/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold border border-white/10">
            {currentIndex + 1} / {installations.length}
          </div>

          {/* Bottom Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {installations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-white w-6' : 'bg-white/40 w-2 hover:bg-white/70'
                }`}
                aria-label={`Ver imagen ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
