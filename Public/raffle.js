var db = firebase.firestore();

document.getElementById('draw-button').addEventListener('click', function() {
    db.collection('participants').get().then(function(snapshot) {
        var participants = [];
        snapshot.forEach(function(doc) {
            participants.push(doc.data());
        });
        var winner = participants[Math.floor(Math.random() * participants.length)];
        document.getElementById('winner').innerText = 'Vencedor: ' + winner.name;
    });
});
