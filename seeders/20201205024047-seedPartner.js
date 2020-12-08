'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
       await queryInterface.bulkInsert('Partners', [
           {
               name: 'Barry Huhn',
               email: 'Barry.huhn@gmail.com',
               phone: 1234567890
           },
           {
               name: 'Daniel Moody-Huhn',
               email: 'danielphuhn@gmail.com',
               phone: 2345678901
           }
       ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Partners', null, {});
    }
};
