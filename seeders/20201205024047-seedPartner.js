'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Partners', [
            {
                name: 'Barry Huhn',
                email: 'Barry.huhn@gmail.com',
                phone: 1234567890,
                profilePic: 'barryHuhn',
                primaryField: 'Architectural Design and Planning'
            },
            {
                name: 'Daniel Moody-Huhn',
                email: 'danielphuhn@gmail.com',
                phone: 2345678901,
                profilePic: 'danielMoodyHuhn',
                primaryField: 'Web Development'
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Partners', null, {});
    }
};
