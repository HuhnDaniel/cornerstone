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
        path: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
		timestamps: false
	});

    Partner.associate = function (models) {
        Partner.hasOne(models.User, {});

        Partner.hasMany(models.Project, {
            // onDelete: 'cascade'
		});
    };

    return Partner;
};