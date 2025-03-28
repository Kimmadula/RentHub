const AdminEmail = "admin@gmail.com";
const AdminPassword = "123";
const UserEmail = "user@gmail.com";
const UserPassword = "321";

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (email === AdminEmail && password === AdminPassword) {
        window.location.href = "admin.html";
    } else if (email === UserEmail && password === UserPassword){
        window.location.href = "user.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});