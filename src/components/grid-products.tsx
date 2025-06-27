"use client";

import { useState, useMemo, useCallback, memo } from "react";

import { Star, ShoppingCart, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

import { Slider } from "@/components/ui/slider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GiPin } from "react-icons/gi";

// Dados de exemplo dos produtos

const products = [
  {
    id: 1,

    name: "iPhone 15 Pro Max",

    category: "iPhone",

    price: 8999,

    image: "/images/iphone.png",

    rating: 4.8,

    featured: true,
  },

  {
    id: 2,

    name: "Samsung Galaxy S24 Ultra",

    category: "Android",

    price: 6999,

    image: "/images/s24.png",

    rating: 4.7,

    featured: true,
  },

  {
    id: 3,

    name: "MacBook Pro M3",

    category: "Notebook",

    price: 12999,

    image: "/placeholder.svg",

    rating: 4.9,

    featured: false,
  },

  {
    id: 4,

    name: "Dell XPS 13",

    category: "Notebook",

    price: 5999,

    image: "/placeholder.svg",

    rating: 4.6,

    featured: false,
  },

  {
    id: 5,

    name: "PC Gamer RTX 4080",

    category: "Computadores",

    price: 8499,

    image: "/placeholder.svg",

    rating: 4.8,

    featured: true,
  },

  {
    id: 6,

    name: "PlayStation 5",

    category: "PlayStation",

    price: 3999,

    image: "/placeholder.svg",

    rating: 4.9,

    featured: true,
  },

  {
    id: 7,

    name: "Xbox Series S",

    category: "XBOX",

    price: 2299,

    image: "/placeholder.svg",

    rating: 4.7,

    featured: false,
  },

  {
    id: 8,

    name: "Película 3D iPhone 15",

    category: "Películas de vidro",

    price: 59,

    image: "/placeholder.svg",

    rating: 4.5,

    featured: false,
  },

  {
    id: 9,

    name: "Capinha Anti-Impacto Galaxy",

    category: "Capinhas resistentes",

    price: 89,

    image: "/placeholder.svg",

    rating: 4.4,

    featured: false,
  },

  {
    id: 10,

    name: "AirPods Pro 2",

    category: "Fones de ouvido",

    price: 1899,

    image: "/placeholder.svg",

    rating: 4.8,

    featured: true,
  },

  {
    id: 11,

    name: "Carregador Turbo 65W",

    category: "Carregadores",

    price: 149,

    image: "/placeholder.svg",

    rating: 4.6,

    featured: false,
  },

  {
    id: 12,

    name: "Cabo USB-C Premium",

    category: "Cabos USB",

    price: 79,

    image: "/placeholder.svg",

    rating: 4.3,

    featured: false,
  },

  {
    id: 13,

    name: "Suporte Articulado Monitor",

    category: "Suportes",

    price: 299,

    image: "/placeholder.svg",

    rating: 4.7,

    featured: false,
  },

  {
    id: 14,

    name: "iPhone 14",

    category: "iPhone",

    price: 4999,

    image: "/placeholder.svg",

    rating: 4.6,

    featured: false,
  },

  {
    id: 15,

    name: "Xiaomi Redmi Note 13",

    category: "Android",

    price: 1299,

    image: "/placeholder.svg",

    rating: 4.4,

    featured: false,
  },
];

const categories = [
  "Todos",

  "iPhone",

  "Android",

  "Computadores",

  "Notebook",

  "PlayStation",

  "XBOX",

  "Películas de vidro",

  "Capinhas resistentes",

  "Fones de ouvido",

  "Carregadores",

  "Cabos USB",

  "Suportes",
];

const sortOptions = [
  { value: "featured", label: "Em Destaque" },

  { value: "name-asc", label: "Nome A-Z" },

  { value: "name-desc", label: "Nome Z-A" },

  { value: "price-asc", label: "Menor Preço" },

  { value: "price-desc", label: "Maior Preço" },
];

// Componente de filtros separado e memoizado

const DesktopFilters = memo(
  ({
    sortBy,

    setSortBy,

    priceRange,

    setPriceRange,

    selectedCategory,

    setSelectedCategory,

    minPrice,

    maxPrice,

    formatPrice,
  }: {
    sortBy: string;

    setSortBy: (value: string) => void;

    priceRange: number[];

    setPriceRange: (value: number[]) => void;

    selectedCategory: string;

    setSelectedCategory: (value: string) => void;

    minPrice: number;

    maxPrice: number;

    formatPrice: (price: number) => string;
  }) => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white mb-4">Filtros</h3>

      {/* Ordenação */}

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Ordenar por
        </label>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
            <SelectValue />
          </SelectTrigger>

          <SelectContent className="bg-zinc-800 border-zinc-700">
            {sortOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-white hover:bg-zinc-700 focus:bg-zinc-700"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Filtro de Preço */}

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Faixa de Preço: {formatPrice(priceRange[0])} -{" "}
          {formatPrice(priceRange[1])}
        </label>

        <Slider
          key="desktop-slider"
          value={priceRange}
          onValueChange={setPriceRange}
          max={maxPrice}
          min={minPrice}
          step={50}
          className="w-full"
        />
      </div>

      {/* Categorias */}

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Categoria
        </label>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
);

// Componente de filtros mobile separado

const MobileFilters = memo(
  ({
    sortBy,

    setSortBy,

    priceRange,

    setPriceRange,

    selectedCategory,

    setSelectedCategory,

    minPrice,

    maxPrice,

    formatPrice,

    setIsFilterOpen,
  }: {
    sortBy: string;

    setSortBy: (value: string) => void;

    priceRange: number[];

    setPriceRange: (value: number[]) => void;

    selectedCategory: string;

    setSelectedCategory: (value: string) => void;

    minPrice: number;

    maxPrice: number;

    formatPrice: (price: number) => string;

    setIsFilterOpen: (value: boolean) => void;
  }) => (
    <div className="space-y-6">
      {/* Ordenação */}

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Ordenar por
        </label>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
            <SelectValue />
          </SelectTrigger>

          <SelectContent className="bg-zinc-800 border-zinc-700">
            {sortOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-white hover:bg-zinc-700 focus:bg-zinc-700"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Filtro de Preço */}

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Faixa de Preço: {formatPrice(priceRange[0])} -{" "}
          {formatPrice(priceRange[1])}
        </label>

        <Slider
          key="mobile-slider"
          value={priceRange}
          onValueChange={setPriceRange}
          max={maxPrice}
          min={minPrice}
          step={50}
          className="w-full"
        />
      </div>

      {/* Categorias */}

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Categoria
        </label>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);

                setIsFilterOpen(false);
              }}
              className={`px-3 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
);

DesktopFilters.displayName = "DesktopFilters";

MobileFilters.displayName = "MobileFilters";

export default function ProductsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const [sortBy, setSortBy] = useState("featured");

  const [priceRange, setPriceRange] = useState([0, 15000]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Calcular min e max preços dos produtos

  const minPrice = Math.min(...products.map((p) => p.price));

  const maxPrice = Math.max(...products.map((p) => p.price));

  // Filtrar e ordenar produtos

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        selectedCategory === "Todos" || product.category === selectedCategory;

      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return categoryMatch && priceMatch;
    });

    // Ordenar produtos

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);

        case "name-desc":
          return b.name.localeCompare(a.name);

        case "price-asc":
          return a.price - b.price;

        case "price-desc":
          return b.price - a.price;

        case "featured":
          return b.featured ? 1 : -1;

        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",

      currency: "BRL",
    }).format(price);
  }, []);

  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex gap-6">
        {/* Sidebar com Filtros - Desktop */}

        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-20 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-lg p-6">
            <DesktopFilters
              sortBy={sortBy}
              setSortBy={setSortBy}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              minPrice={minPrice}
              maxPrice={maxPrice}
              formatPrice={formatPrice}
            />
          </div>
        </div>

        {/* Área Principal dos Produtos */}

        <div className="flex-1 lg:-translate-y-8">
          {/* Header com botão de filtros mobile e resultados */}

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              {/* Botão Filtros - Mobile */}

              <div className="lg:hidden">
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Filtros
                    </Button>
                  </SheetTrigger>

                  <SheetContent
                    side="left"
                    className="bg-zinc-900 border-zinc-800 w-80 pt-16 sm:pt-20"
                  >
                    <SheetHeader className="pb-6">
                      <SheetTitle className="text-white text-left">
                        Filtros
                      </SheetTitle>

                      <SheetDescription className="text-zinc-400 text-left">
                        Filtre os produtos por categoria e preço
                      </SheetDescription>
                    </SheetHeader>

                    <div className="overflow-y-auto max-h-[calc(100vh-8rem)] px-2">
                      <MobileFilters
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        formatPrice={formatPrice}
                        setIsFilterOpen={setIsFilterOpen}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Resultados */}

              <div>
                <p className="text-zinc-400 text-sm sm:text-base">
                  Mostrando {filteredAndSortedProducts.length} produtos
                  {selectedCategory !== "Todos" && ` em "${selectedCategory}"`}
                </p>
              </div>
            </div>
          </div>

          {/* Grid de Produtos - Responsivo */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {filteredAndSortedProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group relative"
              >
                <CardContent className="p-4">
                  {/* Alfinete Em Destaque */}

                  {product.featured && (
                    <div className="absolute top-2 right-2 z-10">
                      <GiPin className="h-5 w-5 text-zinc-500 hover:text-blue-600 transition-all duration-1000" />
                    </div>
                  )}

                  {/* Imagem do Produto */}

                  <div className="aspect-square bg-zinc-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Informações do Produto */}

                  <div className="space-y-2">
                    <h3 className="font-semibold text-white line-clamp-2 group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 sm:h-4 sm:w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-zinc-600"
                            }`}
                          />
                        ))}
                      </div>

                      <span className="text-xs sm:text-sm text-zinc-400">
                        ({product.rating})
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-500">
                      {product.category}
                    </p>

                    <div className="flex flex-col gap-2">
                      <span className="text-lg sm:text-xl font-bold text-blue-400">
                        {formatPrice(product.price)}
                      </span>

                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Comprar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mensagem quando não há produtos */}

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-zinc-400 mb-4">
                Nenhum produto encontrado
              </p>

              <p className="text-zinc-500">
                Tente ajustar os filtros para ver mais produtos
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
