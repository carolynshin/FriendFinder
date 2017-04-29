var fs = require('fs');

function getFriends() {
    return JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf8' }));

}

function saveFriends(friend) {
    var friends = getFriends();
    friends.push(friend);
    fs.writeFile('./data.json', JSON.stringify(friends), { encoding: 'utf8'}, function(data) {
        console.log("Saved successfully");
    });
}

function mostCompatibleFriend(currentScore) {
    var mostCompatible;
    var min = Number.MAX_VALUE;
    var friends = getFriends();
    for(var i = 0; i < friends.length; i++) {
        var friendScore = friends[i].scores;
        console.log('Calculating difference against ' + friends[i].name);
        var difference = calculateDifference(friendScore, currentScore);
        if (difference < min) {
            min = difference;
            mostCompatible = friends[i];
        }
    }
    console.log('Most compatible is ' + JSON.stringify(mostCompatible));
    return mostCompatible;
}

function calculateDifference(a1, a2) {
    var length = a1.length;
    var result = 0;
    for(var i = 0; i < length; i++) {
        console.log('computing ' + a1[i] + ' ' + a2[i] + ' = ' + Math.abs(a1[i] - a2[i])  );
        result += Math.abs(a1[i] - a2[i]);
    }
    return result;
}
module.exports = { getFriends, saveFriends, mostCompatibleFriend };