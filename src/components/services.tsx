import {
  Smartphone,
  Monitor,
  Gamepad2,
  Wrench,
  Shield,
  Clock,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Reparo de Celulares",
      description:
        "Conserto de telas, baterias, câmeras e componentes internos para todas as marcas.",
      features: [
        "Troca de tela",
        "Substituição de bateria",
        "Reparo de câmeras",
        "Conserto de alto-falantes",
      ],
    },
    {
      icon: Monitor,
      title: "Manutenção de Computadores",
      description:
        "Formatação, limpeza, upgrade de hardware e solução de problemas técnicos.",
      features: [
        "Formatação completa",
        "Limpeza interna",
        "Upgrade de componentes",
        "Remoção de vírus",
      ],
    },
    {
      icon: Gamepad2,
      title: "Conserto de Consoles",
      description:
        "Reparo especializado em PlayStation, Xbox, Nintendo Switch e outros consoles.",
      features: [
        "Limpeza de coolers",
        "Troca de controles",
        "Reparo de conectores",
        "Atualização de software",
      ],
    },
  ];

  const features = [
    {
      icon: Wrench,
      title: "Técnicos Especializados",
      description:
        "Profissionais qualificados com anos de experiência no mercado.",
    },
    {
      icon: Shield,
      title: "Garantia nos Serviços",
      description:
        "Todos os reparos possuem garantia de 90 dias para sua tranquilidade.",
    },
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description:
        "Diagnóstico em até 24h e reparos realizados no menor tempo possível.",
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-zinc-950 border-b border-t border-blue-600 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Soluções completas para todos os seus dispositivos eletrônicos
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-l-2 border-blue-500/30 pl-8 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-zinc-300 text-sm bg-zinc-800/50 px-3 py-1 rounded-full border border-zinc-700/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-zinc-800/50">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-zinc-800/50 border border-zinc-700/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-blue-500/50 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
