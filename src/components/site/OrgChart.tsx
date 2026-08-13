import { leadershipTeam, functionalHeads, engineeringSupportTeam } from "@/data/team";

export function OrgChart() {
  return (
    <div className="space-y-12">
      {/* Managing Director & Plant Head */}
      <div>
        <h3 className="label-xs text-accent uppercase mb-6">Executive & Plant Leadership</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {leadershipTeam.map((m) => (
            <div
              key={m.name}
              className="rounded-lg border border-accent/40 bg-surface/80 p-6 shadow-lg backdrop-blur-sm"
            >
              <span className="label-xs text-accent">{m.department}</span>
              <h4 className="mt-2 text-2xl font-semibold text-foreground">{m.name}</h4>
              <p className="mt-1 font-mono text-sm text-accent">{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Department Functional Heads */}
      <div>
        <h3 className="label-xs text-accent uppercase mb-6">Department Functional Heads</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {functionalHeads.map((m) => (
            <div key={m.name} className="rounded-md border border-border bg-background p-5 hover:border-accent/50 transition-colors">
              <span className="text-[11px] font-mono text-muted-foreground">{m.role}</span>
              <h5 className="mt-1 text-lg font-medium text-foreground">{m.name}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering & Support Team */}
      <div>
        <h3 className="label-xs text-accent uppercase mb-6">Engineering & Support Operations</h3>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {engineeringSupportTeam.map((m) => (
            <div key={m.name} className="rounded border border-border/80 bg-surface/40 p-4">
              <h6 className="text-sm font-medium text-foreground">{m.name}</h6>
              <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
