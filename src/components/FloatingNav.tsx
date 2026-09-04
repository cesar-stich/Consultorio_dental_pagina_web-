import { Home, Stethoscope, User, MapPin } from 'lucide-react';

export default function FloatingNav() {
  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 flex justify-center px-4 md:hidden pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-sm bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-full px-6 py-2.5 flex justify-between items-center">
        <a
          href="#inicio"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-600 active:text-blue-600 transition-colors"
        >
          <Home size={18} strokeWidth={2} />
          <span className="text-[10px] font-semibold">Inicio</span>
        </a>

        <a
          href="#doctora"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-600 active:text-blue-600 transition-colors"
        >
          <User size={18} strokeWidth={2} />
          <span className="text-[10px] font-semibold">Doctora</span>
        </a>

        <a
          href="#servicios"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-600 active:text-blue-600 transition-colors"
        >
          <Stethoscope size={18} strokeWidth={2} />
          <span className="text-[10px] font-semibold">Servicios</span>
        </a>

        <a
          href="#ubicacion"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-600 active:text-blue-600 transition-colors"
        >
          <MapPin size={18} strokeWidth={2} />
          <span className="text-[10px] font-semibold">Ubicación</span>
        </a>
      </nav>
    </div>
  );
}
