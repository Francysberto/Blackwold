var db = firebase.firestore();

db.collection('participants').onSnapshot(function(snapshot) {
    var list = document.getElementById('participant-list');
    list.innerHTML = '';
    snapshot.forEach(function(doc) {
        var li = document.createElement('li');
        li.textContent = doc.data().name;
        list.appendChild(li);
    });
});
