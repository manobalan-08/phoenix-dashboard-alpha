
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-xl border shadow-sm",
        className
      )}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <h3 className="text-2xl font-bold">{value}</h3>
          {trend && (
            <p
              className={cn(
                "text-xs font-medium mt-1",
                trend.positive ? "text-green-500" : "text-red-500"
              )}
            >
              {trend.positive ? "↑" : "↓"} {trend.value} since last month
            </p>
          )}
        </div>
        <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
}
