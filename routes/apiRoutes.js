require('dotenv').config();

const Router = require('express').Router;
const db = require('../models');
const apiRoutes = Router();
const passport = require('../config/passport');
const isAuthenticated = require('../config/middleware/isAuthenticated');
const cloudinary = require('cloudinary');

console.log('----------------', process.env.REACT_APP_API_KEY, process.env.REACT_APP_API_SECRET);

cloudinary.config({
    cloud_name: process.env.REACT_APP_CLOUDNAME,
    api_key: process.env.REACT_APP_API_KEY,
    api_secret: process.env.REACT_APP_API_SECRET
});

apiRoutes.post('/login', passport.authenticate('local'), (req, res) => {
    res.json(req.body);
});

apiRoutes.get("/checkAuthentication", isAuthenticated, (req, res) => {
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

apiRoutes.get('/getUserItemNames', async (req, res) => {
    const userList = await db.User.findAll({
        attributes: [
            'id',
            'name',
            'path'
        ]
    });

    res.json(userList);
});

apiRoutes.get('/getAllUsers', async (req, res) => {
    const userList = await db.User.findAll({});

    res.send(userList);
});

apiRoutes.get('/getUserByPath/', (req, res) => {
    res.end();
});
apiRoutes.get('/getUserByPath/:path', async (req, res) => {
    const user = await db.User.findAll({
        where: {
            path: req.params.path
        }
    });
    
    res.json(user);
});

apiRoutes.post('/addUser', async (req, res) => {
    const userData = await db.User.create(req.body);

    res.json(userData);
});

apiRoutes.put('/updateUserById/', (req, res) => {
    res.end();
});
apiRoutes.put('/updateUserById/:userId', async (req, res) => {
    const user = await db.User.update(req.body, {
        where: {
            id: req.params.userId
        }
    });

    res.json(user);
});

apiRoutes.put('/updateUserPW/:userId', async (req, res) => {
    const user = await db.User.update(req.body, {
        where: {
            id: req.params.userId
        },
        individualHooks: true
    });

    res.json(user);
});

apiRoutes.delete('/deleteUserByPath/:userPath', async (req, res) => {
    const dbUser = await db.User.destroy({
        where: {
            path: req.params.userPath
        }
    });

    res.json(dbUser);
});

apiRoutes.get('/getDisciplineItemNames', async (req, res) => {
    const disciplineList = await db.Discipline.findAll({
        attributes: [
            'id',
            'name',
            'path'
        ]
    });

    res.json(disciplineList);
});

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
                            'name',
                            'image'
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
                    'name',
                    'image'
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
            'path',
            'PartnerId'
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

apiRoutes.delete('/deleteUnusedImage/:topic/:image', async (req, res) => {

    cloudinary.v2.uploader.destroy('Cornerstone/' + req.params.topic + '/' + req.params.image, function(result, error) {
        console.log(result, error);
    });

    res.end();
});

module.exports = apiRoutes;