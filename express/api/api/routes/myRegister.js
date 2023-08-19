const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const marks = req.body.marks;

    console.log(name)
    console.log(email)
    console.log(marks)
})

module.exports = router;