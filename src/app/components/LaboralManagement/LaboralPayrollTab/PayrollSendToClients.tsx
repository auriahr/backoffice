import { useState } from "react";
import {
  Send,
  Mail,
  FileText,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Building2,
  Users,
  Filter,
  Search,
  BookUser,
  FileBadge,
  FileInput,
  FilePen
} from "lucide-react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Checkbox } from "../../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Input } from "../../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Textarea } from "../../ui/textarea";
import { Label } from "../../ui/label";

interface ClientPayroll {
  id: string;
  companyName: string;
  companyLogo: string;
  contactEmail: string;
  period: string;
  employees: number;
  totalAmount: number;
  status: "ready" | "sent" | "pending";
  lastSentDate?: string;
  filesGenerated: number;
}

const MOCK_CLIENT_PAYROLLS: ClientPayroll[] = [
  {
    id: "1",
    companyName: "Tech Solutions SL",
    companyLogo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    contactEmail: "admin@techsolutions.es",
    period: "Enero 2025",
    employees: 45,
    totalAmount: 87500.5,
    status: "ready",
    filesGenerated: 47,
  },
  {
    id: "2",
    companyName: "Comercial Ibérica SA",
    companyLogo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    contactEmail: "rrhh@comercialiberica.es",
    period: "Enero 2025",
    employees: 28,
    totalAmount: 52300.0,
    status: "sent",
    lastSentDate: "05/01/2025 10:30",
    filesGenerated: 30,
  },
  {
    id: "3",
    companyName: "Industrias del Norte",
    companyLogo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    contactEmail: "nominas@industriasnorte.com",
    period: "Enero 2025",
    employees: 67,
    totalAmount: 134200.75,
    status: "ready",
    filesGenerated: 69,
  },
  {
    id: "4",
    companyName: "Servicios Profesionales",
    companyLogo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    contactEmail: "contacto@serviciospro.es",
    period: "Enero 2025",
    employees: 34,
    totalAmount: 68900.0,
    status: "pending",
    filesGenerated: 0,
  },
  {
    id: "5",
    companyName: "Logística Express",
    companyLogo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    contactEmail: "admin@logisticaexpress.es",
    period: "Enero 2025",
    employees: 89,
    totalAmount: 156780.25,
    status: "ready",
    filesGenerated: 91,
  },
];

const getStatusInfo = (status: string) => {
  switch (status) {
    case "ready":
      return {
        label: "Lista para enviar",
        color: "bg-green-100 text-green-800",
        icon: CheckCircle2,
      };
    case "sent":
      return {
        label: "Enviada",
        color: "bg-[#66E5B6] text-[#241773]",
        icon: Send,
      };
    case "pending":
      return {
        label: "Pendiente",
        color: "bg-orange-100 text-orange-800",
        icon: AlertCircle,
      };
    default:
      return {
        label: status,
        color: "bg-gray-100 text-gray-800",
        icon: AlertCircle,
      };
  }
};

export function PayrollSendToClients() {
  const [selectedClients, setSelectedClients] = useState<Set<string>>(
    new Set()
  );
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailSubject, setEmailSubject] = useState(
    "Nóminas Enero 2025 - Auria HR"
  );
  const [emailBody, setEmailBody] = useState(
    "Estimado cliente,\n\nAdjuntamos las nóminas correspondientes al periodo de Enero 2025.\n\nQuedan a su disposición para cualquier consulta.\n\nUn cordial saludo,\nEquipo Auria HR"
  );

  const filteredPayrolls = MOCK_CLIENT_PAYROLLS.filter((payroll) => {
    const matchesSearch =
      payroll.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payroll.contactEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || payroll.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleClientSelection = (id: string) => {
    const newSelection = new Set(selectedClients);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedClients(newSelection);
  };

  const toggleSelectAll = () => {
    if (selectedClients.size === filteredPayrolls.length) {
      setSelectedClients(new Set());
    } else {
      setSelectedClients(new Set(filteredPayrolls.map((p) => p.id)));
    }
  };

  const handleSendSelected = () => {
    setShowEmailModal(true);
  };

  const handleConfirmSend = () => {
    // Aquí iría la lógica real de envío
    console.log(`Enviando nóminas a ${selectedClients.size} clientes`);
    setShowEmailModal(false);
    setSelectedClients(new Set());
    // Mostrar notificación de éxito
  };

  const selectedPayrolls = filteredPayrolls.filter((p) =>
    selectedClients.has(p.id)
  );
  const totalEmployeesSelected = selectedPayrolls.reduce(
    (sum, p) => sum + p.employees,
    0
  );
  const totalFilesSelected = selectedPayrolls.reduce(
    (sum, p) => sum + p.filesGenerated,
    0
  );

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <BookUser className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Clientes</p>
              <p className="text-2xl font-semibold">
                {MOCK_CLIENT_PAYROLLS.length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <FileBadge className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Listos para Enviar
              </p>
              <p className="text-2xl font-semibold">
                {
                  MOCK_CLIENT_PAYROLLS.filter((p) => p.status === "ready")
                    .length
                }
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileInput className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Ya Enviadas</p>
              <p className="text-2xl font-semibold">
                {MOCK_CLIENT_PAYROLLS.filter((p) => p.status === "sent").length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FilePen className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pendientes</p>
              <p className="text-2xl font-semibold">
                {
                  MOCK_CLIENT_PAYROLLS.filter((p) => p.status === "pending")
                    .length
                }
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Barra de Acciones */}
      <Card className="p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                placeholder="Buscar clientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <Filter size={16} className="mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="ready">Listos para enviar</SelectItem>
                <SelectItem value="sent">Enviadas</SelectItem>
                <SelectItem value="pending">Pendientes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleSendSelected}
            disabled={selectedClients.size === 0}
            className="bg-[#241773] hover:bg-[#241773]/90 w-full lg:w-auto"
          >
            <Send size={16} className="mr-2" />
            Enviar Seleccionadas ({selectedClients.size})
          </Button>
        </div>
      </Card>

      {/* Resumen de Selección */}
      {selectedClients.size > 0 && (
        <Card className="p-4 bg-[#66E5B6]/10 border-[#66E5B6]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <CheckCircle2 size={24} className="text-[#241773]" />
              <div>
                <p className="font-medium">
                  {selectedClients.size}{" "}
                  {selectedClients.size === 1
                    ? "cliente seleccionado"
                    : "clientes seleccionados"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {totalEmployeesSelected} empleados • {totalFilesSelected}{" "}
                  archivos
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => setSelectedClients(new Set())}
            >
              Limpiar selección
            </Button>
          </div>
        </Card>
      )}

      {/* Grid de Clientes */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Clientes</h3>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={
                selectedClients.size === filteredPayrolls.length &&
                filteredPayrolls.length > 0
              }
              onCheckedChange={toggleSelectAll}
            />
            <span className="text-sm text-muted-foreground">
              Seleccionar todos
            </span>
          </div>
        </div>

        {/* Vista Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left p-3 text-sm font-medium w-12"></th>
                <th className="text-left p-3 text-sm font-medium">Cliente</th>
                <th className="text-left p-3 text-sm font-medium">Periodo</th>
                <th className="text-left p-3 text-sm font-medium">Empleados</th>
                <th className="text-left p-3 text-sm font-medium">Archivos</th>
                <th className="text-left p-3 text-sm font-medium">Estado</th>
                <th className="text-left p-3 text-sm font-medium">
                  Último Envío
                </th>
                <th className="text-right p-3 text-sm font-medium">Acción</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayrolls.map((payroll) => {
                const statusInfo = getStatusInfo(payroll.status);
                const StatusIcon = statusInfo.icon;
                const isDisabled = payroll.status === "pending";

                return (
                  <tr
                    key={payroll.id}
                    className={`border-b hover:bg-muted/50 transition-colors ${
                      isDisabled ? "opacity-50" : ""
                    }`}
                  >
                    <td className="p-3">
                      <Checkbox
                        checked={selectedClients.has(payroll.id)}
                        onCheckedChange={() =>
                          toggleClientSelection(payroll.id)
                        }
                        disabled={isDisabled}
                      />
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={payroll.companyLogo} />
                          <AvatarFallback>
                            {payroll.companyName.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{payroll.companyName}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Mail size={12} />
                            {payroll.contactEmail}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-muted-foreground" />
                        <span>{payroll.period}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-muted-foreground" />
                        <span>{payroll.employees}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <FileText size={16} className="text-muted-foreground" />
                        <span>{payroll.filesGenerated}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={statusInfo.color}>
                        <StatusIcon size={14} className="mr-1" />
                        {statusInfo.label}
                      </Badge>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      {payroll.lastSentDate || "-"}
                    </td>
                    <td className="p-3">
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          disabled={isDisabled}
                          onClick={() => {
                            setSelectedClients(new Set([payroll.id]));
                            handleSendSelected();
                          }}
                        >
                          <Send size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Vista Mobile */}
        <div className="md:hidden space-y-3">
          {filteredPayrolls.map((payroll) => {
            const statusInfo = getStatusInfo(payroll.status);
            const StatusIcon = statusInfo.icon;
            const isDisabled = payroll.status === "pending";

            return (
              <div
                key={payroll.id}
                className={`border rounded-lg p-4 space-y-3 ${
                  isDisabled ? "opacity-50" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={selectedClients.has(payroll.id)}
                    onCheckedChange={() => toggleClientSelection(payroll.id)}
                    disabled={isDisabled}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={payroll.companyLogo} />
                          <AvatarFallback>
                            {payroll.companyName.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{payroll.companyName}</p>
                          <p className="text-xs text-muted-foreground">
                            {payroll.contactEmail}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Badge className={statusInfo.color}>
                      <StatusIcon size={14} className="mr-1" />
                      {statusInfo.label}
                    </Badge>

                    <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Periodo</p>
                        <p className="font-medium">{payroll.period}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Empleados</p>
                        <p className="font-medium">{payroll.employees}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Archivos</p>
                        <p className="font-medium">{payroll.filesGenerated}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Último envío</p>
                        <p className="font-medium text-xs">
                          {payroll.lastSentDate || "-"}
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-3"
                      disabled={isDisabled}
                      onClick={() => {
                        setSelectedClients(new Set([payroll.id]));
                        handleSendSelected();
                      }}
                    >
                      <Send size={16} className="mr-2" />
                      Enviar
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPayrolls.length === 0 && (
          <div className="text-center py-12">
            <Building2
              size={48}
              className="mx-auto text-muted-foreground mb-4"
            />
            <p className="text-muted-foreground">No se encontraron clientes</p>
          </div>
        )}
      </Card>

      {/* Modal de Confirmación de Envío */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="mb-4">Enviar Nóminas por Email</h2>

            <div className="space-y-4 mb-6">
              <div>
                <Label className="mb-2 block">
                  Destinatarios ({selectedPayrolls.length})
                </Label>
                <div className="flex flex-wrap gap-2">
                  {selectedPayrolls.map((payroll) => (
                    <Badge key={payroll.id} variant="outline">
                      {payroll.companyName}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Asunto</Label>
                <Input
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Mensaje</Label>
                <Textarea
                  rows={8}
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                />
              </div>

              <Card className="p-4 bg-blue-50 border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Se enviarán {totalFilesSelected} archivos</strong>{" "}
                  correspondientes a {totalEmployeesSelected} empleados
                </p>
              </Card>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowEmailModal(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleConfirmSend}
                className="flex-1 bg-[#241773] hover:bg-[#241773]/90"
              >
                <Send size={16} className="mr-2" />
                Confirmar Envío
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
