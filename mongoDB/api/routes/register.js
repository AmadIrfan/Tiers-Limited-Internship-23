const express = require('express');
const router = express.Router();
const multer = require('multer');
const { connection } = require('../sql/sql');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }

});

let upload = multer({ storage })
let multi = upload.fields([{ name: 'file' }, { name: 'file1' }])
// upload.single('file')

router.post('/', multi, (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let file = req.files.file[0].filename;
    let file1 = req.files.file1[0].filename;
    let data = {
        name: name,
        email: email,
        password: password,
        // file: file,
        // file1: file1,
    }
    connection.query('INSERT into register set ?', data, (err, res) => {
        if (err) throw err.message
        else {
            console.log('data stored');
            res.redirect('http://localhost:3000/')
        }
    })
})

module.exports = router;