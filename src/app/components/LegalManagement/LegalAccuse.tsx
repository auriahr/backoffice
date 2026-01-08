import { useState } from "react";
import { Scale, Plus, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const consultations = [
  {
    id: "ACC-001",
    company: "Tech Solutions S.L.",
    subject: "Despido procedente",
    priority: "high",
    status: "in-review",
  },
  {
    id: "ACC-002",
    company: "Retail Group",
    subject: "Revisión contrato mercantil",
    priority: "medium",
    status: "completed",
  },
  {
    id: "ACC-003",
    company: "Tech Solutions S.L.",
    subject: "Despido procedente",
    priority: "high",
    status: "in-review",
  },
    {
    id: "ACC-004",
    company: "Retail Group",
    subject: "Revisión contrato mercantil",
    priority: "medium",
    status: "completed",
  },
];

export function LegalAccuse() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Dialog>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Consulta</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="col-span-1 sm:col-span-2 space-y-2">
                <Label htmlFor="companyName">Nombre de la empresa</Label>
                <Input id="companyName" placeholder="Ej: Tech Solutions S.L." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactName">Persona de contacto</Label>
                <Input id="contactName" placeholder="Ej: María García" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email de contacto</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="email@empresa.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Teléfono</Label>
                <Input id="contactPhone" placeholder="+34 600 000 000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employees">Número de empleados</Label>
                <Input id="employees" type="number" placeholder="50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan">Plan</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basico">Básico</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Fecha de inicio</Label>
                <Input id="startDate" type="date" />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-primary hover:bg-primary/90">
                Crear Consulta
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Scale className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Consultas Activas</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Clock className="text-orange-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pendientes</p>
              <p className="text-2xl font-semibold">5</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle2 className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Resueltas</p>
              <p className="text-2xl font-semibold">28</p>
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
              <p className="text-2xl font-semibold">3</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          {consultations.map((consultation) => (
            <Card key={consultation.id} className="p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-mono text-sm text-muted-foreground">
                      {consultation.id}
                    </span>
                    <Badge
                      className={
                        consultation.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    >
                      {consultation.priority === "high" ? "Alta" : "Media"}
                    </Badge>
                  </div>
                  <h4 className="mb-1">{consultation.company}</h4>
                  <p className="text-sm text-muted-foreground">
                    {consultation.subject}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    className={
                      consultation.status === "in-review"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }
                  >
                    {consultation.status === "in-review"
                      ? "En Revisión"
                      : "Completada"}
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
