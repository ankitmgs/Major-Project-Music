const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./router/userRouter");
const musicRouter = require("./router/musicRouter");


// const dotenv = require("dotenv");
require("./connection");
const dotenv = require("dotenv").config();

const Port = process.env.PORT;

app.use(cors({ origin: ["http://localhost:3000"] }));

//to convert json into understandable for machine
app.use(express.json());


//middleware
//for user
app.use("/user", userRouter);



//for music
app.use("/music", musicRouter)

app.listen(Port, () => {
  console.log(`Server Started at port no ${Port}`);
});
