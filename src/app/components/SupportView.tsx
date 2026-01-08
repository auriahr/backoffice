import { HeadphonesIcon, AlertCircle, Clock, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const tickets = [
  { id: "TKT-001", company: "Tech Solutions S.L.", subject: "Error al generar nóminas", priority: "high", status: "open" },
  { id: "TKT-002", company: "Construcciones ABC", subject: "Consulta sobre contratos", priority: "medium", status: "in-progress" },
  { id: "TKT-003", company: "Retail Group", subject: "Solicitud de formación", priority: "low", status: "resolved" },
];

export function SupportView() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Gestión de Soporte</h1>
        <p className="text-muted-foreground">Tickets de soporte de clientes</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-3 rounded-lg">
              <AlertCircle className="text-orange-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Abiertos</p>
              <p className="text-2xl font-semibold">18</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">En Proceso</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Resueltos Hoy</p>
              <p className="text-2xl font-semibold">8</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertCircle className="text-red-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Alta Prioridad</p>
              <p className="text-2xl font-semibold">5</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Tickets Recientes</h3>
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <Card key={ticket.id} className="p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-mono text-sm text-muted-foreground">{ticket.id}</span>
                    <Badge className={ticket.priority === "high" ? "bg-red-100 text-red-700" : ticket.priority === "medium" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}>
                      {ticket.priority === "high" ? "Alta" : ticket.priority === "medium" ? "Media" : "Baja"}
                    </Badge>
                  </div>
                  <h4 className="mb-1">{ticket.company}</h4>
                  <p className="text-sm text-muted-foreground">{ticket.subject}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={ticket.status === "open" ? "bg-orange-100 text-orange-700" : ticket.status === "in-progress" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}>
                    {ticket.status === "open" ? "Abierto" : ticket.status === "in-progress" ? "En Proceso" : "Resuelto"}
                  </Badge>
                  <Button variant="outline" size="sm">Ver</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
