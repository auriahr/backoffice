import {
  Building2,
  Briefcase,
  Globe,
  Scale,
  HeadphonesIcon,
  TrendingUp,
  Users,
  AlertCircle,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const clientGrowthData = [
  { month: "Ene", clientes: 28, ingresos: 12500 },
  { month: "Feb", clientes: 32, ingresos: 14200 },
  { month: "Mar", clientes: 35, ingresos: 15800 },
  { month: "Abr", clientes: 41, ingresos: 18900 },
  { month: "May", clientes: 45, ingresos: 21200 },
  { month: "Jun", clientes: 52, ingresos: 24500 },
];

const serviceDistribution = [
  { name: "Gestión Laboral", value: 35, color: "#241773" },
  { name: "Selección", value: 25, color: "#66E5B6" },
  { name: "Jurídico", value: 20, color: "#8B7AB8" },
  { name: "Formación", value: 12, color: "#A3F3D0" },
  { name: "Consultoría", value: 8, color: "#4A3494" },
];

const recentActivities = [
  {
    id: 1,
    company: "Tech Solutions S.L.",
    action: "Nueva solicitud laboral - Nóminas",
    time: "Hace 15 min",
    type: "labor",
    priority: "high",
  },
  {
    id: 2,
    company: "Construcciones ABC",
    action: "Ticket de soporte abierto",
    time: "Hace 1 hora",
    type: "support",
    priority: "medium",
  },
  {
    id: 3,
    company: "Retail Group",
    action: "Consulta jurídica urgente",
    time: "Hace 2 horas",
    type: "legal",
    priority: "high",
  },
  {
    id: 4,
    company: "Servicios Legales Pro",
    action: "Nueva vacante publicada",
    time: "Hace 3 horas",
    type: "recruitment",
    priority: "low",
  },
  {
    id: 5,
    company: "Distribuciones Norte",
    action: "Proceso de selección internacional",
    time: "Hace 5 horas",
    type: "international",
    priority: "medium",
  },
];

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  bgColor = "bg-primary",
}: {
  title: string;
  value: string | number;
  icon: any;
  trend?: { value: number; isPositive: boolean };
  bgColor?: string;
}) => (
  <Card className="p-6">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <h3 className="text-3xl font-semibold mb-2">{value}</h3>
        {trend && (
          <div className={`text-sm ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% vs mes anterior
          </div>
        )}
      </div>
      <div className={`${bgColor} text-white p-3 rounded-lg`}>
        <Icon size={24} />
      </div>
    </div>
  </Card>
);

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return <Badge className="bg-red-100 text-red-700">Urgente</Badge>;
    case "medium":
      return <Badge className="bg-yellow-100 text-yellow-700">Media</Badge>;
    case "low":
      return <Badge className="bg-blue-100 text-blue-700">Baja</Badge>;
    default:
      return null;
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "labor":
      return <Briefcase className="text-primary" size={20} />;
    case "support":
      return <HeadphonesIcon className="text-primary" size={20} />;
    case "legal":
      return <Scale className="text-primary" size={20} />;
    case "recruitment":
      return <Users className="text-primary" size={20} />;
    case "international":
      return <Globe className="text-primary" size={20} />;
    default:
      return <AlertCircle className="text-primary" size={20} />;
  }
};

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Dashboard</h1>
        <p className="text-muted-foreground">Panel de control - Gestión de clientes Auria HR</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard
          title="Total Clientes"
          value={52}
          icon={Building2}
          trend={{ value: 15, isPositive: true }}
          bgColor="bg-primary"
        />
        <StatCard
          title="Solicitudes Pendientes"
          value={23}
          icon={AlertCircle}
          trend={{ value: 8, isPositive: false }}
          bgColor="bg-secondary"
        />
        <StatCard
          title="Consultas Jurídicas"
          value={12}
          icon={Scale}
          trend={{ value: 5, isPositive: true }}
          bgColor="bg-[#8B7AB8]"
        />
        <StatCard
          title="Tickets Soporte"
          value={18}
          icon={HeadphonesIcon}
          trend={{ value: 12, isPositive: false }}
          bgColor="bg-[#4A3494]"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="mb-4">Crecimiento de Clientes e Ingresos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={clientGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="clientes"
                stroke="#241773"
                strokeWidth={2}
                name="Clientes"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="ingresos"
                stroke="#66E5B6"
                strokeWidth={2}
                name="Ingresos (€)"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4">Distribución por Servicio</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={serviceDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {serviceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="mb-4">Actividad Reciente</h3>
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0 w-fit">
                {getTypeIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{activity.company}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.action}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {getPriorityBadge(activity.priority)}
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
