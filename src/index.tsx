import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import './styles/dist/main.css';

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);

root.render(
  <>
    <App />
  </>
);
