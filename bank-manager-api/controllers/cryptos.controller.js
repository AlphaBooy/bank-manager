const { sequelize } = require("./../models");
const db = require("./../models");
const Crypto = db.crypto;
const chalk = require('chalk');

module.exports = {
    async findAll() {
        return Crypto.findAll()
            .then(data => {
                console.log(chalk.green("Les transactions de cryptomonnaies ont tous été retournés avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async getTotalEuro() {
        return sequelize.query("SELECT SUM(montantEUR) AS TOTAL FROM cryptos")
            .then(data => {
                console.log(chalk.green("Le total investit en euro a été retourné avec succès !"));
                return data[0];
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async getTotalCrypto(acronyme) {
        return sequelize.query("SELECT(IFNULL((SELECT SUM(montantCrypto)FROM cryptos WHERE acronymeCrypto = '" + acronyme + "' AND type ='revenu'),0))-(IFNULL((SELECT SUM(montantCrypto)FROM cryptos WHERE acronymeCrypto = '" + acronyme + "' AND type ='depense'),0))AS TOTAL")
            .then(data => {
                console.log(chalk.green("Le total investit en " + acronyme + " a été retourné avec succès !"));
                return data[0];
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async getTotalCryptoNom(nomCrypto) {
        return sequelize.query("SELECT(IFNULL((SELECT SUM(montantCrypto)FROM cryptos WHERE nomCrypto = '" + nomCrypto + "' AND type ='revenu'),0))-(IFNULL((SELECT SUM(montantCrypto)FROM cryptos WHERE nomCrypto = '" + nomCrypto + "' AND type ='depense'),0))AS TOTAL")
            .then(data => {
                console.log(chalk.green("Le total investit en " + nomCrypto + " a été retourné avec succès !"));
                return data[0];
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async doAcroCryptoExists(acronyme) {
        return sequelize.query("SELECT IF(EXISTS(SELECT * FROM cryptos WHERE acronymeCrypto = '" + acronyme + "'),1,0) AS result")
            .then(data => {
                console.log(chalk.green("Le total investit en " + acronyme + " a été retourné avec succès !"));
                return data[0];
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async doNomCryptoExists(nomCrypto) {
        return sequelize.query("SELECT IF(EXISTS(SELECT * FROM cryptos WHERE nomCrypto = '" + nomCrypto + "'),1,0) AS result")
            .then(data => {
                console.log(chalk.green("Le total investit en " + nomCrypto + " a été retourné avec succès !"));
                return data[0];
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    }
}
