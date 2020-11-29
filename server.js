require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const expressSession = require('express-session');
const db = require('./models');
const routes = require('./routes');

app.use(expressSession({ secret: process.env.sessionSecret, resave: false, saveUninitialized: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/client/build'));
};

app.use(routes);

app.get('*', (req, res) => {
    res.json({});
});

const syncOptions = { force: false };
if (process.env.NODE_ENV === 'development') {
    syncOptions.force = true;
};

db.sequelize.sync(syncOptions).then(() => {
    app.listen(PORT, () => {
        console.log(`Server on port ${PORT}`);
    });
});