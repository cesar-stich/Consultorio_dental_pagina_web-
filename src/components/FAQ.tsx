import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿La evaluación inicial tiene costo?',
    answer: 'Sí, la evaluación inicial tiene un costo simbólico, pero este monto se descuenta del total si decides iniciar tu tratamiento con nosotros ese mismo día.'
  },
  {
    question: '¿A partir de qué edad atienden niños?',
    answer: 'Atendemos a niños desde la aparición de su primer diente (alrededor de los 6 meses). Es ideal para inculcar buenos hábitos y prevenir caries de biberón.'
  },
  {
    question: '¿Los tratamientos de conducto duelen?',
    answer: 'No. Utilizamos anestesia local de alta calidad y técnicas modernas para asegurar que el procedimiento sea completamente indoloro y cómodo para ti.'
  },
  {
    question: '¿Aceptan seguros médicos o EPS?',
    answer: 'Trabajamos de forma particular, pero emitimos boletas y facturas detalladas para que puedas solicitar el reembolso con tu aseguradora o EPS sin problemas.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-12 px-6 bg-slate-50 border-t border-slate-100">
      <div className="mb-8">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Dudas comunes</h2>
        <h3 className="text-2xl font-bold text-slate-900">Preguntas Frecuentes</h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
            >
              <span className="font-bold text-slate-800 text-sm">{faq.question}</span>
              <ChevronDown 
                size={18} 
                className={`text-slate-400 transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`px-5 transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-slate-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
