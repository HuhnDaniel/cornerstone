'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('SubDisciplines', [
			{
				name: 'Aviation',
				DisciplineId: 1
			},
			{
				name: 'Collegiate Sports',
				DisciplineId: 1
			},
			{
				name: 'Commercial / Mixed Use',
				DisciplineId: 1
			},
			{
				name: 'Government / Institutional',
				DisciplineId: 1
			},
			{
				name: 'International Sports',
				DisciplineId: 1
			},
			{
				name: 'Master Planning / Urban Design',
				DisciplineId: 1
			},
			{
				name: 'Professional Sports / Civic',
				DisciplineId: 1
			},
			{
				name: 'Residential',
				DisciplineId: 1
			},
			{
				name: 'Company Website',
				DisciplineId: 5
			},
			{
				name: 'Personal Website',
				DisciplineId: 5
			}
		])
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('SubDisciplines', null, {});
	}
};
