import { Clock } from 'lucide-react';

export default function Schedule() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="bg-purple-600 rounded-3xl p-6 text-white relative overflow-hidden">
        {/* Decoración geométrica */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-50 -translate-y-10 translate-x-10"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Clock size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-bold">Horario de Atención</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-white/20 pb-2">
              <span className="text-sm text-purple-100">Lunes a Viernes</span>
              <span className="font-bold text-sm">9:00 am – 8:00 pm</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/20 pb-2">
              <span className="text-sm text-purple-100">Sábados</span>
              <span className="font-bold text-sm">9:00 am – 2:00 pm</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-sm text-purple-100">Domingos</span>
              <span className="font-bold text-sm opacity-80">Cerrado</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/20">
            <p className="text-xs text-purple-100 leading-relaxed text-center">
              ¿Citas fuera de horario?{' '}
              <a 
                href="https://wa.me/51999654558?text=Hola,%20quisiera%20coordinar%20una%20cita%20fuera%20del%20horario%20regular"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white transition-colors"
              >
                Coordina por WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
