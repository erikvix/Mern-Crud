import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createServer } from "miragejs";
import { router } from "@/routes";
import { mocks } from "@/utils/mocks";

import "boxicons";
import "./index.css";

createServer({
  routes() {
    this.get("/api/users", mocks.users)
    this.passthrough('https://unpkg.com/**/*')
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
