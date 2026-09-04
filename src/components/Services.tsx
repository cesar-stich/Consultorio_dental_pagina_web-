import { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const services = [
  {
    id: 1,
    title: 'Odontología General',
    desc: 'Área especializada en resolver problemas de la boca, dientes y áreas afines. Desde limpiezas dentales hasta restauraciones simples, para mantener una sonrisa sana.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Ortodoncia (Brackets)',
    desc: 'Especialidad que se ocupa de prevenir y tratar las maloclusiones, anomalías de crecimiento maxilar y mandibular y de alinear los dientes.',
    image: 'https://images.unsplash.com/photo-1598256989800-fea5f26ebdfa?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Odontopediatría',
    desc: 'Atención enfocada en pacientes desde su nacimiento hasta la edad adulta. Previene caries, aplica flúor y guía el correcto desarrollo dental.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Endodoncia',
    desc: 'Tratamiento comúnmente conocido para "matar el nervio". Consiste en eliminar la parte profunda del diente lesionado o infectado.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Estética Dental',
    desc: 'Se ocupa de problemas relacionados con la armonía bucal, con el objetivo de conseguir la sonrisa perfecta mediante blanqueamientos y carillas.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Implantes Dentales',
    desc: 'Raíz artificial de titanio que reemplaza un diente perdido. Recupera la función masticatoria y la estética con una solución permanente.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop'
  }
];

const successCases = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1598256989800-fea5f26ebdfa?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop"
  }
];

export default function Services() {
  const [currentCase, setCurrentCase] = useState(0);

  const nextCase = () => setCurrentCase((prev) => (prev + 1) % successCases.length);
  const prevCase = () => setCurrentCase((prev) => (prev - 1 + successCases.length) % successCases.length);

  return (
    <section id="servicios" className="py-12 px-6 bg-white border-y border-slate-100">
      <div className="mb-8">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Tratamientos</h2>
        <h3 className="text-2xl font-bold text-slate-900">Nuestros Servicios</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((s) => (
          <div key={s.id} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/10 z-10" />
              <img 
                src={s.image} 
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow items-center text-center">
              <h4 className="font-bold text-slate-900 text-lg mb-3">{s.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">{s.desc}</p>
              
              <a 
                href={`https://wa.me/51999654558?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20cita%20en%20el%20Consultorio%20Dental%20Se%C3%B1or%20de%20Luren.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full transition-colors w-full justify-center shadow-sm"
              >
                ¡Me interesa!
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Casos de éxito (Antes y Después) */}
      <div className="bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-xl font-bold mb-2 text-white">Casos de Éxito</h4>
          <p className="text-slate-400 text-sm mb-6 max-w-[280px]">Resultados reales de nuestros pacientes (compartidos con su consentimiento).</p>
          
          <div className="relative w-full rounded-2xl overflow-hidden bg-slate-800 border border-white/10 shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentCase * 100}%)` }}
            >
              {successCases.map((c, i) => (
                <div key={c.id} className="w-full shrink-0 relative aspect-video flex">
                  {/* Antes */}
                  <div className="w-1/2 relative border-r border-white/20">
                    <img src={c.before} className="w-full h-full object-cover opacity-60 grayscale" alt={`Antes caso ${c.id}`} />
                    <div className="absolute top-2 left-2 bg-black/60 text-[10px] uppercase font-bold px-2 py-0.5 rounded text-white backdrop-blur-sm">Antes</div>
                  </div>
                  
                  {/* Después */}
                  <div className="w-1/2 relative">
                    <img src={c.after} className="w-full h-full object-cover" alt={`Después caso ${c.id}`} />
                    <div className="absolute top-2 right-2 bg-blue-600/90 text-[10px] uppercase font-bold px-2 py-0.5 rounded text-white backdrop-blur-sm">Después</div>
                  </div>
                  
                  {/* Icono central */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white text-slate-900 rounded-full p-1 shadow-lg">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] text-white/70 font-medium z-10 bg-black/30 backdrop-blur-[2px] py-1 mx-2 rounded">
                    Caso {i + 1} (Reemplazar vía Supabase)
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <button 
              onClick={prevCase}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors z-20"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button 
              onClick={nextCase}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors z-20"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
          
          {/* Slider Dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {successCases.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentCase === i ? 'bg-blue-400 w-4' : 'bg-white/30 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
