const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const videoContainer = document.getElementById("videoContainer");

// Username dan Password Valid
const validUsername = "Yudzx";
const validPassword = "admin1";

// Event Listener untuk Form Login
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah reload halaman

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === validUsername && password === validPassword) {
    // Jika login berhasil, tampilkan video fullscreen
    document.querySelector(".login-container").style.display = "none";
    videoContainer.style.display = "flex";
  } else {
    // Jika login gagal, tampilkan pesan error
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
  }
});
