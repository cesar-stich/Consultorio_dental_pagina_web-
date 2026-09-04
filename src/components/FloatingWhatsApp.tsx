import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 flex items-center group">
      {/* Desktop Tooltip Label */}
      <span className="hidden md:block mr-3 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        ¡Escríbenos por WhatsApp!
      </span>

      <a
        href="https://wa.me/51999654558?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20cita%20en%20el%20Consultorio%20Dental%20Se%C3%B1or%20de%20Luren."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon size={28} className="fill-current" />
      </a>
    </div>
  );
}
