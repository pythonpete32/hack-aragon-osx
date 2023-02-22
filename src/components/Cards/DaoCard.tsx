// import Link from 'next/link'

import { Card, User, Text } from "@nextui-org/react";

type DaoCardProps = {
  name?: string;
  address?: string;
  ensName?: string;
  description?: string;
  avatar?: string;
};

const DaoCard = ({
  name,
  address,
  ensName,
  description,
  avatar,
}: DaoCardProps) => {
  return (
    <Card isPressable={true} variant="shadow" css={{ width: "480px" }}>
      <Card.Header>
        <User
          src={
            avatar
              ? avatar
              : `https://cdn.stamp.fyi/avatar/eth:${address}?s=144`
          }
          size="lg"
          name={name ? name : ensName}
          description={address}
          css={{ padding: "$2" }}
        />
      </Card.Header>
      <Card.Body css={{ px: "$10", pb: "$10" }}>
        <Text className="font-mono">{description}</Text>
      </Card.Body>
    </Card>
  );
};

export default DaoCard;
