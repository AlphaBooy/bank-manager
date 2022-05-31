var express = require('express');
var router = express.Router();

let cryptos = require("../controllers/cryptos.controller.js");

router.get('/', async function(req, res, next) {
    let cryptoArray = await cryptos.findAll();
    res.json(cryptoArray);
});

/* POST revenus. */
router.post('/', function(req, res, next) {
    res.send("nothing yet");
});

module.exports = router;
