'use strict'

module.exports = function (sequelize, DataTypes) {
    const Discipline = sequelize.define('Discipline', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Discipline.associate = function (models) {
        Discipline.hasMany(models.Project, {
            onDelete: 'cascade'
        });
    }

    return Discipline;
};