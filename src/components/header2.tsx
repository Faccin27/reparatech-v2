"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { ShoppingBag, User, Menu, X, LogIn, Settings, LogOut, Mail } from "lucide-react"
import { useState } from "react"
import EnhancedLoginModal from "./login-modal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // Variável para simular login: 0 = não logado, 1 = logado
  const isLoggedIn = 1 // Mudado para 0

  const [userBalance] = useState(247.5)
  const [cartItems] = useState(2)
  const [userName] = useState("João Silva")
  const [userMail] = useState("Jhondoe@email.com")

  const navigationItems = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Loja", href: "#produtos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ]

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/30 supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Reparatech.pro
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-zinc-400 hover:text-blue-400 transition-colors duration-200 font-medium group"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* User Area */}
            <div className="flex items-center space-x-3">
              {isLoggedIn ? (
                /* Estado Logado */
                <>
                  {/* Carrinho */}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="relative bg-zinc-800/50 hover:bg-blue-600 text-zinc-300 hover:text-white transition-all duration-200"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    {cartItems > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-medium shadow-lg">
                        {cartItems}
                      </span>
                    )}
                  </Button>

                  {/* Menu do Usuário */}
                  <div className="relative group">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="flex items-center gap-2 hover:bg-zinc-800/50 text-zinc-300 hover:text-white transition-all duration-200 px-3"
                    >
                      <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="hidden sm:inline font-medium">{userName.split(" ")[0]}</span>
                    </Button>

                    {/* Dropdown */}
                    <div className="absolute right-0 top-full mt-2 w-56 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-3">
                        <div className="px-3 py-2 border-b border-zinc-700/50 mb-2">
                          <p className="text-sm font-medium text-white">{userName}</p>
                          <p className="text-xs text-zinc-400">{userMail}</p>
                        </div>

                        <div className="space-y-1">
                          <Link
                            href="/perfil"
                            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800/50 hover:text-white rounded-lg transition-all duration-200"
                          >
                            <User className="w-4 h-4" />
                            Meu Perfil
                          </Link>
                          <Link
                            href="/configuracoes"
                            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800/50 hover:text-white rounded-lg transition-all duration-200"
                          >
                            <Settings className="w-4 h-4" />
                            Configurações
                          </Link>
                          <hr className="border-zinc-700/50 my-2" />
                          <button className="flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-all duration-200 w-full text-left">
                            <LogOut className="w-4 h-4" />
                            Sair
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Estado Não Logado */
                <>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex items-center gap-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
                    onClick={() => setIsLoginModalOpen(true)}
                  >
                    <LogIn className="w-4 h-4" />
                    <span className="hidden sm:inline">Login</span>
                  </Button>

                  <Button
                    size="sm"
                    onClick={() => setIsLoginModalOpen(true)}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-5 shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                  >
                    Criar Conta
                  </Button>
                </>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-zinc-800/50 py-4 animate-in slide-in-from-top-2 duration-200">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-zinc-300 hover:text-blue-400 hover:bg-zinc-800/30 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <hr className="border-zinc-800/50 my-3" />

                {isLoggedIn && (
                  <div className="px-4 py-3 bg-zinc-800/30 rounded-lg mx-4 mt-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-zinc-300">
                        <Mail className="w-4 h-4 text-emerald-400" />
                        {userMail}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-300">
                        <ShoppingBag className="w-4 h-4" />
                        {cartItems} itens
                      </div>
                    </div>
                  </div>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Modal de Login */}
      <EnhancedLoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  )
}
