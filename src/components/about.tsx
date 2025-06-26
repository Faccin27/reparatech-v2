import { Award, Users, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "5+",
      label: "Anos de Experiência",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: Clock,
      number: "24h",
      label: "Diagnóstico Rápido",
    },
    {
      icon: MapPin,
      number: "1",
      label: "Localização Estratégica",
    },
  ];

  return (
    <section id="sobre" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Sobre a Reparatech.pro
            </h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Somos uma empresa especializada em assistência técnica e venda de
              dispositivos eletrônicos, localizada em Catanduvas - SC.
              Nossa missão é oferecer soluções completas para seus smartphones,
              computadores e consoles.
            </p>
            <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
              Com uma equipe de técnicos qualificados e equipamentos de última
              geração, garantimos reparos de alta qualidade e atendimento
              personalizado. Além dos serviços de manutenção, oferecemos uma
              ampla variedade de produtos novos e seminovos das melhores marcas
              do mercado.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50">
              <Image
                src="/images/iphone.png"
                width={1200}
                height={1200}
                alt="iPhone Pro - Qualidade Reparatech"
                className="w-full h-auto object-contain rounded-lg"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
