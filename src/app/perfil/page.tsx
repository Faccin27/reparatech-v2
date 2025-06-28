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
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { Badge } from "../../components/ui/badge";
import {
  Mail,
  Lock,
  Calendar,
  ShoppingBag,
  Eye,
  EyeOff,
  Save,
  Package,
  Clock,
  CheckCircle,
  Truck,
  Star,
} from "lucide-react";

export default function PerfilPage() {
  const [email, setEmail] = useState("joao.silva@email.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const userData = {
    name: "João Silva Santos",
    email: "joao.silva@email.com",
    registrationDate: "15 de Janeiro, 2023",
    avatar: "JS", // Iniciais para o avatar
  };

  // Histórico de compras (simulado)
  const purchaseHistory = [
    {
      id: "RP001",
      date: "28 de Dezembro, 2024",
      items: [
        { name: "iPhone 15 Pro Max", price: 8999, quantity: 1 },
        { name: "Película 3D iPhone 15", price: 59, quantity: 1 },
      ],
      total: 9058,
      status: "entregue",
      rating: 5,
    },
    {
      id: "RP002",
      date: "15 de Dezembro, 2024",
      items: [
        {
          name: "Reparo de Tela - Samsung Galaxy S23",
          price: 450,
          quantity: 1,
        },
      ],
      total: 450,
      status: "concluido",
      rating: 5,
    },
    {
      id: "RP003",
      date: "02 de Dezembro, 2024",
      items: [
        { name: "AirPods Pro 2", price: 1899, quantity: 1 },
        { name: "Capinha Anti-Impacto", price: 89, quantity: 1 },
      ],
      total: 1988,
      status: "em_transito",
      rating: null,
    },
    {
      id: "RP004",
      date: "20 de Novembro, 2024",
      items: [{ name: "Carregador Turbo 65W", price: 149, quantity: 2 }],
      total: 298,
      status: "processando",
      rating: null,
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      entregue: {
        label: "Entregue",
        variant: "default" as const,
        icon: CheckCircle,
      },
      concluido: {
        label: "Concluído",
        variant: "default" as const,
        icon: CheckCircle,
      },
      em_transito: {
        label: "Em Trânsito",
        variant: "secondary" as const,
        icon: Truck,
      },
      processando: {
        label: "Processando",
        variant: "secondary" as const,
        icon: Clock,
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const handleEmailUpdate = () => {
    // Lógica para atualizar email
    console.log("Atualizando email para:", email);
  };

  const handlePasswordUpdate = () => {
    if (newPassword !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    // Lógica para atualizar senha
    console.log("Atualizando senha");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950/20 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none z-0" />

      <Header />

      {/* Page Content */}
      <div className="pt-24 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Meu Perfil
            </h1>
            <p className="text-zinc-400">
              Gerencie suas informações pessoais e histórico de compras
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar - Informações do Usuário */}
            <div className="lg:col-span-1 ">
              <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm sticky top-20">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {userData.avatar}
                    </span>
                  </div>
                  <CardTitle className="text-white">{userData.name}</CardTitle>
                  <p className="text-zinc-400">{userData.email}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-zinc-400">
                    <Calendar className="w-4 h-4" />
                    <span>Membro desde {userData.registrationDate}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-400">
                    <ShoppingBag className="w-4 h-4" />
                    <span>{purchaseHistory.length} compras realizadas</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Alterar Email */}
              <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Mail className="w-5 h-5" />
                    Alterar Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-zinc-300 mb-2">
                      Novo Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                  <Button
                    onClick={handleEmailUpdate}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Email
                  </Button>
                </CardContent>
              </Card>

              {/* Alterar Senha */}
              <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Lock className="w-5 h-5" />
                    Alterar Senha
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label
                      htmlFor="current-password"
                      className="text-zinc-300 mb-2"
                    >
                      Senha Atual
                    </Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showCurrentPassword ? "text" : "password"}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="bg-zinc-800 border-zinc-700 text-white pr-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="new-password"
                      className="text-zinc-300 mb-2"
                    >
                      Nova Senha
                    </Label>
                    <div className="relative">
                      <Input
                        id="new-password"
                        type={showNewPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="bg-zinc-800 border-zinc-700 text-white pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        {showNewPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="confirm-password"
                      className="text-zinc-300 mb-2"
                    >
                      Confirmar Nova Senha
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-zinc-800 border-zinc-700 text-white pr-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <Button
                    onClick={handlePasswordUpdate}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Alterar Senha
                  </Button>
                </CardContent>
              </Card>

              {/* Histórico de Compras */}
              <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Package className="w-5 h-5" />
                    Histórico de Compras
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {purchaseHistory.map((purchase, index) => (
                      <div key={purchase.id}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-white">
                              Pedido #{purchase.id}
                            </h3>
                            <p className="text-sm text-zinc-400">
                              {purchase.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 mt-2 sm:mt-0">
                            {getStatusBadge(purchase.status)}
                            {purchase.rating && (
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < purchase.rating!
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-zinc-600"
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          {purchase.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex justify-between items-center text-sm"
                            >
                              <span className="text-zinc-300">
                                {item.quantity}x {item.name}
                              </span>
                              <span className="text-zinc-400">
                                {formatPrice(item.price * item.quantity)}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-between items-center font-semibold">
                          <span className="text-white">Total:</span>
                          <span className="text-blue-400">
                            {formatPrice(purchase.total)}
                          </span>
                        </div>

                        {index < purchaseHistory.length - 1 && (
                          <Separator className="mt-6 bg-zinc-800" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
