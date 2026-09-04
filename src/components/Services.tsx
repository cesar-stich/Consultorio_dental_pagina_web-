import { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const services = [
  {
    id: 1,
    title: 'Odontología General',
    desc: 'Prevención y tratamiento integral de problemas de encías, caries y piezas dentales. Limpiezas profundas y curaciones estéticas.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Ortodoncia (Brackets)',
    desc: 'Alineación dental y corrección de mordida tanto en niños como en adultos. Opciones metálicas y estéticas para lograr la sonrisa soñada.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Odontopediatría',
    desc: 'Atención especializada para niños desde temprana edad. Fomentamos hábitos saludables, aplicación de flúor y prevención sin traumas.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Endodoncia',
    desc: 'Tratamiento de conducto para salvar piezas dentales dañadas o infectadas, aliviando el dolor de forma segura y conservando el diente natural.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Estética Dental',
    desc: 'Blanqueamiento dental profesional, carillas y diseño de sonrisa para resaltar la luminosidad, armonía y estética de tus dientes.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Implantes Dentales',
    desc: 'Restauración definitiva y fija de dientes perdidos mediante implantes de titanio. Recupera la función masticatoria completa y la confianza.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop'
  }
];

const successCases = [
  {
    id: 1,
    title: 'Tratamiento de Ortodoncia y Alineación',
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Estética y Blanqueamiento Dental',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Rehabilitación y Diseño de Sonrisa',
    before: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop'
  }
];

export default function Services() {
  const [currentCase, setCurrentCase] = useState(0);

  const nextCase = () => setCurrentCase((prev) => (prev + 1) % successCases.length);
  const prevCase = () => setCurrentCase((prev) => (prev - 1 + successCases.length) % successCases.length);

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto w-full">
        {/* Symmetrical Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nuestros Servicios Odontológicos
          </h2>
        </div>

        {/* 6 Services Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-slate-50 hover:bg-white rounded-3xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-200">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <a
                  href={`https://wa.me/51999654558?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20tratamiento%20de%20${encodeURIComponent(s.title)}%20en%20el%20Consultorio%20Dental%20Se%C3%B1or%20de%20Luren.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200 px-5 py-3 rounded-xl transition-all duration-200 w-full"
                >
                  <WhatsAppIcon size={16} className="fill-current" />
                  <span>Consultar por este tratamiento</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Symmetrical Casos de Éxito Container */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-slate-800">
            {/* Ambient background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Casos de Éxito
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Transformaciones reales de nuestros pacientes (compartidos bajo estricto consentimiento).
              </p>
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden bg-slate-800 border border-white/10 shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentCase * 100}%)` }}
              >
                {successCases.map((c) => (
                  <div key={c.id} className="w-full shrink-0 relative aspect-video flex">
                    {/* Antes */}
                    <div className="w-1/2 relative border-r border-white/20">
                      <img
                        src={c.before}
                        className="w-full h-full object-cover opacity-60 grayscale"
                        alt={`Antes caso ${c.id}`}
                      />
                      <div className="absolute top-3 left-3 bg-black/70 text-[11px] uppercase font-bold px-2.5 py-1 rounded-md text-white backdrop-blur-sm border border-white/10">
                        Antes
                      </div>
                    </div>

                    {/* Después */}
                    <div className="w-1/2 relative">
                      <img
                        src={c.after}
                        className="w-full h-full object-cover"
                        alt={`Después caso ${c.id}`}
                      />
                      <div className="absolute top-3 right-3 bg-blue-600 text-[11px] uppercase font-bold px-2.5 py-1 rounded-md text-white backdrop-blur-sm shadow-md">
                        Después
                      </div>
                    </div>

                    {/* Icono central */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white text-slate-900 rounded-full p-2 shadow-xl border border-slate-200">
                        <ArrowRight size={18} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <button
                onClick={prevCase}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/75 transition-colors z-20 border border-white/20"
                aria-label="Caso anterior"
              >
                <ChevronLeft size={20} strokeWidth={2} />
              </button>
              <button
                onClick={nextCase}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/75 transition-colors z-20 border border-white/20"
                aria-label="Siguiente caso"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>
            </div>

            {/* Title & Dots */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-800">
              <span className="text-xs sm:text-sm text-slate-300 font-medium">
                {successCases[currentCase].title}
              </span>
              <div className="flex items-center gap-2">
                {successCases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentCase(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentCase === i ? 'bg-blue-400 w-6' : 'bg-white/30 w-2 hover:bg-white/50'
                    }`}
                    aria-label={`Ver caso ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
