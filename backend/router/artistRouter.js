const express = require("express");
const router = express.Router();
const Model = require("../model/artistModel");


// register
router.post("/register", async (req, res) => {

  new Model(req.body).save()
  .then((result) => {
      res.status(201).json(result);
  }).catch((err) => {
    console.error(err);  
    res.status(500).json(err);
  });
   
});


// router.post("/register", async (req, res) => {
  

//   const { email, name, avatar, gender, password, cpassword } = req.body;

//   try {
//     const userExist = await User.findOne({ email: email });
//     if (userExist) {
//       return res.status(409).json({ error: "Email already exist" });
//     } else if (password != cpassword) {
//       return res
//         .status(401)
//         .json({ error: "Password is not matching with confirm password !!" });
//     } else {
//       const user = new User({ email, name, avatar, gender, password, cpassword});
//       await user.save();
//       res.status(201).json({ message: "User Registered Successfully" });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });


// login
router.post("/login", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then(() => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// getall
router.get("/getall", (req, res) => {
    Model.find({})
      .populate("author")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
// update
router.put("/update/:userid", (req, res) => {
    Model.findByIdAndUpdate(req.params.userid, req.body)
      .then((data) => {
        res.status(200).json({ message: "updated successfully!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
// delete
router.delete("/delete/:userid", (req, res) => {
    Model.findByIdAndDelete(req.params.userid)
      .then((data) => {
        res.status(200).json({ message: "deleted successfully!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });



module.exports = router;
