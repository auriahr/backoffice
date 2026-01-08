import { Lightbulb, Plus, Clock, CheckCircle2, FileText } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const consultingProjects = [
  {
    id: 1,
    company: "Tech Solutions S.L.",
    service: "Optimización de RRHH",
    status: "in-progress",
    startDate: "15/11/2025",
  },
  {
    id: 2,
    company: "Construcciones ABC",
    service: "Auditoría Laboral",
    status: "completed",
    startDate: "01/10/2025",
  },
];

export function ConsultingView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1>Gestión de Consultoría</h1>
          <p className="text-muted-foreground">Proyectos de consultoría para clientes</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
          <Plus size={20} className="mr-2" />
          Nuevo Proyecto
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Lightbulb className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Proyectos Activos</p>
              <p className="text-2xl font-semibold">12</p>
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
              <p className="text-sm text-muted-foreground">Completados</p>
              <p className="text-2xl font-semibold">28</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileText className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Informes</p>
              <p className="text-2xl font-semibold">45</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Proyectos de Consultoría</h3>
        <div className="space-y-4">
          {consultingProjects.map((project) => (
            <Card key={project.id} className="p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <h4 className="mb-1">{project.company}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{project.service}</p>
                  <p className="text-xs text-muted-foreground">Inicio: {project.startDate}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={project.status === "in-progress" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}>
                    {project.status === "in-progress" ? "En Proceso" : "Completado"}
                  </Badge>
                  <Button variant="outline" size="sm">Ver Detalles</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
