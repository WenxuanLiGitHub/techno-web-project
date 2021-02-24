const express = require("express");
const Users = require("./entities/users.js");
const Friends = require("./entities/friends.js");

function init(db) {
    const router = express.Router();
    // On utilise JSON
    router.use(express.json());
    // simple logger for this router's requests
    // all requests to this router will first hit this middleware
    router.use((req, res, next) => {
        console.log('API: method %s, path %s', req.method, req.path);
        console.log('Body', req.body);
        next();
    });
    const users = new Users.default(db);
    router.post("/user/login", async (req, res) => {   //LOGIN 
        try {
            const { login, password } = req.body;
            // Erreur sur la requête HTTP
            if (!login || !password) {
                res.status(400).json({
                    status: 400,
                    "message": "Requête invalide : login et password nécessaires"
                });
                return;
            }
            if(! await users.exists(login)) {
                res.status(401).json({
                    status: 401,
                    message: "Utilisateur inconnu"
                });
                return;
            }
            let userid = await users.checkpassword(login, password);
            if (userid) {
                // Avec middleware express-session
                req.session.regenerate(function (err) {
                    if (err) {
                        res.status(500).json({
                            status: 500,
                            message: "Erreur interne"
                        });
                    }
                    else {
                        // C'est bon, nouvelle session créée
                        req.session.userid = userid;
                        res.status(200).json({
                            status: 200,
                            message: "Login et mot de passe accepté"
                        });
                    }
                });
                return;
            }
            // Faux login : destruction de la session et erreur
            req.session.destroy((err) => { });
            res.status(403).json({
                status: 403,
                message: "login et/ou le mot de passe invalide(s)"
            });
            return;
        }
        catch (e) {
            // Toute autre erreur
            res.status(500).json({
                status: 500,
                message: "erreur interne",
                details: (e || "Erreur inconnue").toString()
            });
        }
    });

    router
        .route("/user/:user_id(\\d+)")
        //showing an user profil
        .get(async (req, res) => {    
        try {
            const user = await users.get(req.params.user_id);
            if (!user)
                res.sendStatus(404);
            else
                res.send(user);
        }
        catch (e) {
            res.status(500).send(e);
        }
    })   //deleting an user                                  
        .delete((req, res, next) => res.send(`delete user ${req.params.user_id}`));

    router.post("/user", (req, res) => {     //créer un utilisateur   
        const { login, password, lastname, firstname } = req.body;
        if (!login || !password || !lastname || !firstname) {
            res.status(400).send("Missing fields");
        } else {
            users.create(login, password, lastname, firstname)
                .then((user_id) => res.status(201).send({ id: user_id }))
                .catch((err) => res.status(500).send(err));
        }
    });

    //Code for friends starts:
    const friends = new Friends.default(db);

    //Get the entire list of friends
    router.route("/friends").get(async (req, res) => {
        try {
            const friendsList = await friends.getList();
            if (!friendsList)
             res.sendStatus(404);
            else 
                res.send(friendsList);
        }
        catch (e) {
            res.status(500).send(e);
        }
    })

    //Get one specific friend or delete one specific friend
    router.route("/friends/:friend_id(\\d+)").get(async (req, res) => {
        try {
            const friend = await friends.getFriend(req.params.friend_id);
            if (!friend)
                res.sendStatus(404);
            else 
                res.send(friend);
        }
        catch (e) {
            res.status(500).send(e);
        }
    })
    .delete((req, res, next) => res.send(`delete friend ${req.params.friend_id}`));

    //Add one friend
    router.put("/friends", (req, res) => {
        const { userid, lastname, firstname } = req.body;
        if (!userid || !lastname || !firstname) {
            res.status(400).send("Missing fields");
        } else {
            friends.add(userid, lastname, firstname)
                .then((friends_id) => res.status(201).send({ id: friends_id }))
                .catch((err) => res.status(500).send(err));
        }
    });

    return router;
}
exports.default = init;

