import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  MoreVertical,
  Mail,
  Phone,
  Building2,
  Users,
  Calendar,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LegalConsultations } from "./LegalConsultations";
import { LegalTemplates } from "./LegalTemplates";
import { LegalRegulations } from "./LegalRegulations";
import { LegalFiles } from "./LegalFiles";

interface LegalViewProps {
  currentSubView: string;
}

export function LegalManagementView({ currentSubView }: LegalViewProps) {
  const getDefaultTab = () => {
    if (currentSubView === "legal-consultations") return "consultations";
    if (currentSubView === "legal-templates") return "templates";
    if (currentSubView === "legal-regulations") return "regulations";
    if (currentSubView === "legal-files") return "files";
    return "consultations";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-muted-foreground">Administra las empresas que usan Auria HR</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <Plus size={20} className="mr-2" />
              Nuevo Cliente
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Cliente</DialogTitle>
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
                <Input id="contactEmail" type="email" placeholder="email@empresa.com" />
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
              <Button className="bg-primary hover:bg-primary/90">Crear Cliente</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue={getDefaultTab()} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto gap-2">
          <TabsTrigger value="consultations" className="text-xs sm:text-sm">
            Consultas Jurídicas
          </TabsTrigger>
          <TabsTrigger value="templates" className="text-xs sm:text-sm">
            Plantillas Legales
          </TabsTrigger>
          <TabsTrigger value="regulations" className="text-xs sm:text-sm">
            Normativas
          </TabsTrigger>
          <TabsTrigger value="files" className="text-xs sm:text-sm">
            Expedientes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="consultations">
          <LegalConsultations />
        </TabsContent>
        <TabsContent value="templates">
          <LegalTemplates />
        </TabsContent>
        <TabsContent value="regulations">
          <LegalRegulations />
        </TabsContent>
        <TabsContent value="files">
          <LegalFiles />
        </TabsContent>
      </Tabs>
    </div>
  );
}
