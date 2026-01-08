import { useState } from "react";
import { FileText, Download, ArrowUpToLine } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const templates = [
  { id: 1, name: "Contrato indefinido", category: "Contratos", downloads: 145, updated: "15/12/2025" },
  { id: 2, name: "Contrato temporal", category: "Contratos", downloads: 98, updated: "10/12/2025" },
  { id: 3, name: "Acuerdo confidencialidad", category: "Acuerdos", downloads: 67, updated: "05/12/2025" },
];

export function LegalTemplates() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-muted-foreground">Administra las consultas que llega Auria HR</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <ArrowUpToLine size={20} className="mr-2" />
              Subir Plantilla
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Añadir Nueva Plantilla</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="col-span-1 sm:col-span-2 space-y-2">
                <Label htmlFor="companyName">Nombre de la plantilla</Label>
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
              <Button className="bg-primary hover:bg-primary/90">Subir Plantilla</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <FileText className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Plantillas</p>
              <p className="text-2xl font-semibold">45</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Download className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Descargas</p>
              <p className="text-2xl font-semibold">1,234</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Categorías</p>
              <p className="text-2xl font-semibold">8</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Plantillas Legales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <Card key={template.id} className="p-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FileText className="text-primary" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="mb-1 truncate">{template.name}</h4>
                  <Badge variant="outline" className="mb-2">{template.category}</Badge>
                  <p className="text-xs text-muted-foreground">
                    {template.downloads} descargas • {template.updated}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Download size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
