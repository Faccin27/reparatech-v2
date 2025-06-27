import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductsGrid from "@/components/grid-products"

export default function ComercialPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950/20 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none z-0" />

      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Loja Comercial
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Encontre os melhores produtos em tecnologia com qualidade garantida e preços competitivos
            </p>
          </div>
        </div>
      </section>

      <ProductsGrid />
      <Footer />
    </div>
  )
}
