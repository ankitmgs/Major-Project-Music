const express = require("express");
const router = express.Router();
const Model = require("../model/artistModel");


// register
router.post("/register", async (req, res) => {

  new Model(req.body).save()
  .then((result) => {
      res.json(result);
  }).catch((err) => {
    console.error(err);  
    res.status(500).json(err);
  });
   
});
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
