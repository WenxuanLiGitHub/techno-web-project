const path = require('path');
const api1 = require('./apiUser.js');
const api2 = require('./apiFriend.js');


//connexion à la base de données
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
console.log(db);


// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

express = require('express');
const app = express()
api_1 = require("./apiUser.js");
api_2 = require("./apiFriend.js")
const session = require("express-session");

app.use(session({
    secret: "technoweb rocks"
}));

app.use('/apiUser', api1.default(db));
app.use('/apiFriend', api2.default(db));

// Démarre le serveur
app.on('close', () => {
    db.close();
});

//fermeture de la BD
//db.close();

exports.default = app;

