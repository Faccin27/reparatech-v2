"use client";

import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Badge } from "../../components/ui/badge";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  Truck,
  Shield,
  ArrowLeft,
  Tag,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  category: string;
  inStock: boolean;
  maxQuantity: number;
}

export default function CarrinhoPage() {
  // Estado do carrinho (simulado)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 8999,
      originalPrice: 9999,
      quantity: 1,
      image: "/images/iphone.png",
      category: "iPhone",
      inStock: true,
      maxQuantity: 3,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 6999,
      quantity: 1,
      image: "/images/s24.png",
      category: "Android",
      inStock: true,
      maxQuantity: 5,
    },
    {
      id: 3,
      name: "Película 3D iPhone 15",
      price: 59,
      quantity: 2,
      image: "/placeholder.svg",
      category: "Películas de vidro",
      inStock: true,
      maxQuantity: 10,
    },
    {
      id: 4,
      name: "AirPods Pro 2",
      price: 1899,
      quantity: 1,
      image: "/placeholder.svg",
      category: "Fones de ouvido",
      inStock: false,
      maxQuantity: 0,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
  } | null>(null);

  // Cálculos do carrinho
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 25;
  const couponDiscount = appliedCoupon
    ? (subtotal * appliedCoupon.discount) / 100
    : 0;
  const total = subtotal + shipping - couponDiscount;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(newQuantity, item.maxQuantity) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    // Simulação de cupons válidos
    const validCoupons = {
      DESCONTO10: 10,
      PRIMEIRA20: 20,
      FRETE15: 15,
    };

    const discount =
      validCoupons[couponCode.toUpperCase() as keyof typeof validCoupons];

    if (discount) {
      setAppliedCoupon({ code: couponCode.toUpperCase(), discount });
      setCouponCode("");
    } else {
      alert("Cupom inválido!");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const inStockItems = cartItems.filter((item) => item.inStock);
  const outOfStockItems = cartItems.filter((item) => !item.inStock);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950/20 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none z-0" />

      <Header />

      {/* Page Content */}
      <div className="pt-24 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Link
                href="/comercial"
                className="text-zinc-400 hover:text-white flex justify-center items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continuar Comprando
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Carrinho de Compras
            </h1>
            <p className="text-zinc-400">
              {cartItems.length} {cartItems.length === 1 ? "item" : "itens"} no
              seu carrinho
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Carrinho Vazio */
            <div className="text-center py-16">
              <ShoppingCart className="w-24 h-24 text-zinc-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Seu carrinho está vazio
              </h2>
              <p className="text-zinc-400 mb-8">
                Adicione alguns produtos incríveis ao seu carrinho!
              </p>
              <Link href="/comercial">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explorar Produtos
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Lista de Itens */}
              <div className="lg:col-span-2 space-y-6">
                {/* Itens em Estoque */}
                {inStockItems.length > 0 && (
                  <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <ShoppingCart className="w-5 h-5" />
                        Itens Disponíveis ({inStockItems.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {inStockItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 p-4 bg-zinc-800/30 rounded-lg"
                        >
                          {/* Imagem do Produto */}
                          <div className="w-20 h-20 bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Informações do Produto */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-white truncate">
                              {item.name}
                            </h3>
                            <p className="text-sm text-zinc-400 mb-2">
                              {item.category}
                            </p>

                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg font-bold text-blue-400">
                                {formatPrice(item.price)}
                              </span>
                              {item.originalPrice && (
                                <span className="text-sm text-zinc-500 line-through">
                                  {formatPrice(item.originalPrice)}
                                </span>
                              )}
                            </div>

                            {/* Controles de Quantidade */}
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  disabled={item.quantity <= 1}
                                  className="w-8 h-8 p-0 bg-zinc-800 hover:bg-zinc-700"
                                >
                                  <Minus className="w-4 h-4" />
                                </Button>
                                <span className="w-8 text-center text-white">
                                  {item.quantity}
                                </span>
                                <Button
                                  size="sm"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  disabled={item.quantity >= item.maxQuantity}
                                  className="w-8 h-8 p-0 bg-zinc-800 hover:bg-zinc-700"
                                >
                                  <Plus className="w-4 h-4" />
                                </Button>
                              </div>

                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeItem(item.id)}
                                className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>

                            {item.quantity >= item.maxQuantity && (
                              <p className="text-xs text-amber-400 mt-1">
                                Quantidade máxima atingida
                              </p>
                            )}
                          </div>

                          {/* Subtotal do Item */}
                          <div className="text-right">
                            <p className="text-lg font-bold text-white">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Itens Fora de Estoque */}
                {outOfStockItems.length > 0 && (
                  <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-amber-400">
                        <Clock className="w-5 h-5" />
                        Itens Indisponíveis ({outOfStockItems.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {outOfStockItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 p-4 bg-zinc-800/20 rounded-lg opacity-60"
                        >
                          <div className="w-20 h-20 bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover grayscale"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-white truncate">
                              {item.name}
                            </h3>
                            <p className="text-sm text-zinc-400 mb-2">
                              {item.category}
                            </p>
                            <Badge
                              variant="outline"
                              className="text-amber-400 border-amber-400"
                            >
                              Fora de Estoque
                            </Badge>
                          </div>

                          <div className="flex items-center">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeItem(item.id)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Resumo do Pedido */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Cupom de Desconto */}
                  <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Tag className="w-5 h-5" />
                        Cupom de Desconto
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {!appliedCoupon ? (
                        <div className="flex gap-2">
                          <Input
                            placeholder="Digite seu cupom"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            className="bg-zinc-800 border-0 border-zinc-700 text-white"
                          />
                          <Button
                            onClick={applyCoupon}
                            className="whitespace-nowrap bg-zinc-700 hover:bg-zinc-800"
                          >
                            Aplicar
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                          <div>
                            <p className="text-green-400 font-medium">
                              {appliedCoupon.code}
                            </p>
                            <p className="text-sm text-green-300">
                              -{appliedCoupon.discount}% de desconto
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={removeCoupon}
                            className="text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Resumo do Pedido */}
                  <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Resumo do Pedido
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Subtotal</span>
                          <span className="text-white">
                            {formatPrice(subtotal)}
                          </span>
                        </div>

                        {appliedCoupon && (
                          <div className="flex justify-between">
                            <span className="text-green-400">
                              Desconto ({appliedCoupon.discount}%)
                            </span>
                            <span className="text-green-400">
                              -{formatPrice(couponDiscount)}
                            </span>
                          </div>
                        )}

                        <div className="flex justify-between">
                          <span className="text-zinc-400">Frete</span>
                          <span className="text-white">
                            {shipping === 0 ? (
                              <span className="text-green-400">Grátis</span>
                            ) : (
                              formatPrice(shipping)
                            )}
                          </span>
                        </div>

                        <Separator className="bg-zinc-700" />

                        <div className="flex justify-between text-lg font-bold">
                          <span className="text-white">Total</span>
                          <span className="text-blue-400">
                            {formatPrice(total)}
                          </span>
                        </div>
                      </div>

                      {shipping === 0 && (
                        <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                          <Truck className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-green-400">
                            Frete grátis para compras acima de R$ 500
                          </span>
                        </div>
                      )}

                      <Button
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={inStockItems.length === 0}
                      >
                        <CreditCard className="w-5 h-5 mr-2" />
                        Finalizar Compra
                      </Button>

                      {/* Informações de Segurança */}
                      <div className="space-y-2 pt-4 border-t border-zinc-800">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <Shield className="w-4 h-4 text-green-400" />
                          <span>Compra 100% segura</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <Truck className="w-4 h-4 text-blue-400" />
                          <span>Entrega rápida</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span>Catanduvas - SC e região</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
