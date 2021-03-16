class Friends {
  constructor(db) {
    this.db = db;
    this.db.exec("CREATE TABLE IF NOT EXISTS friends (firstUser VARCHAR(512) NOT NULL, secondUser VARCHAR(512) NOT NULL, timestamp TIMESTAMP, PRIMARY KEY('firstUser', 'secondUser'))");
    console.log("Friends table created");
  }

  add(firstUser, secondUser) {
    let _this = this;
    return new Promise((resolve, reject) => {
      if(false) {
        //erreur
        reject();
      } else {
        resolve(friendsid);
      }
    });
  }

  create(login, password, lastname, firstname) {
    let _this = this
    return new Promise((resolve, reject) => {
      var stmt = _this.db.prepare("INSERT INTO users VALUES (?,?,?,?)")
      stmt.run([login, password, lastname, firstname], function(err, res){
        if (err){
          reject(err);
        }else{
          resolve(this.lastID);    
        }
      })
    });
  }

}

//   create(login, password, lastname, firstname) {
//     let _this = this
//     return new Promise((resolve, reject) => {
//       var stmt = _this.db.prepare("INSERT INTO users VALUES (?,?,?,?)")
//       stmt.run([login, password, lastname, firstname], function(err, res){
//         if (err){
//           reject(err);
//         }else{
//           resolve(this.lastID);    
//         }
//       })
//     });
//   }

//   async get(userid) {
//     return new Promise((resolve, reject) => {
//       var stmt = this.db.prepare("SELECT * FROM users WHERE rowid = ?")
//       stmt.get([userid], function(err, res){
//         if (err){
//           reject(err);
//         }else{
//           resolve(res);
//         }
//       })
//     });
//   }

//   async exists(login) {
//     return new Promise((resolve, reject) => {
//       console.log("focntion user exists entrée")
//       var stmt = this.db.prepare("SELECT login FROM users WHERE login = ?")
//       stmt.get([login], function(err, res){
//         if(err) {
//           reject(err)
//         }else{
//           resolve(res != undefined)
//         }
//       })
//     });
//   }

//   async checkpassword(login, password) {
//     return new Promise((resolve, reject) => {
//       let userid = 1; // À remplacer par une requête bd
//       if(false) {
//         //erreur
//         reject();
//       } else {
//         resolve(userid);
//       }
//     });
//   }

// }

exports.default = Friends;

