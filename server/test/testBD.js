const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:');

const req1 = `CREATE TABLE IF NOT EXISTS users (
  login VARCHAR(512) NOT NULL PRIMARY KEY,
  password VARCHAR(256) NOT NULL,
  lastname VARCHAR(256) NOT NULL,
  firstname VARCHAR(256) NOT NULL
);`
db.exec(req1, (err) => {
  if (err) {
      throw err ;
  }
});

const req2 = db.prepare('INSERT INTO users VALUES(?, ?, ?, ?);');
req2.run(['goldorak', 'fulguro', 'rak', 'goldo'], (err) => {
  if (err) {
    console.log(err);
  }
});


const req3 = db.prepare('INSERT INTO users VALUES(?, ?, ?, ?);');
req3.run(['pikachu', 'pikapika', 'chu', 'pika'], (err) => {
  if (err) {
    console.log(err);
  }
});

req4 = 'SELECT DISTINCT rowid, lastname name FROM users WHERE rowid = 1 ORDER BY name;';
req4 = 'SELECT login FROM users WHERE login = ?'
// get pour un seul
var lg = 'goldorak'
db.all(req4, [lg], (err, rows) => {
  if (err) {
      console.log("login inconnu");
      throw err ;
  }
  rows.forEach((row) => {
      if( row.login !== undefined){
        console.log(row.name);
      }
  });
});