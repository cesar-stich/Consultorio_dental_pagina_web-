import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-12 pb-24 px-6 text-center">
      <h3 className="text-xl font-bold text-white mb-2">Consultorio Dental<br/>Señor de Luren</h3>
      <p className="text-slate-400 text-xs mb-6 max-w-[200px] mx-auto">
        Jr. Rubí I-19, Urb. Los Pinares, Los Olivos, Lima
      </p>
      
      <div className="w-12 h-px bg-slate-800 mx-auto mb-6"></div>
      
      <p className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center justify-center gap-1">
        Cuidando tu sonrisa <Heart size={10} className="text-purple-500 fill-purple-500" />
      </p>
    </footer>
  );
}
