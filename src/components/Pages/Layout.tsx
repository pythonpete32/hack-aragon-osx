import { Outlet } from "@tanstack/react-router";
import { Sidebar, DefaultLayout } from "../Layout";
import { Logo } from "../Buttons";
import { navLinks } from "../../constants";

export default function Layout() {
  return (
    <DefaultLayout
      sidebar={
        <Sidebar logo={<Logo />} navLinks={navLinks} onRoute={console.log} />
      }
    >
      <Outlet />
    </DefaultLayout>
  );
}
