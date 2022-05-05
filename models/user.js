'use strict'
const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                len: [6]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [6]
            // }
        },
        rank: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user"
        }
    }, {
		timestamps: false
	});

    User.associate = function (models) {
        User.belongsTo(models.Partner, {});
    }

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.beforeUpdate(user => {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    User.beforeCreate(user => {
        console.log(user);
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    return User;
};