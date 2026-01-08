import { useState } from "react";
import { Scale, Building2, Bell, Plus } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const regulations = [
  { id: 1, title: "Nueva reforma laboral 2025", date: "01/01/2025", affectedClients: 45 },
  { id: 2, title: "Actualización LOPD - RGPD", date: "15/11/2025", affectedClients: 52 },
];

export function LegalRegulations() {
  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-muted-foreground">Consulta las normativas </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <Plus size={20} className="mr-2" />
              Nueva Normativa
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Añadir Nueva Normativa</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="col-span-1 sm:col-span-2 space-y-2">
                <Label htmlFor="companyName">Nombre de la Normativa</Label>
                <Input id="companyName" placeholder="Ej: Nombre Documento" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactName">Persona de contacto</Label>
                <Input id="contactName" placeholder="Ej: María García" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan">Categorías de Plantilla</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basico">Contratos</SelectItem>
                    <SelectItem value="pro">Acuerdos</SelectItem>
                    <SelectItem value="enterprise">Otros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Fecha de Subida</Label>
                <Input id="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adjuntoName">Documento</Label>
                <Input id="adjuntoName" type="file" />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-primary hover:bg-primary/90">Subir Normativa</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Scale className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Normativas Activas</p>
              <p className="text-2xl font-semibold">23</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Bell className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Nuevas este mes</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Building2 className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Clientes Afectados</p>
              <p className="text-2xl font-semibold">52</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Normativas Vigentes</h3>
        <div className="space-y-4">
          {regulations.map((regulation) => (
            <Card key={regulation.id} className="p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Scale className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1">{regulation.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      Entrada en vigor: {regulation.date}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                      <Building2 size={14} />
                      {regulation.affectedClients} clientes afectados
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Ver Detalles</Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <Bell size={16} className="mr-1" />
                    Notificar
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
