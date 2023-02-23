import { Navbar, Button } from "@nextui-org/react";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export const AvatarBar = () => {
  return (
    <Navbar.Content
      gap={14}
      css={{
        "@xsMax": {
          w: "100%",
          jc: "space-between",
        },
      }}
    >
      <Button color="gradient" auto bordered borderWeight="light">
        <div className="font-semibold">New</div>
      </Button>
      <ConnectButton />
    </Navbar.Content>
  );
};
