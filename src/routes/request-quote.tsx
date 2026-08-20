import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/request-quote")({
  component: RedirectRequestQuote,
});

function RedirectRequestQuote() {
  return <Navigate to="/contact" replace />;
}

