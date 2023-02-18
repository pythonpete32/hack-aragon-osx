import DaoCard from "../Cards/DaoCard";

const daos = [
  {
    name: "DAO 1",
    address: "0x1234567890",
    ensName: "dao1.aragon.eth",
    description: "This is the first DAO",
  },
  {
    name: "DAO 2",
    address: "0x1234567890",
    ensName: "dao2.aragon.eth",
    description: "This is the second DAO",
  },
  {
    name: "DAO 3",
    address: "0x1234567890",
    ensName: "dao3.aragon.eth",
    description: "This is the third DAO",
  },
];

export default function Home() {
  return (
    <div className="grid xl:grid-cols-2 mt-2 gap-8">
      {daos.map((dao: any, index: number) => (
        <DaoCard
          key={index}
          name={dao.name}
          ensName={dao.ensName}
          address={dao.address}
          description={dao.description}
        />
      ))}
    </div>
  );
}
