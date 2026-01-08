import { GraduationCap, Plus, Users, Clock, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const courses = [
  { id: 1, name: "Prevención de Riesgos Laborales", company: "Tech Solutions S.L.", participants: 45, status: "active" },
  { id: 2, name: "Liderazgo y Gestión", company: "Construcciones ABC", participants: 15, status: "completed" },
];

export function TrainingView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1>Gestión de Formación</h1>
          <p className="text-muted-foreground">Cursos y formaciones para clientes</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
          <Plus size={20} className="mr-2" />
          Nueva Formación
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cursos Activos</p>
              <p className="text-2xl font-semibold">18</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Participantes</p>
              <p className="text-2xl font-semibold">245</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completados</p>
              <p className="text-2xl font-semibold">67</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Clock className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Horas Totales</p>
              <p className="text-2xl font-semibold">1,245h</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Formaciones Activas</h3>
        <div className="space-y-4">
          {courses.map((course) => (
            <Card key={course.id} className="p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <h4 className="mb-1">{course.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{course.company}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={14} />
                    {course.participants} participantes
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={course.status === "active" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}>
                    {course.status === "active" ? "Activo" : "Completado"}
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
