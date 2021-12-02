const { sequelize } = require("./../models");
const db = require("./../models");
const Categories = db.categories;
const chalk = require('chalk');

// Create and Save a new Image
module.exports = {
    async findAll() {
        return Categories.findAll()
            .then(data => {
                console.log(chalk.green("Les catégories ont toutes été retournées avec succès !"));
                return data;
            })
            .catch(err => {
                console.log(chalk.red(err.message ||
                    "Une erreur inconnue est survenue. Veuillez réessayer ou contacter un administrateur si le problème persiste."));
            });
    }
}
