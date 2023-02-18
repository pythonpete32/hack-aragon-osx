import { RootRoute, Route, ReactRouter } from "@tanstack/react-router";
import { Layout, Home, About } from "../components/Pages";
import React from "react";

// create root route
const rootRoute = new RootRoute({ component: Layout });

const rootChildren = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

// add children to root route
const routeTree = rootRoute.addChildren(
  rootChildren.map(
    (child) =>
      new Route({
        ...child,
        getParentRoute: () => rootRoute,
      })
  )
);

// Create the router using your route tree
export const router = new ReactRouter({ routeTree });

export const RouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        import("@tanstack/react-router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
