import { useState } from "react";
import {
  Calendar as CalendarIcon,
  FileText,
  Variable,
  Users,
  Send,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { PayrollCalendar } from "./PayrollCalendar";
import { PayrollControl } from "./PayrollControl";
import { PayrollVariables } from "./PayrollVariables";
import { PayrollSalaryMasters } from "./PayrollSalaryMasters";
import { PayrollSendToClients } from "./PayrollSendToClients";

type PayrollTab =
  | "calendar"
  | "control"
  | "variables"
  | "salary-masters"
  | "send-to-clients";

export function LaboralPayrollView() {
  const [activeTab, setActiveTab] = useState<PayrollTab>("calendar");

  return (
    <div className="space-y-6">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as PayrollTab)}
      >
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto">
          <TabsTrigger value="calendar" className="text-xs sm:text-sm">
            <CalendarIcon size={16} className="mr-2" />
            Calendario Nómina
          </TabsTrigger>
          <TabsTrigger value="control" className="text-xs sm:text-sm">
            <FileText size={16} className="mr-2" />
            Control de Nóminas
          </TabsTrigger>
          <TabsTrigger value="variables" className="text-xs sm:text-sm">
            <Variable size={16} className="mr-2" />
            Variables
          </TabsTrigger>
          <TabsTrigger value="salary-masters" className="text-xs sm:text-sm">
            <Users size={16} className="mr-2" />
            Maestros Salarios
          </TabsTrigger>
          <TabsTrigger value="send-to-clients" className="text-xs sm:text-sm">
            <Send size={16} className="mr-2" />
            Enviar a Clientes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calendar">
          <PayrollCalendar />
        </TabsContent>

        <TabsContent value="control">
          <PayrollControl />
        </TabsContent>

        <TabsContent value="variables">
          <PayrollVariables />
        </TabsContent>

        <TabsContent value="salary-masters">
          <PayrollSalaryMasters />
        </TabsContent>

        <TabsContent value="send-to-clients">
          <PayrollSendToClients />
        </TabsContent>
      </Tabs>
    </div>
  );
}
