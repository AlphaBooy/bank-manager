var express = require('express');
var router = express.Router();

let revenus = require("../controllers/revenus.controller.js");

router.get('/', async function(req, res, next) {
    let revenusArray = await revenus.findAll();
    res.json(revenusArray);
});

/* POST revenus. */
router.post('/', function(req, res, next) {
    res.send("nothing yet");
});

module.exports = router;
