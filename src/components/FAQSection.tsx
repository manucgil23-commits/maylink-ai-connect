import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma implementar una solución de IA?',
      answer: 'El tiempo de implementación varía según la complejidad del proyecto. Para soluciones básicas como chatbots, pueden ser de 2-4 semanas. Para automatización de procesos complejos, entre 6-12 semanas. Siempre proporcionamos un cronograma detallado durante la fase de análisis.'
    },
    {
      question: '¿Qué industrias pueden beneficiarse de sus soluciones?',
      answer: 'Trabajamos con empresas de todos los sectores: e-commerce, manufactura, servicios financieros, salud, educación, retail, logística y más. Nuestras soluciones se adaptan a las necesidades específicas de cada industria.'
    },
    {
      question: '¿Las soluciones son escalables conforme crece mi empresa?',
      answer: 'Absolutamente. Diseñamos todas nuestras soluciones con escalabilidad en mente. Nuestra arquitectura permite crecer desde pequeñas implementaciones hasta sistemas enterprise sin necesidad de reemplazar la infraestructura existente.'
    },
    {
      question: '¿Qué tipo de soporte técnico ofrecen?',
      answer: 'Ofrecemos soporte técnico 24/7 para planes Profesional y Empresarial. Incluye monitoreo proactivo, actualizaciones automáticas, resolución de incidencias y consultoría continua para optimizar el rendimiento.'
    },
    {
      question: '¿Necesito conocimientos técnicos para usar las soluciones?',
      answer: 'No es necesario. Diseñamos interfaces intuitivas y proporcionamos capacitación completa a tu equipo. Además, nuestro soporte técnico está disponible para resolver cualquier duda o asistir en el uso diario de las herramientas.'
    },
    {
      question: '¿Cómo garantizan la seguridad de nuestros datos?',
      answer: 'Implementamos los más altos estándares de seguridad: encriptación end-to-end, cumplimiento con GDPR y SOC 2, auditorías regulares de seguridad, y infraestructura en la nube con certificaciones de nivel enterprise.'
    },
    {
      question: '¿Ofrecen garantías sobre los resultados?',
      answer: 'Sí, ofrecemos garantías de rendimiento basadas en KPIs acordados previamente. Si no alcanzamos los objetivos establecidos en los primeros 90 días, trabajamos sin costo adicional hasta lograrlos o reembolsamos el 100% de la inversión.'
    },
    {
      question: '¿Pueden integrarse con nuestros sistemas existentes?',
      answer: 'Por supuesto. Nos especializamos en integraciones con CRM, ERP, sistemas de gestión, bases de datos y APIs existentes. Realizamos un análisis previo para garantizar compatibilidad total sin interrumpir operaciones.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Preguntas <br />
            <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestras soluciones de IA 
            y cómo pueden transformar tu negocio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-6 h-6 text-primary transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-primary transition-transform duration-200" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 animate-fade-up">
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <a 
            href="#contacto"
            className="inline-flex items-center bg-primary hover:bg-brand-hover text-white px-8 py-4 rounded-xl font-semibold text-lg hover-glow transition-all duration-300 group"
          >
            Contáctanos directamente
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;