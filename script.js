function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Yudzx" && password === "admin1") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("video-container").style.display = "flex";
    } else {
        document.getElementById("error-message").textContent =
            "Username atau Password salah!";
    }
}

// Menampilkan atau menyembunyikan password
document.getElementById("show-password").addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});