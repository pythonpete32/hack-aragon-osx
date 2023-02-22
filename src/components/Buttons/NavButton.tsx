import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "@tanstack/react-router";
import { Button } from "@nextui-org/react";

export default function NavButton({
  route,
  icon,
  name,
}: {
  route: string;
  icon: React.ReactElement;
  name: string;
}) {
  return (
    <Link to={route} className="justify-center flex" search={{}} params={{}}>
      <Button
        icon={icon}
        size="lg"
        bordered
        shadow
        borderWeight="light"
        color="primary"
        css={{
          width: "100%",
        }}
      >
        <div className="font-bold w-max">{name}</div>
      </Button>
    </Link>
  );
}
