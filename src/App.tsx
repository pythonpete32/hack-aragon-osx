import "./styles/index.css";
import { RouterProvider } from "@tanstack/react-router";
import { router, RouterDevtools } from "./constants";

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <RouterDevtools router={router} position="bottom-right" />
    </>
  );
}
