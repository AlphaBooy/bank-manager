module.exports = (sequelize, Sequelize) => {
    return sequelize.define("beneficiaires", {
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
