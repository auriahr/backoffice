import {
  Calendar,
  FileSpreadsheet,
  Upload,
  Download,
  FileSliders,
  Share,
  CalendarClock,
  Mail,
  Shield,
  User,
  FileSearch,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export function LaboralPayroll() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Calendar className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Nóminas este mes</p>
              <p className="text-2xl font-semibold">156</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <FileSpreadsheet className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Procesadas</p>
              <p className="text-2xl font-semibold">142</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Calendar className="text-yellow-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pendientes</p>
              <p className="text-2xl font-semibold">14</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Upload className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Variables cargadas
              </p>
              <p className="text-2xl font-semibold">98</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs Content */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList>
          <TabsTrigger value="calendar" className="text-xs sm:text-sm">
            <CalendarClock size={16} className="mr-2" />
            Calendario Nómina
          </TabsTrigger>
          <TabsTrigger value="control-nominas" className="text-xs sm:text-sm">
            <FileSearch size={16} className="mr-2" />
              Control de Nóminas
          </TabsTrigger>
          <TabsTrigger value="variables" className="text-xs sm:text-sm">
            <FileSliders size={16} className="mr-2" />
              Variables
          </TabsTrigger>
          <TabsTrigger value="master-salary" className="text-xs sm:text-sm">
            <FileSpreadsheet size={16} className="mr-2" />
              Maestro Salarios
          </TabsTrigger>
          <TabsTrigger value="share" className="text-xs sm:text-sm">
            <Share size={16} className="mr-2" />
              Enviar PDF/Excel
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Tech Solutions S.L.",
            "Construcciones ABC",
            "Retail Group",
            "Servicios Legales Pro",
          ].map((company, idx) => (
            <Card key={idx} className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="mb-1">{company}</h4>
                  <p className="text-sm text-muted-foreground">
                    {Math.floor(Math.random() * 50) + 10} empleados
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700">Procesada</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Nóminas
                </Button>
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
