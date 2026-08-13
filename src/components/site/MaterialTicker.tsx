import { materialTickerItems } from "@/data/materials";

export function MaterialTicker() {
  return (
    <div className="w-full overflow-hidden border-y border-border bg-surface py-5">
      <div className="container-x mb-3 flex items-center justify-between">
        <span className="label-xs text-accent uppercase">Polymers & Engineering Materials</span>
        <span className="text-xs text-muted-foreground">High-performance & Commodity Grades</span>
      </div>

      <div className="relative flex w-full overflow-x-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap">
          {materialTickerItems.concat(materialTickerItems).map((mat, i) => (
            <div key={`${mat}-${i}`} className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-accent/80" />
              <span className="font-display text-base font-medium tracking-wide uppercase text-foreground">
                {mat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
