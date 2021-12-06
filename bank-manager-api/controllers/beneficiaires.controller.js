const { sequelize } = require("./../models");
const db = require("./../models");
const Beneficiaires = db.beneficiaires;
const chalk = require('chalk');

// Create and Save a new Image
module.exports = {
    async findAll() {
        return Beneficiaires.findAll()
            .then(data => {
                console.log(chalk.green("Les bénéficiaires ont tous été retournés avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async findByPk(IDBeneficiaire) {
        return Beneficiaires.findByPk(IDBeneficiaire)
            .then(data => {
                console.log(chalk.green("Le bénéficiaire avec l'ID : " + IDBeneficiaire + " à été retourné avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    }
}
