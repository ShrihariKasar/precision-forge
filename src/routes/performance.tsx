import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/performance")({
  component: RedirectPerformance,
});

function RedirectPerformance() {
  return <Navigate to="/about" replace />;
}

