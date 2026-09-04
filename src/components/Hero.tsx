import { motion } from 'motion/react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[85vh] min-h-[600px] w-full bg-slate-900 flex flex-col justify-end pb-12 px-6 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" 
          alt="Consultorio Dental (Reemplazar con URL de Supabase)" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3"
        >
          Consultorio Dental <br />
          <span className="text-blue-400">Señor de Luren</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-base mb-8 max-w-[280px]"
        >
          Consultorio Dental Señor de Luren, ubicados en Los Olivos.
        </motion.p>

        <motion.a 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          href="https://wa.me/51999654558?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20cita%20en%20el%20Consultorio%20Dental%20Se%C3%B1or%20de%20Luren."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-white text-slate-900 py-3.5 px-6 rounded-2xl font-semibold transition-transform active:scale-[0.98]"
        >
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon size={14} className="fill-current" />
          </span>
          Agendar Cita
        </motion.a>
      </div>
    </section>
  );
}
