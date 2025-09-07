import { Globe, Cog, BarChart3, MessageSquare, ShoppingCart, FileText } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Creación de Páginas Web con IA',
      description: 'Sitios web inteligentes que se adaptan automáticamente a tus usuarios y optimizan la experiencia de navegación.'
    },
    {
      icon: Cog,
      title: 'Automatización de Procesos',
      description: 'Automatizamos tareas repetitivas y flujos de trabajo complejos para aumentar la eficiencia operativa.'
    },
    {
      icon: BarChart3,
      title: 'Análisis Predictivo',
      description: 'Predicciones precisas basadas en datos históricos para tomar decisiones estratégicas informadas.'
    },
    {
      icon: MessageSquare,
      title: 'Atención al Cliente con IA',
      description: 'Chatbots inteligentes y asistentes virtuales que brindan soporte 24/7 a tus clientes.'
    },
    {
      icon: ShoppingCart,
      title: 'Ventas Automatizadas',
      description: 'Sistemas de ventas inteligentes que identifican oportunidades y optimizan el embudo de conversión.'
    },
    {
      icon: FileText,
      title: 'Contenido SEO con IA',
      description: 'Generación automática de contenido optimizado para SEO que mejora tu posicionamiento orgánico.'
    }
  ];

  return (
    <section id="soluciones" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Agentes inteligentes que <br />
            <span className="text-gradient">transforman tu negocio</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Implementamos soluciones de IA personalizadas que se adaptan a las necesidades específicas 
            de tu industria y escalan con el crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl hover-lift hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <a 
                  href="#contacto" 
                  className="text-primary font-semibold hover:text-brand-hover transition-colors duration-200 inline-flex items-center group/link"
                >
                  Más información
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;