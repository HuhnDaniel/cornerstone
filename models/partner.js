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
        },
        about: {
            type: DataTypes.STRING(1024)
        },
        profilePic: {
            type: DataTypes.STRING,
            defaultValue: 'defaultUser'
        }
    }, {
		timestamps: false
	});

    Partner.associate = function (models) {
        Partner.hasMany(models.Project, {
            onDelete: 'cascade'
		});
    };

    return Partner;
};