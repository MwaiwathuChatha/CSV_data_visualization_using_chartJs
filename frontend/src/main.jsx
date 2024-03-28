// eslint-disable-next-line no-unused-vars
import * as React from "react";
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);