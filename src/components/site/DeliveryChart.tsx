import { useState } from "react";
import { deliveryPerformanceData, year2025AverageDelivery } from "@/data/performance";
import { cn } from "@/lib/utils";

export function DeliveryChart() {
  const [activePeriod, setActivePeriod] = useState<string>("2025 Avg");
  const selectedRecord =
    deliveryPerformanceData.find((d) => d.period === activePeriod) || {
      period: "2025 Year Avg",
      percentage: year2025AverageDelivery,
    };

  return (
    <div className="rounded-lg border border-border bg-background p-6 md:p-8">
      <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 md:flex-row md:items-end">
        <div>
          <span className="label-xs text-accent uppercase">Customer Delivery Performance</span>
          <h3 className="mt-2 text-2xl font-medium md:text-3xl">On-Time Delivery Rate</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Recorded delivery fulfillment percentages across 2024 and monthly 2025
          </p>
        </div>
        <div className="flex gap-4">
          <div className="rounded-md border border-border bg-surface px-4 py-2 text-center">
            <span className="text-[11px] text-muted-foreground">2025 Average</span>
            <div className="font-display text-2xl font-semibold text-accent">{year2025AverageDelivery}%</div>
          </div>
          <div className="rounded-md border border-border bg-surface px-4 py-2 text-center">
            <span className="text-[11px] text-muted-foreground">Peak Monthly</span>
            <div className="font-display text-2xl font-semibold text-emerald-400">100%</div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex h-60 items-end gap-2 overflow-x-auto pb-4 pt-6 md:gap-3">
        {deliveryPerformanceData.map((item) => {
          const heightPercent = Math.max(20, item.percentage);
          const isActive = item.period === activePeriod;

          return (
            <button
              type="button"
              key={item.period}
              onClick={() => setActivePeriod(item.period)}
              onMouseEnter={() => setActivePeriod(item.period)}
              className="group relative flex flex-1 flex-col items-center justify-end h-full min-w-[42px] cursor-pointer focus:outline-none"
              aria-label={`${item.period}: ${item.percentage}%`}
            >
              {/* Tooltip */}
              <div
                className={cn(
                  "absolute -top-10 z-10 whitespace-nowrap rounded border border-border bg-surface px-2 py-1 text-xs font-semibold shadow-md transition-all duration-200",
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100"
                )}
              >
                {item.percentage}%
              </div>

              {/* Bar */}
              <div
                style={{ height: `${heightPercent}%` }}
                className={cn(
                  "w-full rounded-t transition-all duration-500",
                  item.isPeak
                    ? isActive
                      ? "bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]"
                      : "bg-emerald-500/70 group-hover:bg-emerald-400"
                    : isActive
                      ? "bg-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"
                      : "bg-muted-foreground/25 group-hover:bg-accent/70"
                )}
              />

              <span
                className={cn(
                  "mt-3 text-[10px] font-mono leading-none transition-colors",
                  isActive ? "text-accent font-semibold" : "text-muted-foreground group-hover:text-foreground"
                )}
              >
                {item.period.replace(" 2025", "").replace(" 2024", "")}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
        <span>* Historical 2025 Delivery Performance data</span>
        <span className="text-emerald-400 font-medium">100% Peak recorded in May, Jun, Jul & Aug 2025</span>
      </div>
    </div>
  );
}
