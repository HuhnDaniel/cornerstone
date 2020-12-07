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

    res.send(partnerList);
});

apiRoutes.post('/addPartner', async (req, res) => {
    const dbPartner = await db.Partner.create(req.body);

    const assignDiscipline = {
        PartnerId: dbPartner.id,
        DisciplineId: req.body.disciplines
    };
    const dbPartnerDiscipline = await db.PartnerDiscipline.create(assignDiscipline);

    res.json({ dbPartner, dbPartnerDiscipline });
});

apiRoutes.post('/assignDiscipline', async (req, res) => {
    const dbPartnerDiscipline = await db.PartnerDiscipline.create(req.body);

    res.json(dbPartnerDiscipline);
});

module.exports = apiRoutes;