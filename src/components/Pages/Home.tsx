import DaoCard from "../Cards/DaoCard";

import { mockDaos } from "../../constants";
import {
  useFetchDaos,
  useFetchDao,
  useFetchDaoBalances,
  useFetchTransfers,
} from "../../hooks/client";
import {
  useFetchMembers,
  useFetchProposals,
  useFetchVoteSettings,
} from "../../hooks/tokenVoting";

const dao1 = "0x04454ba3a874661abbbee846703303a9a0a7a130";
const votingAddress = "0x2fcc030eb9c6bb0f440abc4042446645f4463068";

export default function Home() {
  useFetchDao(dao1);
  // useFetchDaos({});
  useFetchDaoBalances({ daoAddressOrEns: dao1 });
  useFetchTransfers({ daoAddressOrEns: dao1 });
  // useFetchMembers(dao1);
  // useFetchProposals({ daoAddressOrEns: dao1 });
  // useFetchVoteSettings(votingAddress);

  return (
    <div className="grid xl:grid-cols-2 mt-2 gap-8">
      {mockDaos.map((dao: any, index: number) => (
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
