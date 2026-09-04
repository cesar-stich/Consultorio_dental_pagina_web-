import { Home, Stethoscope, User, MapPin } from 'lucide-react';

export default function FloatingNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
      <nav className="w-full max-w-[480px] bg-white/90 backdrop-blur-md border-t border-slate-200 px-6 py-3 flex justify-between items-center pb-[max(env(safe-area-inset-bottom),_12px)]">
        <a href="#inicio" className="flex flex-col items-center gap-1 text-blue-600">
          <Home size={20} strokeWidth={2} />
          <span className="text-[10px] font-medium">Inicio</span>
        </a>
        
        <a href="#servicios" className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors">
          <Stethoscope size={20} strokeWidth={2} />
          <span className="text-[10px] font-medium">Servicios</span>
        </a>
        
        <a href="#doctora" className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors">
          <User size={20} strokeWidth={2} />
          <span className="text-[10px] font-medium">Doctora</span>
        </a>
        
        <a href="#ubicacion" className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors">
          <MapPin size={20} strokeWidth={2} />
          <span className="text-[10px] font-medium">Ubicación</span>
        </a>
      </nav>
    </div>
  );
}
