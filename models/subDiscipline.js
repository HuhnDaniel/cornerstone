'use strict'

module.exports = function (sequelize, DataTypes) {
	const SubDiscipline = sequelize.define('SubDiscipline', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
        path: {
            type: DataTypes.STRING
        }
	}, {
		timestamps: false
	});

	SubDiscipline.associate = function (models) {
		SubDiscipline.belongsTo(models.Discipline, {});

		SubDiscipline.hasMany(models.Project, {
			// onDelete: 'cascade'
		});
	};

	return SubDiscipline;
}