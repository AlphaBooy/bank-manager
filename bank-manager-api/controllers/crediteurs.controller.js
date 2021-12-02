const { sequelize } = require("./../models");
const db = require("./../models");
const Crediteurs = db.crediteurs;
const chalk = require('chalk');

module.exports = {
    async findAll() {
        return Crediteurs.findAll()
            .then(data => {
                console.log(chalk.green("Les créditeurs ont tous été retournés avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    }
}
