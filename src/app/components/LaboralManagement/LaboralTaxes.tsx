import { Receipt, Calculator, FileCheck } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function LaboralTaxes() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Receipt className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Impuestos</p>
              <p className="text-2xl font-semibold">28,450 €</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <FileCheck className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Declarados</p>
              <p className="text-2xl font-semibold">45</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Calculator className="text-yellow-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pendientes</p>
              <p className="text-2xl font-semibold">7</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center">
          <h3>Gestión de Impuestos por Cliente</h3>
          <Button className="bg-primary hover:bg-primary/90">Nuevo Formulario</Button>
        </div>
        <div className="space-y-3">
          {["Tech Solutions S.L.", "Construcciones ABC", "Retail Group", "Servicios Legales Pro"].map(
            (company, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg gap-3">
                <div className="flex-1">
                  <h4 className="mb-1">{company}</h4>
                  <p className="text-sm text-muted-foreground">
                    IRPF • IVA • Seg. Social
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-blue-100 text-blue-700">Trimestre Q4</Badge>
                  <Button variant="outline" size="sm">Ver Formulario</Button>
                </div>
              </div>
            )
          )}
        </div>
      </Card>
    </div>
  );
}
