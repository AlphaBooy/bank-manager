var express = require('express');
var router = express.Router();

let beneficiaires = require("../controllers/beneficiaires.controller.js");

router.get('/', async function(req, res, next) {
    let beneficiairesArray = await beneficiaires.findAll();
    res.json(beneficiairesArray);
});

/* POST revenus. */
router.post('/', function(req, res, next) {
    res.send("nothing yet");
});

module.exports = router;
