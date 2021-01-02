'use strict'

module.exports = function (sequelize, DataTypes) {
    const Project = sequelize.define('Project', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING
        },
        client: {
            type: DataTypes.STRING
        },
        overview: {
            type: DataTypes.STRING(1024)
        },
        timeframe: {
            type: DataTypes.STRING
        },
        awards: {
            type: DataTypes.STRING
        },
        company: {
            type: DataTypes.STRING
        },
        link: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        },
        subDiscipline: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });

    Project.associate = function (models) {
        Project.belongsTo(models.Partner, {});

        Project.belongsTo(models.Discipline, {});
    };

    return Project;
};