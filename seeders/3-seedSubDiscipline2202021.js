'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('SubDisciplines', [
			{
				name: 'Aviation',
                path: 'aviation',
				DisciplineId: 1
			},
			{
				name: 'Collegiate Sports',
                path: 'collegiate-sports',
				DisciplineId: 1
			},
			{
				name: 'Commercial / Mixed Use',
                path: 'commercial-mixed-use',
				DisciplineId: 1
			},
			{
				name: 'Government / Institutional',
                path: 'government-institutional',
				DisciplineId: 1
			},
			{
				name: 'International Sports',
                path: 'international-sports',
				DisciplineId: 1
			},
			{
				name: 'Master Planning / Urban Design',
                path: 'master-planning-urban-design',
				DisciplineId: 1
			},
			{
				name: 'Professional Sports / Civic',
                path: 'professional-sports-civic',
				DisciplineId: 1
			},
			{
				name: 'Residential',
                path: 'residential',
				DisciplineId: 1
			},
			{
				name: 'Company Website',
                path: 'company-website',
				DisciplineId: 5
			},
			{
				name: 'Personal Website',
                path: 'personal-website',
				DisciplineId: 5
			}
		])
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('SubDisciplines', null, {});
	}
};
