module.exports = (sequelize, Sequelize) => {
    return sequelize.define("crediteurs", {
            ID: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true
            },
            nom: {
                type: Sequelize.STRING(25)
            }
        },
        {
            timestamps: false
        });
};
