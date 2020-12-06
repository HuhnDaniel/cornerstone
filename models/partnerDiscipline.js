'use strict';

module.exports = function (sequelize, DataTypes) {
    const PartnerDiscipline = sequelize.define('PartnerDiscipline', {});

    PartnerDiscipline.associate = function (models) {
        PartnerDiscipline.belongsTo(models.Partner, {});
            
        PartnerDiscipline.belongsTo(models.Discipline, {});
    };

    return PartnerDiscipline;
}