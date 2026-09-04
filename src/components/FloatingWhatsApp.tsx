import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-24 right-4 z-40 lg:right-[calc(50%-220px)]">
      <a
        href="https://wa.me/51999654558?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20cita%20en%20el%20Consultorio%20Dental%20Se%C3%B1or%20de%20Luren."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.3)] transition-transform active:scale-95 hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon size={26} className="fill-current" />
      </a>
    </div>
  );
}
