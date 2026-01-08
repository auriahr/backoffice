import { useState } from "react";
import {
  Building2,
  Plus,
  Save,
  X,
  Edit,
  Search,
  User,
  FileText,
  Trash2,
  BookUser,
  HandCoins,
  Coins,
} from "lucide-react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Badge } from "../../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

interface Employee {
  id: string;
  name: string;
  position: string;
  avatar: string;
  baseSalary: number;
  extraHourRate: number;
  socialSecurity: number;
  irpf: number;
  category: string;
  contractType: string;
}

const MOCK_COMPANIES = [
  { id: "1", name: "Tech Solutions SL" },
  { id: "2", name: "Comercial Ibérica SA" },
  { id: "3", name: "Industrias del Norte" },
  { id: "4", name: "Servicios Profesionales" },
  { id: "5", name: "Logística Express" },
];

const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: "1",
    name: "Carlos Martínez",
    position: "Desarrollador Senior",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    baseSalary: 3500.0,
    extraHourRate: 25.0,
    socialSecurity: 6.35,
    irpf: 19.0,
    category: "Grupo 1",
    contractType: "Indefinido",
  },
  {
    id: "2",
    name: "Ana García",
    position: "Project Manager",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    baseSalary: 4200.0,
    extraHourRate: 30.0,
    socialSecurity: 6.35,
    irpf: 24.0,
    category: "Grupo 1",
    contractType: "Indefinido",
  },
  {
    id: "3",
    name: "Miguel Torres",
    position: "Técnico de Soporte",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    baseSalary: 2100.0,
    extraHourRate: 15.0,
    socialSecurity: 6.35,
    irpf: 12.0,
    category: "Grupo 3",
    contractType: "Temporal",
  },
  {
    id: "4",
    name: "Laura Ruiz",
    position: "Diseñadora UX/UI",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    baseSalary: 3000.0,
    extraHourRate: 22.0,
    socialSecurity: 6.35,
    irpf: 18.0,
    category: "Grupo 2",
    contractType: "Indefinido",
  },
];

export function PayrollSalaryMasters() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    baseSalary: "",
    extraHourRate: "",
    socialSecurity: "6.35",
    irpf: "",
    category: "",
    contractType: "",
  });

  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.position && newEmployee.baseSalary) {
      const employee: Employee = {
        id: (employees.length + 1).toString(),
        name: newEmployee.name,
        position: newEmployee.position,
        avatar:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
        baseSalary: parseFloat(newEmployee.baseSalary),
        extraHourRate: parseFloat(newEmployee.extraHourRate || "0"),
        socialSecurity: parseFloat(newEmployee.socialSecurity),
        irpf: parseFloat(newEmployee.irpf || "0"),
        category: newEmployee.category,
        contractType: newEmployee.contractType,
      };
      setEmployees([...employees, employee]);
      setNewEmployee({
        name: "",
        position: "",
        baseSalary: "",
        extraHourRate: "",
        socialSecurity: "6.35",
        irpf: "",
        category: "",
        contractType: "",
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteEmployee = (id: string) => {
    setEmployees(employees.filter((e) => e.id !== id));
    if (selectedEmployee?.id === id) {
      setSelectedEmployee(null);
    }
  };

  const handleUpdateEmployee = (
    id: string,
    field: keyof Employee,
    value: any
  ) => {
    setEmployees(
      employees.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );
    if (selectedEmployee?.id === id) {
      setSelectedEmployee({ ...selectedEmployee, [field]: value });
    }
  };

  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSalaries = employees.reduce((sum, e) => sum + e.baseSalary, 0);

  return (
    <div className="space-y-6">
      {/* Selector de Empresa */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex-1 w-full sm:w-auto">
            <Label className="mb-2 block">Selecciona la empresa</Label>
            <Select value={selectedCompany} onValueChange={setSelectedCompany}>
              <SelectTrigger className="w-full">
                <Building2 size={16} className="mr-2" />
                <SelectValue placeholder="Selecciona una empresa..." />
              </SelectTrigger>
              <SelectContent>
                {MOCK_COMPANIES.map((company) => (
                  <SelectItem key={company.id} value={company.id}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedCompany && (
            <Button
              variant="outline"
              onClick={() => setShowAddForm(!showAddForm)}
              className="border-[#66E5B6] text-[#66E5B6]"
            >
              <Plus size={16} className="mr-2" />
              Agregar Empleado
            </Button>
          )}
        </div>
      </Card>

      {!selectedCompany ? (
        <Card className="p-12 text-center">
          <Building2 size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="mb-2">Selecciona una empresa</h3>
          <p className="text-muted-foreground">
            Selecciona una empresa para gestionar los salarios de sus
            trabajadores
          </p>
        </Card>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookUser className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Total Empleados
                  </p>
                  <p className="text-2xl font-semibold">{employees.length}</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <HandCoins className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Masa Salarial Total
                  </p>
                  <p className="text-2xl font-semibold">
                    €
                    {totalSalaries.toLocaleString("es-ES", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Coins className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Salario Promedio
                  </p>
                  <p className="text-2xl font-semibold">
                    €
                    {(totalSalaries / employees.length).toLocaleString(
                      "es-ES",
                      {
                        minimumFractionDigits: 2,
                      }
                    )}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Formulario para Nuevo Empleado */}
          {showAddForm && (
            <Card className="p-6 border-[#66E5B6]">
              <h3 className="mb-4">Agregar Nuevo Empleado</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nombre completo *</Label>
                  <Input
                    placeholder="Nombre del empleado"
                    value={newEmployee.name}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Puesto *</Label>
                  <Input
                    placeholder="Puesto de trabajo"
                    value={newEmployee.position}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        position: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Salario base mensual (€) *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={newEmployee.baseSalary}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        baseSalary: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Precio hora extra (€)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={newEmployee.extraHourRate}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        extraHourRate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>% Seguridad Social</Label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="6.35"
                    value={newEmployee.socialSecurity}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        socialSecurity: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>% IRPF</Label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={newEmployee.irpf}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, irpf: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Grupo de cotización</Label>
                  <Select
                    value={newEmployee.category}
                    onValueChange={(value) =>
                      setNewEmployee({ ...newEmployee, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona grupo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Grupo 1">
                        Grupo 1 - Ingenieros y Licenciados
                      </SelectItem>
                      <SelectItem value="Grupo 2">
                        Grupo 2 - Ingenieros Técnicos
                      </SelectItem>
                      <SelectItem value="Grupo 3">
                        Grupo 3 - Jefes Administrativos
                      </SelectItem>
                      <SelectItem value="Grupo 4">
                        Grupo 4 - Ayudantes no Titulados
                      </SelectItem>
                      <SelectItem value="Grupo 5">
                        Grupo 5 - Oficiales Administrativos
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tipo de contrato</Label>
                  <Select
                    value={newEmployee.contractType}
                    onValueChange={(value) =>
                      setNewEmployee({ ...newEmployee, contractType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Indefinido">Indefinido</SelectItem>
                      <SelectItem value="Temporal">Temporal</SelectItem>
                      <SelectItem value="Prácticas">Prácticas</SelectItem>
                      <SelectItem value="Formación">Formación</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowAddForm(false);
                    setNewEmployee({
                      name: "",
                      position: "",
                      baseSalary: "",
                      extraHourRate: "",
                      socialSecurity: "6.35",
                      irpf: "",
                      category: "",
                      contractType: "",
                    });
                  }}
                >
                  <X size={16} className="mr-2" />
                  Cancelar
                </Button>
                <Button
                  onClick={handleAddEmployee}
                  className="bg-[#66E5B6] text-[#241773] hover:bg-[#66E5B6]/90"
                >
                  <Plus size={16} className="mr-2" />
                  Agregar Empleado
                </Button>
              </div>
            </Card>
          )}

          {/* Búsqueda */}
          <Card className="p-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                placeholder="Buscar empleados..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </Card>

          {/* Lista de Empleados */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredEmployees.map((employee) => (
              <Card
                key={employee.id}
                className={`p-6 cursor-pointer transition-all ${
                  selectedEmployee?.id === employee.id
                    ? "ring-2 ring-[#241773] bg-[#241773]/5"
                    : "hover:bg-muted/20"
                }`}
                onClick={() => setSelectedEmployee(employee)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={employee.avatar} />
                      <AvatarFallback>
                        {employee.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {employee.position}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">{employee.contractType}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Salario Base</p>
                    <p className="font-semibold text-[#241773]">
                      €
                      {employee.baseSalary.toLocaleString("es-ES", {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Hora Extra</p>
                    <p className="font-semibold">
                      €{employee.extraHourRate.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">% S. Social</p>
                    <p className="font-semibold">{employee.socialSecurity}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">% IRPF</p>
                    <p className="font-semibold">{employee.irpf}%</p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <Badge variant="outline" className="text-xs">
                    {employee.category}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* Detalle del Empleado Seleccionado */}
          {selectedEmployee && (
            <Card className="p-6 border-[#241773]">
              <div className="flex items-center justify-between mb-4">
                <h3>Detalles de {selectedEmployee.name}</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-[#241773] border-[#241773]"
                  >
                    {isEditing ? (
                      <Save size={16} className="mr-2" />
                    ) : (
                      <Edit size={16} className="mr-2" />
                    )}
                    {isEditing ? "Guardar" : "Editar"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteEmployee(selectedEmployee.id)}
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    <Trash2 size={16} className="mr-2" />
                    Eliminar
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Salario base mensual (€)</Label>
                  {isEditing ? (
                    <Input
                      type="number"
                      step="0.01"
                      value={selectedEmployee.baseSalary}
                      onChange={(e) =>
                        handleUpdateEmployee(
                          selectedEmployee.id,
                          "baseSalary",
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  ) : (
                    <div className="p-2 bg-muted/30 rounded-md">
                      €
                      {selectedEmployee.baseSalary.toLocaleString("es-ES", {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Precio hora extra (€)</Label>
                  {isEditing ? (
                    <Input
                      type="number"
                      step="0.01"
                      value={selectedEmployee.extraHourRate}
                      onChange={(e) =>
                        handleUpdateEmployee(
                          selectedEmployee.id,
                          "extraHourRate",
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  ) : (
                    <div className="p-2 bg-muted/30 rounded-md">
                      €{selectedEmployee.extraHourRate.toFixed(2)}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>% Seguridad Social</Label>
                  {isEditing ? (
                    <Input
                      type="number"
                      step="0.01"
                      value={selectedEmployee.socialSecurity}
                      onChange={(e) =>
                        handleUpdateEmployee(
                          selectedEmployee.id,
                          "socialSecurity",
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  ) : (
                    <div className="p-2 bg-muted/30 rounded-md">
                      {selectedEmployee.socialSecurity}%
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>% IRPF</Label>
                  {isEditing ? (
                    <Input
                      type="number"
                      step="0.01"
                      value={selectedEmployee.irpf}
                      onChange={(e) =>
                        handleUpdateEmployee(
                          selectedEmployee.id,
                          "irpf",
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  ) : (
                    <div className="p-2 bg-muted/30 rounded-md">
                      {selectedEmployee.irpf}%
                    </div>
                  )}
                </div>
              </div>

              {/* Cálculos Automáticos */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="text-sm font-medium mb-3">
                  Cálculos Aproximados
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-[#241773]/5 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">
                      Bruto Anual
                    </p>
                    <p className="font-semibold">
                      €
                      {(selectedEmployee.baseSalary * 14).toLocaleString(
                        "es-ES",
                        { minimumFractionDigits: 2 }
                      )}
                    </p>
                  </div>
                  <div className="p-3 bg-[#66E5B6]/10 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">
                      Deducción S.S.
                    </p>
                    <p className="font-semibold">
                      €
                      {(
                        (selectedEmployee.baseSalary *
                          selectedEmployee.socialSecurity) /
                        100
                      ).toLocaleString("es-ES", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="p-3 bg-[#241773]/5 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">
                      Deducción IRPF
                    </p>
                    <p className="font-semibold">
                      €
                      {(
                        (selectedEmployee.baseSalary * selectedEmployee.irpf) /
                        100
                      ).toLocaleString("es-ES", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="p-3 bg-[#66E5B6]/10 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">
                      Neto Aprox.
                    </p>
                    <p className="font-semibold">
                      €
                      {(
                        selectedEmployee.baseSalary -
                        (selectedEmployee.baseSalary *
                          selectedEmployee.socialSecurity) /
                          100 -
                        (selectedEmployee.baseSalary * selectedEmployee.irpf) /
                          100
                      ).toLocaleString("es-ES", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {filteredEmployees.length === 0 && (
            <Card className="p-12 text-center">
              <User size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                No se encontraron empleados
              </p>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
