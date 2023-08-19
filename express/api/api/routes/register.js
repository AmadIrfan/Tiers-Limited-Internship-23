const express = require("express");
const router = express.Router();
const multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})

var upload = multer({ storage });
var multi = upload.fields([{ name: 'profileImage' }, { name: 'images' }])
router.post('/', multi, (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const marks = req.body.marks;
    const file = req.files.profileImage[0].filename;
    const file1 = req.files.images[0].filename;
    console.log(name);
    console.log(marks);
    console.log(email);
    console.log(file);
    console.log(file1);
})

module.exports = router;