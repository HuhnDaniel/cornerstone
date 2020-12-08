'use strict';

module.exports = function (sequelize, DataTypes) {
    const PartnerDiscipline = sequelize.define('PartnerDiscipline', {}, {
		timestamps: false
	});

    return PartnerDiscipline;
}