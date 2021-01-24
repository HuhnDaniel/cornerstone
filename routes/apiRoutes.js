const Router = require('express').Router;
const db = require('../models');
const apiRoutes = Router();

apiRoutes.get('/getAllDisciplines', async (req, res) => {
    const disciplineList = await db.Discipline.findAll({});

    res.send(disciplineList);
});

apiRoutes.get('/getDisciplineById/:disciplineId', async (req, res) => {
    const discipline = await db.Discipline.findAll({
        where: {
            id: req.params.disciplineId
        },
        include : [
            {
                model: db.SubDiscipline,
                include : [
                    {
                        model: db.Project
                    }
                ]
            }
        ]
    });

    res.json(discipline);
})

apiRoutes.post('/addDiscipline', async (req, res) => {
    const dbDiscipline = await db.Discipline.create(req.body);

    res.json(dbDiscipline);
});

apiRoutes.get('/getAllPartners', async (req, res) => {
    const partnerList = await db.Partner.findAll({});

    const [partnerDisciplines, metadata] = await db.sequelize.query('SELECT DISTINCT `Partner`.`id`, `Projects->Discipline`.`field` AS `field` FROM `Partners` AS `Partner` LEFT OUTER JOIN `Projects` AS `Projects` ON `Partner`.`id` = `Projects`.`PartnerId` LEFT OUTER JOIN `Disciplines` AS `Projects->Discipline` ON `Projects`.`DisciplineId` = `Projects->Discipline`.`id`')

    res.send({partnerList, partnerDisciplines});
});

apiRoutes.post('/addPartner', async (req, res) => {
    const dbPartner = await db.Partner.create(req.body);

    res.json(dbPartner);
});

module.exports = apiRoutes;