import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@prueba.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "prueba",
    email: "prueba@prueba.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "prueba2",
    email: "prueba2@prueba.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
