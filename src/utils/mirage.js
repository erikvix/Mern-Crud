import { createServer, Model } from "miragejs";
import { mocks } from "@/utils/mocks";
import { nanoid } from "nanoid";

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
      this.post("/api/user", (schema, request) => {
        const body = JSON.parse(request.requestBody);
        const payload = {
          id: nanoid(),

          ...body,
        };
        schema.users.create(payload);
        return payload;
      });
      this.put("/api/user/:id", (schema, request) => {
        const body = JSON.parse(request.requestBody);
        schema.users.find(request.params.id).update(body);
      });
      this.passthrough("https://unpkg.com/**/*");
      this.passthrough("https://melodic-sunburst-d98e5a.netlify.app/.netlify/identity/*");
    },
  });

export { initMirage };
