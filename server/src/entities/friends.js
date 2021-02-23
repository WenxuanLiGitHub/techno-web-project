class Friends {
    constructor(db) {
        this.db = db
    }

    add(userid, lastname, firstname) {
        return new Promise((resolve, reject) => {
          let friendsid = 3; // À remplacer par une requête bd
          if(false) {
            //erreur
            reject();
          } else {
            resolve(friendsid);
          }
        });
      }

    getFriend(friendsid) {
        return new Promise((resolve, reject) => {
            const friend = {
                userid: 1,
                lastname: "oh",
                firstname: "mari"
             }; // À remplacer par une requête bd       
        if(false) {
            //erreur
            reject();
        } else {
            if(friendsid == 1) {
                resolve(friend);
            } else {
                resolve(null);
            }
        }
        });
    }

    getList() {
        return new Promise((resolve, reject) => {
          const friendsList = [
            {
                user_id: 1,
                lastname: "chu",
                firstname: "pika"
            },
            {
                user_id: 2,
                lastname: "oh",
                firstname: "mari"
            }];// À remplacer par une requête bd
        if(false) {
            //erreur
            reject();
        } else {
            resolve(friendsList);
        }
        });
    }

}
exports.default = Friends;