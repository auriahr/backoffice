import { Globe, Plus, MapPin, Users, Briefcase } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const internationalProcesses = [
  {
    id: 1,
    company: "Tech Solutions S.L.",
    position: "Senior Developer",
    country: "Alemania",
    status: "active",
    candidates: 8,
  },
  {
    id: 2,
    company: "Retail Group",
    position: "Marketing Manager",
    country: "Francia",
    status: "completed",
    candidates: 12,
  },
];

export function InternationalView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1>Gestión Internacional</h1>
          <p className="text-muted-foreground">Procesos de selección internacional</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
          <Plus size={20} className="mr-2" />
          Nuevo Proceso
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Globe className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Procesos Activos</p>
              <p className="text-2xl font-semibold">8</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <MapPin className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Países</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Candidatos</p>
              <p className="text-2xl font-semibold">45</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Briefcase className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completados</p>
              <p className="text-2xl font-semibold">23</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Procesos Internacionales</h3>
        <div className="space-y-4">
          {internationalProcesses.map((process) => (
            <Card key={process.id} className="p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h4>{process.company}</h4>
                    <Badge variant="outline">{process.position}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    {process.country}
                    <span>•</span>
                    <Users size={14} />
                    {process.candidates} candidatos
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={process.status === "active" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}>
                    {process.status === "active" ? "Activo" : "Completado"}
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
