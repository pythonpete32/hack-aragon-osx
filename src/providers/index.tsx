import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiChains, wagmiClient } from "./wagmi";
import { NextUIProvider } from "@nextui-org/react";
import { DarkTheme, globalStyles } from "../theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { AragonSDKWrapper } from "../hooks";

export function Providers({ children }: { children: React.ReactNode }) {
  globalStyles();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={wagmiChains} theme={darkTheme()}>
        <QueryClientProvider client={new QueryClient()}>
          <AragonSDKWrapper>
            <NextUIProvider theme={DarkTheme}>
              <BrowserRouter>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </BrowserRouter>
            </NextUIProvider>
          </AragonSDKWrapper>
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
