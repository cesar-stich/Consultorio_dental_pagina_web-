import { motion } from 'motion/react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] sm:min-h-[90vh] w-full bg-slate-950 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Symmetrical Dark Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600&auto=format&fit=crop"
          alt="Consultorio Dental Señor de Luren"
          className="w-full h-full object-cover opacity-35 filter saturate-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]"></div>
      </div>

      {/* Symmetrical Centered Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
        >
          Consultorio Dental <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-purple-300">
            Señor de Luren
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Salud y armonía bucal para toda tu familia. Especialistas en ortodoncia, odontología integral y estética con atención cálida y personalizada.
        </motion.p>

        {/* Symmetrical Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          <a
            href="https://wa.me/51999654558?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20cita%20en%20el%20Consultorio%20Dental%20Se%C3%B1or%20de%20Luren."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-8 rounded-2xl font-bold text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
              <WhatsAppIcon size={16} className="fill-current" />
            </span>
            <span>Agendar Cita en WhatsApp</span>
          </a>

          <a
            href="#servicios"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 py-4 px-8 rounded-2xl font-semibold text-base backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles size={18} className="text-blue-300" />
            <span>Ver Tratamientos</span>
          </a>
        </motion.div>

        {/* Symmetrical Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 w-full max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <ShieldCheck size={18} className="text-blue-400 shrink-0" />
            <span>Atención Profesional</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <Sparkles size={18} className="text-blue-400 shrink-0" />
            <span>Tecnología Moderna</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <ShieldCheck size={18} className="text-blue-400 shrink-0" />
            <span>Precios Justos y Claros</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
