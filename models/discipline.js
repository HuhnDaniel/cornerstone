'use strict'

module.exports = function (sequelize, DataTypes) {
    const Discipline = sequelize.define('Discipline', {
        field: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        },
        artistName: {
            type: DataTypes.STRING
        },
        artistCredit: {
            type: DataTypes.STRING(1024),
            allowNull: true
        }
    });

    Discipline.associate = function (models) {
        Discipline.hasMany(models.Project, {
            onDelete: 'cascade'
        });
    }

    return Discipline;
};