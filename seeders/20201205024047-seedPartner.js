'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
       await queryInterface.bulkInsert('Partners', [
           {
               name: 'Barry Huhn',
               email: 'Barry.huhn@gmail.com',
               phone: 1234567890,
               profilePic: 'barryHuhn'
           },
           {
               name: 'Daniel Moody-Huhn',
               email: 'danielphuhn@gmail.com',
               phone: 2345678901,
               profilePic: 'danielMoodyHuhn'
           }
       ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Partners', null, {});
    }
};
