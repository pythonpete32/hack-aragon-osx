import { configureChains, createClient } from "wagmi";
import { foundry, goerli, mainnet } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

export const {
  chains: wagmiChains,
  provider,
  webSocketProvider,
} = configureChains([mainnet, goerli, foundry], [publicProvider()]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains: wagmiChains }),
    new CoinbaseWalletConnector({
      chains: wagmiChains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains: wagmiChains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains: wagmiChains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});
