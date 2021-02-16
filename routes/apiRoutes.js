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
        include: [
            {
                model: db.SubDiscipline,
                include: [
                    {
                        model: db.Project,
                        attributes: [
                            'id',
                            'image',
                            'name'
                        ]
                    }
                ]
            }
        ]
    });

    res.json(discipline);
});

apiRoutes.post('/addDiscipline', async (req, res) => {
    const dbDiscipline = await db.Discipline.create(req.body);

    res.json(dbDiscipline);
});

apiRoutes.get('/getAllPartners', async (req, res) => {
    const partnerList = await db.Partner.findAll({});

    res.json(partnerList);
});

apiRoutes.get('/getPartnerById/:partnerId', async (req, res) => {
    const partner = await db.Partner.findAll({
        where: {
            id: req.params.partnerId
        },
        include: [
            {
                model: db.Project,
                attributes: [
                    'id',
                    'image',
                    'name'
                ]
            }
        ]
    });

    res.json(partner);
});

apiRoutes.post('/addPartner', async (req, res) => {
    const dbPartner = await db.Partner.create(req.body);

    res.json(dbPartner);
});

apiRoutes.get('/getProjectById/:projId', async (req, res) => {
    const project = await db.Project.findAll({
        where: {
            id: req.params.projId
        },
        include: [
            {
                model: db.Partner,
                attributes: [
                    'id',
                    'name'
                ]
            }
        ]
    });

    res.json(project);
});

module.exports = apiRoutes;