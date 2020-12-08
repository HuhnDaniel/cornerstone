'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
       await queryInterface.bulkInsert('PartnerDisciplines', [
           {
               PartnerId: 1,
               DisciplineId: 1
           },
           {
               PartnerId: 2,
               DisciplineId: 5
           }
       ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PartnerDisciplines', null, {});
    }
};
