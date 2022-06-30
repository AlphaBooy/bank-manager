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

    async findAllCategories(year) {
        return sequelize.query("SELECT categories.ID, SUM(depenses.montant) AS TOTAL, categories.nom FROM depenses JOIN categories ON depenses.IDCategorie = categories.ID AND depenses.Date LIKE '" + year + "%' GROUP BY depenses.IDCategorie;")
            .then(data => {
                console.log(chalk.green("Les dépenses ont toutes été retournées avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async findByCategories(IDCategorie, year) {
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

    async findAllMounth(year) {
        return sequelize.query("SELECT SUM(depenses.montant) AS TOTAL, MONTH(depenses.Date) AS MOIS FROM depenses WHERE depenses.Date LIKE '" + year + "%' GROUP BY MONTH(depenses.Date);")
            .then(data => {
                console.log(chalk.green("Les dépenses ont toutes été retournées avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async newDepense(montant, date, IDBeneficiaire, IDCategorie, Description, Obligatoire) {
            return Depenses.create({
                ID: null,
                montant: montant,
                Date: date,
                IDBeneficiaire: IDBeneficiaire,
                IDCategorie: IDCategorie,
                Description: Description,
                Obligatoire: Obligatoire
            })
            .then(data => {
                console.log(chalk.green("La dépense a été créée avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    },

    async getAverages(IdCategorie) {
        let AVGRESULT = 0;
        let sumsByMonth = await sequelize.query("SELECT date_format(Date, '%M %Y') AS mois, SUM(montant) AS SOMMEDEPENSES FROM depenses WHERE IDCategorie = " + IdCategorie + " GROUP BY date_format(Date, '%M %Y')");
        for (let i = 0; i < sumsByMonth[0].length; i++) {
            AVGRESULT += sumsByMonth[0][i]["SOMMEDEPENSES"]
        }
        return AVGRESULT / sumsByMonth[0].length;
    }
}
