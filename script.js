const AdminEmail = "admin@gmail.com";
const AdminPassword = "123";
const UserEmail = "user@gmail.com";
const UserPassword = "321";
const StaffEmail = "staff@gmail.com";
const StaffPassword = "456";

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (email === AdminEmail && password === AdminPassword) {
        window.location.href = "./admin/dashboard.html";
    } else if (email === UserEmail && password === UserPassword){
        window.location.href = "./user/dashboard.html";
    } else if (email === StaffEmail && password === StaffPassword){
        window.location.href = "./staff/staff.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});

/*
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href').substring(1); // Get the section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
*/

    function openModal() {
        // Show the modal
        document.getElementById("bookingModal").style.display = "flex";
        document.getElementById("selected-bike").value = bikeName;
    }

        // Close Modal When Clicking "X" Button
    function closeModal() {
        document.getElementById("bookingModal").style.display = "none";
        document.getElementById("rentalForm").reset();
    }

    document.getElementById("rentalForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Add your booking submission logic here
        alert("Booking submitted successfully!");
        closeModal();
      });



