'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Disciplines', [
            {
                field: 'Architecture',
                image: 'architecture',
                artistName: null,
                artistCredit: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                field: 'Creative Writing',
                image: 'creativeWriting',
                artistName: 'aaronburden',
                artistCredit: 'https://unsplash.com/@aaronburden?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                field: 'Graphic Design',
                image: 'graphicDesign',
                artistName: 'themephotos',
                artistCredit: 'https://unsplash.com/@themephotos?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                field: 'Illustration',
                image: 'illustration',
                artistName: 'kellysikkema',
                artistCredit: 'https://unsplash.com/@kellysikkema?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                field: 'Web Development',
                image: 'webDevelopment',
                artistName: 'clemhlrdt',
                artistCredit: 'https://unsplash.com/@clemhlrdt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Disciplines', null, {});
    }
};