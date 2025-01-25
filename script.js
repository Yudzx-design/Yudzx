// Fungsi untuk login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Yudzx" && password === "admin1") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("video-container").style.display = "flex";

        // Masuk ke mode fullscreen
        const video = document.getElementById("video-player");
        video.requestFullscreen()
            .then(() => {
                video.play();
            })
            .catch((err) => {
                console.log("Fullscreen gagal: ", err.message);
            });
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
