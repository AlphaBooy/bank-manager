let express = require('express');
let router = express.Router();

let depenses = require("../controllers/depenses.controller.js");

router.get('/', async function(req, res, next) {
    let depensesArray = await depenses.findAll();
    res.json(depensesArray);
});

module.exports = router;
