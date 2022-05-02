'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Partners', [
            {
                name: 'Barry Huhn',
                email: 'Barry.huhn@gmail.com',
                about: 'Barry is a collaborative architect and team leader, helping clients bring their vision into built reality. Mr. Huhn has extensive experience in architecture and planning, having led multi-disciplinary teams to successfully complete numerous public assembly, sports, and commercial architecture projects. See examples of experience in the project thumbnails on this page. Bringing a balance of creative thinking with technical expertise, Barry can work with your team from Master Planning through Construction Administration to provide services and strategies to accomplish project success. Mr. Huhn founded Cornerstone Art & Craft Collaborative to create a platform for various creative designers and clients to work together. If you have a project you would like help on, or would like to join our collaboration team, please contact us!',
                path: 'barry-huhn',
                image: 'barry-huhn'
            },
            {
                name: 'Daniel Moody-Huhn',
                email: 'danielphuhn@gmail.com',
                about: 'Full-Stack Web Developer looking to build unique experiences to make web user experience more interactive and engaging.  Currently studying with the KU Coding Bootcamp to enhance my skills in JavaScript, CSS, HTML, MERN, SQL and more.  Strong leadership, teamwork, and communication skills from previous experience training over one hundred new-hires at FedEx Ground.  A fast learner with a strong sense of initiative, who enjoys exploring new technologies and implementing them in projects when applicable',
                path: 'daniel-moody-huhn',
                image: 'daniel-moody-huhn'
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Partners', null, {});
    }
};
