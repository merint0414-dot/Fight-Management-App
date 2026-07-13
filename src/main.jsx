<<<<<<< HEAD
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css"
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";
>>>>>>> 0fdacb7 (Complete Add Flight feature)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
<<<<<<< HEAD
  </BrowserRouter>
)
=======
  </StrictMode>
);
>>>>>>> 0fdacb7 (Complete Add Flight feature)
