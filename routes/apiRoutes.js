const Router = require('express').Router;
const db = require('../models');
const apiRoutes = Router();

apiRoutes.get('/getAllDisciplines', async (req, res) => {
    const disciplineList = await db.Discipline.findAll({});

    res.send(disciplineList);
});

apiRoutes.post('/addDiscipline', async (req, res) => {
    const dbDiscipline = await db.Discipline.create(req.body);

    res.json(dbDiscipline);
});

apiRoutes.get('/getAllPartners', async (req, res) => {
    const partnerList = await db.Partner.findAll({});
    // const partnerDisciplines = await db.Partner.findAll({
    //     attributes: [[
    //         db.sequelize.literal('DISTINCT `Projects->Discipline`.`field` AS `Projects.Discipline.field` FROM `Partners` AS `Partner` LEFT OUTER JOIN `Projects` AS `Projects` ON `Partner`.`id` = `Projects`.`PartnerId` LEFT OUTER JOIN `Disciplines` AS `Projects->Discipline` ON `Projects`.`DisciplineId` = `Projects->Discipline`.`id`'),
    //         'field'
    //     ]]
    // })

    const [partnerDisciplines, metadata] = await db.sequelize.query('SELECT DISTINCT `Partner`.`id`, `Projects->Discipline`.`field` AS `field` FROM `Partners` AS `Partner` LEFT OUTER JOIN `Projects` AS `Projects` ON `Partner`.`id` = `Projects`.`PartnerId` LEFT OUTER JOIN `Disciplines` AS `Projects->Discipline` ON `Projects`.`DisciplineId` = `Projects->Discipline`.`id`')

    // partnerList.map((partner) => {
    //     console.log("partner", partner);
    // })

    // console.log(partnerDisciplines);
    res.send({partnerList, partnerDisciplines});
});

apiRoutes.post('/addPartner', async (req, res) => {
    const dbPartner = await db.Partner.create(req.body);

    res.json(dbPartner);
});

module.exports = apiRoutes;