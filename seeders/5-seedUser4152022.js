'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [
            {
                name: 'Daniel Moody-Huhn',
                path: 'daniel-moody-huhn',
                email: 'danielphuhn@gmail.com',
                password: bcrypt.hashSync('password', bcrypt.genSaltSync(10), null),
                rank: 'admin',
                PartnerId: 2
            }, {
                name: 'Barry Huhn',
                path: 'barry-huhn',
                email: 'barry.huhn@gmail.com',
                password: bcrypt.hashSync('password', bcrypt.genSaltSync(10), null),
                rank: 'partner',
                PartnerId: 1
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
