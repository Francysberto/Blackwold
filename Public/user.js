firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('user-name').textContent = user.displayName;
    } else {
        // Redirecionar para a página de login se não estiver logado
        window.location = 'login.html';
    }
});
