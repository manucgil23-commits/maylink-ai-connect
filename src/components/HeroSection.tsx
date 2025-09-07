import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-ai-network.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gradient">Conectando</span>
                <br />
                <span className="text-foreground">posibilidades</span>
                <br />
                <span className="text-primary">infinitas</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transformamos tu empresa con Inteligencia Artificial aplicada a tus procesos. 
                Automatización inteligente, análisis predictivo y soluciones que escalan con tu negocio.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-brand-hover text-white px-8 py-4 rounded-xl font-semibold text-lg hover-glow transition-all duration-300 group"
              >
                Solicitar Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group"
              >
                <Play className="mr-2 w-5 h-5" />
                Hablar con un Asesor
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Empresas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last animate-float">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Inteligencia Artificial y conectividad"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;