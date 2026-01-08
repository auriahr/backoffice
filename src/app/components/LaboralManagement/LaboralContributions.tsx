import {
  DollarSign,
  TrendingUp,
  FileText,
  Edit,
  Eye,
  MoreVertical,
  Trash2,
  Check,
  Circle,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

const contributions = [
  {
    id: 11111,
    company: "Tech Solutions S.L.",
    type: "L00",
    regime: "Régimen General",
    status: "consolidate",
    date: "2025-12",
    ccc: "01106031382",
    training: "yes",
    period: "",
  },
  {
    id: 22222,
    company: "Construcciones ABC",
    type: "L13",
    regime: "Régimen General",
    status: "liquidated",
    date: "2025-12",
    ccc: "28106031382",
    training: "yes",
    period: "",
  },
  {
    id: 33333,
    company: "Retail Group",
    type: "L00",
    regime: "Régimen General",
    status: "error",
    date: "2025-12",
    ccc: "47102754608",
    training: "no",
    period: "",
  },
  {
    id: 44444,
    company: "Servicios Legales Pro",
    type: "L00",
    regime: "Régimen General",
    status: "pending",
    date: "2025-12",
    ccc: "0813444783",
    training: "yes",
    period: "",
  },
  {
    id: 55555,
    company: "Distribuciones Norte",
    type: "L00",
    regime: "Régimen General",
    status: "liquidated",
    date: "2025-12",
    ccc: "01106031382",
    training: "no",
    period: "",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "liquidated":
      return <Badge className="bg-green-100 text-green-700">Liquidado</Badge>;
    case "pending":
      return <Badge className="bg-blue-100 text-blue-700">Pendiente</Badge>;
    case "consolidate":
      return (
        <Badge className="bg-yellow-100 text-yellow-700">Consolidado</Badge>
      );
    case "error":
      return <Badge className="bg-red-100 text-red-700">Con Errores</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const getTypeIcon = (training: string) => {
  switch (training) {
    case "yes":
      return <Check className="text-blue-600" size={20} />;
    case "no":
      return <Circle className="text-red-600" size={20} />;
    default:
      return <Badge>{training}</Badge>;
  }
};

export function LaboralContributions() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContributions = contributions.filter(
    (contribution) =>
      contribution.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contribution.regime.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contribution.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <DollarSign className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Total Cotizaciones
              </p>
              <p className="text-2xl font-semibold">45,230 €</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Este mes</p>
              <p className="text-2xl font-semibold">12,450 €</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pendientes</p>
              <p className="text-2xl font-semibold">5</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-4">
        <div className="flex justify-between items-center">
          <Select defaultValue="2025-12">
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025-12">Diciembre 2025</SelectItem>
              <SelectItem value="2025-11">Noviembre 2025</SelectItem>
              <SelectItem value="2025-10">Octubre 2025</SelectItem>
              <SelectItem value="2025-09">Septiembre 2025</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-primary hover:bg-primary/90">
            Nuevo Formulario
          </Button>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cod. Empresa</TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>Régimen</TableHead>
                <TableHead>Tipo Liquidación</TableHead>
                <TableHead>Fecha Cobro</TableHead>
                <TableHead>CCC</TableHead>
                <TableHead>Formación</TableHead>
                <TableHead className="text-center">Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContributions.map((contribution) => (
                <TableRow key={contribution.id}>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {contribution.id}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {contribution.company}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {contribution.regime}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {contribution.type}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {contribution.date}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium items-center">
                        {contribution.ccc}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {getTypeIcon(contribution.training)}
                  </TableCell>
                  <TableCell className="text-center">
                    {getStatusBadge(contribution.status)}
                  </TableCell>

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
