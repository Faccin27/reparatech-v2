import { Button } from "@/components/ui/button";

const Products = () => {
  const productCategories = [
    {
      title: "Eletronicos",
      brands: [
        "iPhone",
        "Android",
        "Computadores",
        "Notebook",
        "Playstion",
        "XBOX",
      ],
      description: "Aparelhos novos e seminovos das melhores marcas do mercado",
    },
    {
      title: "Proteção & Acessórios",
      brands: [
        "Películas de vidro",
        "Capinhas resistentes",
        "Fones de ouvido",
        "Carregadores",
        "Cabos USB",
        "Suportes",
      ],
      description: "Tudo para proteger e complementar seus dispositivos",
    },
  ];

  return (
    <section id="produtos" className="py-20 px-4  relative z-10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Loja Completa</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Oferecemos uma linha completa de produtos para suas necessidades
            tecnológicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {productCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-3">
                {category.brands.map((brand, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3 px-4 bg-zinc-800/30 rounded-lg border border-zinc-700/30 hover:border-zinc-600/50 transition-colors duration-200"
                  >
                    <span className="text-zinc-300 font-medium">{brand}</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Condições Especiais
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-zinc-300">
                <span className="text-blue-400 font-semibold">
                  Parcelamento
                </span>
                <br />
                Em até 12x sem juros
              </div>
              <div className="text-zinc-300">
                <span className="text-blue-400 font-semibold">Garantia</span>
                <br />
                Produtos com garantia de fábrica
              </div>
              <div className="text-zinc-300">
                <span className="text-blue-400 font-semibold">Entrega</span>
                <br />
                Disponível na região
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Consultar Disponibilidade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
