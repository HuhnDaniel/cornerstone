'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Partners', [
            {
                name: 'Barry Huhn',
                email: 'Barry.huhn@gmail.com',
                about: 'about Barry Huhn',
                profilePic: 'barryHuhn'
            },
            {
                name: 'Daniel Moody-Huhn',
                email: 'danielphuhn@gmail.com',
                about: 'Full-Stack Web Developer looking to build unique experiences to make web user experience more interactive and engaging.  Currently studying with the KU Coding Bootcamp to enhance my skills in JavaScript, CSS, HTML, MERN, SQL and more.  Strong leadership, teamwork, and communication skills from previous experience training over one hundred new-hires at FedEx Ground.  A fast learner with a strong sense of initiative, who enjoys exploring new technologies and implementing them in projects when applicable',
                profilePic: 'danielMoodyHuhn'
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Partners', null, {});
    }
};
