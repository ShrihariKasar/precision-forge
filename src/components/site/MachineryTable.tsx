import { useState } from "react";
import { verifiedMachines, additionalMachines, totalActiveMachinesCount, totalInstalledTonnageRange, largestVerifiedMachine } from "@/data/machines";
import { cn } from "@/lib/utils";

export function MachineryTable() {
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <div className="space-y-8">
      {/* Key Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-surface p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Active Machine Fleet</span>
          <div className="mt-2 text-3xl font-bold text-accent">{totalActiveMachinesCount} Presses</div>
          <p className="mt-1 text-xs text-muted-foreground">Verified production moulding machines</p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tonnage Capacity Range</span>
          <div className="mt-2 text-3xl font-bold text-foreground">{totalInstalledTonnageRange}</div>
          <p className="mt-1 text-xs text-muted-foreground">Clamp force for diverse part sizes</p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Largest Active Machine</span>
          <div className="mt-2 text-3xl font-bold text-accent">{largestVerifiedMachine}</div>
          <p className="mt-1 text-xs text-muted-foreground">Max shot weight: 532g (TUP Taiwan)</p>
        </div>
      </div>

      {/* Technical Specifications Table */}
      <div className="overflow-x-auto rounded-lg border border-border bg-background">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-surface text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <tr>
              <th scope="col" className="px-6 py-4">Machine</th>
              <th scope="col" className="px-6 py-4">Make</th>
              <th scope="col" className="px-6 py-4">Tonnage</th>
              <th scope="col" className="px-6 py-4">Tie Bar Distance</th>
              <th scope="col" className="px-6 py-4">Shot Weight</th>
              <th scope="col" className="px-6 py-4">Core Pull</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {verifiedMachines.map((m) => (
              <tr key={m.id} className="transition-colors hover:bg-surface/50">
                <td className="px-6 py-4 font-semibold text-accent">{m.name}</td>
                <td className="px-6 py-4 font-medium text-foreground">{m.make}</td>
                <td className="px-6 py-4 font-semibold text-foreground">{m.tonnage} ton</td>
                <td className="px-6 py-4 text-muted-foreground">{m.tieBarDistance}</td>
                <td className="px-6 py-4 text-muted-foreground">{m.shotWeight}</td>
                <td className="px-6 py-4 text-muted-foreground">{m.corePull}</td>
              </tr>
            ))}

            {showAdditional &&
              additionalMachines.map((m) => (
                <tr key={m.id} className="bg-amber-500/5 transition-colors hover:bg-amber-500/10">
                  <td className="px-6 py-4 font-semibold text-amber-400">{m.name}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{m.make}</td>
                  <td className="px-6 py-4 font-semibold text-foreground">{m.tonnage} ton</td>
                  <td className="px-6 py-4 text-muted-foreground">{m.tieBarDistance}</td>
                  <td className="px-6 py-4 text-muted-foreground">{m.shotWeight}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                      Status to be confirmed
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Showing {verifiedMachines.length} active verified moulding machines</span>
        <button
          type="button"
          onClick={() => setShowAdditional(!showAdditional)}
          className="text-accent underline hover:text-foreground focus:outline-none"
        >
          {showAdditional ? "Hide Additional Machines" : "View Additional Machines (Status to be Confirmed)"}
        </button>
      </div>
    </div>
  );
}
