import Header from "../components/header"
import About from "../components/about"
import Hero from "../components/hero"
import Products from "../components/products"
import Services from "../components/services"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950/20 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none z-0" />

      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
