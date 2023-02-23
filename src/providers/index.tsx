import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { chains, client } from "./wagmi";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { AragonSDKWrapper } from "../hooks";

export const DarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#202225",
      backgroundContrast: "#292b2f",
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <AragonSDKWrapper>
          <QueryClientProvider client={new QueryClient()}>
            <NextUIProvider theme={DarkTheme}>
              <BrowserRouter>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </BrowserRouter>
            </NextUIProvider>
          </QueryClientProvider>
        </AragonSDKWrapper>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
