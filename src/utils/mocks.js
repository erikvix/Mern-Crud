const mocks = {
  users: [
    {
      id: 1,
      firstname: "Mikael",
      lastname: "Hadler",
      email: "mikaelhadler@gmail.com",
      password: "123",
    },
  ],
  seeds: (server) => {
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
  }
};

export { mocks };
