const { sequelize } = require("./../models");
const db = require("./../models");
const Beneficiaires = db.beneficiaires;
const chalk = require('chalk');

// Create and Save a new Image
module.exports = {
    async findAll() {
        return sequelize.query("SELECT * FROM beneficiaires ORDER BY nom")
            .then(data => {
                console.log(chalk.green("Les bénéficiaires ont tous été retournés avec succès !"));
                return data[0];
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async findAllWithTotal() {
        return sequelize.query("SELECT d.IDBeneficiaire, b.nom, SUM(d.montant) AS TOTAL FROM `depenses` d JOIN `beneficiaires` b ON d.IDBeneficiaire = b.ID GROUP BY d.IDBeneficiaire ORDER BY TOTAL DESC;")
            .then(data => {
                console.log(chalk.green("Les dépenses triées par bénéficiaire ont toutes été retournées avec succès !"));
                return data[0];
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
    },

    async newBeneficiaire(nomBeneficiaire) {
        return Beneficiaires.create({
            ID: null,
            nom: nomBeneficiaire
        })
        .then(data => {
            console.log(chalk.green("Le bénéficiaire a été créé avec succès !"));
            return data;
        })
        .catch(err => {
            console.log(chalk.red(err.message ||
                "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
        })
    }
}
