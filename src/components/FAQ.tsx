import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: '¿La evaluación inicial tiene costo?',
    answer: 'La evaluación clínica inicial incluye diagnóstico visual y plan de tratamiento personalizado. Si decides iniciar tu procedimiento con nosotros, el costo de la consulta se descuenta del tratamiento final.'
  },
  {
    question: '¿A partir de qué edad atienden a niños?',
    answer: 'Atendemos a niños desde la erupción de su primer diente de leche (alrededor de los 6 meses a 1 año). Es fundamental para crear confianza con el dentista y prevenir oportunamente la caries de la infancia temprana.'
  },
  {
    question: '¿Los tratamientos dentales son dolorosos?',
    answer: 'En absoluto. Contamos con anestésicos locales modernos y técnicas de aplicación suave para que no sientas dolor en ningún momento, garantizando un procedimiento relajado y seguro.'
  },
  {
    question: '¿Aceptan seguros médicos o EPS?',
    answer: 'Atendemos de forma particular para ofrecerte una atención sin límites de tiempo y con materiales de primera calidad. Te emitimos boletas o facturas con el detalle clínico para que puedas solicitar reembolso con tu aseguradora.'
  },
  {
    question: '¿Cómo puedo agendar o reprogramar una cita?',
    answer: 'Puedes agendar directamente haciendo clic en nuestro botón de WhatsApp o llamando a nuestro número de contacto. Te asignaremos el horario que mejor se acomode a tus actividades.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="preguntas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto w-full">
        {/* Symmetrical Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Aquí te brindamos respuestas claras a las dudas más usuales de nuestros pacientes.
          </p>
        </div>

        {/* Accordion Cards Container */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/40 border-blue-200 shadow-xs'
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle
                      size={18}
                      className={`shrink-0 transition-colors ${
                        isOpen ? 'text-blue-600' : 'text-slate-400'
                      }`}
                    />
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <div
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-7 border-l-2 border-blue-200">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Note */}
        <div className="mt-10 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">¿Tienes alguna pregunta no listada?</p>
              <p className="text-slate-500 text-xs">Escríbenos directamente y te responderemos a la brevedad.</p>
            </div>
          </div>
          <a
            href="https://wa.me/51999654558?text=Hola,%20tengo%20una%20pregunta%20sobre%20el%20Consultorio%20Dental."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shrink-0"
          >
            Preguntar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
