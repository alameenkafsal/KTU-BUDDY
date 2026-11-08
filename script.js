// KTU BUDDY - JAVASCRIPT

// Welcome Message
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to KTU Buddy!");

    console.log("Your KTU Student Portal is Ready 🚀");
});

// Explore Button
function explorePortal() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

// Welcome Notification
function welcomeStudent() {
    alert("Welcome to KTU Buddy! 🚀\nYour KTU Journey Starts Here!");
}

// Current Year
const yearElement = document.querySelector("footer p:last-child");

if (yearElement) {
    yearElement.innerHTML =
        "© " + new Date().getFullYear() +
        " KTU Buddy. All Rights Reserved.";
}
