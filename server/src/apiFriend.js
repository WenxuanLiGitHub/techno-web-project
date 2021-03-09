       /*
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
    */
