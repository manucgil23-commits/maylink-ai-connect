import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/mes',
      description: 'Perfecto para pequeñas empresas que buscan automatizar procesos básicos',
      features: [
        'Automatización de hasta 3 procesos',
        'Chatbot básico para atención al cliente',
        'Análisis de datos mensual',
        'Soporte por email',
        'Implementación básica',
        'Dashboard de métricas'
      ],
      highlighted: false,
      ctaText: 'Comenzar Starter'
    },
    {
      name: 'Profesional',
      price: '$5,500',
      period: '/mes',
      description: 'Ideal para empresas en crecimiento que necesitan soluciones más avanzadas',
      features: [
        'Automatización ilimitada de procesos',
        'IA conversacional avanzada',
        'Análisis predictivo semanal',
        'Soporte prioritario 24/7',
        'Integración con CRM/ERP',
        'Entrenamiento personalizado',
        'Consultoría estratégica mensual',
        'API personalizada'
      ],
      highlighted: true,
      ctaText: 'Comenzar Profesional',
      badge: 'Más Popular'
    },
    {
      name: 'Empresarial',
      price: 'Personalizado',
      period: '',
      description: 'Soluciones enterprise con arquitectura escalable y soporte dedicado',
      features: [
        'Soluciones 100% personalizadas',
        'Infraestructura dedicada',
        'Equipo de soporte dedicado',
        'SLA garantizado 99.9%',
        'Seguridad y compliance avanzado',
        'Consultoría estratégica semanal',
        'Roadmap tecnológico personalizado',
        'Implementación white-label'
      ],
      highlighted: false,
      ctaText: 'Contactar Ventas'
    }
  ];

  return (
    <section id="planes" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Inversión clara, <br />
            <span className="text-gradient">resultados medibles</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu empresa. 
            Todos incluyen implementación y soporte técnico especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 border-2 ${
                plan.highlighted 
                  ? 'border-primary shadow-2xl scale-105 hover:scale-110' 
                  : 'border-border hover-lift hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-lg text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-brand-hover text-white hover-glow'
                    : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {plan.highlighted && <Zap className="w-5 h-5 mr-2" />}
                {plan.ctaText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-white rounded-2xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-2">
            ¿No estás seguro qué plan elegir?
          </h3>
          <p className="text-muted-foreground mb-4">
            Agenda una consulta gratuita de 30 minutos con nuestros expertos
          </p>
          <Button 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold"
          >
            Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;