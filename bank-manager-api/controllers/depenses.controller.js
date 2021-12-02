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
    }
}
