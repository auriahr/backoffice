import { FileText, Plus, Download, Eye, Edit } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

const contracts = [
  {
    id: 1,
    employee: "María García",
    type: "Indefinido",
    startDate: "01/03/2023",
    endDate: "-",
    salary: 3500,
    status: "active",
  },
  {
    id: 2,
    employee: "Juan Pérez",
    type: "Indefinido",
    startDate: "15/01/2022",
    endDate: "-",
    salary: 4200,
    status: "active",
  },
  {
    id: 3,
    employee: "Ana López",
    type: "Temporal",
    startDate: "01/06/2025",
    endDate: "31/12/2025",
    salary: 2800,
    status: "active",
  },
  {
    id: 4,
    employee: "Carlos Ruiz",
    type: "Indefinido",
    startDate: "10/09/2020",
    endDate: "-",
    salary: 5000,
    status: "active",
  },
];

const getContractTypeBadge = (type: string) => {
  switch (type) {
    case 'Indefinido':
      return <Badge className="bg-green-100 text-green-700">Indefinido</Badge>;
    case 'Temporal':
      return <Badge className="bg-blue-100 text-blue-700">Temporal</Badge>;
    case 'Prácticas':
      return <Badge className="bg-purple-100 text-purple-700">Prácticas</Badge>;
    default:
      return <Badge>{type}</Badge>;
  }
};

export function ContractsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Gestión de Contratos</h1>
          <p className="text-muted-foreground">Administra los contratos laborales</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus size={20} className="mr-2" />
              Nuevo Contrato
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Crear Nuevo Contrato</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="contractEmployee">Empleado</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar empleado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emp1">María García</SelectItem>
                    <SelectItem value="emp2">Juan Pérez</SelectItem>
                    <SelectItem value="emp3">Ana López</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contractType">Tipo de contrato</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indefinido">Indefinido</SelectItem>
                    <SelectItem value="temporal">Temporal</SelectItem>
                    <SelectItem value="practicas">Prácticas</SelectItem>
                    <SelectItem value="formacion">Formación</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Fecha de inicio</Label>
                <Input id="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Fecha de fin (opcional)</Label>
                <Input id="endDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salario (€)</Label>
                <Input id="salary" type="number" placeholder="3000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Puesto</Label>
                <Input id="position" placeholder="Ej: Developer Senior" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="notes">Notas adicionales</Label>
                <Textarea id="notes" placeholder="Condiciones especiales, bonificaciones, etc." rows={3} />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-primary hover:bg-primary/90">Crear Contrato</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <FileText className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Contratos Activos</p>
              <p className="text-2xl font-semibold">52</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Temporales</p>
              <p className="text-2xl font-semibold">8</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileText className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Prácticas</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <FileText className="text-yellow-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Próximos Vencimientos</p>
              <p className="text-2xl font-semibold">2</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Empleado</TableHead>
              <TableHead>Tipo de Contrato</TableHead>
              <TableHead>Fecha Inicio</TableHead>
              <TableHead>Fecha Fin</TableHead>
              <TableHead className="text-right">Salario</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell>{contract.employee}</TableCell>
                <TableCell>{getContractTypeBadge(contract.type)}</TableCell>
                <TableCell>{contract.startDate}</TableCell>
                <TableCell>{contract.endDate}</TableCell>
                <TableCell className="text-right">{contract.salary.toLocaleString()} €</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-700">Activo</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
