var express = require('express');
var router = express.Router();

let beneficiaires = require("../controllers/beneficiaires.controller.js");
const depenses = require("../controllers/depenses.controller");

router.get('/', async function(req, res, next) {
    let beneficiairesArray = await beneficiaires.findAll();
    res.json(beneficiairesArray);
});

router.get('/getTotal', async function(req, res, next) {
    let beneficiairesArray = await beneficiaires.findAllWithTotal();
    res.json(beneficiairesArray);
});

router.get('/:id', async function(req, res, next) {
    let IDBeneficiaire = req.params.id;
    let beneficiaire = await beneficiaires.findByPk(IDBeneficiaire);
    res.json(beneficiaire);
});

router.post('/', async function(req, res, next) {
    let nomBeneficiaire = req.body.nomBeneficiaire
    let data = await beneficiaires.newBeneficiaire(nomBeneficiaire)
    res.send(data)
});

module.exports = router;
