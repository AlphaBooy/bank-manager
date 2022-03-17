let express = require('express');
let router = express.Router();

let depenses = require("../controllers/depenses.controller.js");

router.get('/', async function(req, res, next) {
    let depensesArray = await depenses.findAll();
    res.json(depensesArray);
});

router.get('/categories/year/:year', async function(req, res, next) {
    let year = req.params.year;
    let depensesCategorieArray = await depenses.findAllCategories(year);
    res.json(depensesCategorieArray[0]);
});

router.get('/categories/:id', async function(req, res, next) {
    let IDCategorie = req.params.id;
    let depensesCategorieArray = await depenses.findByCategories(IDCategorie);
    res.json(depensesCategorieArray[0]);
});

router.get('/mois/:year', async function(req, res, next) {
    let year = req.params.year
    let depensesMoisArray = await depenses.findAllMounth(year);
    res.json(depensesMoisArray[0]);
});

router.post('/',async function (req, res, next) {
    let montant = req.body.montant
    let date = req.body.date
    let IDBeneficiaire = req.body.IDBeneficiaire
    let IDCategorie = req.body.IDCategorie
    let Description = req.body.Description
    let Obligatoire = req.body.Obligatoire
    console.log(req.body)
    let data = await depenses.newDepense(montant, date, IDBeneficiaire, IDCategorie, Description, Obligatoire)
    res.send(data)
});

module.exports = router;
