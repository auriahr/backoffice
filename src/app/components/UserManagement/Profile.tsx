import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Edit,
  Save,
  X,
  Camera,
  Shield,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function Profile() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "Admin Auria HR",
    email: "admin@auriahr.es",
    phone: "+34 912 345 678",
    position: "Administrador Principal",
    department: "Dirección",
    location: "A Coruña, España",
    joinDate: "15/01/2022",
    bio: "Administrador principal del sistema Auria HR con más de 4 años de experiencia en gestión de recursos humanos y administración de plataformas empresariales.",
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1>Mi Perfil</h1>
        <p className="text-muted-foreground">
          Administra tu información personal y configuración de cuenta
        </p>
      </div>

      {/* Profile Card */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="relative">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200" />
              <AvatarFallback className="text-2xl">AH</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
              <Camera size={16} />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="mb-1">{profileData.name}</h2>
            <p className="text-muted-foreground mb-2">{profileData.position}</p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#241773] text-white hover:bg-[#241773]/90">
                <Shield size={14} className="mr-1" />
                Super Admin
              </Badge>
              <Badge
                variant="outline"
                className="border-[#66E5B6] text-[#66E5B6]"
              >
                Activo
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Tabs Content */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList>
          <TabsTrigger value="personal" className="text-xs sm:text-sm">
            <User size={16} className="mr-2" />
            Información Personal
          </TabsTrigger>
          <TabsTrigger value="contact" className="text-xs sm:text-sm">
            <Mail size={16} className="mr-2" />
            Contacto
          </TabsTrigger>
          <TabsTrigger value="security" className="text-xs sm:text-sm">
            <Shield size={16} className="mr-2" />
            Seguridad
          </TabsTrigger>
        </TabsList>

        {/* Personal Information */}
        <TabsContent value="personal" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3>Datos Personales</h3>
              {!isEditingProfile ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditingProfile(true)}
                  className="text-[#241773] border-[#241773] hover:bg-[#241773]/10"
                >
                  <Edit size={16} className="mr-2" />
                  Editar
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditingProfile(false)}
                  >
                    <X size={16} className="mr-2" />
                    Cancelar
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#66E5B6] text-[#241773] hover:bg-[#66E5B6]/90"
                    onClick={() => setIsEditingProfile(false)}
                  >
                    <Save size={16} className="mr-2" />
                    Guardar
                  </Button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nombre completo</Label>
                {isEditingProfile ? (
                  <Input
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                  />
                ) : (
                  <p className="p-2 bg-muted/30 rounded-md">
                    {profileData.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Posición</Label>
                {isEditingProfile ? (
                  <Input
                    value={profileData.position}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        position: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p className="p-2 bg-muted/30 rounded-md">
                    {profileData.position}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Departamento</Label>
                {isEditingProfile ? (
                  <Select defaultValue={profileData.department}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dirección">Dirección</SelectItem>
                      <SelectItem value="Administración">
                        Administración
                      </SelectItem>
                      <SelectItem value="Soporte Técnico">
                        Soporte Técnico
                      </SelectItem>
                      <SelectItem value="Legal">Legal</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="p-2 bg-muted/30 rounded-md">
                    {profileData.department}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Fecha de ingreso</Label>
                <p className="p-2 bg-muted/30 rounded-md flex items-center gap-2">
                  <Calendar size={16} className="text-muted-foreground" />
                  {profileData.joinDate}
                </p>
              </div>

              <div className="col-span-1 md:col-span-2 space-y-2">
                <Label>Biografía</Label>
                {isEditingProfile ? (
                  <Textarea
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                    rows={4}
                  />
                ) : (
                  <p className="p-2 bg-muted/30 rounded-md">
                    {profileData.bio}
                  </p>
                )}
              </div>
            </div>
          </Card>

          {/* Activity Stats */}
          <Card className="p-6">
            <h3 className="mb-4">Estadísticas de Actividad</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-[#241773]/10 to-[#66E5B6]/10 rounded-lg border border-[#241773]/20">
                <p className="text-sm text-muted-foreground mb-1">
                  Último acceso
                </p>
                <p className="text-xl font-semibold">Hoy, 09:45</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#241773]/10 to-[#66E5B6]/10 rounded-lg border border-[#241773]/20">
                <p className="text-sm text-muted-foreground mb-1">
                  Sesiones este mes
                </p>
                <p className="text-xl font-semibold">124</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#241773]/10 to-[#66E5B6]/10 rounded-lg border border-[#241773]/20">
                <p className="text-sm text-muted-foreground mb-1">
                  Acciones realizadas
                </p>
                <p className="text-xl font-semibold">1,847</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Contact Information */}
        <TabsContent value="contact" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-[#241773] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">
                    Email principal
                  </p>
                  <p className="font-medium truncate">{profileData.email}</p>
                  <Badge
                    variant="outline"
                    className="mt-2 bg-green-50 border-green-500 text-green-700"
                  >
                    Verificado
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-[#66E5B6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#241773]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Teléfono</p>
                  <p className="font-medium">{profileData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-[#241773] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">
                    Ubicación
                  </p>
                  <p className="font-medium">{profileData.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-[#66E5B6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase size={20} className="text-[#241773]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">
                    Departamento
                  </p>
                  <p className="font-medium">{profileData.department}</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3>Cambiar Contraseña</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Contraseña actual</Label>
                <Input
                  type="password"
                  value={securityData.currentPassword}
                  onChange={(e) =>
                    setSecurityData({
                      ...securityData,
                      currentPassword: e.target.value,
                    })
                  }
                  placeholder="Introduce tu contraseña actual"
                />
              </div>

              <div className="space-y-2">
                <Label>Nueva contraseña</Label>
                <Input
                  type="password"
                  value={securityData.newPassword}
                  onChange={(e) =>
                    setSecurityData({
                      ...securityData,
                      newPassword: e.target.value,
                    })
                  }
                  placeholder="Introduce tu nueva contraseña"
                />
              </div>

              <div className="space-y-2">
                <Label>Confirmar nueva contraseña</Label>
                <Input
                  type="password"
                  value={securityData.confirmPassword}
                  onChange={(e) =>
                    setSecurityData({
                      ...securityData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Confirma tu nueva contraseña"
                />
              </div>

              <Button className="bg-[#241773] hover:bg-[#241773]/90">
                Actualizar Contraseña
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Autenticación de Dos Factores (2FA)</h3>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={20} className="text-green-600" />
                <p className="font-medium text-green-800">2FA Activado</p>
              </div>
              <p className="text-sm text-green-700">
                Tu cuenta está protegida con autenticación de dos factores
              </p>
            </div>
            <Button
              variant="outline"
              className="border-red-500 text-red-600 hover:bg-red-50"
            >
              Desactivar 2FA
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Sesiones Activas</h3>
            <div className="space-y-3">
              {[
                {
                  device: "Chrome - Windows",
                  location: "Madrid, España",
                  current: true,
                },
                {
                  device: "Safari - iPhone",
                  location: "Madrid, España",
                  current: false,
                },
              ].map((session, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{session.device}</p>
                    <p className="text-sm text-muted-foreground">
                      {session.location}
                    </p>
                    {session.current && (
                      <Badge className="mt-2 bg-[#66E5B6] text-[#241773]">
                        Sesión actual
                      </Badge>
                    )}
                  </div>
                  {!session.current && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-600 hover:bg-red-50"
                    >
                      Cerrar sesión
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
