import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Procesos', href: '#procesos' },
    { name: 'Casos de Éxito', href: '#testimonios' },
    { name: 'Planes', href: '#planes' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Automatización de Procesos',
    'Análisis Predictivo',
    'Chatbots Inteligentes',
    'Contenido SEO con IA',
    'Ventas Automatizadas',
    'Páginas Web con IA'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-secondary text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-primary/10 p-8 rounded-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                Mantente al día con las últimas innovaciones en IA
              </h3>
              <p className="text-white/80">
                Recibe insights exclusivos, casos de estudio y tendencias del mundo de la Inteligencia Artificial.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">
                MayLink <span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Conectamos posibilidades infinitas a través de soluciones de Inteligencia Artificial 
              que transforman empresas y optimizan procesos.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                +52 (55) 1234-5678
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                contacto@maylinkai.com
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                Ciudad de México, México
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 hover:text-primary transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xl font-bold mb-6">Horarios de Atención</h4>
            <div className="space-y-3 text-white/80">
              <div>
                <p className="font-semibold text-white">Lunes - Viernes</p>
                <p>9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Sábados</p>
                <p>10:00 AM - 2:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Domingos</p>
                <p>Cerrado</p>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold text-white mb-4">Síguenos</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} MayLink AI. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-primary transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;