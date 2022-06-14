module.exports = (sequelize, Sequelize) => {
    return sequelize.define("categories", {
            ID: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true
            },
            nom: {
                type: Sequelize.STRING(25)
            },
            Type: {
                type: Sequelize.ENUM('depense','revenu')
            },
            Icon: {
                type: Sequelize.STRING(25)
            }
        },
        {
            timestamps: false
        });
};
