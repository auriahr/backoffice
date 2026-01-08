import { User, MapPin, Briefcase, Mail } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const candidates = [
  {
    id: 1,
    name: "Laura Fernández",
    position: "Senior Developer",
    location: "Madrid",
    email: "laura@email.com",
    status: "interview",
    avatar: "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
  },
  {
    id: 2,
    name: "Miguel Torres",
    position: "Marketing Manager",
    location: "Barcelona",
    email: "miguel@email.com",
    status: "offer",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
  },
];

export function Candidates() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <User className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Candidatos</p>
              <p className="text-2xl font-semibold">156</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <User className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">En Entrevista</p>
              <p className="text-2xl font-semibold">34</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <User className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ofertas Enviadas</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <User className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Contratados</p>
              <p className="text-2xl font-semibold">23</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Candidatos Activos</h3>
        <div className="space-y-4">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="p-4">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={candidate.avatar} />
                  <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h4 className="mb-1">{candidate.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{candidate.position}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {candidate.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail size={14} />
                      {candidate.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={candidate.status === "interview" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}>
                    {candidate.status === "interview" ? "Entrevista" : "Oferta Enviada"}
                  </Badge>
                  <Button variant="outline" size="sm">Ver CV</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
