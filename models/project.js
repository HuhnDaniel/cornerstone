'use strict'

module.exports = function (sequelize, DataTypes) {
    const Project = sequelize.define('Project', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
		timestamps: false
	});

    // Project.associate = function (models) {
    //     Project.belongsTo(models.Partner, {});

    //     Project.belongsTo(models.Discipline, {});
    // };

    return Project;
};