import { Clock, CalendarCheck, AlertCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Schedule() {
  return (
    <section id="horario" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto w-full">
        {/* Symmetrical Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs sm:text-sm font-bold text-purple-700 uppercase tracking-wider bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200/80 mb-3">
            Disponibilidad
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Horarios de Atención
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Trabajamos con cita previa para asegurarte una consulta puntual y sin largas esperas.
          </p>
        </div>

        {/* Symmetrical Schedule Card */}
        <div className="bg-gradient-to-br from-slate-950 via-purple-950/70 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-purple-900/40 relative overflow-hidden">
          {/* Ambient light blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 text-blue-300">
                <Clock size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">Jornadas y Turnos</h3>
                <p className="text-xs text-slate-400">Atención personalizada y continua</p>
              </div>
            </div>

            {/* Symmetrical Schedule Rows */}
            <div className="space-y-4 max-w-xl mx-auto">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <CalendarCheck size={18} className="text-emerald-400" />
                  <span className="font-semibold text-sm sm:text-base text-slate-200">
                    Lunes a Viernes
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sm sm:text-base text-white">
                    9:00 am – 8:00 pm
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <CalendarCheck size={18} className="text-blue-400" />
                  <span className="font-semibold text-sm sm:text-base text-slate-200">
                    Sábados
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sm sm:text-base text-white">
                    9:00 am – 2:00 pm
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <AlertCircle size={18} className="text-amber-400" />
                  <span className="font-semibold text-sm sm:text-base text-slate-200">
                    Domingos y Feriados
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs sm:text-sm font-medium text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                    Previa Coordinación
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp Note */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-xs sm:text-sm text-slate-300 mb-4">
                Si deseas coordinar una cita fuera de este horario, también se puede coordinar previa consulta.
              </p>
              <a
                href="https://wa.me/51999654558?text=Hola,%20quisiera%20coordinar%20una%20cita%20fuera%20del%20horario%20regular."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
              >
                <WhatsAppIcon size={16} className="fill-current" />
                <span>Coordinar Cita por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
