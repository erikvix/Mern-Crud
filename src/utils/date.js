const currentDate = new Date();

const dummyData = [];

for (let i = 0; i <= 7; i++) {
  const date = new Date();
  date.setDate(currentDate.getDate() - i);

  const usersLogged = Math.floor(Math.random() * (30 - 5 + 1)) + 5;

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  dummyData.push({ x: formattedDate, y: usersLogged });
}

export { dummyData };
