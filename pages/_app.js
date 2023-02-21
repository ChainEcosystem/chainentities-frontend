import "../styles/global.scss";
import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, polygon } from "wagmi/chains";

const { chains, provider } = configureChains(
  [mainnet, polygon],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
);

// const { connectors } = getDefaultWallets({
//   appName: "Chain Entities Minting",
//   chains,
// });

const wagmiClient = createClient({
  autoConnect: false,
  // connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      {/* <RainbowKitProvider chains={chains}> */}
      <Component {...pageProps} />
      {/* </RainbowKitProvider> */}
    </WagmiConfig>
  );
}

export default MyApp;
