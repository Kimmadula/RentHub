
const AdUsername = "admin";
const AdPassword = "123";
const Username = "user";
const Password = "321";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === AdUsername && password === AdPassword) {
        window.location.href = "Admindashboard.html";
    } else if (username === Username && password === Password){
        window.location.href = "Userdashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});
