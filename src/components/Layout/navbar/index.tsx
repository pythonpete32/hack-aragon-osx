import { Navbar } from "@nextui-org/react";
import { AvatarBar } from "../avatar-bar";
import { NavbarBrand } from "./Brand";

export default function () {
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <NavbarBrand />
      </Navbar.Brand>
      <AvatarBar />
    </Navbar>
  );
}
