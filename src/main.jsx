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
    this.get("http://localhost:5173/api/users", (schema) => {
      return schema.users.all();
    });
    this.delete("http://localhost:5173/api/users/:id", (schema, request) => {
      let id = request.params.id;

      return schema.users.find(id).destroy();
    });
    this.post("http://localhost:5173/api/user", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.user.create(attrs);
    });
    this.put("http://localhost:5173/api/user/:id", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      let id = request.params.id;

      return schema.user.find(id).update(attrs);
    });
    this.passthrough("https://unpkg.com/**/*");
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
