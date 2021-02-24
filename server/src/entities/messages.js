class Messages {
    constructor(db) {
      this.db = db
      // suite plus tard avec la BD
    }
    //create a message
    createMsg(text_msg, userid) {
      return new Promise((resolve, reject) => {
        let msgid = 1; // À remplacer par une requête bd
        if(false) {
          //erreur
          reject();
        } else {
          resolve(msgid);
        }
      });
    }
  
    //get the list of msg of userid
    get(userid) {
      return new Promise((resolve, reject) => {
        const msg = {
           chaine: "Ceci est un message"
        }; // À remplacer par une requête bd
  
        if(false) {
          //erreur
          reject();
        } else {
          if(userid == 1) {
            resolve(msg);
          } else {
            resolve(null);
          }
        }
      });
    }
  
    //test if a message exist
    async exists(userid, msgid) {
      return new Promise((resolve, reject) => {
        if(false) {
          //erreur
          reject();
        } else {
          resolve(true);
        }
      });
    }

    //delete a message
    delete(userid, msgid){
        return new Promise( (resolve, reject) =>{
            //
        })

    }

    //modify a message 
  
   
  }
  
  exports.default = Messages;
  
  