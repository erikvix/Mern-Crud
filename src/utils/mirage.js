import { createServer, Model } from "miragejs";
import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";

const initMirage = () =>
  createServer({
    models: {
      user: Model,
    },
    seeds: (server) => {
      server.create("user", {
        id: nanoid(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email()
      });
      server.create("user", {
        id: nanoid(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email()
      });
      server.create("user", {
        id: nanoid(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email()
      });
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
      this.put("/api/user/:id", (schema, request) =>
        schema.user
          .find(request.params.id)
          .update(JSON.parse(request.requestBody))
      );
      this.passthrough("https://unpkg.com/**/*");
    },
  });

export { initMirage };
