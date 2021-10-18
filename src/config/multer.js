const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let path = "./src/public/upload";
    cb(null, path);
  },
  filename: function (req, file, cb) {
    let nome = Date.now() + "-" + file.originalname;
    cb(null, nome);
  },
});

const upload = multer({ storage });

module.exports = upload;
