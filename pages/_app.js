import "../styles/global.scss";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="UTWiusSu2P8dn1H8LK5Q6N4vC7w1wqjsU0nE6peb"
      serverUrl="https://aefj6iraiwkm.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
