var express = require('express');
var router = express.Router();

let crediteurs = require("../controllers/crediteurs.controller.js");

router.get('/', async function(req, res, next) {
    let crediteursArray = await crediteurs.findAll();
    res.json(crediteursArray);
});

/* POST revenus. */
router.post('/', function(req, res, next) {
    res.send("nothing yet");
});

module.exports = router;
