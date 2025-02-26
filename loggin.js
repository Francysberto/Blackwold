var firebaseConfig = {
    apiKey: "AIzaSyCV1OBdLkFW45AY_4SOeu0klSMjHW1gWSU",
    authDomain: "blackwold-pix.firebaseapp.com",
    databaseURL: "https://blackwold-pix-default-rtdb.firebaseio.com",
    projectId: "blackwold-pix",
    storageBucket: "blackwold-pix.firebasestorage.app",
    messagingSenderId: "237686054157",
    appId: "1:237686054157:web:ecadd43268603d2337a444"
};

firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();

document.getElementById('login-button').addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log('Usuário logado: ', user);
    }).catch(function(error) {
        console.log('Erro: ', error);
    });
});
