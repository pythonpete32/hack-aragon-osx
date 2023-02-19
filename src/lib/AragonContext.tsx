import { createContext, useEffect, useContext, useState } from "react";

import { useSigner } from "wagmi";
import { Client, Context, ContextParams } from "@aragon/sdk-client";

interface AragonSDKWrapperContext {
  children: JSX.Element;
}

const AragonSDKContext = createContext({});

export function AragonSDKWrapper({
  children,
}: AragonSDKWrapperContext): JSX.Element {
  const [client, setClient] = useState<Client | undefined>(undefined);
  const signer = useSigner().data || undefined;

  useEffect(() => {
    const aragonSDKContextParams: ContextParams = {
      network: "goerli",
      signer,
      daoFactoryAddress: "0xf401dbc7eEf9E8DE629E67154838e8a7D828D2A3",
      web3Providers: ["https://rpc.ankr.com/eth_goerli"],
      ipfsNodes: [
        {
          url: "https://testing-ipfs-0.aragon.network/api/v0",
          headers: { "X-API-KEY": import.meta.env.VITE_IPFS_API_KEY || "" },
        },
      ],
      graphqlNodes: [
        {
          url: "https://subgraph.satsuma-prod.com/aragon/core-goerli/api",
        },
      ],
    };

    const context: Context = new Context(aragonSDKContextParams);
    setClient(new Client(context));
  }, [signer]);

  return (
    <AragonSDKContext.Provider value={{ client }}>
      {children}
    </AragonSDKContext.Provider>
  );
}

export function useAragonSDKContext(): any {
  return useContext(AragonSDKContext);
}
