import { Briefcase, MapPin, DollarSign, Users } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const jobs = [
  { id: 1, title: "Senior Developer", company: "Tech Solutions S.L.", location: "Madrid", applicants: 24, status: "active" },
  { id: 2, title: "Marketing Manager", company: "Retail Group", location: "Barcelona", applicants: 18, status: "active" },
];

export function JobOpenings() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
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
              <Users className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Candidatos</p>
              <p className="text-2xl font-semibold">156</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Briefcase className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Contratados</p>
              <p className="text-2xl font-semibold">23</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Entrevistas</p>
              <p className="text-2xl font-semibold">34</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Vacantes Publicadas</h3>
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <h4 className="mb-2">{job.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{job.company}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      {job.applicants} candidatos
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-700">Activa</Badge>
                  <Button variant="outline" size="sm">Ver Candidatos</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
