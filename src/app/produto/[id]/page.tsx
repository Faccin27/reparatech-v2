"use client"

import { useState } from "react"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Separator } from "../../../components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import {
  ShoppingCart,
  Share2,
  Plus,
  Minus,
  Truck,
  Shield,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Zap,
  Award,
  Users,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Dados simulados do produto
const productData = {
  id: 1,
  name: "iPhone 15 Pro Max",
  category: "iPhone",
  price: 8999,
  originalPrice: 9999,
  inStock: true,
  stockQuantity: 5,
  sku: "IPH15PM-256-TIT",
  brand: "Apple",
  condition: "Novo",
  warranty: "12 meses",
  images: [
    "/images/iphone.png",
    "/images/s24.png",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  description:
    "O iPhone 15 Pro Max representa o ápice da tecnologia móvel da Apple, oferecendo desempenho excepcional e recursos inovadores.",
  features: [
    "Tela Super Retina XDR de 6,7 polegadas",
    "Chip A17 Pro com GPU de 6 núcleos",
    "Sistema de câmera Pro com teleobjetiva 5x",
    "Estrutura em titânio aeroespacial",
    "Botão Ação personalizável",
    "USB-C com suporte a USB 3",
    "Bateria para o dia todo",
    "iOS 17 com recursos avançados",
  ],
  specifications: {
    Tela: "6,7 polegadas Super Retina XDR",
    Processador: "Chip A17 Pro",
    Armazenamento: "256GB",
    "Câmera Principal": "48MP com teleobjetiva 5x",
    "Câmera Frontal": "12MP TrueDepth",
    Bateria: "Até 29 horas de reprodução de vídeo",
    Conectividade: "5G, Wi-Fi 6E, Bluetooth 5.3",
    Resistência: "IP68",
    Dimensões: "159,9 x 76,7 x 8,25 mm",
    Peso: "221g",
  },
}

export default function ProdutoPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("detalhes")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % productData.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + productData.images.length) % productData.images.length)
  }

  const addToCart = () => {
    console.log(`Adicionando ${quantity} unidade(s) do produto ${productData.name} ao carrinho`)
    // Lógica para adicionar ao carrinho
  }

  const buyNow = () => {
    console.log(`Comprando ${quantity} unidade(s) do produto ${productData.name}`)
    // Lógica para compra direta
  }

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: productData.name,
        text: productData.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copiado para a área de transferência!")
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950/20 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none z-0" />

      <Header />

      {/* Page Content */}
      <div className="pt-20 sm:pt-24 pb-16 px-2 xs:px-3 sm:px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-4 xs:mb-6">
            <div className="flex items-center gap-1 xs:gap-2 text-xs xs:text-sm text-zinc-400 mb-2 xs:mb-3">
              <Link href="/comercial" className="hover:text-blue-400 transition-colors">
                Loja
              </Link>
              <span>/</span>
              <Link href="/comercial" className="hover:text-blue-400 transition-colors">
                {productData.category}
              </Link>
              <span>/</span>
              <span className="text-white truncate">{productData.name}</span>
            </div>
            <Link href="/comercial" className="text-zinc-400 hover:text-white flex items-center text-xs xs:text-sm">
              <ArrowLeft className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
              <span className="hidden xs:inline">Voltar para a loja</span>
              <span className="xs:hidden">Voltar</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 xs:gap-8 md:gap-10 lg:gap-12 mb-8 xs:mb-12">
            {/* Galeria de Imagens */}
            <div className="space-y-3 xs:space-y-4">
              {/* Imagem Principal */}
              <div className="relative bg-zinc-900/50 rounded-xl xs:rounded-2xl overflow-hidden aspect-square max-w-sm xs:max-w-md md:max-w-none mx-auto md:mx-0">
                <Image
                  src={productData.images[selectedImageIndex] || "/placeholder.svg"}
                  alt={productData.name}
                  fill
                  className="object-cover"
                />

                {/* Navegação da Galeria */}
                {productData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 xs:left-4 top-1/2 -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 cursor-pointer bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 xs:right-4 top-1/2 -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 cursor-pointer bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
                    </button>
                  </>
                )}

                {/* Indicador de Imagem */}
                <div className="absolute bottom-2 xs:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 xs:gap-2">
                  {productData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full transition-colors ${
                        index === selectedImageIndex ? "bg-blue-500" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 xs:gap-3 overflow-x-auto pb-2 max-w-sm xs:max-w-md md:max-w-none mx-auto md:mx-0">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-12 h-12 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === selectedImageIndex ? "border-blue-500" : "border-zinc-700 hover:border-zinc-600"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${productData.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Informações do Produto */}
            <div className="space-y-4 xs:space-y-6">
              {/* Header do Produto */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2 xs:mb-3">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                    {productData.category}
                  </Badge>
                  {productData.condition === "Novo" && (
                    <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                      Novo
                    </Badge>
                  )}
                </div>

                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-3 xs:mb-4 leading-tight">
                  {productData.name}
                </h1>

                <p className="text-zinc-400 leading-relaxed text-sm xs:text-base">{productData.description}</p>
              </div>

              {/* Preço */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 xs:gap-3">
                  <span className="text-2xl xs:text-3xl md:text-2xl lg:text-3xl font-bold text-blue-400">
                    {formatPrice(productData.price)}
                  </span>
                  {productData.originalPrice && (
                    <span className="text-lg xs:text-xl md:text-lg lg:text-xl text-zinc-500 line-through">
                      {formatPrice(productData.originalPrice)}
                    </span>
                  )}
                </div>
                {productData.originalPrice && (
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                      {Math.round(((productData.originalPrice - productData.price) / productData.originalPrice) * 100)}%
                      OFF
                    </Badge>
                    <span className="text-xs xs:text-sm text-green-400">
                      Economia de {formatPrice(productData.originalPrice - productData.price)}
                    </span>
                  </div>
                )}
              </div>

              {/* Status do Estoque */}
              <div className="flex items-center gap-2">
                {productData.inStock ? (
                  <>
                    <Check className="w-4 h-4 xs:w-5 xs:h-5 text-green-400" />
                    <span className="text-green-400 text-sm xs:text-base">Em estoque</span>
                    <span className="text-zinc-400 text-xs xs:text-sm">
                      ({productData.stockQuantity} unidades disponíveis)
                    </span>
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4 xs:w-5 xs:h-5 text-red-400" />
                    <span className="text-red-400 text-sm xs:text-base">Fora de estoque</span>
                  </>
                )}
              </div>

              {/* Controles de Compra */}
              <div className="space-y-3 xs:space-y-4">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-300 text-sm xs:text-base">Quantidade:</span>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                        className="w-7 h-7 xs:w-8 xs:h-8 p-0 bg-zinc-800 hover:bg-zinc-700"
                      >
                        <Minus className="w-3 h-3 xs:w-4 xs:h-4" />
                      </Button>
                      <span className="w-8 xs:w-12 text-center text-white font-medium text-sm xs:text-base">
                        {quantity}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => setQuantity(Math.min(productData.stockQuantity, quantity + 1))}
                        disabled={quantity >= productData.stockQuantity}
                        className="w-7 h-7 xs:w-8 xs:h-8 p-0 bg-zinc-800 hover:bg-zinc-700"
                      >
                        <Plus className="w-3 h-3 xs:w-4 xs:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 xs:gap-3">
                  <Button
                    size="lg"
                    onClick={addToCart}
                    disabled={!productData.inStock}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm xs:text-base h-10 xs:h-11"
                  >
                    <ShoppingCart className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                    <span className="hidden xs:inline">Adicionar ao Carrinho</span>
                    <span className="xs:hidden">Carrinho</span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={shareProduct}
                    className="text-zinc-400 border-zinc-600 bg-transparent w-10 xs:w-11 h-10 xs:h-11 p-0 flex-shrink-0"
                  >
                    <Share2 className="w-4 h-4 xs:w-5 xs:h-5" />
                  </Button>
                </div>

                <Button
                  size="lg"
                  onClick={buyNow}
                  disabled={!productData.inStock}
                  className="w-full bg-green-600 hover:bg-green-700 text-sm xs:text-base h-10 xs:h-11"
                >
                  <Zap className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                  Comprar Agora
                </Button>
              </div>

              {/* Informações Adicionais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 pt-4 xs:pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-2 text-xs xs:text-sm">
                  <Truck className="w-3 h-3 xs:w-4 xs:h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-zinc-300">Frete grátis acima de R$ 500</span>
                </div>
                <div className="flex items-center gap-2 text-xs xs:text-sm">
                  <Shield className="w-3 h-3 xs:w-4 xs:h-4 text-green-400 flex-shrink-0" />
                  <span className="text-zinc-300">Garantia de {productData.warranty}</span>
                </div>
                <div className="flex items-center gap-2 text-xs xs:text-sm">
                  <Award className="w-3 h-3 xs:w-4 xs:h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-zinc-300">Produto original</span>
                </div>
                <div className="flex items-center gap-2 text-xs xs:text-sm">
                  <Users className="w-3 h-3 xs:w-4 xs:h-4 text-orange-400 flex-shrink-0" />
                  <span className="text-zinc-300">Suporte especializado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Abas de Informações */}
          <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-zinc-800/50">
                <TabsTrigger value="detalhes" className="data-[state=active]:bg-blue-600 text-white cursor-pointer">
                  Detalhes
                </TabsTrigger>
                <TabsTrigger
                  value="especificacoes"
                  className="data-[state=active]:bg-blue-600 text-white cursor-pointer"
                >
                  Especificações
                </TabsTrigger>
              </TabsList>

              <TabsContent value="detalhes" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Características Principais</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {productData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-zinc-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-zinc-800" />

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Informações do Produto</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-zinc-400">SKU:</span>
                        <span className="text-white ml-2">{productData.sku}</span>
                      </div>
                      <div>
                        <span className="text-zinc-400">Marca:</span>
                        <span className="text-white ml-2">{productData.brand}</span>
                      </div>
                      <div>
                        <span className="text-zinc-400">Condição:</span>
                        <span className="text-white ml-2">{productData.condition}</span>
                      </div>
                      <div>
                        <span className="text-zinc-400">Garantia:</span>
                        <span className="text-white ml-2">{productData.warranty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="especificacoes" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">Especificações Técnicas</h3>
                  <div className="space-y-3">
                    {Object.entries(productData.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-zinc-800 last:border-b-0">
                        <span className="text-zinc-400 font-medium">{key}</span>
                        <span className="text-white text-right max-w-xs">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
