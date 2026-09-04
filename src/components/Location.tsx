import { MapPin, Navigation, Compass } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto w-full">
        {/* Symmetrical Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100 mb-3">
            Ubicación
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            ¿Cómo Llegar al Consultorio?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Estamos ubicados en una zona tranquila, segura y de fácil acceso en Los Olivos, Lima.
          </p>
        </div>

        {/* Symmetrical Two-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Information Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold mb-6">
                <Compass size={14} />
                <span>Punto de Referencia</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Consultorio Dental Señor de Luren
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Dirección Exacta</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                      Jr. Rubí I-19, Urb. Los Pinares, Los Olivos, Lima - Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Navigation size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Referencias</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                      Zona residencial y tranquila, cerca a avenidas principales con facilidad de transporte y estacionamiento en los alrededores.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <a
                href="https://maps.app.goo.gl/72tU3EpwyTruTDmf7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-sm transition-all cursor-pointer"
              >
                <Navigation size={16} />
                <span>Abrir en Google Maps</span>
              </a>

              <a
                href="https://wa.me/51999654558?text=Hola,%20quisiera%20saber%20c%C3%B3mo%20llegar%20al%20consultorio%20desde%20mi%20ubicaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl font-semibold text-xs sm:text-sm border border-slate-200 transition-colors"
              >
                <WhatsAppIcon size={16} className="fill-current text-[#25D366]" />
                <span>Pedir indicaciones por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive View */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 min-h-[380px] relative">
            <iframe
              src="https://maps.google.com/maps?q=-11.993672,-77.0780592&hl=es&z=18&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Consultorio Dental Señor de Luren"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
