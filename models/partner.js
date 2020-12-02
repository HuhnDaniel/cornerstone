'use strict'

module.exports = function (sequelize, DataTypes) {
    const Partner = sequelize.define('Partner', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                len: [6]
            }
        }
    });

    Partner.associate = function (models) {
        Partner.hasMany(models.Project, {
            onDelete: 'cascade'
        });
    }

    return Partner;
};