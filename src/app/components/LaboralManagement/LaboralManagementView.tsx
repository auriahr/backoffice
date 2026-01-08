import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { LaboralControl } from "./LaboralControl";
import { LaboralRequests } from "./LaboralRequests";
import { LaboralPayroll } from "./LaboralPayroll";
import { LaboralContributions } from "./LaboralContributions";
import { LaboralTaxes } from "./LaboralTaxes";
import { LaboralDocuments } from "./LaboralDocuments";
import { LaboralReports } from "./LaboralReports";

interface LaborManagementViewProps {
  currentSubView: string;
}

export function LaboralManagementView({ currentSubView }: LaborManagementViewProps) {
  const getDefaultTab = () => {
    if (currentSubView.startsWith("labor-")) {
      return currentSubView.replace("labor-", "");
    }
    return "control";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1>Gestión Laboral</h1>
        <p className="text-muted-foreground">
          Gestiona todas las operaciones laborales de tus clientes
        </p>
      </div>

      <Tabs defaultValue={getDefaultTab()} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 h-auto gap-2">
          <TabsTrigger value="control" className="text-xs sm:text-sm">
            Control
          </TabsTrigger>
          <TabsTrigger value="requests" className="text-xs sm:text-sm">
            Solicitudes
          </TabsTrigger>
          <TabsTrigger value="payroll" className="text-xs sm:text-sm">
            Nóminas
          </TabsTrigger>
          <TabsTrigger value="contributions" className="text-xs sm:text-sm">
            Cotización
          </TabsTrigger>
          <TabsTrigger value="taxes" className="text-xs sm:text-sm">
            Impuestos
          </TabsTrigger>
          <TabsTrigger value="documents" className="text-xs sm:text-sm">
            Documentación
          </TabsTrigger>
          <TabsTrigger value="reports" className="text-xs sm:text-sm">
            Informes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="control">
          <LaboralControl />
        </TabsContent>
        <TabsContent value="requests">
          <LaboralRequests />
        </TabsContent>
        <TabsContent value="payroll">
          <LaboralPayroll />
        </TabsContent>
        <TabsContent value="contributions">
          <LaboralContributions />
        </TabsContent>
        <TabsContent value="taxes">
          <LaboralTaxes />
        </TabsContent>
        <TabsContent value="documents">
          <LaboralDocuments />
        </TabsContent>
        <TabsContent value="reports">
          <LaboralReports />
        </TabsContent>
      </Tabs>
    </div>
  );
}
