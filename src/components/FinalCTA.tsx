import WhatsAppIcon from './WhatsAppIcon';

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-3xl p-10 sm:p-14 text-white text-center shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              ¿Listo para lucir tu mejor sonrisa?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
              No dejes pasar más tiempo para cuidar de tu salud bucal. Agenda tu evaluación dental hoy mismo y da el primer paso hacia una sonrisa sana y radiante.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/51999654558?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20cita%20en%20el%20Consultorio%20Dental%20Se%C3%B1or%20de%20Luren."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-900 hover:bg-blue-50 py-4 px-8 rounded-full font-bold text-base shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon size={16} className="fill-current" />
                </span>
                <span>Agendar mi Cita por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
