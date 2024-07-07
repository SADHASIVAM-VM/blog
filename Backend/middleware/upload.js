const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination:('./upload/image'),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage});

module.exports = upload;

