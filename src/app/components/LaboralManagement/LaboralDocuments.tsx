import { FileText, Upload, Download, Folder } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function LaboralDocuments() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Folder className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Documentos</p>
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
              <p className="text-sm text-muted-foreground">Contratos</p>
              <p className="text-2xl font-semibold">456</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <FileText className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Nóminas</p>
              <p className="text-2xl font-semibold">678</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileText className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Certificados</p>
              <p className="text-2xl font-semibold">100</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <h3>Documentación por Cliente</h3>
          <div className="flex gap-2">
            <Button variant="outline">
              <Upload size={16} className="mr-2" />
              Subir
            </Button>
            <Button className="bg-primary hover:bg-primary/90">Nuevo Documento</Button>
          </div>
        </div>
        <div className="space-y-3">
          {["Tech Solutions S.L.", "Construcciones ABC", "Retail Group"].map((company, idx) => (
            <div key={idx} className="p-4 border rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3">
                <h4>{company}</h4>
                <Badge variant="outline">{Math.floor(Math.random() * 100 + 50)} documentos</Badge>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  <FileText size={14} className="mr-1" />
                  Contratos
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <FileText size={14} className="mr-1" />
                  Nóminas
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <FileText size={14} className="mr-1" />
                  Certificados
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <Download size={14} className="mr-1" />
                  Descargar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
