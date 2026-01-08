import { Card } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  bgColor?: string;
}

export function StatCard({ title, value, icon: Icon, trend, bgColor = "bg-primary" }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-semibold mb-2">{value}</h3>
          {trend && (
            <div className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}% vs mes anterior
            </div>
          )}
        </div>
        <div className={`${bgColor} text-white p-3 rounded-lg`}>
          <Icon size={24} />
        </div>
      </div>
    </Card>
  );
}
