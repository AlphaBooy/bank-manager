module.exports = (sequelize, Sequelize) => {
    return sequelize.define("cryptos", {
            ID: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true
            },
            nomCrypto: {
                type: Sequelize.STRING(25)
            },
            acronymeCrypto: {
                type: Sequelize.STRING(5)
            },
            montantEUR: {
                type: Sequelize.DOUBLE(10,2)
            },
            montantCrypto: {
                type: Sequelize.DOUBLE(10,8)
            },
            tauxEUR: {
                type: Sequelize.DOUBLE(10,8)
            },
            type: {
                type: Sequelize.ENUM('depense','revenu')
            },
            sousType: {
                type: Sequelize.STRING(25)
            },
            date: {
                type: Sequelize.DATE
            }
        },
        {
            timestamps: false
        });
};
