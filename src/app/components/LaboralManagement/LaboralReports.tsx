import { FileBarChart, Download, Eye, Calendar } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const reports = [
  { name: "Informe Mensual de Nóminas", client: "Tech Solutions S.L.", date: "Dic 2025", status: "ready" },
  { name: "Resumen Anual Cotizaciones", client: "Construcciones ABC", date: "2025", status: "ready" },
  { name: "Informe de Impuestos Q4", client: "Retail Group", date: "Q4 2025", status: "pending" },
  { name: "Análisis de Costes Laborales", client: "Servicios Legales Pro", date: "Dic 2025", status: "ready" },
];

export function LaboralReports() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <FileBarChart className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Informes</p>
              <p className="text-2xl font-semibold">89</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <FileBarChart className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Generados</p>
              <p className="text-2xl font-semibold">67</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Calendar className="text-yellow-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Este mes</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center">
          <h3>Informes por Cliente</h3>
          <Button className="bg-primary hover:bg-primary/90">Generar Informe</Button>
        </div>
        <div className="space-y-3">
          {reports.map((report, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg gap-3">
              <div className="flex-1">
                <h4 className="mb-1">{report.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {report.client} • {report.date}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Badge className={report.status === "ready" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}>
                  {report.status === "ready" ? "Listo" : "Pendiente"}
                </Badge>
                <Button variant="outline" size="sm">
                  <Eye size={16} className="mr-1" />
                  Ver
                </Button>
                {report.status === "ready" && (
                  <Button variant="outline" size="sm">
                    <Download size={16} />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
