import { Badge, Row, Spacer, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const NavbarBrand = () => {
  return (
    <Row justify="flex-start" align="center">
      <Link to="/">
        <Text h3 css={{ m: 0 }}>
          DAO Box
        </Text>
      </Link>

      <Spacer x={0.4} />

      <Badge isSquared color="secondary" variant="flat">
        Beta
      </Badge>
    </Row>
  );
};
