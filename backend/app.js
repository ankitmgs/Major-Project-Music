const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./router/userRouter");
const musicRouter = require("./router/musicRouter");


// const dotenv = require("dotenv");
require("./connection");

// const Port = process.env.PORT;
const Port = 8000;

app.use(cors({ origin: ["http://localhost:3000"] }));

//to convert json into understandable for machine
app.use(express.json());

//dotenv
// dotenv.config({ path: "./config.env" });
// require("dotenv").config();


//middleware
//for user
app.use("/user", userRouter);



//for music
app.use("/music", musicRouter)

app.listen(Port, () => {
  console.log(`Server Started at port no 8000 or ${Port}`);
});
