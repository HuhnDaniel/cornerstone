'use strict'

module.exports = function (sequelize, DataTypes) {
    const Discipline = sequelize.define('Discipline', {
        field: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING(2048)
        },
        artistName: {
            type: DataTypes.STRING
        },
        artistCredit: {
            type: DataTypes.STRING(1024),
            allowNull: true
        }
    }, {
		timestamps: false
	});

    Discipline.associate = function (models) {
        Discipline.hasMany(models.SubDiscipline, {
            onDelete: 'cascade'
		});
    };

    return Discipline;
};