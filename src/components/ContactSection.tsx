import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Comienza tu <br />
            <span className="text-gradient">transformación hoy</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos listos para ayudarte a implementar soluciones de IA que revolucionen tu negocio. 
            Contáctanos y descubre el potencial de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+52 (55) 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contacto@maylinkai.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Oficina</p>
                    <p className="text-muted-foreground">Ciudad de México, México</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Horarios de Atención
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Lunes - Viernes:</span> 9:00 AM - 7:00 PM</p>
                <p><span className="font-semibold">Sábados:</span> 10:00 AM - 2:00 PM</p>
                <p><span className="font-semibold">Domingos:</span> Cerrado</p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button 
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 group"
              onClick={() => window.open('https://wa.me/5215512345678', '_blank')}
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Escribir por WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envíanos un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Correo Electrónico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px]"
                  placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-brand-hover text-white py-4 rounded-xl font-semibold text-lg hover-glow transition-all duration-300 group"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;