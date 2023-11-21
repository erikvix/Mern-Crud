import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";

const mocks = {
  users: [
    {
      id: nanoid(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: "123",
    },
  ],
  seeds: (server) => {
    server.create("user", {
      id: nanoid(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: "123",
    });
    server.create("user", {
      id: nanoid(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: "12344",
    });
    server.create("user", {
      id: nanoid(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: "12321",
    });
  },
};

export { mocks };
