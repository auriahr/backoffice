import { UserPlus, Briefcase, Calendar, MapPin, DollarSign } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "IT",
    location: "Madrid",
    type: "Tiempo Completo",
    salary: "45.000 - 55.000 €",
    applicants: 24,
    status: "active",
    postedDate: "15/12/2025",
  },
  {
    id: 2,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Barcelona",
    type: "Tiempo Completo",
    salary: "40.000 - 50.000 €",
    applicants: 18,
    status: "active",
    postedDate: "10/12/2025",
  },
  {
    id: 3,
    title: "HR Specialist",
    department: "RRHH",
    location: "Remoto",
    type: "Tiempo Completo",
    salary: "30.000 - 38.000 €",
    applicants: 32,
    status: "active",
    postedDate: "05/12/2025",
  },
];

const candidates = [
  {
    id: 1,
    name: "Laura Fernández",
    position: "Senior Full Stack Developer",
    location: "Madrid",
    experience: "5 años",
    status: "interview",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laura",
    appliedDate: "20/12/2025",
    score: 92,
  },
  {
    id: 2,
    name: "Miguel Torres",
    position: "Senior Full Stack Developer",
    location: "Valencia",
    experience: "7 años",
    status: "shortlisted",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel",
    appliedDate: "18/12/2025",
    score: 88,
  },
  {
    id: 3,
    name: "Isabel Moreno",
    position: "Marketing Manager",
    location: "Barcelona",
    experience: "6 años",
    status: "offer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabel",
    appliedDate: "16/12/2025",
    score: 95,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-green-100 text-green-700">Activa</Badge>;
    case 'interview':
      return <Badge className="bg-blue-100 text-blue-700">Entrevista</Badge>;
    case 'shortlisted':
      return <Badge className="bg-purple-100 text-purple-700">Preseleccionado</Badge>;
    case 'offer':
      return <Badge className="bg-green-100 text-green-700">Oferta Enviada</Badge>;
    case 'rejected':
      return <Badge className="bg-red-100 text-red-700">Rechazado</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export function RecruitmentView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Gestión de Selección</h1>
          <p className="text-muted-foreground">Administra procesos de reclutamiento</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <UserPlus size={20} className="mr-2" />
          Nueva Vacante
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Briefcase className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Vacantes Activas</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <UserPlus className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Candidatos</p>
              <p className="text-2xl font-semibold">74</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Calendar className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Entrevistas Hoy</p>
              <p className="text-2xl font-semibold">5</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <UserPlus className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ofertas Pendientes</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="openings" className="space-y-6">
        <TabsList>
          <TabsTrigger value="openings">Vacantes Abiertas</TabsTrigger>
          <TabsTrigger value="candidates">Candidatos</TabsTrigger>
        </TabsList>

        <TabsContent value="openings" className="space-y-4">
          {jobOpenings.map((job) => (
            <Card key={job.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3>{job.title}</h3>
                    {getStatusBadge(job.status)}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={16} />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      Publicado: {job.postedDate}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold">{job.applicants}</p>
                  <p className="text-sm text-muted-foreground">candidatos</p>
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t">
                <Button variant="outline" size="sm">Ver detalles</Button>
                <Button variant="outline" size="sm">Editar</Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Ver candidatos
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="candidates" className="space-y-4">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={candidate.avatar} alt={candidate.name} />
                  <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3>{candidate.name}</h3>
                    {getStatusBadge(candidate.status)}
                    <div className="ml-auto bg-primary/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-primary">Score: {candidate.score}/100</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{candidate.position}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {candidate.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      {candidate.experience} de experiencia
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      Aplicó: {candidate.appliedDate}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4 pt-4 border-t">
                <Button variant="outline" size="sm">Ver CV</Button>
                <Button variant="outline" size="sm">Programar entrevista</Button>
                <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Enviar oferta
                </Button>
                <Button variant="outline" size="sm" className="ml-auto text-destructive">
                  Rechazar
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
