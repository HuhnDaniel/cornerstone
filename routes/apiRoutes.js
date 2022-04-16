const Router = require('express').Router;
const db = require('../models');
const apiRoutes = Router();
const passport = require('../config/passport');
const isAuthenticated = require('../config/middleware/isAuthenticated');

apiRoutes.post('/addUser', async (req, res) => {
    const userData = await db.User.create(req.body);

    res.json(userData);
});

apiRoutes.post('/login', passport.authenticate('local'), (req, res) => {
    
    res.json(req.body);
});

apiRoutes.get("/checkAuthentication", isAuthenticated, (req, res) => {
    console.log(req.user, "-----------");
    const user = req.user ? req.user : null;
    res.status(200).json({
        user: user
    });
});

apiRoutes.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy(function (err) {
        if (err) {
            return next(err);
        }
        return res.send({ success: true });
    });
});

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

apiRoutes.put('/updateDisciplineById/', (req, res) => {
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

apiRoutes.delete('/deleteDisciplineByPath/:disciplinePath', async (req, res) => {
    const dbDiscipline = await db.Discipline.destroy({
        where: {
            path: req.params.disciplinePath
        }
    });

    res.json(dbDiscipline);
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

apiRoutes.post('/addSubDiscipline', async (req, res) => {
    const dbSubDiscipline = await db.SubDiscipline.create(req.body);

    res.json(dbSubDiscipline);
});

apiRoutes.put('/updateSubDisciplineById/', (req, res) => {
    res.end();
});
apiRoutes.put('/updateSubDisciplineById/:subDisciplineId', async (req, res) => {
    const subDiscipline = await db.SubDiscipline.update(req.body, {
        where: {
            id: req.params.subDisciplineId
        }
    });

    res.json(subDiscipline);
});

apiRoutes.delete('/deleteSubDisciplineByPath/:subDisciplinePath', async (req, res) => {
    const dbSubDiscipline = await db.SubDiscipline.destroy({
        where: {
            path: req.params.subDisciplinePath
        }
    });

    res.json(dbSubDiscipline);
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

apiRoutes.put('/updatePartnerById/', (req, res) => {
    res.end();
});
apiRoutes.put('/updatePartnerById/:partnerId', async (req, res) => {
    const partner = await db.Partner.update(req.body, {
        where: {
            id: req.params.partnerId
        }
    });

    res.json(partner);
});

apiRoutes.delete('/deletePartnerByPath/:partnerPath', async (req, res) => {
    const dbPartner = await db.Partner.destroy({
        where: {
            path: req.params.partnerPath
        }
    });

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

apiRoutes.post('/addProject', async (req, res) => {
    const dbProject = await db.Project.create(req.body);

    res.json(dbProject);
});

apiRoutes.put('/updateProjectById/', (req, res) => {
    res.end();
});
apiRoutes.put('/updateProjectById/:projectId', async (req, res) => {
    const project = await db.Project.update(req.body, {
        where: {
            id: req.params.projectId
        }
    });

    res.json(project);
});

apiRoutes.delete('/deleteProjectByPath/:projectPath', async (req, res) => {
    const dbProject = await db.Project.destroy({
        where: {
            path: req.params.projectPath
        }
    });

    res.json(dbProject);
});

module.exports = apiRoutes;