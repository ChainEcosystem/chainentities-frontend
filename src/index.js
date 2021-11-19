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
      appId="PchN0ugTNoH0oy6cBi1VJG6TB9E0KqA9QLGYqvlu"
      serverUrl="https://okwkk3izlznb.usemoralis.com:2053/server"
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
