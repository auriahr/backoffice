import { useState } from "react";
import {
  Search,
  Download,
  Eye,
  Filter,
  Calendar,
  Building2,
  Users,
  File,
  FolderInput,
  BookUser,
  BadgeEuro
} from "lucide-react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

interface PayrollReport {
  id: string;
  company: string;
  companyLogo: string;
  period: string;
  employees: number;
  totalAmount: number;
  status: "draft" | "calculated" | "approved" | "sent";
  createdDate: string;
  approvedBy?: string;
}

const MOCK_REPORTS: PayrollReport[] = [
  {
    id: "NOM-2025-001",
    company: "Tech Solutions SL",
    companyLogo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    period: "Enero 2025",
    employees: 45,
    totalAmount: 87500.5,
    status: "sent",
    createdDate: "05/01/2025",
    approvedBy: "María González",
  },
  {
    id: "NOM-2025-002",
    company: "Comercial Ibérica SA",
    companyLogo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    period: "Enero 2025",
    employees: 28,
    totalAmount: 52300.0,
    status: "approved",
    createdDate: "06/01/2025",
    approvedBy: "Carlos Ruiz",
  },
  {
    id: "NOM-2025-003",
    company: "Industrias del Norte",
    companyLogo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    period: "Enero 2025",
    employees: 67,
    totalAmount: 134200.75,
    status: "calculated",
    createdDate: "07/01/2025",
  },
  {
    id: "NOM-2025-004",
    company: "Servicios Profesionales",
    companyLogo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    period: "Enero 2025",
    employees: 34,
    totalAmount: 68900.0,
    status: "draft",
    createdDate: "08/01/2025",
  },
  {
    id: "NOM-2025-005",
    company: "Logística Express",
    companyLogo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    period: "Enero 2025",
    employees: 89,
    totalAmount: 156780.25,
    status: "calculated",
    createdDate: "08/01/2025",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "draft":
      return "bg-gray-100 text-gray-800";
    case "calculated":
      return "bg-blue-100 text-blue-800";
    case "approved":
      return "bg-green-100 text-green-800";
    case "sent":
      return "bg-[#66E5B6] text-[#241773]";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "draft":
      return "Borrador";
    case "calculated":
      return "Calculada";
    case "approved":
      return "Aprobada";
    case "sent":
      return "Enviada";
    default:
      return status;
  }
};

export function PayrollControl() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [periodFilter, setPeriodFilter] = useState("all");

  const filteredReports = MOCK_REPORTS.filter((report) => {
    const matchesSearch =
      report.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || report.status === statusFilter;
    const matchesPeriod =
      periodFilter === "all" || report.period === periodFilter;
    return matchesSearch && matchesStatus && matchesPeriod;
  });

  const totalEmployees = filteredReports.reduce(
    (sum, report) => sum + report.employees,
    0
  );
  const totalAmount = filteredReports.reduce(
    (sum, report) => sum + report.totalAmount,
    0
  );

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <File className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Informes</p>
              <p className="text-2xl font-semibold">{filteredReports.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <BookUser className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Empleados</p>
              <p className="text-2xl font-semibold">{totalEmployees}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BadgeEuro className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Importe Total</p>
              <p className="text-2xl font-semibold">
                €
                {totalAmount.toLocaleString("es-ES", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FolderInput className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Pendientes de Envío
              </p>
              <p className="text-2xl font-semibold">
                {MOCK_REPORTS.filter((r) => r.status !== "sent").length}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filtros y Búsqueda */}
      <Card className="p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <Input
              placeholder="Buscar por empresa o ID de nómina..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full lg:w-[180px]">
              <Filter size={16} className="mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los estados</SelectItem>
              <SelectItem value="draft">Borrador</SelectItem>
              <SelectItem value="calculated">Calculada</SelectItem>
              <SelectItem value="approved">Aprobada</SelectItem>
              <SelectItem value="sent">Enviada</SelectItem>
            </SelectContent>
          </Select>
          <Select value={periodFilter} onValueChange={setPeriodFilter}>
            <SelectTrigger className="w-full lg:w-[180px]">
              <Calendar size={16} className="mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los periodos</SelectItem>
              <SelectItem value="Enero 2025">Enero 2025</SelectItem>
              <SelectItem value="Diciembre 2024">Diciembre 2024</SelectItem>
              <SelectItem value="Noviembre 2024">Noviembre 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Grid de Informes */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3>Informes de Nóminas</h3>
          <Button variant="outline" className="text-[#241773] border-[#241773]">
            <Download size={16} className="mr-2" />
            Exportar Todo
          </Button>
        </div>

        {/* Vista Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left p-3 text-sm font-medium">
                  ID / Empresa
                </th>
                <th className="text-left p-3 text-sm font-medium">Periodo</th>
                <th className="text-left p-3 text-sm font-medium">Empleados</th>
                <th className="text-left p-3 text-sm font-medium">
                  Importe Total
                </th>
                <th className="text-left p-3 text-sm font-medium">Estado</th>
                <th className="text-left p-3 text-sm font-medium">
                  Fecha Creación
                </th>
                <th className="text-right p-3 text-sm font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <tr
                  key={report.id}
                  className="border-b hover:bg-muted/50 transition-colors"
                >
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={report.companyLogo} />
                        <AvatarFallback>
                          {report.company.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{report.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {report.company}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span>{report.period}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-muted-foreground" />
                      <span>{report.employees}</span>
                    </div>
                  </td>
                  <td className="p-3 font-medium">
                    €
                    {report.totalAmount.toLocaleString("es-ES", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td className="p-3">
                    <Badge className={getStatusColor(report.status)}>
                      {getStatusText(report.status)}
                    </Badge>
                  </td>
                  <td className="p-3 text-sm text-muted-foreground">
                    {report.createdDate}
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vista Mobile */}
        <div className="md:hidden space-y-3">
          {filteredReports.map((report) => (
            <div key={report.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={report.companyLogo} />
                    <AvatarFallback>
                      {report.company.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{report.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {report.company}
                    </p>
                  </div>
                </div>
                <Badge className={getStatusColor(report.status)}>
                  {getStatusText(report.status)}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Periodo</p>
                  <p className="font-medium">{report.period}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Empleados</p>
                  <p className="font-medium">{report.employees}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Importe</p>
                  <p className="font-medium">
                    €
                    {report.totalAmount.toLocaleString("es-ES", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Fecha</p>
                  <p className="font-medium">{report.createdDate}</p>
                </div>
              </div>

              <div className="flex gap-2 pt-2 border-t">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye size={16} className="mr-2" />
                  Ver
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Download size={16} className="mr-2" />
                  Descargar
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <Building2
              size={48}
              className="mx-auto text-muted-foreground mb-4"
            />
            <p className="text-muted-foreground">
              No se encontraron informes de nóminas
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
