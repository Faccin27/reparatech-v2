import { CheckCircle, MapPin, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-sm text-zinc-300 font-medium">
              Reparatech.pro
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text leading-tight">
            Sua assistência técnica e loja
            <br />
            de celulares da Zona Sul.
          </h1>

          {/* Features */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span>Assistência técnica especializada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span>Venda de aparelhos novos e semi-novos</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-12 text-zinc-400">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>Catanduvas - Santa Catarina</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-black font-semibold px-8 py-3 text-lg"
            >
              FALAR COM ATENDENTE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-600 text-zinc-300 hover:bg-blue-300  px-8 py-3 text-lg bg-zinc-900/80"
            >
              VER APARELHOS
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 p-8">
            <div className="flex items-center justify-center">
              <Image
                src="/images/image.png"
                width={1300}
                height={900}
                alt="iPhone Pro Max - Assistência Técnica Reparatech"
                className="max-w-full h-auto object-contain"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">
              <Smartphone className="w-6 h-6 text-blue-400" />
            </div>

            <div className="absolute bottom-4 right-4 bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">
              <CheckCircle className="w-6 h-6 text-blue-400" />
            </div>
          </div>

          {/* Background blur effects */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
