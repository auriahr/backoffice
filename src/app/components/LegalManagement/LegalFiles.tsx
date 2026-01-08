import { useState } from "react";
import {
  FolderOpen,
  Eye,
  Download,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Building2,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
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

const files = [
  {
    id: 1,
    company: "Tech Solutions S.L.",
    case: "Despido procedente - Empleado XYZ",
    status: "active",
    documents: 12,
  },
  {
    id: 2,
    company: "Construcciones ABC",
    case: "Litigio laboral - Seguridad Social",
    status: "closed",
    documents: 28,
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

export function LegalFiles() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFiles = files.filter(
    (file) =>
      file.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.case.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <FolderOpen className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Expedientes Activos
              </p>
              <p className="text-2xl font-semibold">15</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <FolderOpen className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cerrados</p>
              <p className="text-2xl font-semibold">48</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FolderOpen className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Documentos</p>
              <p className="text-2xl font-semibold">456</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Grid */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <Input
              placeholder="Buscar expedientes..."
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
          {filteredFiles.map((file) => (
            <Card key={file.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h4 className="truncate mb-1">{file.company}</h4>
                  <p className="text-sm text-muted-foreground">
                    {file.documents}
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
                  <span className="truncate">{file.status}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  {file.case}
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-muted-foreground" />
                  <span>{file.id} empleados</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {getPlanBadge(file.status)}
                  <Badge
                    className={
                      file.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  >
                    {file.status === "active" ? "Activo" : "Prueba"}
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
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFiles.map((file) => (
                <TableRow key={file.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Building2 className="text-primary" size={20} />
                      </div>
                      <span className="font-medium">{file.company}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p>{file.case}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Mail size={12} />
                        {file.documents}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Phone size={12} />
                        {file.status}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-muted-foreground" />
                      {file.company}
                    </div>
                  </TableCell>
                  <TableCell>{getPlanBadge(file.status)}</TableCell>
                  <TableCell>{file.id}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        file.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    >
                      {file.status === "active" ? "Activo" : "Prueba"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
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
