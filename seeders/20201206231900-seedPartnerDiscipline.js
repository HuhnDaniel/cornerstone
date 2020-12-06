'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
       await queryInterface.bulkInsert('PartnerDisciplines', [
           {
               PartnerId: 1,
               DisciplineId: 1,
               createdAt: new Date(),
               updatedAt: new Date()
           },
           {
               PartnerId: 2,
               DisciplineId: 5,
               createdAt: new Date(),
               updatedAt: new Date()
           }
       ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PartnerDisciplines', null, {});
    }
};
