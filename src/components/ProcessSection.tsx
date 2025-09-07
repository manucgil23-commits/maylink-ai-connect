import { Search, Palette, Rocket, TrendingUp } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Análisis y Diagnóstico',
      description: 'Evaluamos tus procesos actuales y identificamos oportunidades de mejora mediante IA.'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Diseño e Integración',
      description: 'Diseñamos soluciones personalizadas que se integran perfectamente con tu infraestructura existente.'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Implementación y Testing',
      description: 'Desarrollamos y probamos las soluciones en un entorno controlado antes del lanzamiento.'
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Escalado y Optimización',
      description: 'Monitoreamos el rendimiento y optimizamos continuamente para maximizar los resultados.'
    }
  ];

  return (
    <section id="procesos" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Un camino claro hacia <br />
            <span className="text-gradient">la innovación</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro proceso probado garantiza una transformación exitosa de tu empresa 
            con implementación gradual y resultados medibles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 z-0" />
              )}
              
              <div className="relative z-10 bg-white p-8 rounded-2xl hover-lift hover:shadow-xl transition-all duration-300 border border-border h-full">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl mr-4">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contacto"
            className="inline-flex items-center bg-primary hover:bg-brand-hover text-white px-8 py-4 rounded-xl font-semibold text-lg hover-glow transition-all duration-300 group"
          >
            Comenzar mi transformación
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;