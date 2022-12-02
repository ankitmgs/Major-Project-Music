const express = require("express");
const app = express();
// const dotenv = require("dotenv");
require("./connection");

// const Port = process.env.PORT;
const Port = 8000;

//to convert json into understandable for machine
app.use(express.json());

//dotenv
// dotenv.config({ path: "./config.env" });
// require("dotenv").config();

app.get("/", () => {
  res.send(`Hello world from the server`);
});

app.use(require("./router/userRouter"));

app.listen(Port, () => {
  console.log(`Server Started at port no 8000 or ${Port}`);
});
