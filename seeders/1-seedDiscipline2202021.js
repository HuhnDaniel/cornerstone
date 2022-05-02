'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Disciplines', [
            {
                name: 'Architectural Design and Planning',
                path: 'architectural-design-and-planning',
                image: 'architectural-design-and-planning',
                description: `With a wide range of project type experience, our architecture partners can assist clients with multiple consulting services on a variety of building types.  Please explore past project examples shown on this page to find out more about the scope and scale of projects we could assist you with, from large commercial work to single-family residential projects.`,
                artistName: null,
                artistCredit: null
            },
            {
                name: 'Creative Writing',
                path: 'creative-writing',
                image: 'creative-writing',
                description: '',
                artistName: 'aaronburden',
                artistCredit: 'https://unsplash.com/@aaronburden?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            },
            {
                name: 'Graphic Design',
                path: 'graphic-design',
                image: 'graphic-design',
                description: '',
                artistName: 'themephotos',
                artistCredit: 'https://unsplash.com/@themephotos?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            },
            {
                name: 'Illustration',
                path: 'illustration',
                image: 'illustration',
                description: '',
                artistName: 'kellysikkema',
                artistCredit: 'https://unsplash.com/@kellysikkema?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            },
            {
                name: 'Web Development',
                path: 'web-development',
                image: 'web-development',
                description: 'Our web development partners specialize on projects from small personal websites to scalable enterprise projects.  Please view the examples on this page to find what level of development you require.',
                artistName: 'clemhlrdt',
                artistCredit: 'https://unsplash.com/@clemhlrdt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            },
            {
                name: 'Real Estate Development Analysis',
                path: 'real-estate-development-analysis',
                image: 'real-estate-development-analysis',
                description: '',
                artistName: 'Nicholas Gonzalez',
                artistCredit: 'https://unsplash.com/@mrngonzalez?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Disciplines', null, {});
    }
};
