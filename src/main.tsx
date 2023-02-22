import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { App } from "./App";
import { chains, client } from "./wagmi";
import { AragonSDKWrapper } from "./lib/AragonContext";

import { createTheme, NextUIProvider } from "@nextui-org/react";
const theme = createTheme({
  type: "light",
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <NextUIProvider theme={theme}>
          <AragonSDKWrapper>
            <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </AragonSDKWrapper>
        </NextUIProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
