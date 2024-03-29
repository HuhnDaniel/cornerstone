require('dotenv').config();

const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const passport = require("./config/passport");
const expressSession = require('express-session');
const db = require('./models');
const routes = require('./routes');

app.use(expressSession({ secret: process.env.sessionSecret, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, '/client/build')));
    app.get("/favicon.ico", (req, res) => {
        res.sendFile(path.resolve(__dirname, "/favicon.ico"));
    });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "/client/build/index.html"));
    });
};

const syncOptions = { force: false };
if (process.env.NODE_ENV === 'development') {
    syncOptions.force = true;
};

db.sequelize.sync(syncOptions).then(() => {
    app.listen(PORT, () => {
        console.log(`Server on port ${PORT}`);
    });
});