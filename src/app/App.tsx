import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Briefcase,
  Globe,
  Lightbulb,
  GraduationCap,
  UserPlus,
  Scale,
  HeadphonesIcon,
  Settings,
  Bell,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  User,
  LogOut,
  UserRoundCog,
} from "lucide-react";
import { Logo } from "./components/Logo";
import { Dashboard } from "./components/Dashboard";
import { ClientsView } from "./components/ClientsView";
import { LaboralManagementView } from "./components/LaboralManagement/LaboralManagementView";
import { InternationalView } from "./components/InternationalView";
import { ConsultingView } from "./components/ConsultingView";
import { TrainingView } from "./components/TrainingView";
import { RecruitmentManagementView } from "./components/RecruitmentManagement/RecruitmentManagementView";
import { LegalManagementView } from "./components/LegalManagement/LegalManagementView";
import { SupportView } from "./components/SupportView";
import { SettingsView } from "./components/SettingsView";
import { UserManagementView } from "./components/UserManagement/UserManagementView";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { TooltipProvider } from "./components/ui/tooltip";
import { Badge } from "./components/ui/badge";
import { LegalConsultations } from "./components/LegalManagement/LegalConsultations";
import { LegalTemplates } from "./components/LegalManagement/LegalTemplates";
import { LegalRegulations } from "./components/LegalManagement/LegalRegulations";
import { LegalFiles } from "./components/LegalManagement/LegalFiles";
import { ClientRequests } from "./components/RecruitmentManagement/ClientRequests";
import { JobOpenings } from "./components/RecruitmentManagement/JobOpenings";
import { Candidates } from "./components/RecruitmentManagement/Candidates";
import { LaboralReports } from "./components/LaboralManagement/LaboralReports";
import { LaboralControl } from "./components/LaboralManagement/LaboralControl";
import { LaboralRequests } from "./components/LaboralManagement/LaboralRequests";
import { LaboralPayroll } from "./components/LaboralManagement/LaboralPayroll";
import { LaboralPayrollView } from "./components/LaboralManagement/LaboralPayrollTab/LaboralPayrollView";
import { LaboralContributions } from "./components/LaboralManagement/LaboralContributions";
import { LaboralTaxes } from "./components/LaboralManagement/LaboralTaxes";
import { LaboralClients } from "./components/LaboralManagement/LaboralClients";
import { LaboralDocuments } from "./components/LaboralManagement/LaboralDocuments";
import { Login } from "./components/LoginManagement/Login";
import { CreateUser } from "./components/LoginManagement/CreateUser";
import { Profile } from "./components/UserManagement/Profile";
import { UserSettings } from "./components/UserManagement/UserSettings";
import { LegalAccuse } from "./components/LegalManagement/LegalAccuse";

type View =
  | "dashboard"
  | "clients"
  | "laboral"
  | "laboral-control"
  | "laboral-requests"
  | "laboral-payroll"
  | "laboral-contributions"
  | "laboral-taxes"
  | "laboral-documents"
  | "laboral-reports"
  | "laboral-clients"
  | "international"
  | "consulting"
  | "training"
  | "recruitment"
  | "recruitment-client-requests"
  | "recruitment-openings"
  | "recruitment-candidates"
  | "legal"
  | "legal-consultations"
  | "legal-accuse"
  | "legal-templates"
  | "legal-regulations"
  | "legal-files"
  | "support"
  | "settings"
  | "profile"
  | "user-settings";

interface NavigationItem {
  id: View;
  name: string;
  icon: any;
  subItems?: { id: View; name: string }[];
}

const navigation: NavigationItem[] = [
  { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "clients", name: "Gestión de Clientes", icon: Building2 },
  {
    id: "laboral",
    name: "Gestión Laboral",
    icon: Briefcase,
    subItems: [
      { id: "laboral-clients", name: "Clientes" },
      { id: "laboral-control", name: "Control - Biblia" },
      { id: "laboral-requests", name: "Solicitudes" },
      { id: "laboral-payroll", name: "Nóminas" },
      { id: "laboral-contributions", name: "Cotización" },
      { id: "laboral-taxes", name: "Impuestos" },
      { id: "laboral-documents", name: "Documentación" },
      { id: "laboral-reports", name: "Informes" },
    ],
  },
  { id: "international", name: "Gestión Internacional", icon: Globe },
  { id: "consulting", name: "Gestión Consultoría", icon: Lightbulb },
  { id: "training", name: "Gestión de Formación", icon: GraduationCap },
  {
    id: "recruitment",
    name: "Gestión de Selección",
    icon: UserPlus,
    subItems: [
      { id: "recruitment-client-requests", name: "Solicitud de Cliente" },
      { id: "recruitment-openings", name: "Vacantes Abiertas" },
      { id: "recruitment-candidates", name: "Candidatos" },
    ],
  },
  {
    id: "legal",
    name: "Gestión Jurídica",
    icon: Scale,
    subItems: [
      { id: "legal-consultations", name: "Consultas Jurídicas" },
      { id: "legal-accuse", name: "Canal de Denuncias" },
      { id: "legal-templates", name: "Plantillas Legales" },
      { id: "legal-regulations", name: "Normativas" },
      { id: "legal-files", name: "Expedientes" },
    ],
  },
  { id: "support", name: "Gestión de Soporte", icon: HeadphonesIcon },
  { id: "settings", name: "Configuración", icon: Settings },
];



export default function App() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authView, setAuthView] = useState<"login" | "create-user">("login");
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
  } | null>(null);

  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<View>>(new Set());

  // Función para manejar el login
  const handleLogin = (email: string, password: string) => {
    // Aquí iría la lógica real de autenticación con API
    // Por ahora, simulamos un login exitoso
    setCurrentUser({
      name: "Admin Auria HR",
      email: email,
    });
    setIsAuthenticated(true);
    setCurrentView("dashboard");
  };

  // Función para manejar el logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentView("dashboard");
    setAuthView("login");
  };

  // Función para cambiar a vista de crear usuario
  const handleShowCreateUser = () => {
    setAuthView("create-user");
  };

  // Función para volver al login
  const handleBackToLogin = () => {
    setAuthView("login");
  };

  // Función cuando se crea un usuario
  const handleUserCreated = () => {
    setAuthView("login");
  };

  // Si no está autenticado, mostrar pantallas de login/registro
  if (!isAuthenticated) {
    if (authView === "login") {
      return (
        <Login onLogin={handleLogin} onCreateUser={handleShowCreateUser} />
      );
    } else {
      return (
        <CreateUser
          onBack={handleBackToLogin}
          onUserCreated={handleUserCreated}
        />
      );
    }
  }
  const toggleMenu = (id: View) => {
    const newExpanded = new Set(expandedMenus);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedMenus(newExpanded);
  };

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "clients":
        return <ClientsView />;
      case "laboral":
      case "laboral-clients":
        return <LaboralClients />;
      case "laboral-control":
        return <LaboralControl />;
      case "laboral-requests":
        return <LaboralRequests />;
      case "laboral-payroll":
        return <LaboralPayrollView />;
      case "laboral-contributions":
        return <LaboralContributions />;
      case "laboral-taxes":
        return <LaboralTaxes />;
      case "laboral-documents":
        return <LaboralDocuments />;
      case "laboral-reports":
        return <LaboralReports />;
      case "international":
        return <InternationalView />;
      case "consulting":
        return <ConsultingView />;
      case "training":
        return <TrainingView />;
      case "recruitment":
      case "recruitment-client-requests":
        return <ClientRequests />;
      case "recruitment-openings":
        return <JobOpenings />;
      case "recruitment-candidates":
        return <Candidates />;
      case "legal":
      case "legal-consultations":
        return <LegalConsultations />;
      case "legal-accuse":
        return <LegalAccuse />;
      case "legal-templates":
        return <LegalTemplates />;
      case "legal-regulations":
        return <LegalRegulations />;
      case "legal-files":
        return <LegalFiles />;
      case "support":
        return <SupportView />;
      case "settings":
        return <SettingsView />;
      case "profile":
        return <Profile />;
      case "user-settings":
        return <UserSettings />;
      default:
        return <Dashboard />;
    }
  };

  const renderNavigationItem = (
    item: NavigationItem,
    isMobile: boolean = false
  ) => {
    const Icon = item.icon;
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedMenus.has(item.id);
    const isActive =
      currentView === item.id || currentView.startsWith(item.id + "-");

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasSubItems) {
              toggleMenu(item.id);
            } else {
              setCurrentView(item.id);
              if (isMobile) setSidebarOpen(false);
            }
          }}
          className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive && !hasSubItems
              ? "bg-primary text-primary-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent"
          }`}
        >
          <div className="flex items-center gap-3">
            <Icon size={20} />
            <span className="text-sm">{item.name}</span>
          </div>
          {hasSubItems && (
            <ChevronRight
              size={16}
              className={`transition-transform ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          )}
        </button>
        {hasSubItems && isExpanded && (
          <div className="ml-4 mt-1 space-y-1">
            {item.subItems!.map((subItem) => (
              <button
                key={subItem.id}
                onClick={() => {
                  setCurrentView(subItem.id);
                  if (isMobile) setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                  currentView === subItem.id
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                {subItem.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const getCurrentViewName = () => {
    for (const item of navigation) {
      if (item.id === currentView) return item.name;
      if (item.subItems) {
        const subItem = item.subItems.find((sub) => sub.id === currentView);
        if (subItem) return `${item.name} / ${subItem.name}`;
      }
    }
    return "Dashboard";
  };

  return (
    <TooltipProvider delayDuration={150}>
      <div className="min-h-screen bg-background flex">
        {/* Sidebar for Desktop */}
        <aside className="hidden lg:flex lg:flex-col lg:w-64 border-r bg-sidebar">
          <div className="p-6 border-b">
            <Logo />
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => renderNavigationItem(item))}
          </nav>
          <div className="p-4 border-t">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="text-sm mb-1">Panel de Administración</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Gestiona la plataforma Auria HR
              </p>
              <Badge variant="outline" className="text-xs">
                v1.0.5
              </Badge>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="absolute left-0 top-0 bottom-0 w-64 bg-sidebar border-r flex flex-col">
              <div className="p-6 border-b flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 hover:bg-sidebar-accent rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navigation.map((item) => renderNavigationItem(item, true))}
              </nav>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="border-b bg-white sticky top-0 z-40">
            <div className="flex items-center justify-between px-4 lg:px-8 py-4">
              <div className="flex items-center gap-4 min-w-0">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 hover:bg-muted rounded-lg flex-shrink-0"
                >
                  <Menu size={24} />
                </button>
                <div className="hidden lg:block min-w-0">
                  <h2 className="truncate">{getCurrentViewName()}</h2>
                </div>
              </div>

              <div className="flex items-center gap-2 lg:gap-4">
                {/* Notifications */}
                <button className="relative p-2 hover:bg-muted rounded-lg">
                  <Bell size={20} />
                  <Badge className="absolute -top-1 -right-1 bg-destructive text-white w-5 h-5 flex items-center justify-center p-0 text-xs">
                    5
                  </Badge>
                </button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 lg:gap-3 p-2 hover:bg-muted rounded-lg">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="https://images.unsplash.com/photo-1758520144420-3e5b22e9b9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                      <div className="text-left hidden md:block">
                        <p className="text-sm">Admin Auria HR</p>
                        <p className="text-xs text-muted-foreground">
                          admin@auriahr.es
                        </p>
                      </div>
                      <ChevronDown
                        size={16}
                        className="text-muted-foreground hidden md:block"
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setCurrentView("profile")}>
                      Mi perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setCurrentView("user-settings")}
                    >
                      Configuración
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={handleLogout}
                    >
                      <LogOut size={16} className="mr-2" />
                      Cerrar sesión
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 p-4 lg:p-8 overflow-auto">
            {renderView()}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
