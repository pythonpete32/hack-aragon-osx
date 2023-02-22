import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { Button } from "@nextui-org/react";

export default function ExternalNavButton({
  url,
  icon,
  name,
}: {
  url: string;
  icon: React.ReactElement;
  name: string;
}) {
  return (
    <a href={url} className="justify-center align-middle flex ">
      <Button
        icon={icon}
        size="lg"
        bordered
        borderWeight="light"
        shadow={{ "@xs": true }}
        color="gradient"
        css={{
          width: "100%",
        }}
      >
        <div className="font-bold w-max">{name}</div>
      </Button>
    </a>
  );
}
