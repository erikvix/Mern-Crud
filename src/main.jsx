import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createServer, Model } from "miragejs";
import { router } from "@/routes";
import { mocks } from "@/utils/mocks";

import "boxicons";
import "./index.css";

createServer({
  models: {
    user: Model,
  },
  routes() {
    this.urlPrefix = "https://crud-mernstack.netlify.app";
    this.get("/api/users", (schema) => {
      return schema.users.all();
    });
    this.delete("/api/users/:id", (schema, request) => {
      let id = request.params.id;

      return schema.users.find(id).destroy();
    });
    this.passthrough("https://unpkg.com/**/*");
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
