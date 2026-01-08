import {
  Settings,
  Building,
  Users,
  Bell,
  Shield,
  Database,
  CreditCard,
  Mail,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SettingsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Configuración</h1>
        <p className="text-muted-foreground">
          Configuración general de la plataforma Auria HR
        </p>
      </div>

      <Tabs defaultValue="platform" className="space-y-6">
        <TabsList>
          <TabsTrigger value="platform">
            <Building size={16} className="mr-2" />
            Plataforma
          </TabsTrigger>
          <TabsTrigger value="plans">
            <CreditCard size={16} className="mr-2" />
            Planes y Facturación
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users size={16} className="mr-2" />
            Administradores
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell size={16} className="mr-2" />
            Notificaciones
          </TabsTrigger>
          <TabsTrigger value="integrations">
            <Zap size={16} className="mr-2" />
            Integraciones
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield size={16} className="mr-2" />
            Seguridad
          </TabsTrigger>
          <TabsTrigger value="database">
            <Database size={16} className="mr-2" />
            Base de Datos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="platform" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Información de la Plataforma</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 space-y-2">
                <Label htmlFor="platformName">Nombre de la plataforma</Label>
                <Input id="platformName" defaultValue="Auria HR" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="version">Versión actual</Label>
                <Input id="version" defaultValue="2.5.1" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="environment">Entorno</Label>
                <Select defaultValue="production">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="production">Producción</SelectItem>
                    <SelectItem value="staging">Staging</SelectItem>
                    <SelectItem value="development">Desarrollo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="supportEmail">Email de soporte</Label>
                <Input
                  id="supportEmail"
                  type="email"
                  defaultValue="soporte@auriahr.es"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxClients">Límite de clientes</Label>
                <Input id="maxClients" type="number" defaultValue="1000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxEmployeesPerClient">
                  Empleados por cliente
                </Label>
                <Input
                  id="maxEmployeesPerClient"
                  type="number"
                  defaultValue="500"
                />
              </div>
            </div>
            <Separator className="my-6" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Modo mantenimiento</Label>
                  <p className="text-sm text-muted-foreground">
                    Desactiva el acceso a la plataforma para realizar
                    mantenimiento
                  </p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Registros nuevos clientes</Label>
                  <p className="text-sm text-muted-foreground">
                    Permitir que nuevas empresas se registren automáticamente
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary/90">
                Guardar Cambios
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Estadísticas del Sistema</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Clientes activos
                </p>
                <p className="text-2xl font-semibold">52</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Empleados totales
                </p>
                <p className="text-2xl font-semibold">1,245</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Espacio usado
                </p>
                <p className="text-2xl font-semibold">245 GB</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Configuración de Planes</h3>
            <div className="space-y-6">
              {/* Plan Básico */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4>Plan Básico</h4>
                    <p className="text-sm text-muted-foreground">
                      Para pequeñas empresas
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Precio mensual (€)</Label>
                    <Input type="number" defaultValue="49" />
                  </div>
                  <div className="space-y-2">
                    <Label>Máx. empleados</Label>
                    <Input type="number" defaultValue="25" />
                  </div>
                  <div className="space-y-2">
                    <Label>Almacenamiento (GB)</Label>
                    <Input type="number" defaultValue="10" />
                  </div>
                </div>
              </div>

              {/* Plan Pro */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4>Plan Pro</h4>
                    <p className="text-sm text-muted-foreground">
                      Para empresas en crecimiento
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Precio mensual (€)</Label>
                    <Input type="number" defaultValue="99" />
                  </div>
                  <div className="space-y-2">
                    <Label>Máx. empleados</Label>
                    <Input type="number" defaultValue="100" />
                  </div>
                  <div className="space-y-2">
                    <Label>Almacenamiento (GB)</Label>
                    <Input type="number" defaultValue="50" />
                  </div>
                </div>
              </div>

              {/* Plan Enterprise */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4>Plan Enterprise</h4>
                    <p className="text-sm text-muted-foreground">
                      Para grandes corporaciones
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Precio mensual (€)</Label>
                    <Input type="number" defaultValue="299" />
                  </div>
                  <div className="space-y-2">
                    <Label>Máx. empleados</Label>
                    <Input type="number" defaultValue="500" />
                  </div>
                  <div className="space-y-2">
                    <Label>Almacenamiento (GB)</Label>
                    <Input type="number" defaultValue="500" />
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary/90">
                Guardar Planes
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Pasarelas de Pago</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Stripe</p>
                  <p className="text-sm text-muted-foreground">
                    Procesamiento de pagos con tarjeta
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-100 text-green-700">Activo</Badge>
                  <Button variant="outline" size="sm">
                    Configurar
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Transferencia bancaria</p>
                  <p className="text-sm text-muted-foreground">
                    Pagos mediante transferencia
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-100 text-green-700">Activo</Badge>
                  <Button variant="outline" size="sm">
                    Configurar
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Administradores de la Plataforma</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    AD
                  </div>
                  <div>
                    <p className="font-medium">Admin Principal</p>
                    <p className="text-sm text-muted-foreground">
                      admin@auriahr.es
                    </p>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary">
                  Super Admin
                </Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground">
                    PM
                  </div>
                  <div>
                    <p className="font-medium">Pedro Martínez</p>
                    <p className="text-sm text-muted-foreground">
                      pedro@auriahr.es
                    </p>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-700">
                  Admin Soporte
                </Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
                    LS
                  </div>
                  <div>
                    <p className="font-medium">Laura Sánchez</p>
                    <p className="text-sm text-muted-foreground">
                      laura@auriahr.es
                    </p>
                  </div>
                </div>
                <Badge className="bg-purple-100 text-purple-700">
                  Admin Legal
                </Badge>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Users size={16} className="mr-2" />
              Añadir Administrador
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Permisos y Roles</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <p className="font-medium mb-2">Super Admin</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Control total de la plataforma
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Gestión clientes</Badge>
                  <Badge variant="outline">Configuración</Badge>
                  <Badge variant="outline">Facturación</Badge>
                  <Badge variant="outline">Soporte</Badge>
                  <Badge variant="outline">Legal</Badge>
                  <Badge variant="outline">Base de datos</Badge>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-medium mb-2">Admin Soporte</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Gestión de tickets y asistencia
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ver clientes</Badge>
                  <Badge variant="outline">Soporte</Badge>
                  <Badge variant="outline">Tickets</Badge>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-medium mb-2">Admin Legal</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Gestión de consultas jurídicas
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ver clientes</Badge>
                  <Badge variant="outline">Legal</Badge>
                  <Badge variant="outline">Documentos</Badge>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Notificaciones del Sistema</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Nuevos clientes registrados</Label>
                  <p className="text-sm text-muted-foreground">
                    Notificar cuando una nueva empresa se registre
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tickets de soporte críticos</Label>
                  <p className="text-sm text-muted-foreground">
                    Alertas para tickets de prioridad alta
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Consultas jurídicas urgentes</Label>
                  <p className="text-sm text-muted-foreground">
                    Notificar consultas legales de alta prioridad
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Fallos del sistema</Label>
                  <p className="text-sm text-muted-foreground">
                    Alertas críticas de infraestructura
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Facturación y pagos</Label>
                  <p className="text-sm text-muted-foreground">
                    Notificaciones sobre pagos y suscripciones
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Reportes semanales</Label>
                  <p className="text-sm text-muted-foreground">
                    Resumen semanal de actividad de la plataforma
                  </p>
                </div>
                <Switch />
              </div>
            </div>
            <Separator className="my-6" />
            <div className="space-y-4">
              <h4>Canales de Notificación</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email principal</Label>
                  <Input type="email" defaultValue="admin@auriahr.es" />
                </div>
                <div className="space-y-2">
                  <Label>Email soporte</Label>
                  <Input type="email" defaultValue="soporte@auriahr.es" />
                </div>
                <div className="space-y-2">
                  <Label>Webhook URL</Label>
                  <Input placeholder="https://..." />
                </div>
                <div className="space-y-2">
                  <Label>Slack Webhook</Label>
                  <Input placeholder="https://hooks.slack.com/..." />
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary/90">
                Guardar Configuración
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Integraciones Disponibles</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">SendGrid</p>
                    <p className="text-sm text-muted-foreground">
                      Servicio de envío de emails
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-100 text-green-700">
                    Conectado
                  </Badge>
                  <Button variant="outline" size="sm">
                    Configurar
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Zap size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Twilio</p>
                    <p className="text-sm text-muted-foreground">
                      SMS y notificaciones telefónicas
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-gray-100 text-gray-700">
                    Desconectado
                  </Badge>
                  <Button variant="outline" size="sm">
                    Conectar
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Database size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">AWS S3</p>
                    <p className="text-sm text-muted-foreground">
                      Almacenamiento de archivos
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-100 text-green-700">
                    Conectado
                  </Badge>
                  <Button variant="outline" size="sm">
                    Configurar
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Zap size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Zapier</p>
                    <p className="text-sm text-muted-foreground">
                      Automatización de procesos
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-gray-100 text-gray-700">
                    Desconectado
                  </Badge>
                  <Button variant="outline" size="sm">
                    Conectar
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">API Keys</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>API Key de producción</Label>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    defaultValue="sk_live_••••••••••••••••"
                    disabled
                  />
                  <Button variant="outline">Copiar</Button>
                  <Button variant="outline">Regenerar</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>API Key de desarrollo</Label>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    defaultValue="sk_test_••••••••••••••••"
                    disabled
                  />
                  <Button variant="outline">Copiar</Button>
                  <Button variant="outline">Regenerar</Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Configuración de Seguridad</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Autenticación de dos factores (2FA)</Label>
                  <p className="text-sm text-muted-foreground">
                    Requerir 2FA para todos los administradores
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Sesiones activas</Label>
                  <p className="text-sm text-muted-foreground">
                    Actualmente hay 3 sesiones administrativas activas
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Ver sesiones
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Registro de actividad (Audit Log)</Label>
                  <p className="text-sm text-muted-foreground">
                    Mantener registro de todas las acciones administrativas
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Encriptación de datos</Label>
                  <p className="text-sm text-muted-foreground">
                    AES-256 para datos sensibles
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700">Activo</Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Firewall WAF</Label>
                  <p className="text-sm text-muted-foreground">
                    Protección contra ataques web
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700">Activo</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Políticas de Contraseñas</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Longitud mínima</Label>
                  <Input type="number" defaultValue="8" />
                </div>
                <div className="space-y-2">
                  <Label>Expiración (días)</Label>
                  <Input type="number" defaultValue="90" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Requerir mayúsculas</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Requerir números</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Requerir caracteres especiales</Label>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary/90">
                Guardar Políticas
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Estado de la Base de Datos</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Tamaño total
                </p>
                <p className="text-2xl font-semibold">245 GB</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Registros totales
                </p>
                <p className="text-2xl font-semibold">1.2M</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Último backup
                </p>
                <p className="text-2xl font-semibold">Hoy 02:00</p>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Backups automáticos</p>
                  <p className="text-sm text-muted-foreground">
                    Copia diaria a las 02:00 AM
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700">Activo</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Replicación</p>
                  <p className="text-sm text-muted-foreground">
                    3 réplicas en diferentes zonas
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700">Activo</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Operaciones de Base de Datos</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Database size={16} className="mr-2" />
                Crear backup manual
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Database size={16} className="mr-2" />
                Restaurar desde backup
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Database size={16} className="mr-2" />
                Optimizar tablas
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-destructive"
              >
                <Database size={16} className="mr-2" />
                Limpiar datos antiguos
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Conexión PostgreSQL</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Host</Label>
                <Input defaultValue="db.auriahr.es" disabled />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Puerto</Label>
                  <Input defaultValue="5432" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Base de datos</Label>
                  <Input defaultValue="auriahr_production" disabled />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Usuario</Label>
                <Input defaultValue="auriahr_admin" disabled />
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                <span className="text-sm text-green-700">
                  Estado de conexión: Conectado
                </span>
                <Badge className="bg-green-100 text-green-700">Saludable</Badge>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
