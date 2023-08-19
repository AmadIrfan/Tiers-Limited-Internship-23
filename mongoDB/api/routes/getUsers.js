const express = require('express');
const router = express.Router();
const { connection } = require('../sql/sql');
router.get('/', (req, response) => {
    connection.query('SELECT * from register ', (err, res) => {
        if (err) throw err.message
        else {
            response.send(res)
        }
    })
})

module.exports=router;