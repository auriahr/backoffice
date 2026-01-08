import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Briefcase,
  Phone,
  AlertCircle,
  Check,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CreateUserProps {
  onBack: () => void;
  onUserCreated: () => void;
}

export function CreateUser({ onBack, onUserCreated }: CreateUserProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
    department: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setError("");
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.role
    ) {
      setError("Por favor completa todos los campos obligatorios");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Por favor introduce un email válido");
      return false;
    }

    if (formData.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulamos una llamada a la API
    setTimeout(() => {
      setSuccess(true);
      setIsLoading(false);

      // Después de 2 segundos, volver al login
      setTimeout(() => {
        onUserCreated();
      }, 2000);
    }, 1000);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#241773] via-[#241773] to-[#66E5B6] p-4">
        <Card className="p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="mb-2">¡Usuario Creado!</h2>
          <p className="text-muted-foreground mb-4">
            El usuario <strong>{formData.email}</strong> ha sido creado
            exitosamente.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirigiendo al login...
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#241773] via-[#241773] to-[#66E5B6] p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl font-semibold text-white">Auria HR</span>
          </div>
          <p className="text-white/80">Panel de Administración</p>
        </div>

        {/* Create User Card */}
        <Card className="p-8">
          <div>
            <h2 className="text-center mb-2">Crear Nuevo Usuario</h2>
            <p className="text-sm text-muted-foreground text-center">
              Completa el formulario para crear un nuevo administrador
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
            {/* Información Personal */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Información Personal</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Nombre completo <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      size={20}
                    />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Juan Pérez"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="pl-10"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      size={20}
                    />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+34 912 345 678"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="pl-10"
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={20}
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="usuario@auriahr.es"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="pl-10"
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            {/* Rol y Departamento */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-sm font-medium">Rol y Permisos</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">
                    Rol <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => handleChange("role", value)}
                  >
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Selecciona un rol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="super-admin">
                        Super Administrador
                      </SelectItem>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="support">Soporte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Departamento</Label>
                  <div className="relative">
                    <Briefcase
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
                      size={20}
                    />
                    <Select
                      value={formData.department}
                      onValueChange={(value) =>
                        handleChange("department", value)
                      }
                    >
                      <SelectTrigger id="department" className="pl-10">
                        <SelectValue placeholder="Selecciona un departamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="direccion">Dirección</SelectItem>
                        <SelectItem value="administracion">
                          Administración
                        </SelectItem>
                        <SelectItem value="soporte">Soporte Técnico</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="rrhh">Recursos Humanos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Contraseña */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-sm font-medium">Seguridad</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">
                    Contraseña <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      size={20}
                    />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mínimo 8 caracteres"
                      value={formData.password}
                      onChange={(e) => handleChange("password", e.target.value)}
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">
                    Confirmar Contraseña <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      size={20}
                    />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Repite la contraseña"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleChange("confirmPassword", e.target.value)
                      }
                      className="pl-10 pr-10"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={onBack}
                disabled={isLoading}
              >
                Volver
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#241773] hover:bg-[#241773]/90"
                disabled={isLoading}
              >
                {isLoading ? "Creando usuario..." : "Crear Usuario"}
              </Button>
            </div>
          </form>
        </Card>

        {/* Footer */}
        <p className="text-center text-white/60 text-sm mt-6">
          © 2025 Auria HR. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
