const Router = require('express').Router;
const db = require('../models');
const apiRoutes = Router();

apiRoutes.get('/getDisciplineItemNames', async (req,res) => {
    const disciplineList = await db.Discipline.findAll({
        attributes: [
            'id',
            'name',
            'path'
        ]
    });

    res.json(disciplineList);
})

apiRoutes.get('/getAllDisciplines', async (req, res) => {
    const disciplineList = await db.Discipline.findAll({});

    res.send(disciplineList);
});

apiRoutes.get('/getDisciplineByPath/', (req, res) => {
    res.end();
});
apiRoutes.get('/getDisciplineByPath/:path', async (req, res) => {
    const discipline = await db.Discipline.findAll({
        where: {
            path: req.params.path
        }
    });
    
    res.json(discipline);
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

apiRoutes.put('/updateDisciplineByPath/', (req, res) => {
    res.end();
});
apiRoutes.put('/updateDisciplineById/:disciplineId', async (req, res) => {
    const discipline = await db.Discipline.update(req.body, {
        where: {
            id: req.params.disciplineId
        }
    });

    res.json(discipline);
});

apiRoutes.get('/getSubDisciplineItemNames', async (req, res) => {
    const subDisciplineList = await db.SubDiscipline.findAll({
        attributes: [
            'id',
            'name',
            'path'
        ]
    });

    res.json(subDisciplineList);
});

apiRoutes.get('/getSubDisciplineByPath/', (req, res) => {
    res.end();
});
apiRoutes.get('/getSubDisciplineByPath/:path', async (req, res) => {
    const subDiscipline = await db.SubDiscipline.findAll({
        where: {
            path: req.params.path
        }
    });
    
    res.json(subDiscipline);
});

apiRoutes.get('/getPartnerItemNames', async (req, res) => {
    const partnerList = await db.Partner.findAll({
        attributes: [
            'id',
            'name',
            'path'
        ]
    });

    res.json(partnerList);
});

apiRoutes.get('/getAllPartners', async (req, res) => {
    const partnerList = await db.Partner.findAll({});

    res.json(partnerList);
});

apiRoutes.get('/getPartnerByPath/', (req, res) => {
    res.end();
});
apiRoutes.get('/getPartnerByPath/:path', async (req, res) => {
    const partner = await db.Partner.findAll({
        where: {
            path: req.params.path
        }
    });
    
    res.json(partner);
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

apiRoutes.get('/getProjectItemNames', async (req, res) => {
    const projectList = await db.Project.findAll({
        attributes: [
            'id',
            'name',
            'path'
        ]
    });

    res.json(projectList);
});

apiRoutes.get('/getProjectByPath/', (req, res) => {
    res.end();
});
apiRoutes.get('/getProjectByPath/:path', async (req, res) => {
    const project = await db.Project.findAll({
        where: {
            path: req.params.path
        }
    });
    
    res.json(project);
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