import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onCreateUser: () => void;
}

export function Login({ onLogin, onCreateUser }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor introduce un email válido");
      return;
    }

    setIsLoading(true);

    // Simulamos una llamada a la API
    setTimeout(() => {
      onLogin(email, password);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#241773] via-[#241773] to-[#66E5B6] p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl font-semibold text-white">Auria HR</span>
          </div>
          <p className="text-white/80">Panel de Administración</p>
        </div>

        {/* Login Card */}
        <Card className="p-8">
          <div>
            <h2 className="text-center mb-2">Iniciar Sesión</h2>
            <p className="text-sm text-muted-foreground text-center">
              Ingresa tus credenciales para acceder al backoffice
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <AlertCircle
                size={20}
                className="text-red-600 flex-shrink-0 mt-0.5"
              />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@auriahr.es"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                />
                <label
                  htmlFor="remember"
                  className="text-sm cursor-pointer select-none"
                >
                  Recordarme
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-[#241773] hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#241773] hover:bg-[#241773]/90"
              disabled={isLoading}
            >
              {isLoading ? (
                "Iniciando sesión..."
              ) : (
                <>
                  <LogIn size={20} className="mr-2" />
                  Iniciar Sesión
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-sm text-muted-foreground mb-3">
              ¿Necesitas crear un usuario?
            </p>
            <Button
              variant="outline"
              className="w-full border-[#66E5B6] text-[#66E5B6] hover:bg-[#66E5B6]/10"
              onClick={onCreateUser}
            >
              Crear Nuevo Usuario
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <p className="text-center text-white/60 text-sm mt-6">
          © 2025 Auria HR. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
