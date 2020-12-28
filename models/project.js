'use strict'

module.exports = function (sequelize, DataTypes) {
    const Project = sequelize.define('Project', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        overview: {
            type: DataTypes.STRING(1024)
        },
        timeframe: {
            type: DataTypes.STRING
        },
        company: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        }
    }, {
		timestamps: false
	});

    return Project;
};