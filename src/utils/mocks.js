import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";

const mocks = {
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
};

export { mocks };
