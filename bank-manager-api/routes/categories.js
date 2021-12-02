var express = require('express');
var router = express.Router();

let categories = require("../controllers/categories.controller.js");

router.get('/', async function(req, res, next) {
    let categoriesArray = await categories.findAll();
    res.json(categoriesArray);
});

/* POST revenus. */
router.post('/', function(req, res, next) {
    res.send("nothing yet");
});

module.exports = router;
