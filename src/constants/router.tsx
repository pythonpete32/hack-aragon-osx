import { RootRoute, Route, ReactRouter } from "@tanstack/react-router";
import { Layout, Home, NewDao } from "../components/Pages";
import React from "react";

// create root route
const rootRoute = new RootRoute({ component: Layout });

const rootChildren = [
  { path: "/", component: Home },
  { path: "/new", component: NewDao },
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
  import.meta.env.MODE === "production"
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
