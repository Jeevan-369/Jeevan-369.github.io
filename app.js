function showProfileDetails() {
    var popup = document.getElementById("popup");
    console.log("Showing popup");
    popup.style.display = "flex";
    setTimeout(function () {
        console.log("Hiding popup after 10 seconds");
        closePopup();
    }, 5000);
}
function closePopup() {
    var popup = document.getElementById("popup");
    console.log("Closing popup");
    popup.style.display = "none";
}
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-list ul');
    const toggleSwitch = document.getElementById('toggle');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

   
});

// function sendEmail(){
// 	Email.send({
// 	Host: "smtp.elasticemail.com",
// 	Username : "jeevanjeevu369@gmail.com",
// 	Password : "00B22B2D1EEFBFD021323B8629F006AB5F42",
// 	To : 'jeevanjeevu369@gmail.com',
// 	From : document.getElementById("email").value,
// 	Subject : "New Contact Form Enquiry",
// 	Body: "Name: " + document.getElementById("name") .value
// 	+ "<br> Email: " + document.getElementById("emai]").value
// 	+ "‹br> Subject: " + document.getElementById("subject").value
// 	+ "‹br> Message: " + document.getElementById("message").value
// 	}).then(
// 	message => alert("Message Sent Succesfully")
// 	);
// }



function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const theme = localStorage.getItem("theme");
    console.log("Theme:", theme);
if (theme === "dark") {
    body.classList.add("dark-mode");
    document.getElementById("toggle").checked = true;
}

});

function toggleExperienceDetails(experienceId) {
    var experience = document.getElementById(experienceId);
    var details = experience.querySelector('.experience-info');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

