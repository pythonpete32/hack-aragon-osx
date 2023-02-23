import { createContext, useEffect, useContext, useState } from "react";

import { useSigner } from "wagmi";
import { Context, ContextParams } from "@aragon/sdk-client";

interface AragonSDKWrapperContext {
  children: JSX.Element;
}

const AragonSDKContext = createContext({});

export function AragonSDKWrapper({
  children,
}: AragonSDKWrapperContext): JSX.Element {
  const [context, setContext] = useState<Context | undefined>(undefined);
  const signer = useSigner().data || undefined;
  console.log({ signer });

  useEffect(() => {
    const aragonSDKContextParams: ContextParams = {
      network: "goerli",
      signer,
      daoFactoryAddress: "0xf401dbc7eEf9E8DE629E67154838e8a7D828D2A3",
      web3Providers: ["https://rpc.ankr.com/eth_goerli"],
      ipfsNodes: [
        {
          url: "https://ipfs.infura.io:5001",
          headers: { "X-API-KEY": import.meta.env.VITE_IPFS_API_KEY || "" },
        },
      ],
      graphqlNodes: [
        {
          url: "https://subgraph.satsuma-prod.com/qHR2wGfc5RLi6/aragon/core-goerli/api", // url: "https://subgraph.satsuma-prod.com/aragon/core-goerli-2/api",
        },
      ],
    };

    const context = new Context(aragonSDKContextParams);
    setContext(context);
  }, [signer]);

  return (
    <AragonSDKContext.Provider value={{ context }}>
      {children}
    </AragonSDKContext.Provider>
  );
}

export function useAragonSDKContext(): any {
  return useContext(AragonSDKContext);
}
