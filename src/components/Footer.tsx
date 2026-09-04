import { Heart, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-28 md:pb-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto w-full">
        {/* Symmetrical 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900 text-center md:text-left">
          {/* Brand & Clinic Info */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20">
                D
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-white leading-tight">
                  Consultorio Dental
                </h3>
                <span className="text-xs text-blue-400 font-semibold tracking-wide uppercase">
                  Señor de Luren
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Brindamos atención odontológica integral con calidez y dedicación. Especialistas en ortodoncia, odontología general y estética dental en Los Olivos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Secciones
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-blue-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#doctora" className="hover:text-blue-400 transition-colors">
                  Nuestra Especialista
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-blue-400 transition-colors">
                  Servicios y Casos
                </a>
              </li>
              <li>
                <a href="#instalaciones" className="hover:text-blue-400 transition-colors">
                  Instalaciones
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-blue-400 transition-colors">
                  Ubicación en Los Olivos
                </a>
              </li>
              <li>
                <a href="#horario" className="hover:text-blue-400 transition-colors">
                  Horario de Atención
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contacto y Ubicación
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5 justify-center md:justify-start">
                <MapPin size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span>Jr. Rubí I-19, Urb. Los Pinares, Los Olivos, Lima</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <span>+51 999 654 558</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/51999654558?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20cita%20en%20el%20Consultorio%20Dental%20Se%C3%B1or%20de%20Luren."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] hover:text-[#2fe673] transition-colors"
                >
                  <WhatsAppIcon size={14} className="fill-current" />
                  <span>Escribir directamente al WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Consultorio Dental Señor de Luren. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Cuidando tu sonrisa con vocación <Heart size={12} className="text-purple-400 fill-purple-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
