import { createServer, Model } from "miragejs";
import { mocks } from "@/utils/mocks";

const initMirage = () =>
  createServer({
    models: {
      user: Model,
    },
    seeds(server) {
      mocks.seeds(server);
    },
    routes() {
      this.urlPrefix =
        import.meta.env.MODE === "development"
          ? "http://localhost:5173"
          : "https://crud-mernstack.netlify.app";
      this.get("/api/users", (schema) => schema.users.all());
      this.delete("/api/users/:id", (schema, request) =>
        schema.users.find(request.params.id).destroy()
      );
      this.post("/api/user", (schema, request) =>
        schema.user.create("user", JSON.parse(request.requestBody))
      );
      this.put("/api/user/:id", (schema, request) =>
        schema.user
          .find(request.params.id)
          .update(JSON.parse(request.requestBody))
      );
      this.passthrough("https://unpkg.com/**/*");
    },
  });

export { initMirage };
