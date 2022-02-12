const Router = require('express').Router;
const db = require('../models');
const apiRoutes = Router();

apiRoutes.get('/getDisciplineNames', async (req,res) => {
    const disciplineList = await db.Discipline.findAll({
        attributes: [
            'name'
        ]
    });

    res.json(disciplineList);
})

apiRoutes.get('/getAllDisciplines', async (req, res) => {
    const disciplineList = await db.Discipline.findAll({});

    res.send(disciplineList);
});

apiRoutes.get('/getDisciplineById/', (req, res) => {
    res.end();
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
                            'path',
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

apiRoutes.get('/getSubDisciplineNames', async (req, res) => {
    const subDisciplineList = await db.SubDiscipline.findAll({
        attributes: [
            'name'
        ]
    });

    res.json(subDisciplineList);
});

apiRoutes.get('/getPartnerNames', async (req, res) => {
    const partnerList = await db.Partner.findAll({
        attributes: [
            'name'
        ]
    });

    res.json(partnerList);
});

apiRoutes.get('/getAllPartners', async (req, res) => {
    const partnerList = await db.Partner.findAll({});

    res.json(partnerList);
});

apiRoutes.get('/getPartnerById/', (req, res) => {
    res.end();
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
                    'path',
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

apiRoutes.get('/getProjectNames', async (req, res) => {
    const projectList = await db.Project.findAll({
        attributes: [
            'name'
        ]
    });

    res.json(projectList);
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