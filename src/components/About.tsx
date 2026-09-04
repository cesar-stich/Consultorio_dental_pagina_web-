import { Award, GraduationCap, HeartHandshake } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function About() {
  return (
    <section id="doctora" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto w-full">
        {/* Symmetrical Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conoce a Nuestra Especialista
          </h2>
        </div>

        {/* Symmetrical Card Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left: Doctor's Profile Card */}
            <div className="md:col-span-5 flex flex-col items-center text-center md:border-r md:border-slate-100 md:pr-8">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-slate-100 mb-5 border-4 border-blue-100 shadow-md relative">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
                  alt="Dra. Rosa Esther Vásquez Cornejo"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Dra. Rosa Esther Vásquez Cornejo
              </h3>
              <p className="text-blue-600 text-sm font-semibold mb-4">
                Cirujana Dentista
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="bg-slate-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200">
                  COP: 12345
                </span>
                <span className="bg-slate-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200">
                  RNE: 6789
                </span>
              </div>

              <a
                href="https://wa.me/51999654558?text=Hola%20Dra.%20Rosa,%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20para%20una%20atenci%C3%B3n%20dental."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-xl transition-colors"
              >
                <WhatsAppIcon size={16} className="fill-current text-[#25D366]" />
                <span>Consultar</span>
              </a>
            </div>

            {/* Right: Credentials and Bio */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                  <GraduationCap size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    Formación Académica
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Egresada con honores de la Universidad Nacional, con especialización en Ortodoncia y constante actualización científica en odontología estética y restauradora.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                  <Award size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    Experiencia y Respaldo
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Más de 10 años de experiencia devolviendo salud y confianza a pacientes en Los Olivos. Miembro activo del Colegio Odontológico del Perú.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
