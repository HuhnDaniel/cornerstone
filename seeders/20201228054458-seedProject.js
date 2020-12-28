'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Projects', [
            {
                name: 'Tampa Airport Main Terminal Curbside Expansion',
                overview: 'This project is a compilation of several smaller projects, to be implemented over a multi-year timeframe. The centerpiece of the airport enhancements is the addition of 2 new curbside vertical circulation buildings (VCB’s) allowing more drop-off/pick-up lanes to reduce traffic congestion. Supporting these improvements are projects that also include: a new Central Utility Plan (CUP) and Electrical Services Building (ESB); a relocated Loading Dock; relocated Police and Maintenance offices; and a new shuttle train station that will serve a future new international arrivals terminal.',
                timeframe: 'CUP – June 2021; Blue VCB – Dec. 2021; Dock/Police &amp; Maint. – TBD 2022; Red VCB - TBD 2023.',
                company: 'HNTB',
                role: 'Design-Build Prime - Hensel Phelps',
                PartnerId: 1,
                DisciplineId: 1
            },
            {
                name: 'Cornerstone Arts and Crafts LLC',
                overview: 'Cornerstone Art and Craft LLC is a company that strives to connect people who create with those who need things created.  Partners of the company have personal profiles to which their projects and disciplines can be added, and potential employers can search to find the perfect candidate for the project they need completed. ',
                timeframe: 'Start: November 2020; Estimated Launch: January 2021',
                company: 'Cornerstone A&amp;C LLC: Contracted',
                role: 'Full Stack Website Developer',
                PartnerId: 2,
                DisciplineId: 5
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Project', null, {});
    }
};
