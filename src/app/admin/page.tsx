"use client"

import { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Badge } from "../../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog"
import {
  Package,
  Users,
  ShoppingCart,
  Tag,
  Settings,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Save,
  Upload,
  BarChart3,
  DollarSign,
  Globe,
  X,
  FolderOpen,
} from "lucide-react"
import Image from "next/image"

// Dados simulados para categorias
const mockCategories = [
  { id: 1, name: "iPhone", createdAt: "2024-01-01" },
  { id: 2, name: "Android", createdAt: "2024-01-02" },
  { id: 3, name: "Notebook", createdAt: "2024-01-03" },
  { id: 4, name: "Computadores", createdAt: "2024-01-04" },
  { id: 5, name: "PlayStation", createdAt: "2024-01-05" },
  { id: 6, name: "XBOX", createdAt: "2024-01-06" },
  { id: 7, name: "Películas de vidro", createdAt: "2024-01-07" },
  { id: 8, name: "Capinhas resistentes", createdAt: "2024-01-08" },
  { id: 9, name: "Fones de ouvido", createdAt: "2024-01-09" },
  { id: 10, name: "Carregadores", createdAt: "2024-01-10" },
]

// Dados simulados para produtos
const mockProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description:
      "O iPhone 15 Pro Max representa o ápice da tecnologia móvel da Apple, oferecendo desempenho excepcional e recursos inovadores.",
    categoryId: 1,
    categoryName: "iPhone",
    price: 8999,
    originalPrice: 9999,
    stock: 5,
    status: "active",
    images: ["/images/iphone.png", "/images/s24.png"],
    featured: true,
    features: [
      "Tela Super Retina XDR de 6,7 polegadas",
      "Chip A17 Pro com GPU de 6 núcleos",
      "Sistema de câmera Pro com teleobjetiva 5x",
      "Estrutura em titânio aeroespacial",
    ],
    productInfo: [
      { label: "SKU", value: "IPH15PM-256-TIT" },
      { label: "Marca", value: "Apple" },
      { label: "Condição", value: "Novo" },
      { label: "Garantia", value: "12 meses" },
    ],
    specifications: [
      { label: "Tela", value: "6,7 polegadas Super Retina XDR" },
      { label: "Processador", value: "Chip A17 Pro" },
      { label: "Armazenamento", value: "256GB" },
      { label: "Câmera Principal", value: "48MP com teleobjetiva 5x" },
    ],
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    description:
      "O Galaxy S24 Ultra oferece a melhor experiência Android com recursos avançados de IA e câmera profissional.",
    categoryId: 2,
    categoryName: "Android",
    price: 6999,
    stock: 8,
    status: "active",
    images: ["/images/s24.png"],
    featured: true,
    features: [
      "Tela Dynamic AMOLED 2X de 6,8 polegadas",
      "Processador Snapdragon 8 Gen 3",
      "Câmera principal de 200MP",
      "S Pen integrada",
    ],
    productInfo: [
      { label: "SKU", value: "S24U-256-BLK" },
      { label: "Marca", value: "Samsung" },
      { label: "Condição", value: "Novo" },
      { label: "Garantia", value: "12 meses" },
    ],
    specifications: [
      { label: "Tela", value: "6,8 polegadas Dynamic AMOLED 2X" },
      { label: "Processador", value: "Snapdragon 8 Gen 3" },
      { label: "Armazenamento", value: "256GB" },
      { label: "Câmera Principal", value: "200MP" },
    ],
    createdAt: "2024-01-10",
  },
]

const mockUsers = [
  {
    id: 1,
    name: "João Silva Santos",
    email: "joao.silva@email.com",
    role: "customer",
    status: "active",
    orders: 5,
    totalSpent: 15000,
    createdAt: "2023-01-15",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    role: "customer",
    status: "active",
    orders: 12,
    totalSpent: 28500,
    createdAt: "2023-03-20",
  },
  {
    id: 3,
    name: "Pedro Santos",
    email: "pedro.santos@email.com",
    role: "admin",
    status: "active",
    orders: 0,
    totalSpent: 0,
    createdAt: "2023-01-01",
  },
]

const mockCoupons = [
  {
    id: 1,
    code: "DESCONTO10",
    discount: 10,
    type: "percentage",
    status: "active",
    usageLimit: 100,
    usageCount: 45,
    expiresAt: "2024-12-31",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    code: "PRIMEIRA20",
    discount: 20,
    type: "percentage",
    status: "active",
    usageLimit: 50,
    usageCount: 12,
    expiresAt: "2024-06-30",
    createdAt: "2024-01-15",
  },
  {
    id: 3,
    code: "FRETE15",
    discount: 15,
    type: "fixed",
    status: "inactive",
    usageLimit: 200,
    usageCount: 89,
    expiresAt: "2024-03-31",
    createdAt: "2023-12-01",
  },
]

const mockOrders = [
  {
    id: "RP001",
    customer: "João Silva Santos",
    total: 9058,
    status: "delivered",
    items: 2,
    date: "2024-12-28",
    paymentMethod: "credit_card",
  },
  {
    id: "RP002",
    customer: "Maria Oliveira",
    total: 450,
    status: "completed",
    items: 1,
    date: "2024-12-15",
    paymentMethod: "pix",
  },
  {
    id: "RP003",
    customer: "Pedro Santos",
    total: 1988,
    status: "processing",
    items: 2,
    date: "2024-12-02",
    paymentMethod: "credit_card",
  },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [productsSubTab, setProductsSubTab] = useState("products")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Estados para diálogos
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false)
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false)
  const [isCouponDialogOpen, setIsCouponDialogOpen] = useState(false)

  // Estados para edição
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [editingCoupon, setEditingCoupon] = useState<any>(null)

  // Estados para formulário de produto
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    categoryId: "",
    price: "",
    originalPrice: "",
    stock: "",
    images: [""],
    features: [""],
    productInfo: [{ label: "", value: "" }],
    specifications: [{ label: "", value: "" }],
    featured: false,
  })

  // Estados para formulário de categoria
  const [categoryForm, setCategoryForm] = useState({
    name: "",
  })

  // Estados para configurações do site
  const [siteSettings, setSiteSettings] = useState({
    title: "Reparatech.pro - Assistência Técnica e Loja de Celulares",
    description: "Assistência técnica especializada e venda de dispositivos eletrônicos em Catanduvas - SC",
    keywords: "assistência técnica, celulares, smartphones, reparo, Catanduvas, Santa Catarina",
    favicon: "/favicon.ico",
    logo: "/logo.png",
    phone: "(51) 99999-9999",
    email: "contato@reparatech.pro",
    address: "Centro - Catanduvas, Santa Catarina",
    socialMedia: {
      instagram: "@reparatech.pro",
      whatsapp: "5551999999999",
      facebook: "reparatech.pro",
    },
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  const getStatusBadge = (
    status: string,
    type: "product" | "user" | "coupon" | "order" = "product"
  ) => {
    type StatusConfig = { label: string; variant: "default" | "secondary" | "destructive" };

    const statusConfig: Record<
      "product" | "user" | "coupon" | "order",
      Record<string, StatusConfig>
    > = {
      product: {
        active: { label: "Ativo", variant: "default" },
        inactive: { label: "Inativo", variant: "secondary" },
      },
      user: {
        active: { label: "Ativo", variant: "default" },
        inactive: { label: "Inativo", variant: "secondary" },
        banned: { label: "Banido", variant: "destructive" },
      },
      coupon: {
        active: { label: "Ativo", variant: "default" },
        inactive: { label: "Inativo", variant: "secondary" },
        expired: { label: "Expirado", variant: "destructive" },
      },
      order: {
        delivered: { label: "Entregue", variant: "default" },
        completed: { label: "Concluído", variant: "default" },
        processing: { label: "Processando", variant: "secondary" },
        cancelled: { label: "Cancelado", variant: "destructive" },
      },
    };

    const typeConfig = statusConfig[type];
    const config = typeConfig[status] as StatusConfig | undefined;

    if (!config) {
      return <Badge variant="secondary">Desconhecido</Badge>;
    }

    return <Badge variant={config.variant}>{config.label}</Badge>;
  }

  // Funções para gerenciar arrays dinâmicos
  const addFeature = () => {
    setProductForm((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }))
  }

  const removeFeature = (index: number) => {
    setProductForm((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }))
  }

  const updateFeature = (index: number, value: string) => {
    setProductForm((prev) => ({
      ...prev,
      features: prev.features.map((feature, i) => (i === index ? value : feature)),
    }))
  }

  const addProductInfo = () => {
    setProductForm((prev) => ({
      ...prev,
      productInfo: [...prev.productInfo, { label: "", value: "" }],
    }))
  }

  const removeProductInfo = (index: number) => {
    setProductForm((prev) => ({
      ...prev,
      productInfo: prev.productInfo.filter((_, i) => i !== index),
    }))
  }

  const updateProductInfo = (index: number, field: "label" | "value", value: string) => {
    setProductForm((prev) => ({
      ...prev,
      productInfo: prev.productInfo.map((info, i) => (i === index ? { ...info, [field]: value } : info)),
    }))
  }

  const addSpecification = () => {
    setProductForm((prev) => ({
      ...prev,
      specifications: [...prev.specifications, { label: "", value: "" }],
    }))
  }

  const removeSpecification = (index: number) => {
    setProductForm((prev) => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index),
    }))
  }

  const updateSpecification = (index: number, field: "label" | "value", value: string) => {
    setProductForm((prev) => ({
      ...prev,
      specifications: prev.specifications.map((spec, i) => (i === index ? { ...spec, [field]: value } : spec)),
    }))
  }

  const addImage = () => {
    setProductForm((prev) => ({
      ...prev,
      images: [...prev.images, ""],
    }))
  }

  const removeImage = (index: number) => {
    setProductForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const updateImage = (index: number, value: string) => {
    setProductForm((prev) => ({
      ...prev,
      images: prev.images.map((image, i) => (i === index ? value : image)),
    }))
  }

  // Funções de reset
  const resetProductForm = () => {
    setProductForm({
      name: "",
      description: "",
      categoryId: "",
      price: "",
      originalPrice: "",
      stock: "",
      images: [""],
      features: [""],
      productInfo: [{ label: "", value: "" }],
      specifications: [{ label: "", value: "" }],
      featured: false,
    })
    setEditingProduct(null)
  }

  const resetCategoryForm = () => {
    setCategoryForm({ name: "" })
    setEditingCategory(null)
  }

  // Funções de manipulação
  const handleSaveSettings = () => {
    console.log("Salvando configurações:", siteSettings)
  }

  const handleDeleteProduct = (id: number) => {
    console.log("Deletando produto:", id)
  }

  const handleDeleteCategory = (id: number) => {
    console.log("Deletando categoria:", id)
  }

  const handleDeleteUser = (id: number) => {
    console.log("Deletando usuário:", id)
  }

  const handleDeleteCoupon = (id: number) => {
    console.log("Deletando cupom:", id)
  }

  const handleSaveProduct = () => {
    console.log("Salvando produto:", productForm)
    setIsProductDialogOpen(false)
    resetProductForm()
  }

  const handleSaveCategory = () => {
    console.log("Salvando categoria:", categoryForm)
    setIsCategoryDialogOpen(false)
    resetCategoryForm()
  }

  const handleEditProduct = (product: any) => {
    setEditingProduct(product)
    setProductForm({
      name: product.name,
      description: product.description,
      categoryId: product.categoryId.toString(),
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || "",
      stock: product.stock.toString(),
      images: product.images || [""],
      features: product.features || [""],
      productInfo: product.productInfo || [{ label: "", value: "" }],
      specifications: product.specifications || [{ label: "", value: "" }],
      featured: product.featured || false,
    })
    setIsProductDialogOpen(true)
  }

  const handleEditCategory = (category: any) => {
    setEditingCategory(category)
    setCategoryForm({ name: category.name })
    setIsCategoryDialogOpen(true)
  }

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
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Painel Administrativo
            </h1>
            <p className="text-zinc-400">Gerencie todos os aspectos da sua loja</p>
          </div>

          {/* Admin Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 bg-zinc-800/50 mb-8">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-600 text-white">
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-blue-600 text-white">
                <Package className="w-4 h-4 mr-2" />
                Produtos
              </TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:bg-blue-600 text-white">
                <Users className="w-4 h-4 mr-2" />
                Usuários
              </TabsTrigger>
              <TabsTrigger value="orders" className="data-[state=active]:bg-blue-600 text-white">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Vendas
              </TabsTrigger>
              <TabsTrigger value="coupons" className="data-[state=active]:bg-blue-600 text-white">
                <Tag className="w-4 h-4 mr-2" />
                Cupons
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-blue-600 text-white">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-zinc-400">Vendas Totais</CardTitle>
                    <DollarSign className="h-4 w-4 text-blue-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">R$ 45.231,89</div>
                    <p className="text-xs text-green-400">+20.1% em relação ao mês passado</p>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-zinc-400">Pedidos</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-blue-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">+2350</div>
                    <p className="text-xs text-green-400">+180.1% em relação ao mês passado</p>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-zinc-400">Produtos</CardTitle>
                    <Package className="h-4 w-4 text-blue-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">+12,234</div>
                    <p className="text-xs text-green-400">+19% em relação ao mês passado</p>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-zinc-400">Usuários Ativos</CardTitle>
                    <Users className="h-4 w-4 text-blue-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">+573</div>
                    <p className="text-xs text-green-400">+201 desde a semana passada</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Vendas Recentes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockOrders.slice(0, 5).map((order) => (
                      <div key={order.id} className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">#{order.id}</p>
                          <p className="text-sm text-zinc-400">{order.customer}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium">{formatPrice(order.total)}</p>
                          {getStatusBadge(order.status, "order")}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Produtos em Baixo Estoque</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockProducts
                      .filter((product) => product.stock <= 5)
                      .map((product) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Image
                              src={product.images[0] || "/placeholder.svg"}
                              alt={product.name}
                              width={40}
                              height={40}
                              className="rounded-lg"
                            />
                            <div>
                              <p className="text-white font-medium">{product.name}</p>
                              <p className="text-sm text-zinc-400">{product.categoryName}</p>
                            </div>
                          </div>
                          <Badge variant={product.stock === 0 ? "destructive" : "secondary"}>
                            {product.stock} em estoque
                          </Badge>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Products Tab */}
            <TabsContent value="products" className="space-y-6">
              {/* Products Sub-tabs */}
              <Tabs value={productsSubTab} onValueChange={setProductsSubTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-zinc-800/50 mb-6">
                  <TabsTrigger value="products" className="data-[state=active]:bg-blue-600 text-white">
                    <Package className="w-4 h-4 mr-2" />
                    Produtos
                  </TabsTrigger>
                  <TabsTrigger value="categories" className="data-[state=active]:bg-blue-600 text-white">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    Categorias
                  </TabsTrigger>
                </TabsList>

                {/* Products Sub-tab */}
                <TabsContent value="products" className="space-y-6">
                  {/* Products Header */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="flex flex-col sm:flex-row gap-4 flex-1">
                      <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                        <Input
                          placeholder="Buscar produtos..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-full sm:w-48 bg-zinc-800 border-zinc-700 text-white">
                          <SelectValue placeholder="Categoria" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-800 border-zinc-700">
                          <SelectItem value="all" className="text-white">
                            Todas
                          </SelectItem>
                          {mockCategories.map((category) => (
                            <SelectItem key={category.id} value={category.id.toString()} className="text-white">
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Dialog
                      open={isProductDialogOpen}
                      onOpenChange={(open) => {
                        setIsProductDialogOpen(open)
                        if (!open) resetProductForm()
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-2" />
                          Novo Produto
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{editingProduct ? "Editar Produto" : "Novo Produto"}</DialogTitle>
                          <DialogDescription className="text-zinc-400">
                            {editingProduct ? "Edite as informações do produto" : "Adicione um novo produto à loja"}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-6 py-4">
                          {/* Informações Básicas */}
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Informações Básicas</h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="name" className="text-zinc-300">
                                  Nome
                                </Label>
                                <Input
                                  id="name"
                                  value={productForm.name}
                                  onChange={(e) => setProductForm((prev) => ({ ...prev, name: e.target.value }))}
                                  className="bg-zinc-800 border-zinc-700 text-white"
                                />
                              </div>
                              <div>
                                <Label htmlFor="category" className="text-zinc-300">
                                  Categoria
                                </Label>
                                <Select
                                  value={productForm.categoryId}
                                  onValueChange={(value) => setProductForm((prev) => ({ ...prev, categoryId: value }))}
                                >
                                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                                    <SelectValue placeholder="Selecione uma categoria" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-zinc-800 border-zinc-700">
                                    {mockCategories.map((category) => (
                                      <SelectItem
                                        key={category.id}
                                        value={category.id.toString()}
                                        className="text-white"
                                      >
                                        {category.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="description" className="text-zinc-300">
                                Descrição
                              </Label>
                              <Textarea
                                id="description"
                                value={productForm.description}
                                onChange={(e) => setProductForm((prev) => ({ ...prev, description: e.target.value }))}
                                className="bg-zinc-800 border-zinc-700 text-white"
                                rows={3}
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div>
                                <Label htmlFor="price" className="text-zinc-300">
                                  Preço
                                </Label>
                                <Input
                                  id="price"
                                  type="number"
                                  value={productForm.price}
                                  onChange={(e) => setProductForm((prev) => ({ ...prev, price: e.target.value }))}
                                  className="bg-zinc-800 border-zinc-700 text-white"
                                />
                              </div>
                              <div>
                                <Label htmlFor="originalPrice" className="text-zinc-300">
                                  Preço Original
                                </Label>
                                <Input
                                  id="originalPrice"
                                  type="number"
                                  value={productForm.originalPrice}
                                  onChange={(e) =>
                                    setProductForm((prev) => ({ ...prev, originalPrice: e.target.value }))
                                  }
                                  className="bg-zinc-800 border-zinc-700 text-white"
                                />
                              </div>
                              <div>
                                <Label htmlFor="stock" className="text-zinc-300">
                                  Estoque
                                </Label>
                                <Input
                                  id="stock"
                                  type="number"
                                  value={productForm.stock}
                                  onChange={(e) => setProductForm((prev) => ({ ...prev, stock: e.target.value }))}
                                  className="bg-zinc-800 border-zinc-700 text-white"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Imagens */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white">Imagens</h3>
                              <Button
                                type="button"
                                onClick={addImage}
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Adicionar Imagem
                              </Button>
                            </div>
                            {productForm.images.map((image, index) => (
                              <div key={index} className="flex gap-2">
                                <Input
                                  value={image}
                                  onChange={(e) => updateImage(index, e.target.value)}
                                  placeholder="URL da imagem"
                                  className="bg-zinc-800 border-zinc-700 text-white"
                                />
                                <Button variant="outline" className="border-zinc-700 text-zinc-300 bg-transparent">
                                  <Upload className="w-4 h-4" />
                                </Button>
                                {productForm.images.length > 1 && (
                                  <Button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-400 hover:text-red-300"
                                  >
                                    <X className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Características Principais */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white">Características Principais</h3>
                              <Button
                                type="button"
                                onClick={addFeature}
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Adicionar Característica
                              </Button>
                            </div>
                            {productForm.features.map((feature, index) => (
                              <div key={index} className="flex gap-2">
                                <Input
                                  value={feature}
                                  onChange={(e) => updateFeature(index, e.target.value)}
                                  placeholder="Característica do produto"
                                  className="bg-zinc-800 border-zinc-700 text-white"
                                />
                                {productForm.features.length > 1 && (
                                  <Button
                                    type="button"
                                    onClick={() => removeFeature(index)}
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-400 hover:text-red-300"
                                  >
                                    <X className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Informações do Produto */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white">Informações do Produto</h3>
                              <Button
                                type="button"
                                onClick={addProductInfo}
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Adicionar Informação
                              </Button>
                            </div>
                            {productForm.productInfo.map((info, index) => (
                              <div key={index} className="flex gap-2">
                                <Input
                                  value={info.label}
                                  onChange={(e) => updateProductInfo(index, "label", e.target.value)}
                                  placeholder="Tipo de informação (ex: SKU, Marca)"
                                  className="bg-zinc-800 border-zinc-700 text-white"
                                />
                                <Input
                                  value={info.value}
                                  onChange={(e) => updateProductInfo(index, "value", e.target.value)}
                                  placeholder="Valor da informação"
                                  className="bg-zinc-800 border-zinc-700 text-white"
                                />
                                {productForm.productInfo.length > 1 && (
                                  <Button
                                    type="button"
                                    onClick={() => removeProductInfo(index)}
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-400 hover:text-red-300"
                                  >
                                    <X className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Especificações */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white">Especificações Técnicas</h3>
                              <Button
                                type="button"
                                onClick={addSpecification}
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Adicionar Especificação
                              </Button>
                            </div>
                            {productForm.specifications.map((spec, index) => (
                              <div key={index} className="flex gap-2">
                                <Input
                                  value={spec.label}
                                  onChange={(e) => updateSpecification(index, "label", e.target.value)}
                                  placeholder="Especificação (ex: Tela, Processador)"
                                  className="bg-zinc-800 border-zinc-700 text-white"
                                />
                                <Input
                                  value={spec.value}
                                  onChange={(e) => updateSpecification(index, "value", e.target.value)}
                                  placeholder="Valor da especificação"
                                  className="bg-zinc-800 border-zinc-700 text-white"
                                />
                                {productForm.specifications.length > 1 && (
                                  <Button
                                    type="button"
                                    onClick={() => removeSpecification(index)}
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-400 hover:text-red-300"
                                  >
                                    <X className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            variant="outline"
                            onClick={() => setIsProductDialogOpen(false)}
                            className="border-zinc-700 text-zinc-300"
                          >
                            Cancelar
                          </Button>
                          <Button onClick={handleSaveProduct} className="bg-blue-600 hover:bg-blue-700">
                            {editingProduct ? "Salvar" : "Criar"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Products Table */}
                  <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="border-b border-zinc-800">
                            <tr>
                              <th className="text-left p-4 text-zinc-400 font-medium">Produto</th>
                              <th className="text-left p-4 text-zinc-400 font-medium">Categoria</th>
                              <th className="text-left p-4 text-zinc-400 font-medium">Preço</th>
                              <th className="text-left p-4 text-zinc-400 font-medium">Estoque</th>
                              <th className="text-left p-4 text-zinc-400 font-medium">Status</th>
                              <th className="text-left p-4 text-zinc-400 font-medium">Ações</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mockProducts.map((product) => (
                              <tr key={product.id} className="border-b border-zinc-800/50">
                                <td className="p-4">
                                  <div className="flex items-center gap-3">
                                    <Image
                                      src={product.images[0] || "/placeholder.svg"}
                                      alt={product.name}
                                      width={40}
                                      height={40}
                                      className="rounded-lg"
                                    />
                                    <div>
                                      <p className="text-white font-medium">{product.name}</p>
                                      {product.featured && (
                                        <Badge variant="secondary" className="text-xs">
                                          Destaque
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </td>
                                <td className="p-4 text-zinc-300">{product.categoryName}</td>
                                <td className="p-4">
                                  <div>
                                    <p className="text-white font-medium">{formatPrice(product.price)}</p>
                                    {product.originalPrice && (
                                      <p className="text-xs text-zinc-500 line-through">
                                        {formatPrice(product.originalPrice)}
                                      </p>
                                    )}
                                  </div>
                                </td>
                                <td className="p-4">
                                  <Badge
                                    variant={
                                      product.stock === 0 ? "destructive" : product.stock <= 5 ? "secondary" : "default"
                                    }
                                  >
                                    {product.stock}
                                  </Badge>
                                </td>
                                <td className="p-4">{getStatusBadge(product.status, "product")}</td>
                                <td className="p-4">
                                  <div className="flex gap-2">
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => handleEditProduct(product)}
                                      className="text-blue-400 hover:text-blue-300"
                                    >
                                      <Edit className="w-4 h-4" />
                                    </Button>
                                    <AlertDialog>
                                      <AlertDialogTrigger asChild>
                                        <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                                          <Trash2 className="w-4 h-4" />
                                        </Button>
                                      </AlertDialogTrigger>
                                      <AlertDialogContent className="bg-zinc-900 border-zinc-800">
                                        <AlertDialogHeader>
                                          <AlertDialogTitle className="text-white">Confirmar exclusão</AlertDialogTitle>
                                          <AlertDialogDescription className="text-zinc-400">
                                            Tem certeza que deseja excluir este produto? Esta ação não pode ser
                                            desfeita.
                                          </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                          <AlertDialogCancel className="border-zinc-700 text-zinc-300">
                                            Cancelar
                                          </AlertDialogCancel>
                                          <AlertDialogAction
                                            onClick={() => handleDeleteProduct(product.id)}
                                            className="bg-red-600 hover:bg-red-700"
                                          >
                                            Excluir
                                          </AlertDialogAction>
                                        </AlertDialogFooter>
                                      </AlertDialogContent>
                                    </AlertDialog>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Categories Sub-tab */}
                <TabsContent value="categories" className="space-y-6">
                  {/* Categories Header */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                      <Input
                        placeholder="Buscar categorias..."
                        className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <Dialog
                      open={isCategoryDialogOpen}
                      onOpenChange={(open) => {
                        setIsCategoryDialogOpen(open)
                        if (!open) resetCategoryForm()
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-2" />
                          Nova Categoria
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
                        <DialogHeader>
                          <DialogTitle>{editingCategory ? "Editar Categoria" : "Nova Categoria"}</DialogTitle>
                          <DialogDescription className="text-zinc-400">
                            {editingCategory ? "Edite o nome da categoria" : "Adicione uma nova categoria de produtos"}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div>
                            <Label htmlFor="categoryName" className="text-zinc-300">
                              Nome da Categoria
                            </Label>
                            <Input
                              id="categoryName"
                              value={categoryForm.name}
                              onChange={(e) => setCategoryForm({ name: e.target.value })}
                              className="bg-zinc-800 border-zinc-700 text-white"
                              placeholder="Ex: iPhone, Android, Notebooks..."
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            variant="outline"
                            onClick={() => setIsCategoryDialogOpen(false)}
                            className="border-zinc-700 text-zinc-300"
                          >
                            Cancelar
                          </Button>
                          <Button onClick={handleSaveCategory} className="bg-blue-600 hover:bg-blue-700">
                            {editingCategory ? "Salvar" : "Criar"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Categories Table */}
                  <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="border-b border-zinc-800">
                            <tr>
                              <th className="text-left p-4 text-zinc-400 font-medium">Nome</th>
                              <th className="text-left p-4 text-zinc-400 font-medium">Produtos</th>
                              <th className="text-left p-4 text-zinc-400 font-medium">Criado em</th>
                              <th className="text-left p-4 text-zinc-400 font-medium">Ações</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mockCategories.map((category) => {
                              const productCount = mockProducts.filter((p) => p.categoryId === category.id).length
                              return (
                                <tr key={category.id} className="border-b border-zinc-800/50">
                                  <td className="p-4">
                                    <p className="text-white font-medium">{category.name}</p>
                                  </td>
                                  <td className="p-4">
                                    <Badge variant="secondary">{productCount} produtos</Badge>
                                  </td>
                                  <td className="p-4 text-zinc-300">{category.createdAt}</td>
                                  <td className="p-4">
                                    <div className="flex gap-2">
                                      <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={() => handleEditCategory(category)}
                                        className="text-blue-400 hover:text-blue-300"
                                      >
                                        <Edit className="w-4 h-4" />
                                      </Button>
                                      <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                          <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                                            <Trash2 className="w-4 h-4" />
                                          </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent className="bg-zinc-900 border-zinc-800">
                                          <AlertDialogHeader>
                                            <AlertDialogTitle className="text-white">
                                              Confirmar exclusão
                                            </AlertDialogTitle>
                                            <AlertDialogDescription className="text-zinc-400">
                                              Tem certeza que deseja excluir esta categoria? Todos os produtos desta
                                              categoria serão afetados.
                                            </AlertDialogDescription>
                                          </AlertDialogHeader>
                                          <AlertDialogFooter>
                                            <AlertDialogCancel className="border-zinc-700 text-zinc-300">
                                              Cancelar
                                            </AlertDialogCancel>
                                            <AlertDialogAction
                                              onClick={() => handleDeleteCategory(category.id)}
                                              className="bg-red-600 hover:bg-red-700"
                                            >
                                              Excluir
                                            </AlertDialogAction>
                                          </AlertDialogFooter>
                                        </AlertDialogContent>
                                      </AlertDialog>
                                    </div>
                                  </td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                  <Input placeholder="Buscar usuários..." className="pl-10 bg-zinc-800 border-zinc-700 text-white" />
                </div>
              </div>

              <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-zinc-800">
                        <tr>
                          <th className="text-left p-4 text-zinc-400 font-medium">Usuário</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Função</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Pedidos</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Total Gasto</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Status</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockUsers.map((user) => (
                          <tr key={user.id} className="border-b border-zinc-800/50">
                            <td className="p-4">
                              <div>
                                <p className="text-white font-medium">{user.name}</p>
                                <p className="text-sm text-zinc-400">{user.email}</p>
                              </div>
                            </td>
                            <td className="p-4">
                              <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                                {user.role === "admin" ? "Admin" : "Cliente"}
                              </Badge>
                            </td>
                            <td className="p-4 text-zinc-300">{user.orders}</td>
                            <td className="p-4 text-white font-medium">{formatPrice(user.totalSpent)}</td>
                            <td className="p-4">{getStatusBadge(user.status, "user")}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent className="bg-zinc-900 border-zinc-800">
                                    <AlertDialogHeader>
                                      <AlertDialogTitle className="text-white">Confirmar exclusão</AlertDialogTitle>
                                      <AlertDialogDescription className="text-zinc-400">
                                        Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel className="border-zinc-700 text-zinc-300">
                                        Cancelar
                                      </AlertDialogCancel>
                                      <AlertDialogAction
                                        onClick={() => handleDeleteUser(user.id)}
                                        className="bg-red-600 hover:bg-red-700"
                                      >
                                        Excluir
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                  <Input placeholder="Buscar pedidos..." className="pl-10 bg-zinc-800 border-zinc-700 text-white" />
                </div>
                <Select>
                  <SelectTrigger className="w-full sm:w-48 bg-zinc-800 border-zinc-700 text-white">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="all" className="text-white">
                      Todos
                    </SelectItem>
                    <SelectItem value="processing" className="text-white">
                      Processando
                    </SelectItem>
                    <SelectItem value="delivered" className="text-white">
                      Entregue
                    </SelectItem>
                    <SelectItem value="cancelled" className="text-white">
                      Cancelado
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-zinc-800">
                        <tr>
                          <th className="text-left p-4 text-zinc-400 font-medium">Pedido</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Cliente</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Data</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Total</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Status</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockOrders.map((order) => (
                          <tr key={order.id} className="border-b border-zinc-800/50">
                            <td className="p-4">
                              <div>
                                <p className="text-white font-medium">#{order.id}</p>
                                <p className="text-sm text-zinc-400">{order.items} itens</p>
                              </div>
                            </td>
                            <td className="p-4 text-zinc-300">{order.customer}</td>
                            <td className="p-4 text-zinc-300">{order.date}</td>
                            <td className="p-4 text-white font-medium">{formatPrice(order.total)}</td>
                            <td className="p-4">{getStatusBadge(order.status, "order")}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Coupons Tab */}
            <TabsContent value="coupons" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                  <Input placeholder="Buscar cupons..." className="pl-10 bg-zinc-800 border-zinc-700 text-white" />
                </div>
                <Dialog open={isCouponDialogOpen} onOpenChange={setIsCouponDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Novo Cupom
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
                    <DialogHeader>
                      <DialogTitle>{editingCoupon ? "Editar Cupom" : "Novo Cupom"}</DialogTitle>
                      <DialogDescription className="text-zinc-400">
                        {editingCoupon ? "Edite as informações do cupom" : "Crie um novo cupom de desconto"}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="code" className="text-zinc-300">
                            Código
                          </Label>
                          <Input id="code" className="bg-zinc-800 border-zinc-700 text-white" />
                        </div>
                        <div>
                          <Label htmlFor="type" className="text-zinc-300">
                            Tipo
                          </Label>
                          <Select>
                            <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-800 border-zinc-700">
                              <SelectItem value="percentage" className="text-white">
                                Porcentagem
                              </SelectItem>
                              <SelectItem value="fixed" className="text-white">
                                Valor fixo
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="discount" className="text-zinc-300">
                            Desconto
                          </Label>
                          <Input id="discount" type="number" className="bg-zinc-800 border-zinc-700 text-white" />
                        </div>
                        <div>
                          <Label htmlFor="usageLimit" className="text-zinc-300">
                            Limite de Uso
                          </Label>
                          <Input id="usageLimit" type="number" className="bg-zinc-800 border-zinc-700 text-white" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="expiresAt" className="text-zinc-300">
                          Data de Expiração
                        </Label>
                        <Input id="expiresAt" type="date" className="bg-zinc-800 border-zinc-700 text-white" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsCouponDialogOpen(false)}
                        className="border-zinc-700 text-zinc-300"
                      >
                        Cancelar
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700">{editingCoupon ? "Salvar" : "Criar"}</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-zinc-800">
                        <tr>
                          <th className="text-left p-4 text-zinc-400 font-medium">Código</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Desconto</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Uso</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Expira em</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Status</th>
                          <th className="text-left p-4 text-zinc-400 font-medium">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockCoupons.map((coupon) => (
                          <tr key={coupon.id} className="border-b border-zinc-800/50">
                            <td className="p-4">
                              <p className="text-white font-medium">{coupon.code}</p>
                            </td>
                            <td className="p-4 text-zinc-300">
                              {coupon.type === "percentage" ? `${coupon.discount}%` : formatPrice(coupon.discount)}
                            </td>
                            <td className="p-4 text-zinc-300">
                              {coupon.usageCount}/{coupon.usageLimit}
                            </td>
                            <td className="p-4 text-zinc-300">{coupon.expiresAt}</td>
                            <td className="p-4">{getStatusBadge(coupon.status, "coupon")}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => {
                                    setEditingCoupon(coupon)
                                    setIsCouponDialogOpen(true)
                                  }}
                                  className="text-blue-400 hover:text-blue-300"
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent className="bg-zinc-900 border-zinc-800">
                                    <AlertDialogHeader>
                                      <AlertDialogTitle className="text-white">Confirmar exclusão</AlertDialogTitle>
                                      <AlertDialogDescription className="text-zinc-400">
                                        Tem certeza que deseja excluir este cupom? Esta ação não pode ser desfeita.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel className="border-zinc-700 text-zinc-300">
                                        Cancelar
                                      </AlertDialogCancel>
                                      <AlertDialogAction
                                        onClick={() => handleDeleteCoupon(coupon.id)}
                                        className="bg-red-600 hover:bg-red-700"
                                      >
                                        Excluir
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <div className="grid gap-6">
                {/* Site Information */}
                <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Informações do Site
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="siteTitle" className="text-zinc-300">
                        Título do Site
                      </Label>
                      <Input
                        id="siteTitle"
                        value={siteSettings.title}
                        onChange={(e) => setSiteSettings({ ...siteSettings, title: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="siteDescription" className="text-zinc-300">
                        Descrição
                      </Label>
                      <Textarea
                        id="siteDescription"
                        value={siteSettings.description}
                        onChange={(e) => setSiteSettings({ ...siteSettings, description: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="siteKeywords" className="text-zinc-300">
                        Palavras-chave (SEO)
                      </Label>
                      <Input
                        id="siteKeywords"
                        value={siteSettings.keywords}
                        onChange={(e) => setSiteSettings({ ...siteSettings, keywords: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Informações de Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-zinc-300">
                          Telefone
                        </Label>
                        <Input
                          id="phone"
                          value={siteSettings.phone}
                          onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })}
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-zinc-300">
                          E-mail
                        </Label>
                        <Input
                          id="email"
                          value={siteSettings.email}
                          onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })}
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address" className="text-zinc-300">
                        Endereço
                      </Label>
                      <Input
                        id="address"
                        value={siteSettings.address}
                        onChange={(e) => setSiteSettings({ ...siteSettings, address: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Redes Sociais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="instagram" className="text-zinc-300">
                          Instagram
                        </Label>
                        <Input
                          id="instagram"
                          value={siteSettings.socialMedia.instagram}
                          onChange={(e) =>
                            setSiteSettings({
                              ...siteSettings,
                              socialMedia: { ...siteSettings.socialMedia, instagram: e.target.value },
                            })
                          }
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="whatsapp" className="text-zinc-300">
                          WhatsApp
                        </Label>
                        <Input
                          id="whatsapp"
                          value={siteSettings.socialMedia.whatsapp}
                          onChange={(e) =>
                            setSiteSettings({
                              ...siteSettings,
                              socialMedia: { ...siteSettings.socialMedia, whatsapp: e.target.value },
                            })
                          }
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="facebook" className="text-zinc-300">
                          Facebook
                        </Label>
                        <Input
                          id="facebook"
                          value={siteSettings.socialMedia.facebook}
                          onChange={(e) =>
                            setSiteSettings({
                              ...siteSettings,
                              socialMedia: { ...siteSettings.socialMedia, facebook: e.target.value },
                            })
                          }
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Save Button */}
                <div className="flex justify-end">
                  <Button onClick={handleSaveSettings} className="bg-blue-600 hover:bg-blue-700">
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Configurações
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
