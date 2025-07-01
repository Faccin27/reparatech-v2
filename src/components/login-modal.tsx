"use client";

import type React from "react";

import { useState } from "react";
import { X, Wrench, Github, Smartphone, Chrome } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnhancedLoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegistering) {
        if (!acceptTerms) {
          setError("Você deve aceitar os termos de uso para se registrar.");
          return;
        }
        const registrationData = {
          name: username,
          email,
          password,
          photo: null,
          registeredDate: new Date().toISOString(),
          expiryDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ).toISOString(),
          isActive: true,
          role: "User",
        };

        console.log("Registro bem-sucedido:", registrationData);
      } else {
        const loginData = { email, password };
        console.log("Login bem-sucedido:", loginData);
        // logica de login
      }

      onClose();
    } catch (error) {
      setError("Erro ao processar solicitação. Tente novamente.");
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setEmail("");
    setPassword("");
    setUsername("");
    setAcceptTerms(false);
    setError("");
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-[200]"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="bg-zinc-900 text-white max-w-5xl w-full rounded-2xl overflow-hidden flex border border-blue-500/30"
      >
        {/* Left Column */}
        <div className="relative w-1/2 hidden md:flex md:flex-col bg-gradient-to-br from-zinc-800 to-zinc-900">
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-grow flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Smartphone className="w-16 h-16 text-white absolute" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
                  Reparatech.pro
                </h1>
                <p className="text-zinc-400 text-lg">
                  Sua plataforma completa para reparos e tecnologia
                </p>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-t from-black/50 to-transparent">
              <h2 className="text-3xl font-bold mb-4">
                Bem-vindo à{" "}
                <span className="text-blue-400">nossa comunidade</span>
              </h2>
              <p className="text-sm text-zinc-300">
                Conecte-se conosco e tenha acesso aos melhores serviços de
                reparo e tecnologia.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 bg-zinc-950 p-10 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={isRegistering ? "register" : "login"}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-8">
                {isRegistering ? "Criar Conta" : "Entrar"}
              </h3>

              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-300 p-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>

                {isRegistering && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      placeholder="Nome de usuário"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </motion.div>
                )}

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                  {!isRegistering && (
                    <a
                      href="#"
                      className="absolute right-0 top-14 text-xs text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                    >
                      Esqueci minha senha
                    </a>
                  )}
                </div>

                {isRegistering && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start space-x-2"
                  >
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1 w-4 h-4 text-blue-600 bg-zinc-800 border-zinc-600 rounded focus:ring-blue-500 focus:ring-2"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-zinc-300">
                      Eu aceito os{" "}
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                      >
                        termos de uso
                      </a>{" "}
                      e{" "}
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                      >
                        política de privacidade
                      </a>
                    </label>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all text-lg font-semibold shadow-lg hover:shadow-blue-500/25"
                >
                  {isRegistering ? "Criar Conta" : "Entrar"}
                </motion.button>
              </form>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 text-center">
            <motion.button
              onClick={toggleForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              {isRegistering
                ? "Já tem uma conta? Faça login"
                : "Não tem uma conta? Registre-se"}
            </motion.button>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-700"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-950 px-2 text-zinc-500">
                  ou continue com
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 py-3 bg-zinc-800/50 text-white border border-zinc-700 rounded-lg hover:bg-zinc-700/50 hover:border-zinc-600 transition-all flex items-center justify-center space-x-2"
            >
              <Chrome className="w-5 h-5" />
              <span>Continuar com Google</span>
            </motion.button>

            <p className="text-xs text-center mt-4 text-zinc-500">
              Ao continuar, você concorda com nossos termos de serviço
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
