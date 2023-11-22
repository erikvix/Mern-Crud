import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/api/user", () => ({ name: 'Erik' })),
    this.post("/api/user", (schema, request) => JSON.parse(request.requestBody));
  },
})