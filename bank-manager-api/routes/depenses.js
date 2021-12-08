let express = require('express');
let router = express.Router();

let depenses = require("../controllers/depenses.controller.js");

router.get('/', async function(req, res, next) {
    let depensesArray = await depenses.findAll();
    res.json(depensesArray);
});

router.get('/categories', async function(req, res, next) {
    let depensesCategorieArray = await depenses.findAllCategories();
    res.json(depensesCategorieArray[0]);
});

router.get('/categories/:id', async function(req, res, next) {
    let IDCategorie = req.params.id;
    let depensesCategorieArray = await depenses.findByCategories(IDCategorie);
    res.json(depensesCategorieArray[0]);
});

router.get('/mois', async function(req, res, next) {
    let depensesMoisArray = await depenses.findAllMounth();
    res.json(depensesMoisArray[0]);
});

module.exports = router;
