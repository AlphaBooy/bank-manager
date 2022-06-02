var express = require('express');
var router = express.Router();

let cryptos = require("../controllers/cryptos.controller.js");

router.get('/', async function(req, res, next) {
    let cryptoArray = await cryptos.findAll();
    res.json(cryptoArray);
});

router.get('/getTotalEuro', async function(req, res, next) {
    let eurTotal = await cryptos.getTotalEuro();
    res.json(eurTotal);
});

router.get('/getTotalCrypto/:crypto', async function(req, res, next) {
    let crypto = req.params.crypto;
    let cryptoTotal = 0;

    /* On cherche la cryptomonnaie par son nom et par son acronyme pour éviter les erreurs de saisies */

    let acroExists = await cryptos.doAcroCryptoExists(crypto);
    let nomExists = await cryptos.doNomCryptoExists(crypto);

    if (acroExists[0]["result"] === 1) {
        cryptoTotal = await cryptos.getTotalCrypto(crypto);
    } else if (nomExists[0]["result"] === 1) {
        cryptoTotal = await cryptos.getTotalCryptoNom(crypto);
    }
    res.json(cryptoTotal);
});

/* POST crypto. */
router.post('/', function(req, res, next) {
    res.send("nothing yet");
});

module.exports = router;
