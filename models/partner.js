'use strict'

module.exports = function (sequelize, DataTypes) {
    const Partner = sequelize.define('Partner', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Partner.associate = function (models) {
        Partner.hasMany(models.Project, {
            onDelete: 'cascade'
        });
    }

    return Partner;
};