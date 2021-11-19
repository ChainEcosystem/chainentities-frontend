import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import "./styles/final.scss";
import "react-multi-carousel/lib/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId="DkODzlPguj5n7TavF2blTSp1SCcIzETd3Tpay2pM"
      serverUrl="https://ovbs0az4d08z.usemoralis.com:2053/server"
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
