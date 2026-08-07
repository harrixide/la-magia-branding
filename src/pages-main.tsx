import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./image-overrides";
import { Route as IndexRoute } from "./routes/index";

const IndexComponent = IndexRoute.options.component as React.ComponentType;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IndexComponent />
  </React.StrictMode>,
);
