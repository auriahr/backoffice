import { FileText, Plus, Clock, CheckCircle2 } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const requests = [
  {
    id: "REQ-001",
    company: "Tech Solutions S.L.",
    type: "Nómina",
    description: "Solicitud de cálculo de nóminas extraordinarias",
    priority: "high",
    status: "pending",
    date: "31/12/2025",
  },
  {
    id: "REQ-002",
    company: "Construcciones ABC",
    type: "Alta/Baja",
    description: "Alta de 3 nuevos empleados",
    priority: "medium",
    status: "in-review",
    date: "30/12/2025",
  },
  {
    id: "REQ-003",
    company: "Retail Group",
    type: "Modificación",
    description: "Cambio de jornada laboral de empleado",
    priority: "low",
    status: "completed",
    date: "29/12/2025",
  },
];

export function LaboralRequests() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="text-yellow-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pendientes</p>
              <p className="text-2xl font-semibold">15</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">En Revisión</p>
              <p className="text-2xl font-semibold">8</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle2 className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completadas</p>
              <p className="text-2xl font-semibold">42</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Solicitudes de Clientes</h3>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus size={20} className="mr-2" />
            Nueva Solicitud
          </Button>
        </div>
        <div className="space-y-4">
          {requests.map((request) => (
            <Card key={request.id} className="p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-mono text-sm text-muted-foreground">{request.id}</span>
                    <Badge
                      className={
                        request.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : request.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }
                    >
                      {request.priority === "high" ? "Alta" : request.priority === "medium" ? "Media" : "Baja"}
                    </Badge>
                    <Badge variant="outline">{request.type}</Badge>
                  </div>
                  <h4 className="mb-1">{request.company}</h4>
                  <p className="text-sm text-muted-foreground">{request.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">Fecha: {request.date}</p>
                </div>
                <div className="flex flex-col gap-2 sm:items-end">
                  <Badge
                    className={
                      request.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : request.status === "in-review"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }
                  >
                    {request.status === "pending" ? "Pendiente" : request.status === "in-review" ? "En Revisión" : "Completada"}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
