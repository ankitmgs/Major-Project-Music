const router = require("express").Router();
const multer = require("multer");

const filestorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads/zipfiles");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadFile = multer({ storage: filestorage });

router.post("/uploadfile", uploadFile.single("myfile"), (req, res) => {
  console.log(req.body);
  res.json({ message: "File upload success" });
});


module.exports = router;
