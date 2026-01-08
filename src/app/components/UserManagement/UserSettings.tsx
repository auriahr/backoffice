import { useState } from "react";
import {
  Bell,
  Lock,
  Palette,
  Globe,
  Monitor,
  Moon,
  Sun,
  Eye,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function UserSettings() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    newClient: true,
    laborRequests: true,
    support: true,
    systemUpdates: false,
    weeklyReport: true,
    monthlyReport: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    activityLog: true,
    shareAnalytics: false,
  });

  const [appearance, setAppearance] = useState({
    theme: "light",
    language: "es",
    compactMode: false,
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1>Configuración de Usuario</h1>
        <p className="text-muted-foreground">
          Personaliza tu experiencia en el backoffice de Auria HR
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="notifications" className="space-y-6">
        <TabsList>
          <TabsTrigger value="notifications" className="text-xs sm:text-sm">
            <Bell size={16} className="mr-2" />
            Notificaciones
          </TabsTrigger>
          <TabsTrigger value="privacy" className="text-xs sm:text-sm">
            <Lock size={16} className="mr-2" />
            Privacidad
          </TabsTrigger>
          <TabsTrigger value="appearance" className="text-xs sm:text-sm">
            <Palette size={16} className="mr-2" />
            Apariencia
          </TabsTrigger>
          <TabsTrigger value="language" className="text-xs sm:text-sm">
            <Globe size={16} className="mr-2" />
            Idioma
          </TabsTrigger>
        </TabsList>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Notificaciones Generales</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div>
                  <Label className="text-base">Notificaciones por Email</Label>
                  <p className="text-sm text-muted-foreground">
                    Recibe notificaciones importantes en tu correo
                  </p>
                </div>
                <Switch
                  checked={notifications.emailNotifications}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      emailNotifications: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div>
                  <Label className="text-base">Notificaciones Push</Label>
                  <p className="text-sm text-muted-foreground">
                    Recibe notificaciones en tiempo real en tu navegador
                  </p>
                </div>
                <Switch
                  checked={notifications.pushNotifications}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      pushNotifications: checked,
                    })
                  }
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Notificaciones por Módulo</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/20 transition-colors">
                <div>
                  <Label className="text-base">Nuevos Clientes</Label>
                  <p className="text-sm text-muted-foreground">
                    Alerta cuando se registra un nuevo cliente
                  </p>
                </div>
                <Switch
                  checked={notifications.newClient}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, newClient: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/20 transition-colors">
                <div>
                  <Label className="text-base">Solicitudes Laborales</Label>
                  <p className="text-sm text-muted-foreground">
                    Notificación de nuevas solicitudes laborales
                  </p>
                </div>
                <Switch
                  checked={notifications.laborRequests}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      laborRequests: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/20 transition-colors">
                <div>
                  <Label className="text-base">Tickets de Soporte</Label>
                  <p className="text-sm text-muted-foreground">
                    Alerta cuando se abre un nuevo ticket de soporte
                  </p>
                </div>
                <Switch
                  checked={notifications.support}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, support: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/20 transition-colors">
                <div>
                  <Label className="text-base">
                    Actualizaciones del Sistema
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Información sobre nuevas versiones y mantenimiento
                  </p>
                </div>
                <Switch
                  checked={notifications.systemUpdates}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      systemUpdates: checked,
                    })
                  }
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Informes Automáticos</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#241773]/5 to-[#66E5B6]/5 border border-[#241773]/20 rounded-lg">
                <div>
                  <Label className="text-base">Informe Semanal</Label>
                  <p className="text-sm text-muted-foreground">
                    Resumen de actividad cada lunes a las 9:00
                  </p>
                </div>
                <Switch
                  checked={notifications.weeklyReport}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      weeklyReport: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#241773]/5 to-[#66E5B6]/5 border border-[#241773]/20 rounded-lg">
                <div>
                  <Label className="text-base">Informe Mensual</Label>
                  <p className="text-sm text-muted-foreground">
                    Estadísticas mensuales el primer día del mes
                  </p>
                </div>
                <Switch
                  checked={notifications.monthlyReport}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      monthlyReport: checked,
                    })
                  }
                />
              </div>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-[#241773] hover:bg-[#241773]/90">
              Guardar Preferencias de Notificaciones
            </Button>
          </div>
        </TabsContent>

        {/* Privacy Tab */}
        <TabsContent value="privacy" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Configuración de Privacidad</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#241773] rounded-full flex items-center justify-center">
                    <Eye size={20} className="text-white" />
                  </div>
                  <div>
                    <Label className="text-base">Perfil Visible</Label>
                    <p className="text-sm text-muted-foreground">
                      Permite que otros administradores vean tu perfil
                    </p>
                  </div>
                </div>
                <Switch
                  checked={privacy.profileVisibility}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, profileVisibility: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#66E5B6] rounded-full flex items-center justify-center">
                    <Bell size={20} className="text-[#241773]" />
                  </div>
                  <div>
                    <Label className="text-base">Registro de Actividad</Label>
                    <p className="text-sm text-muted-foreground">
                      Registrar todas tus acciones en el sistema
                    </p>
                  </div>
                </div>
                <Switch
                  checked={privacy.activityLog}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, activityLog: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#241773] rounded-full flex items-center justify-center">
                    <Monitor size={20} className="text-white" />
                  </div>
                  <div>
                    <Label className="text-base">Compartir Analíticas</Label>
                    <p className="text-sm text-muted-foreground">
                      Ayuda a mejorar el sistema compartiendo datos de uso
                    </p>
                  </div>
                </div>
                <Switch
                  checked={privacy.shareAnalytics}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, shareAnalytics: checked })
                  }
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Gestión de Datos</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Descargar mis datos
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Exportar historial de actividad
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-red-600 border-red-600 hover:bg-red-50"
              >
                Solicitar eliminación de cuenta
              </Button>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-[#241773] hover:bg-[#241773]/90">
              Guardar Configuración de Privacidad
            </Button>
          </div>
        </TabsContent>

        {/* Appearance Tab */}
        <TabsContent value="appearance" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Tema de Color</h3>
            <RadioGroup
              value={appearance.theme}
              onValueChange={(value) =>
                setAppearance({ ...appearance, theme: value })
              }
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white border-2 rounded-full flex items-center justify-center">
                      <Sun size={20} className="text-yellow-500" />
                    </div>
                    <div>
                      <Label className="text-base cursor-pointer">
                        Modo Claro
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Tema claro para una mejor legibilidad
                      </p>
                    </div>
                  </div>
                  <RadioGroupItem value="light" />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#241773] border-2 rounded-full flex items-center justify-center">
                      <Moon size={20} className="text-white" />
                    </div>
                    <div>
                      <Label className="text-base cursor-pointer">
                        Modo Oscuro
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Tema oscuro para reducir la fatiga visual
                      </p>
                    </div>
                  </div>
                  <RadioGroupItem value="dark" />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-white to-[#241773] border-2 rounded-full flex items-center justify-center">
                      <Monitor size={20} className="text-[#241773]" />
                    </div>
                    <div>
                      <Label className="text-base cursor-pointer">
                        Automático
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Se ajusta según la configuración del sistema
                      </p>
                    </div>
                  </div>
                  <RadioGroupItem value="auto" />
                </div>
              </div>
            </RadioGroup>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Personalización</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Color de acento</Label>
                <div className="flex gap-3">
                  <button className="w-12 h-12 rounded-full bg-[#241773] ring-2 ring-[#241773] ring-offset-2" />
                  <button className="w-12 h-12 rounded-full bg-[#66E5B6] hover:ring-2 hover:ring-[#66E5B6] hover:ring-offset-2 transition-all" />
                  <button className="w-12 h-12 rounded-full bg-blue-600 hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 transition-all" />
                  <button className="w-12 h-12 rounded-full bg-purple-600 hover:ring-2 hover:ring-purple-600 hover:ring-offset-2 transition-all" />
                  <button className="w-12 h-12 rounded-full bg-red-600 hover:ring-2 hover:ring-red-600 hover:ring-offset-2 transition-all" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg mt-4">
                <div>
                  <Label className="text-base">Modo Compacto</Label>
                  <p className="text-sm text-muted-foreground">
                    Reduce el espaciado para mostrar más contenido
                  </p>
                </div>
                <Switch
                  checked={appearance.compactMode}
                  onCheckedChange={(checked) =>
                    setAppearance({ ...appearance, compactMode: checked })
                  }
                />
              </div>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-[#241773] hover:bg-[#241773]/90">
              Guardar Preferencias de Apariencia
            </Button>
          </div>
        </TabsContent>

        {/* Language Tab */}
        <TabsContent value="language" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Idioma de la Interfaz</h3>
            <div className="space-y-2">
              <Label>Selecciona tu idioma preferido</Label>
              <Select
                value={appearance.language}
                onValueChange={(value) =>
                  setAppearance({ ...appearance, language: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">🇪🇸 Español</SelectItem>
                  <SelectItem value="en">🇬🇧 English</SelectItem>
                  <SelectItem value="ca">🏴 Català</SelectItem>
                  <SelectItem value="eu">🏴 Euskara</SelectItem>
                  <SelectItem value="gl">🏴 Galego</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Formato Regional</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Formato de fecha</Label>
                <Select defaultValue="dd/mm/yyyy">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dd/mm/yyyy">
                      DD/MM/YYYY (Europeo)
                    </SelectItem>
                    <SelectItem value="mm/dd/yyyy">
                      MM/DD/YYYY (Americano)
                    </SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY-MM-DD (ISO)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Formato de hora</Label>
                <Select defaultValue="24h">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">24 horas (14:30)</SelectItem>
                    <SelectItem value="12h">12 horas (2:30 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Zona horaria</Label>
                <Select defaultValue="europe/madrid">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe/madrid">
                      Europa/Madrid (GMT+1)
                    </SelectItem>
                    <SelectItem value="europe/london">
                      Europa/Londres (GMT)
                    </SelectItem>
                    <SelectItem value="america/new_york">
                      América/Nueva York (GMT-5)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Formato de moneda</Label>
                <Select defaultValue="eur">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eur">€ Euro (EUR)</SelectItem>
                    <SelectItem value="usd">$ Dólar (USD)</SelectItem>
                    <SelectItem value="gbp">£ Libra (GBP)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-[#241773] hover:bg-[#241773]/90">
              Guardar Configuración de Idioma
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
