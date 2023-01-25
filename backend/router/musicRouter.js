const express = require("express");
const Model = require("../model/musicModel");
const router = express.Router();

// add
router.post("/add", (req, res) => {
  console.log(req.body);
  new Model(req.body)
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    })
})
// getbyid
router.get("/getbyid/:musicid", (req, res) => {
  Model.findById(req.params.musicid)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });

});

router.get("/getall", (req, res) => {
  Model.find({}).populate('artist')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });

});

router.get("/getbyartist/:artistid", (req, res) => {
  Model.find({artist : req.params.artistid})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });

});
// getbyartist

// getbygenre

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
