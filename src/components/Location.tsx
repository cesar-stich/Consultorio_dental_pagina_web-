import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="ubicacion" className="py-12 px-6 bg-slate-50 border-t border-slate-100">
      <div className="mb-6">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Ubicación</h2>
        <h3 className="text-2xl font-bold text-slate-900">¿Dónde estamos?</h3>
        <p className="text-sm text-slate-500 mt-2 flex items-start gap-2">
          <MapPin size={16} className="text-purple-500 shrink-0 mt-0.5" />
          <span>Jr. Rubí I-19, Urb. Los Pinares, Los Olivos, Lima</span>
        </p>
      </div>

      <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 relative mb-4">
        {/* En un caso real, el iframe va aquí */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x9105cf4b910243dd%3A0xc665dc60abde5396!2sLos%20Pinares%2C%20Los%20Olivos%2015301!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe" 
          className="w-full h-full border-0" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación"
        ></iframe>
      </div>

      <a 
        href="https://maps.app.goo.gl/xpeTjEpY1ML4uX1H9" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full py-3.5 bg-blue-50 text-blue-700 text-center rounded-xl font-bold text-sm border border-blue-100 transition-colors active:bg-blue-100"
      >
        Cómo llegar
      </a>
    </section>
  );
}
