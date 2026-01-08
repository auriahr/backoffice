import { useState } from "react";
import { User, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Profile } from "./Profile";
import { UserSettings } from "./UserSettings";

export function UserManagementView() {
  const [activeTab, setActiveTab] = useState<"profile" | "user-settings">(
    "profile"
  );

  return (
    <div className="space-y-6">
      <Tabs
        value={activeTab}
        onValueChange={(value) =>
          setActiveTab(value as "profile" | "user-settings")
        }
      >
        <TabsList className="grid w-full grid-cols-2 h-auto">
          <TabsTrigger value="profile" className="text-sm">
            <User size={16} className="mr-2" />
            Mi Perfil
          </TabsTrigger>
          <TabsTrigger value="user-settings" className="text-sm">
            <Settings size={16} className="mr-2" />
            Configuración de Usuario
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Profile />
        </TabsContent>

        <TabsContent value="user-settings">
          <UserSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
