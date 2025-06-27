import { MapPin, Phone, Clock, Mail, MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      info: "Centro - Catanduvas",
      subInfo: "Santa Catarina",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(51) 99999-9999",
      subInfo: "WhatsApp disponível",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg - Sex: 9h às 18h",
      subInfo: "Sáb: 9h às 14h",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@reparatech.pro",
      subInfo: "Resposta em até 24h",
    },
  ];

  return (
    <section id="contato" className="py-20 px-4 bg-zinc-900/20 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Estamos prontos para atender você! Entre em contato conosco e tire
            suas dúvidas
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <contact.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-zinc-300 mb-1">{contact.info}</p>
                <p className="text-sm text-zinc-500">{contact.subInfo}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 rounded-2xl p-12 backdrop-blur-sm border border-zinc-700/50">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para resolver seu problema?
          </h3>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Nossa equipe está preparada para oferecer o melhor atendimento e
            soluções para seus dispositivos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-blue-600 text-black font-semibold px-8 py-3 text-lg"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-600 text-zinc-300 bg-zinc-800 px-8 py-3 text-lg"
            >
              <MailCheck className="w-5 h-5 mr-2" />
              Enviar e-mail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
