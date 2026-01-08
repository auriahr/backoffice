import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Filter,
} from "lucide-react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

interface PayrollEvent {
  id: string;
  clientName: string;
  clientColor: string;
  date: Date;
  status: "pending" | "processed" | "sent";
  employees: number;
}

const MOCK_CLIENTS = [
  { name: "Tech Solutions SL", color: "#241773" },
  { name: "Comercial Ibérica SA", color: "#66E5B6" },
  { name: "Industrias del Norte", color: "#3B82F6" },
  { name: "Servicios Profesionales", color: "#8B5CF6" },
  { name: "Logística Express", color: "#EF4444" },
];

const MOCK_EVENTS: PayrollEvent[] = [
  {
    id: "1",
    clientName: "Tech Solutions SL",
    clientColor: "#241773",
    date: new Date(2025, 0, 5),
    status: "sent",
    employees: 45,
  },
  {
    id: "2",
    clientName: "Comercial Ibérica SA",
    clientColor: "#66E5B6",
    date: new Date(2025, 0, 10),
    status: "processed",
    employees: 28,
  },
  {
    id: "3",
    clientName: "Industrias del Norte",
    clientColor: "#3B82F6",
    date: new Date(2025, 0, 15),
    status: "pending",
    employees: 67,
  },
  {
    id: "4",
    clientName: "Tech Solutions SL",
    clientColor: "#241773",
    date: new Date(2025, 1, 5),
    status: "pending",
    employees: 45,
  },
  {
    id: "5",
    clientName: "Servicios Profesionales",
    clientColor: "#8B5CF6",
    date: new Date(2025, 1, 12),
    status: "pending",
    employees: 34,
  },
];

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export function PayrollCalendar() {
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState<number | "all">("all");
  const [selectedClient, setSelectedClient] = useState<string>("all");

  const getEventsForDay = (date: Date) => {
    return MOCK_EVENTS.filter((event) => {
      const eventDate = event.date;
      const matchesDate =
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear();
      const matchesMonth =
        selectedMonth === "all" || date.getMonth() === selectedMonth;
      const matchesClient =
        selectedClient === "all" || event.clientName === selectedClient;
      return matchesDate && matchesMonth && matchesClient;
    });
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderMonth = (monthIndex: number) => {
    const daysInMonth = getDaysInMonth(monthIndex, currentYear);
    const firstDay = getFirstDayOfMonth(monthIndex, currentYear);
    const days = [];

    // Días vacíos antes del primer día del mes
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-20 border border-muted"></div>
      );
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, monthIndex, day);
      const events = getEventsForDay(date);
      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <div
          key={day}
          className={`h-20 border border-muted p-1 ${
            isToday ? "bg-[#66E5B6]/10 border-[#66E5B6]" : "hover:bg-muted/50"
          } transition-colors`}
        >
          <div
            className={`text-sm ${
              isToday ? "font-semibold text-[#241773]" : ""
            }`}
          >
            {day}
          </div>
          <div className="space-y-0.5 mt-1">
            {events.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className="text-xs p-0.5 rounded truncate"
                style={{
                  backgroundColor: event.clientColor + "20",
                  borderLeft: `3px solid ${event.clientColor}`,
                }}
                title={`${event.clientName} - ${event.employees} empleados`}
              >
                <span className="text-xs truncate block">
                  {event.clientName}
                </span>
              </div>
            ))}
            {events.length > 2 && (
              <div className="text-xs text-muted-foreground">
                +{events.length - 2} más
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const monthsToDisplay =
    selectedMonth === "all"
      ? Array.from({ length: 12 }, (_, i) => i)
      : [selectedMonth];

  return (
    <div className="space-y-6">
      {/* Filtros y Controles */}
      <Card className="p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentYear(currentYear - 1)}
            >
              <ChevronLeft size={16} />
            </Button>
            <h2 className="min-w-[100px] text-center">{currentYear}</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentYear(currentYear + 1)}
            >
              <ChevronRight size={16} />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Select
              value={selectedMonth.toString()}
              onValueChange={(value) =>
                setSelectedMonth(value === "all" ? "all" : parseInt(value))
              }
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter size={16} className="mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los meses</SelectItem>
                {MONTHS.map((month, idx) => (
                  <SelectItem key={idx} value={idx.toString()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedClient} onValueChange={setSelectedClient}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los clientes</SelectItem>
                {MOCK_CLIENTS.map((client) => (
                  <SelectItem key={client.name} value={client.name}>
                    {client.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Leyenda de Clientes */}
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-3">Leyenda de Clientes</h3>
        <div className="flex flex-wrap gap-3">
          {MOCK_CLIENTS.map((client) => (
            <div key={client.name} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: client.color }}
              ></div>
              <span className="text-sm">{client.name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Calendarios por Mes */}
      <div className="space-y-6">
        {monthsToDisplay.map((monthIndex) => (
          <Card key={monthIndex} className="p-6">
            <h3 className="mb-4">
              {MONTHS[monthIndex]} {currentYear}
            </h3>

            {/* Días de la semana */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-muted-foreground py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Días del mes */}
            <div className="grid grid-cols-7 gap-1">
              {renderMonth(monthIndex)}
            </div>
          </Card>
        ))}
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-to-br from-[#241773]/10 to-[#66E5B6]/10 border-[#241773]/20">
          <p className="text-sm text-muted-foreground mb-1">
            Total Nóminas Programadas
          </p>
          <p className="text-2xl font-semibold">{MOCK_EVENTS.length}</p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
          <p className="text-sm text-muted-foreground mb-1">Nóminas Enviadas</p>
          <p className="text-2xl font-semibold">
            {MOCK_EVENTS.filter((e) => e.status === "sent").length}
          </p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/20">
          <p className="text-sm text-muted-foreground mb-1">
            Nóminas Pendientes
          </p>
          <p className="text-2xl font-semibold">
            {MOCK_EVENTS.filter((e) => e.status === "pending").length}
          </p>
        </Card>
      </div>
    </div>
  );
}
