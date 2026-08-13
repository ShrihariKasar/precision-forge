import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { company } from "@/data/company";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-lg">
        <p className="label-xs text-accent">Error 404</p>
        <h1 className="mt-6 font-display text-[clamp(3.5rem,12vw,8rem)] leading-none font-medium">
          404
        </h1>
        <h2 className="mt-4 text-xl font-medium tracking-tight">Component not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          This part isn't where it should be. Check the address, or return to the homepage.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-md bg-accent px-6 label-xs text-accent-foreground"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-medium tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing, or head back to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 label-xs text-accent-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center rounded-md border border-border-strong px-6 label-xs"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${company.name} — Precision Sheet Metal Manufacturing` },
      { name: "description", content: company.description },
      { property: "og:site_name", content: company.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          description: company.description,
          telephone: company.phone,
          email: company.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: company.address.line1,
            addressLocality: company.address.city,
            addressRegion: company.address.state,
            postalCode: company.address.postal,
            addressCountry: company.address.country,
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main key={pathname} className="min-h-screen animate-in fade-in duration-500">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
