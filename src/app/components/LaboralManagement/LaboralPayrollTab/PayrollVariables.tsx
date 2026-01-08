import { useState } from "react";
import { Building2, Plus, Save, X, Edit, Search } from "lucide-react";
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

interface PayrollVariable {
  id: string;
  name: string;
  value: string;
  type: "number" | "percentage" | "text";
  category: string;
}

interface CompanyVariables {
  companyId: string;
  companyName: string;
  variables: PayrollVariable[];
}

const MOCK_COMPANIES = [
  { id: "1", name: "Tech Solutions SL" },
  { id: "2", name: "Comercial Ibérica SA" },
  { id: "3", name: "Industrias del Norte" },
  { id: "4", name: "Servicios Profesionales" },
  { id: "5", name: "Logística Express" },
];

const INITIAL_VARIABLES: PayrollVariable[] = [
  {
    id: "1",
    name: "Plus de transporte",
    value: "150.00",
    type: "number",
    category: "Complementos",
  },
  {
    id: "2",
    name: "Plus de disponibilidad",
    value: "200.00",
    type: "number",
    category: "Complementos",
  },
  {
    id: "3",
    name: "Bonus por objetivos",
    value: "10",
    type: "percentage",
    category: "Variables",
  },
  {
    id: "4",
    name: "Horas extras precio/hora",
    value: "18.50",
    type: "number",
    category: "Variables",
  },
  {
    id: "5",
    name: "Dietas",
    value: "30.00",
    type: "number",
    category: "Gastos",
  },
  {
    id: "6",
    name: "Plus de nocturnidad",
    value: "150.00",
    type: "number",
    category: "Complementos",
  },
];

export function PayrollVariables() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [variables, setVariables] =
    useState<PayrollVariable[]>(INITIAL_VARIABLES);
  const [isEditing, setIsEditing] = useState(false);
  const [editingVariable, setEditingVariable] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [newVariable, setNewVariable] = useState({
    name: "",
    value: "",
    type: "number" as "number" | "percentage" | "text",
    category: "",
  });

  const handleAddVariable = () => {
    if (newVariable.name && newVariable.value && newVariable.category) {
      const variable: PayrollVariable = {
        id: (variables.length + 1).toString(),
        ...newVariable,
      };
      setVariables([...variables, variable]);
      setNewVariable({ name: "", value: "", type: "number", category: "" });
      setShowAddForm(false);
    }
  };

  const handleDeleteVariable = (id: string) => {
    setVariables(variables.filter((v) => v.id !== id));
  };

  const handleUpdateVariable = (id: string, field: string, value: string) => {
    setVariables(
      variables.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    );
  };

  const filteredVariables = variables.filter(
    (v) =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedVariables = filteredVariables.reduce((acc, variable) => {
    const category = variable.category || "Sin categoría";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(variable);
    return acc;
  }, {} as Record<string, PayrollVariable[]>);

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
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowAddForm(!showAddForm)}
                className="border-[#66E5B6] text-[#66E5B6]"
              >
                <Plus size={16} className="mr-2" />
                Nueva Variable
              </Button>
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className={
                  isEditing ? "bg-[#66E5B6] text-[#241773]" : "bg-[#241773]"
                }
              >
                {isEditing ? (
                  <>
                    <Save size={16} className="mr-2" />
                    Guardar Cambios
                  </>
                ) : (
                  <>
                    <Edit size={16} className="mr-2" />
                    Editar
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </Card>

      {!selectedCompany ? (
        <Card className="p-12 text-center">
          <Building2 size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="mb-2">Selecciona una empresa</h3>
          <p className="text-muted-foreground">
            Selecciona una empresa para gestionar sus variables de nómina
          </p>
        </Card>
      ) : (
        <>
          {/* Formulario para Nueva Variable */}
          {showAddForm && (
            <Card className="p-6 border-[#66E5B6]">
              <h3 className="mb-4">Agregar Nueva Variable</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nombre de la variable</Label>
                  <Input
                    placeholder="Ej: Plus de transporte"
                    value={newVariable.name}
                    onChange={(e) =>
                      setNewVariable({ ...newVariable, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Categoría</Label>
                  <Select
                    value={newVariable.category}
                    onValueChange={(value) =>
                      setNewVariable({ ...newVariable, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Complementos">Complementos</SelectItem>
                      <SelectItem value="Variables">Variables</SelectItem>
                      <SelectItem value="Gastos">Gastos</SelectItem>
                      <SelectItem value="Deducciones">Deducciones</SelectItem>
                      <SelectItem value="Otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tipo de valor</Label>
                  <Select
                    value={newVariable.type}
                    onValueChange={(value) =>
                      setNewVariable({ ...newVariable, type: value as any })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="number">Importe (€)</SelectItem>
                      <SelectItem value="percentage">Porcentaje (%)</SelectItem>
                      <SelectItem value="text">Texto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Valor</Label>
                  <div className="relative">
                    <Input
                      type={newVariable.type === "text" ? "text" : "number"}
                      placeholder="0.00"
                      value={newVariable.value}
                      onChange={(e) =>
                        setNewVariable({
                          ...newVariable,
                          value: e.target.value,
                        })
                      }
                      className={newVariable.type !== "text" ? "pr-8" : ""}
                    />
                    {newVariable.type === "number" && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        €
                      </span>
                    )}
                    {newVariable.type === "percentage" && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        %
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowAddForm(false);
                    setNewVariable({
                      name: "",
                      value: "",
                      type: "number",
                      category: "",
                    });
                  }}
                >
                  <X size={16} className="mr-2" />
                  Cancelar
                </Button>
                <Button
                  onClick={handleAddVariable}
                  className="bg-[#66E5B6] text-[#241773] hover:bg-[#66E5B6]/90"
                >
                  <Plus size={16} className="mr-2" />
                  Agregar Variable
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
                placeholder="Buscar variables..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </Card>

          {/* Lista de Variables por Categoría */}
          <div className="space-y-4">
            {Object.entries(groupedVariables).map(
              ([category, categoryVariables]) => (
                <Card key={category} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3>{category}</h3>
                    <Badge variant="outline">
                      {categoryVariables.length} variables
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    {categoryVariables.map((variable) => (
                      <div
                        key={variable.id}
                        className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border rounded-lg hover:bg-muted/20 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          {isEditing ? (
                            <Input
                              value={variable.name}
                              onChange={(e) =>
                                handleUpdateVariable(
                                  variable.id,
                                  "name",
                                  e.target.value
                                )
                              }
                            />
                          ) : (
                            <p className="font-medium">{variable.name}</p>
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          {isEditing ? (
                            <div className="flex items-center gap-2">
                              <Input
                                type={
                                  variable.type === "text" ? "text" : "number"
                                }
                                value={variable.value}
                                onChange={(e) =>
                                  handleUpdateVariable(
                                    variable.id,
                                    "value",
                                    e.target.value
                                  )
                                }
                                className="w-32"
                              />
                              <span className="text-muted-foreground">
                                {variable.type === "number"
                                  ? "€"
                                  : variable.type === "percentage"
                                  ? "%"
                                  : ""}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#241773]/10 rounded-md">
                              <span className="font-semibold text-[#241773]">
                                {variable.value}
                              </span>
                              <span className="text-muted-foreground">
                                {variable.type === "number"
                                  ? "€"
                                  : variable.type === "percentage"
                                  ? "%"
                                  : ""}
                              </span>
                            </div>
                          )}

                          {isEditing && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteVariable(variable.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <X size={16} />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )
            )}
          </div>

          {filteredVariables.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">
                No se encontraron variables
              </p>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
