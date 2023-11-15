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
  seeds(server) {
    server.create("user", {
      id: 1,
      firstname: "Mikael",
      lastname: "Hadler",
      email: "mikaelhadler@gmail.com",
      password: "123",
    });
    server.create("user", {
      id: 2,
      firstname: "Junior",
      lastname: "Silva",
      email: "juniorislva@gmail.com",
      password: "12344",
    });
    server.create("user", {
      id: 3,
      firstname: "Pedro",
      lastname: "Felix",
      email: "pedrofelix@gmail.com",
      password: "12321",
    });
  },

  routes() {
    this.urlPrefix = "https://crud-mernstack.netlify.app";
    this.get("/api/users", (schema) => schema.users.all());
    this.delete("/api/users/:id", (schema, request) => schema.users.find(request.params.id).destroy());
    this.post("/api/user", (schema, request) => schema.user.create("user", JSON.parse(request.requestBody)));
    this.put("/api/user/:id", (schema, request) => schema.user.find(request.params.id).update(JSON.parse(request.requestBody)));
    this.passthrough("https://unpkg.com/**/*");
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
