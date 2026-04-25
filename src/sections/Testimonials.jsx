import { useState, useEffect } from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "CTO @ TechFlow",
      content: "La implementación de IA proporcionada por JA Partners transformó nuestra velocidad de procesamiento de datos. Hemos visto una reducción del 40% en los cuellos de botella operativos en el primer mes.",
      avatar: "CM"
    },
    {
      name: "Elena Rodríguez",
      role: "Gerente de Producto @ InnovaLatam",
      content: "Excelente servicio y profunda experiencia técnica. Su equipo no solo construyó una solución; entendieron nuestras necesidades comerciales y proporcionaron una ventaja estratégica.",
      avatar: "ER"
    },
    {
      name: "James Wilson",
      role: "Fundador @ NexaSystems",
      content: "El software personalizado desarrollado para nuestro laboratorio de investigación es de clase mundial. La integración de LLMs para la síntesis automatizada de datos ha sido un cambio radical para nosotros.",
      avatar: "JW"
    }
  ];

  return (
    <section 
      id="testimonials-section" 
      className="py-24 bg-white border-b-2 border-gray-600 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Respaldado por Líderes de la Industria
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mira lo que nuestros socios y clientes dicen sobre su experiencia trabajando con nosotros en soluciones de IA de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-900 font-bold leading-tight">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-blue-100 font-serif leading-none select-none">"</span>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {testimonial.content}
                </p>
              </div>
              <div className="mt-6 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
