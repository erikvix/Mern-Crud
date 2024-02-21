import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { initMirage } from "@/utils/mirage";
import netlifyIdentity from "netlify-identity-widget";

import "boxicons";
import "./index.css";
netlifyIdentity.init();

initMirage();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
