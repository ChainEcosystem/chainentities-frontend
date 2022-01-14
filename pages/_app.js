import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId="xxx" serverUrl="xxx">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
