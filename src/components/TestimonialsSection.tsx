import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'María González',
      position: 'CEO',
      company: 'InnovateTech',
      image: '/placeholder.svg',
      rating: 5,
      text: 'MayLink AI transformó completamente nuestros procesos de ventas. En solo 3 meses aumentamos nuestra eficiencia en un 70% y duplicamos nuestras conversiones.'
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director de Operaciones',
      company: 'Logística Pro',
      image: '/placeholder.svg',
      rating: 5,
      text: 'La automatización de nuestros procesos logísticos nos permitió reducir errores humanos en un 95%. El ROI fue evidente desde el primer mes.'
    },
    {
      name: 'Ana Martínez',
      position: 'Gerente de Marketing',
      company: 'Digital Boost',
      image: '/placeholder.svg',
      rating: 5,
      text: 'El contenido SEO generado por IA mejoró nuestro posicionamiento orgánico un 300%. Ahora lideramos en todas nuestras palabras clave objetivo.'
    },
    {
      name: 'Roberto Silva',
      position: 'Fundador',
      company: 'StartupXYZ',
      image: '/placeholder.svg',
      rating: 5,
      text: 'Como startup, necesitábamos soluciones escalables y cost-effective. MayLink AI nos proporcionó exactamente eso y más. Excelente soporte técnico.'
    }
  ];

  return (
    <section id="testimonios" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Lo que dicen <br />
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas de todos los tamaños han transformado sus operaciones con nuestras soluciones de IA. 
            Estos son algunos de sus testimonios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl hover-lift hover:shadow-xl transition-all duration-300 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonial.position} en {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contacto"
            className="inline-flex items-center bg-primary hover:bg-brand-hover text-white px-8 py-4 rounded-xl font-semibold text-lg hover-glow transition-all duration-300 group"
          >
            Únete a nuestros clientes exitosos
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;