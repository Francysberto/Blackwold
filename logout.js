function logout() {
    localStorage.removeItem("authenticated");
    window.location.href = "/../index.html";
}