const express = require("express");
const router = express.Router();
const Artist = require("../model/artistModel");


// register
// login
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
