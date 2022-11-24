const { User } = require("../models");

const userdata = [
  {
    username: "Tom",
    password: "password123",
  },
  {
    username: "Isabelle",
    password: "password1234",
  },
  {
    username: "Lyle",
    password: "password12345",
  },
  {
    username: "Mary",
    password: "password4321",
  },
  {
    username: "Timmy",
    password: "password321",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;
