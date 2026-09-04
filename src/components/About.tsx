import { Award, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="doctora" className="py-16 px-6 bg-slate-50 border-t border-slate-100">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 leading-snug">
          Conoce a nuestra especialista
        </h3>
      </div>

      <div className="flex flex-col items-center bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-100 mb-4 border-4 border-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
            alt="Dra. Rosa Esther Vásquez Cornejo (Reemplazar por Supabase)"
            className="w-full h-full object-cover"
          />
        </div>

        <h4 className="text-lg font-bold text-slate-900 text-center mb-1">Dra. Rosa Esther Vásquez Cornejo</h4>
        <p className="text-blue-600 text-sm font-medium mb-4">Cirujana Dentista</p>
        
        <div className="flex gap-3 mb-6">
          <span className="bg-slate-50 text-slate-600 text-[11px] font-bold px-3 py-1.5 rounded-full border border-slate-200">COP: 12345</span>
          <span className="bg-slate-50 text-slate-600 text-[11px] font-bold px-3 py-1.5 rounded-full border border-slate-200">RNE: 6789</span>
        </div>

        <div className="w-full space-y-5 text-left pt-2 border-t border-slate-100">
          <div className="flex gap-3 items-start">
            <GraduationCap className="text-purple-500 shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
            <div>
              <h5 className="font-bold text-slate-900 text-sm mb-1">Formación Académica</h5>
              <p className="text-slate-600 text-sm leading-relaxed">
                Egresada con honores de la Universidad Nacional, con especialización en Ortodoncia y constante actualización en estética dental.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 items-start">
            <Award className="text-blue-500 shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
            <div>
              <h5 className="font-bold text-slate-900 text-sm mb-1">Experiencia y Respaldo</h5>
              <p className="text-slate-600 text-sm leading-relaxed">
                Más de 10 años de experiencia devolviendo sonrisas. Miembro activo de la Sociedad Odontológica, garantizando procedimientos seguros y efectivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
