module.exports = (sequelize, Sequelize) => {
    return sequelize.define("revenus", {
            ID: {
                type: Sequelize.INTEGER(25),
                autoIncrement: true,
                primaryKey: true
            },
            montant: {
                type: Sequelize.DOUBLE(10,2)
            },
            Date: {
                type: Sequelize.DATE
            },
            IDCrediteur: {
                type: Sequelize.INTEGER(10)
            },
            IDCategorie: {
                type: Sequelize.INTEGER(10)
            },
            Description: {
                type: Sequelize.TEXT
            }
        },
        {
            timestamps: false
        });
};
