import {
  ClipboardList,
  AlertCircle,
  CheckCircle,
  Clock,
  Building2,
  Filter,
  Search,
  Edit,
  Eye,
  Mail,
  MoreVertical,
  Phone,
  Trash2,
  Users,
} from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
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

const activities = [
  {
    id: 1,
    company: "Tech Solutions S.L.",
    type: "Nómina",
    action: "Procesamiento de nóminas de Diciembre",
    status: "completed",
    date: "31/12/2025 14:30",
    assignedTo: "Laura Martínez",
    employee: "Ana Ruiz",
    statusA3: "no",
    statusSS: "yes",
    statusEnvCli: "not-procceding",
    statusCont: "no",
    statusCertificado: "not-procceding",
  },
  {
    id: 2,
    company: "Construcciones ABC",
    type: "Alta",
    action: "Alta de nuevo empleado en Seguridad Social",
    status: "pending",
    date: "31/12/2025 10:15",
    assignedTo: "Pedro González",
    employee: "Carlos López",
    statusA3: "yes",
    statusSS: "yes",
    statusEnvCli: "no",
    statusCont: "not-procceding",
    statusCertificado: "not-procceding",
  },
  {
    id: 3,
    company: "Retail Group",
    type: "Baja",
    action: "Tramitación de baja laboral por IT",
    status: "in-progress",
    date: "30/12/2025 16:45",
    assignedTo: "Ana Ruiz",
    employee: "Carla Segovia",
    statusA3: "yes",
    statusSS: "yes",
    statusEnvCli: "yes",
    statusCont: "not-procceding",
    statusCertificado: "no",
  },
  {
    id: 4,
    company: "Servicios Legales Pro",
    type: "Cotización",
    action: "Revisión de cotizaciones del mes",
    status: "pending",
    date: "30/12/2025 09:00",
    assignedTo: "Carlos López",
    employee: "Cristian Caseiro",
    statusA3: "yes",
    statusSS: "no",
    statusEnvCli: "yes",
    statusCont: "no",
    statusCertificado: "not-procceding",
  },
  {
    id: 5,
    company: "Distribuciones Norte",
    type: "Documentación",
    action: "Actualización de contratos laborales",
    status: "completed",
    date: "29/12/2025 11:20",
    assignedTo: "María Sánchez",
    employee: "Cristian Fonseca",
    statusA3: "",
    statusSS: "",
    statusEnvCli: "",
    statusCont: "",
    statusCertificado: "",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-100 text-green-700">Completado</Badge>;
    case "in-progress":
      return <Badge className="bg-blue-100 text-blue-700">En Proceso</Badge>;
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-700">Pendiente</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const getStatus = (status: string) => {
  switch (status) {
    case "yes":
      return <Badge className="bg-green-100 text-green-700">V</Badge>;
    case "no":
      return <Badge className="bg-blue-100 text-blue-700">X</Badge>;
    case "not-procceding":
      return <Badge className="bg-yellow-100 text-yellow-700">/</Badge>;
    case "":
      return <Badge className="bg-red-100 text-red-700">-</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    Nómina: "bg-purple-100 text-purple-700",
    Alta: "bg-green-100 text-green-700",
    Baja: "bg-red-100 text-red-700",
    Cotización: "bg-blue-100 text-blue-700",
    Documentación: "bg-orange-100 text-orange-700",
  };
  return colors[type] || "bg-gray-100 text-gray-700";
};

export function LaboralControl() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredActivities = activities.filter(
    (activity) =>
      activity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <ClipboardList className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Gestiones</p>
              <p className="text-2xl font-semibold">156</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="text-yellow-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pendientes</p>
              <p className="text-2xl font-semibold">23</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <AlertCircle className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">En Proceso</p>
              <p className="text-2xl font-semibold">18</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completadas Hoy</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Grid */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <Input
              placeholder="Buscar actividades..."
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
        <div className="block lg:hidden space-y-2">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h4 className="truncate mb-1">{activity.company}</h4>
                  <p className="text-sm text-muted-foreground">
                    {activity.company}
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
                  <span className="truncate">{activity.status}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  {activity.company}
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-muted-foreground" />
                  <span>{activity.id} empleados</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {getStatusBadge(activity.status)}
                  <Badge
                    className={
                      activity.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  >
                    {activity.status === "active" ? "Activo" : "Prueba"}
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
                <TableHead>Nº</TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>Trabajador/a</TableHead>
                <TableHead>Tipo Solicitud</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Observaciones</TableHead>
                <TableHead className="text-center">A3</TableHead>
                <TableHead className="text-center">Seg. Social</TableHead>
                <TableHead className="text-center">Envío Cliente</TableHead>
                <TableHead className="text-center">Contrat@</TableHead>
                <TableHead className="text-center">Certifica2</TableHead>
                <TableHead>Asignado A</TableHead>
                <TableHead className="text-center">Estatus</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {activity.id}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {activity.company}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {activity.employee}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Badge className={getTypeColor(activity.type)}>
                        {activity.type}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {activity.date}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {activity.action}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {getStatus(activity.statusA3)}
                  </TableCell>
                  <TableCell className="text-center">
                    {getStatus(activity.statusSS)}
                  </TableCell>
                  <TableCell className="text-center">
                    {getStatus(activity.statusEnvCli)}
                  </TableCell>
                  <TableCell className="text-center">
                    {getStatus(activity.statusCont)}
                  </TableCell>
                  <TableCell className="text-center">
                    {getStatus(activity.statusCertificado)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {activity.assignedTo}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(activity.status)}</TableCell>
                  {/* Actions */}
                  <TableCell className="text-center">
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
                          Editar información
                        </DropdownMenuItem>
                        <DropdownMenuItem>Cambiar plan</DropdownMenuItem>
                        <DropdownMenuItem>Ver facturación</DropdownMenuItem>
                        <DropdownMenuItem>Acceder a su panel</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 size={16} className="mr-2" />
                          Suspender cuenta
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
