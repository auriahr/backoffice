import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ClientRequests } from "./ClientRequests";
import { JobOpenings } from "./JobOpenings";
import { Candidates } from "./Candidates";

interface RecruitmentViewProps {
  currentSubView: string;
}

export function RecruitmentManagementView({ currentSubView }: RecruitmentViewProps) {
  const getDefaultTab = () => {
    if (currentSubView === "recruitment-client-requests") return "client-requests";
    if (currentSubView === "recruitment-openings") return "openings";
    if (currentSubView === "recruitment-candidates") return "candidates";
    return "client-requests";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1>Gestión de Selección</h1>
        <p className="text-muted-foreground">Procesos de reclutamiento y selección</p>
      </div>

      <Tabs defaultValue={getDefaultTab()} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 h-auto">
          <TabsTrigger value="client-requests" className="text-xs sm:text-sm">
            Solicitud de Cliente
          </TabsTrigger>
          <TabsTrigger value="openings" className="text-xs sm:text-sm">
            Vacantes Abiertas
          </TabsTrigger>
          <TabsTrigger value="candidates" className="text-xs sm:text-sm">
            Candidatos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="client-requests">
          <ClientRequests />
        </TabsContent>
        <TabsContent value="openings">
          <JobOpenings />
        </TabsContent>
        <TabsContent value="candidates">
          <Candidates />
        </TabsContent>
      </Tabs>
    </div>
  );
}
