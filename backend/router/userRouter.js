const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../connection");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  console.log("Request from userRouter.js");
});

// Using promises
// router.post("/register", (req, res) => {
//   const { name, email, phone, DOB, password, cpassword } = req.body;

//   if (!name || !email || !phone || !DOB || !password || !cpassword) {
//     return res.status(422).json({ error: "Plz filled the field properly" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already exist" });
//       }

//       const user = new User({ name, email, phone, DOB, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfully" });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//Using async-await
router.post("/register", async (req, res) => {
  const { Fname, Lname, email, phone, DOB, gender, password, cpassword } = req.body;

  if (!Fname || !Lname || !email || !phone || !DOB || !gender || !password || !cpassword) {
    return res.status(422).json({ message: "Plz filled the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "Password is not matching with confirm password !!" });
    } else {
      const user = new User({ Fname, Lname, email, phone, DOB, gender, password, cpassword });
      await user.save();
      res.status(201).json({ message: "User Registered Successfully" });
    }
  } catch (error) {
    console.error(error);
  }
});

//login route
router.post("/login", async (req, res) => {
  // res.json({message: "login route working"});

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Incomplete Credentials" });
    }

    const userLoginData = await User.findOne({ email: email });

    if (userLoginData) {
      const isMatch = await bcrypt.compare(password, userLoginData.password);

      const token = await userLoginData.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 864000000),
        httpOnly: true,
      });
      
      // console.log(userLoginData);
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        res.status(200).json({ message: "User login successfully" });
      }
    } else {
      res.status(400).json({ error: "Invaid Credientials" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
