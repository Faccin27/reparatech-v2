import {
  Smartphone,
  Wrench,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Loja", href: "#loja" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  const services = [
    "Reparo de Celulares",
    "Manutenção de PCs",
    "Conserto de Consoles",
    "Venda de Smartphones",
    "Acessórios e Proteção",
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 pt-16 pb-8 relative z-10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Smartphone className="w-8 h-8 text-blue-500" />
                <Wrench className="w-4 h-4 text-blue-400 absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Reparatech.pro
              </span>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Sua assistência técnica especializada em celulares, computadores e
              consoles em Catanduvas - Santa Catarina e arredores.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-zinc-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <FaWhatsapp className="w-5 h-5 text-zinc-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Nossos Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-zinc-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-zinc-300">Catanduvas - SC</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p className="text-zinc-300">(51) 99999-9999</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-zinc-300">contato@reparatech.pro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 text-sm mb-4 md:mb-0">
              © 2024 Reparatech.pro. Todos os direitos reservados.
            </p>
            <div className="flex space-x-1 text-sm">
              Desenvolvido por <b />{" "}
              <span className="text-blue-400/80 hover:opacity-75 cursor-pointer font-medium">
                {" "}
                FaccinDev
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-zinc-500 hover:text-blue-400 transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-blue-400 transition-colors duration-200"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
