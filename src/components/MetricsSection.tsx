import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const MetricsSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: '500+',
      label: 'Proyectos realizados',
      description: 'Soluciones implementadas exitosamente'
    },
    {
      icon: Users,
      value: '200+',
      label: 'Empresas conectadas',
      description: 'Clientes confiando en nuestra tecnología'
    },
    {
      icon: Zap,
      value: '1000+',
      label: 'Procesos automatizados',
      description: 'Tareas optimizadas con IA'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Satisfacción de clientes',
      description: 'Calificación promedio de nuestros servicios'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Resultados que <span className="text-primary">transforman</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestros números reflejan el impacto real que generamos en las empresas que confían en nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center hover-lift hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <metric.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {metric.value}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {metric.label}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;