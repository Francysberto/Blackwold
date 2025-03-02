function checkAuth() {
    let authenticated = localStorage.getItem("authenticated");
    if (!authenticated) {
        alert("Acesso negado! Redirecionando para a homepage.");
        window.location.href = "/../index.html";
    }
}
window.onload = checkAuth;