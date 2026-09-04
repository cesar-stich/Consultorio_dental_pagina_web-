import WhatsAppIcon from './WhatsAppIcon';

export default function FinalCTA() {
  return (
    <section className="py-16 px-6 bg-slate-50 border-t border-slate-100 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
        ¿Lista/o para lucir<br/>tu mejor sonrisa?
      </h2>
      <p className="text-slate-500 text-sm mb-8 max-w-[280px] mx-auto">
        No esperes más, contáctanos hoy mismo y agenda tu primera evaluación.
      </p>

      <a 
        href="https://wa.me/51999654558?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20cita%20en%20el%20Consultorio%20Dental%20Se%C3%B1or%20de%20Luren."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white py-4 px-8 rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(37,99,235,0.2)] transition-transform active:scale-95"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
          <WhatsAppIcon size={18} className="fill-current" />
        </span>
        Contáctanos
      </a>
    </section>
  );
}
