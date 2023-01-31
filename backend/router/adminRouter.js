const express = require("express");
const router = express.Router();
const Model = require("../model/adminModel");

// register
router.post("/register", async (req, res) => {
  console.log(req.body);
  new Model(req.body)
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// login
router.post("/login", (req, res) => {
  console.log(req.body);

  Model.findOne(req.body)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(400).json({ status: "error" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// getall
router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// update
router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// delete
router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//get artist by id
router.get("/getbyid/:artistid", (req, res) => {
  Model.findById(req.params.artistid)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
