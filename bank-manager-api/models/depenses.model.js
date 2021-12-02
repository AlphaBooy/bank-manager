module.exports = (sequelize, Sequelize) => {
    return sequelize.define("depenses", {
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
            IDBeneficiaire: {
                type: Sequelize.INTEGER(10)
            },
            IDCategorie: {
                type: Sequelize.INTEGER(10)
            },
            Description: {
                type: Sequelize.TEXT
            },
            Obligatoire: {
                type: Sequelize.BOOLEAN
            }
        },
        {
            timestamps: false
        });
};
