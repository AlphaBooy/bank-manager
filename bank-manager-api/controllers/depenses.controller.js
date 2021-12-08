const { sequelize } = require("./../models");
const db = require("./../models");
const Depenses = db.depenses;
const chalk = require('chalk');

module.exports = {
    async findAll() {
        return Depenses.findAll()
            .then(data => {
                console.log(chalk.green("Les dépenses ont toutes été retournées avec succès !"));
                return data;
            })
            .catch(err => {
                    console.log(chalk.red(err.message ||
                        "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async findAllCategories() {
        return sequelize.query("SELECT categories.ID, SUM(depenses.montant) AS TOTAL, categories.nom FROM depenses JOIN categories ON depenses.IDCategorie = categories.ID GROUP BY depenses.IDCategorie;")
            .then(data => {
                console.log(chalk.green("Les dépenses ont toutes été retournées avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async findByCategories(IDCategorie) {
        return sequelize.query("SELECT * FROM depenses WHERE depenses.IDCategorie = " + IDCategorie)
            .then(data => {
                console.log(chalk.green("Les dépenses de catégorie : " + IDCategorie + " ont toutes été retournées avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async findAllMounth() {
        return sequelize.query("SELECT SUM(depenses.montant) AS TOTAL, MONTH(depenses.Date) AS MOIS FROM depenses GROUP BY MONTH(depenses.Date);")
            .then(data => {
                console.log(chalk.green("Les dépenses ont toutes été retournées avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    }
}
