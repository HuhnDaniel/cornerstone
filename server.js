require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const expressSession = require('express-session');

app.use(expressSession({ secret: process.env.sessionSecret, resave: false, saveUninitialized: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/client/build'));
}

app.get('*', (req, res) => {
    res.json({});
});

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});