const { sequelize } = require("./../models");
const db = require("./../models");
const Revenus = db.revenus;
const chalk = require('chalk');

module.exports = {
    async findAll() {
        return Revenus.findAll()
            .then(data => {
                console.log(chalk.green("Les revenus ont tous été retournés avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async findAllMounth(year) {
        return sequelize.query("SELECT SUM(revenus.montant) AS TOTAL, MONTH(revenus.Date) AS MOIS FROM revenus WHERE revenus.Date LIKE '" + year + "%' GROUP BY MONTH(revenus.Date);")
            .then(data => {
                console.log(chalk.green("Les revenus ont toutes été retournées avec succès !"));
                console.log(data)
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    }
}
