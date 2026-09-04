import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight">
              Consultorio Dental
            </span>
            <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">
              Señor de Luren
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#inicio"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#doctora"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Doctora
          </a>
          <a
            href="#servicios"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#instalaciones"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Instalaciones
          </a>
          <a
            href="#preguntas"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Preguntas
          </a>
          <a
            href="#ubicacion"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Ubicación
          </a>
          <a
            href="#horario"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Horario
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center">
          <a
            href="https://wa.me/51999654558?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20cita%20en%20el%20Consultorio%20Dental%20Se%C3%B1or%20de%20Luren."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg active:scale-95"
          >
            <WhatsAppIcon size={16} className="fill-current" />
            <span>Agendar Cita</span>
          </a>
        </div>
      </div>
    </header>
  );
}

