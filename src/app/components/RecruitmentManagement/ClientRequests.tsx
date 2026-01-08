import { FileText, Plus } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const requests = [
  { id: 1, company: "Tech Solutions S.L.", position: "Senior Developer", urgency: "high", date: "30/12/2025" },
  { id: 2, company: "Retail Group", position: "Marketing Manager", urgency: "medium", date: "28/12/2025" },
];

export function ClientRequests() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3>Solicitudes de Clientes</h3>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus size={20} className="mr-2" />
          Nueva Solicitud
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <FileText className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Solicitudes</p>
              <p className="text-2xl font-semibold">24</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <FileText className="text-yellow-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pendientes</p>
              <p className="text-2xl font-semibold">8</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <FileText className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">En Proceso</p>
              <p className="text-2xl font-semibold">16</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          {requests.map((request) => (
            <Card key={request.id} className="p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4>{request.company}</h4>
                    <Badge className={request.urgency === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}>
                      {request.urgency === "high" ? "Urgente" : "Media"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{request.position}</p>
                  <p className="text-xs text-muted-foreground mt-1">Fecha: {request.date}</p>
                </div>
                <Button variant="outline" size="sm">Ver Detalles</Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
