var express = require('express');
var router = express.Router();

let revenus = require("../controllers/revenus.controller.js");
const depenses = require("../controllers/depenses.controller");

router.get('/', async function(req, res, next) {
    let revenusArray = await revenus.findAll();
    res.json(revenusArray);
});

router.get('/mois/:year', async function(req, res, next) {
    let year = req.params.year
    let revenusMoisArray = await revenus.findAllMounth(year);
    res.json(revenusMoisArray[0]);
});

/* POST revenus. */
router.post('/', function(req, res, next) {
    res.send("nothing yet");
});

module.exports = router;
