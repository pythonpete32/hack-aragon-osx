import DaoCard from "../Cards/DaoCard";

import useGetDaos from "../../hooks/useGetDaos";
import { mockDaos } from "../../constants";

export default function Home() {
  // const { daos, loading, error } = useGetDaos();
  // console.log({ daos, loading, error });

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
