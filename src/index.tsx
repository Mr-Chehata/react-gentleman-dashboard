import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "primereact/resources/themes/md-dark-indigo/theme.css"; //theme

/* import "primereact/resources/themes/lara-light-indigo/theme.css";  */
import "primereact/resources/primereact.min.css"; //core css

import "primeicons/primeicons.css"; //icons

import "./index.css";
import "/node_modules/primeflex/primeflex.css";

const container = document.getElementById("root")!;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
