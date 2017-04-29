var { getFriends, mostCompatibleFriend, saveFriends } = require('./../data/friends');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {

        res.send(getFriends());
    });

    app.post('/api/friends', function(req, res) {
        var friend = req.body;
        var scores = friend.scores;
        var mostCompatible = mostCompatibleFriend(scores);
        saveFriends(friend);
        res.send(mostCompatible);
    })
};