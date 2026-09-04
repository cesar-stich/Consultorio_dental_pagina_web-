import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const placeholders = [
    { id: 1, url: 'https://images.unsplash.com/photo-1598256989800-fea5f26ebdfa?q=80&w=600&auto=format&fit=crop' },
    { id: 2, url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop' },
    { id: 3, url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % placeholders.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + placeholders.length) % placeholders.length);

  return (
    <section className="py-12 px-6 bg-white overflow-hidden">
      <div className="mb-6">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Instalaciones</h2>
        <h3 className="text-2xl font-bold text-slate-900">Nuestra Clínica</h3>
      </div>
      
      <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
        {/* Slider Track */}
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {placeholders.map((p) => (
            <div key={p.id} className="w-full shrink-0 relative aspect-[4/5] sm:aspect-square">
              <img 
                src={p.url} 
                alt={`Instalación ${p.id} (Reemplazar por Supabase)`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-[11px] text-center py-2 px-3 rounded-lg text-slate-600 font-medium shadow-sm border border-slate-200/50">
                Reemplazar por Supabase (Imagen {p.id})
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Navigation */}
        <button 
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-slate-100 hover:bg-white transition-all active:scale-95"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        
        <button 
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-slate-100 hover:bg-white transition-all active:scale-95"
          aria-label="Siguiente imagen"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 pointer-events-none">
          {placeholders.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'bg-blue-600 w-4' : 'bg-white/70 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
