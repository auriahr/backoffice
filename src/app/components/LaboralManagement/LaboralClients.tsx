import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  MoreVertical,
  Mail,
  Phone,
  Building2,
  Users,
  Calendar,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const clients = [
  {
    id: 1,
    name: "Tech Solutions S.L.",
    contactPerson: "María García",
    contactEmail: "maria@techsolutions.es",
    contactPhone: "+34 612 345 678",
    employees: 45,
    plan: "Enterprise",
    status: "active",
    startDate: "15/03/2024",
    avatar:
      "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
  },
  {
    id: 2,
    name: "Construcciones ABC",
    contactPerson: "Juan Pérez",
    contactEmail: "juan@construccionesabc.es",
    contactPhone: "+34 623 456 789",
    employees: 128,
    plan: "Pro",
    status: "active",
    startDate: "10/01/2024",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
  },
  {
    id: 3,
    name: "Retail Group",
    contactPerson: "Ana López",
    contactEmail: "ana@retailgroup.es",
    contactPhone: "+34 634 567 890",
    employees: 87,
    plan: "Enterprise",
    status: "active",
    startDate: "22/05/2024",
    avatar:
      "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
  },
  {
    id: 4,
    name: "Servicios Legales Pro",
    contactPerson: "Carlos Ruiz",
    contactEmail: "carlos@legalespro.es",
    contactPhone: "+34 645 678 901",
    employees: 32,
    plan: "Básico",
    status: "trial",
    startDate: "05/12/2025",
    avatar:
      "https://images.unsplash.com/photo-1715423058726-ddea1ec51b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
  },
];

const getPlanBadge = (plan: string) => {
  switch (plan) {
    case "Enterprise":
      return (
        <Badge className="bg-purple-100 text-purple-700">Enterprise</Badge>
      );
    case "Pro":
      return <Badge className="bg-blue-100 text-blue-700">Pro</Badge>;
    case "Básico":
      return <Badge className="bg-green-100 text-green-700">Básico</Badge>;
    default:
      return <Badge>{plan}</Badge>;
  }
};

export function LaboralClients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClient, setSelectedClient] = useState<any | null>(null);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.plan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-muted-foreground">
            Administra las empresas que usan Auria HR
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <Plus size={20} className="mr-2" />
              Nuevo Cliente
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Cliente</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="col-span-1 sm:col-span-2 space-y-2">
                <Label htmlFor="companyName">Nombre de la empresa</Label>
                <Input id="companyName" placeholder="Ej: Tech Solutions S.L." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactName">Persona de contacto</Label>
                <Input id="contactName" placeholder="Ej: María García" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email de contacto</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="email@empresa.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Teléfono</Label>
                <Input id="contactPhone" placeholder="+34 600 000 000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employees">Número de empleados</Label>
                <Input id="employees" type="number" placeholder="50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan">Plan</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basico">Básico</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Fecha de inicio</Label>
                <Input id="startDate" type="date" />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-primary hover:bg-primary/90">
                Crear Cliente
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Building2 className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Clientes</p>
              <p className="text-2xl font-semibold">52</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Empleados Totales</p>
              <p className="text-2xl font-semibold">1,245</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calendar className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">En Prueba</p>
              <p className="text-2xl font-semibold">5</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Building2 className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Plan Enterprise</p>
              <p className="text-2xl font-semibold">7</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <Input
              placeholder="Buscar clientes..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter size={20} className="mr-2" />
            Filtros
          </Button>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden space-y-4">
          {filteredClients.map((client) => (
            <Card key={client.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h4 className="truncate mb-1">{client.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {client.contactPerson}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye size={16} className="mr-2" />
                      Ver detalles
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit size={16} className="mr-2" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 size={16} className="mr-2" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  <span className="truncate">{client.contactEmail}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  {client.contactPhone}
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-muted-foreground" />
                  <span>{client.employees} empleados</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {getPlanBadge(client.plan)}
                  <Badge
                    className={
                      client.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  >
                    {client.status === "active" ? "Activo" : "Prueba"}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Empresa</TableHead>
                <TableHead>Contacto</TableHead>
                <TableHead>Empleados</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Inicio</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Building2 className="text-primary" size={20} />
                      </div>
                      <span className="font-medium">{client.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p>{client.contactPerson}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Mail size={12} />
                        {client.contactEmail}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Phone size={12} />
                        {client.contactPhone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-muted-foreground" />
                      {client.employees}
                    </div>
                  </TableCell>
                  <TableCell>{getPlanBadge(client.plan)}</TableCell>
                  <TableCell>{client.startDate}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        client.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    >
                      {client.status === "active" ? "Activo" : "Prueba"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <TooltipProvider delayDuration={150}>
                      <div className="inline-flex items-center gap-0.5 rounded-md border p-0.5">
                        {/* Ver detalles */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-sm hover:bg-muted"
                              onClick={() => {
                                setSelectedClient(client);
                                setOpenView(true);
                              }}
                            >
                              <Eye size={16} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            Ver detalles
                          </TooltipContent>
                        </Tooltip>

                        {/* Editar */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-sm hover:bg-muted"
                              onClick={() => {
                                setSelectedClient(client);
                                setOpenEdit(true);
                              }}
                            >
                              <Edit size={16} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top">Editar</TooltipContent>
                        </Tooltip>

                        {/* Eliminar */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-sm text-destructive hover:bg-destructive/10"
                              onClick={() => {
                                setSelectedClient(client);
                                setOpenDelete(true);
                              }}
                            >
                              <Trash2 size={16} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top">Eliminar</TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Modal Detalle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Dialog open={openView} onOpenChange={setOpenView}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Detalles del cliente</DialogTitle>
            </DialogHeader>

            {selectedClient && (
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Empresa:</strong> {selectedClient.name}
                </p>
                <p>
                  <strong>Contacto:</strong> {selectedClient.contactPerson}
                </p>
                <p>
                  <strong>Email:</strong> {selectedClient.contactEmail}
                </p>
                <p>
                  <strong>Teléfono:</strong> {selectedClient.contactPhone}
                </p>
                <p>
                  <strong>Empleados:</strong> {selectedClient.employees}
                </p>
                <p>
                  <strong>Plan:</strong> {selectedClient.plan}
                </p>
                <p>
                  <strong>Fecha inicio:</strong> {selectedClient.startDate}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Modal Editar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Dialog open={openEdit} onOpenChange={setOpenEdit}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Editar cliente</DialogTitle>
            </DialogHeader>

            {selectedClient && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div className="col-span-2">
                  <Label>Empresa</Label>
                  <Input defaultValue={selectedClient.name} />
                </div>

                <div>
                  <Label>Persona de contacto</Label>
                  <Input defaultValue={selectedClient.contactPerson} />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    defaultValue={selectedClient.contactEmail}
                  />
                </div>

                <div>
                  <Label>Teléfono</Label>
                  <Input defaultValue={selectedClient.contactPhone} />
                </div>

                <div>
                  <Label>Empleados</Label>
                  <Input
                    type="number"
                    defaultValue={selectedClient.employees}
                  />
                </div>

                <div>
                  <Label>Plan</Label>
                  <Select defaultValue={selectedClient.plan.toLowerCase()}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basico">Básico</SelectItem>
                      <SelectItem value="pro">Pro</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpenEdit(false)}>
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  console.log("Guardar cambios", selectedClient);
                  setOpenEdit(false);
                }}
              >
                Guardar cambios
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Modal Eliminar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Dialog open={openDelete} onOpenChange={setOpenDelete}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>¿Eliminar cliente?</DialogTitle>
            </DialogHeader>

            {selectedClient && (
              <p className="text-sm text-muted-foreground">
                Esta acción no se puede deshacer. ¿Seguro que deseas eliminar{" "}
                <strong>{selectedClient.name}</strong>?
              </p>
            )}

            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setOpenDelete(false)}>
                Cancelar
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  console.log("Eliminar cliente", selectedClient?.id);
                  setOpenDelete(false);
                }}
              >
                Eliminar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
