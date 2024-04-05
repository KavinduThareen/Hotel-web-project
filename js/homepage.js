$(document).ready(function () {
    $('.read-more-toggle').click(function () {
        $('.read-more-content').toggle();
        $(this).text(function (i, text) {
            return text === "Read More" ? "Read Less" : "Read More";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the phone icon element
    var phoneIcon = document.getElementById("phoneIcon");

    // Add click event listener to the phone icon
    phoneIcon.addEventListener("click", function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Define the phone number to copy
        var phoneNumber = "1234567890"; // Change this to your desired phone number

        // Call function to copy the phone number
        copyToClipboard(phoneNumber);

        // Alert the user
        alert("Phone number copied to clipboard: " + phoneNumber);
    });

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        // Create a temporary textarea element
        var textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px"; // Move the textarea off-screen
        document.body.appendChild(textarea);

        // Select the text inside the textarea
        textarea.select();

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the temporary textarea
        document.body.removeChild(textarea);
    }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const targetElement = document.querySelector(this.getAttribute('href'));
//         const scrollOptions = {
//             behavior: 'smooth'
//         };

//         // Scroll to the target element
//         targetElement.scrollIntoView(scrollOptions);

//         // Additional animations
//         targetElement.style.opacity = 0;
//         targetElement.style.transform = 'translateX(-100%)'; // Move left initially
//         targetElement.style.transition = 'opacity 1s, transform 1s';

//         // Restore original styles after animation completes
//         setTimeout(() => {
//             targetElement.style.opacity = 1;
//             targetElement.style.transform = 'none';
//         }, 1000); // Adjust the timeout value as needed to match the duration of your animation
//     });
// });







// Function to animate the alarm
function animateAlarm() {
    const alarmImage = document.getElementById('alarmImage');

    // Set initial position
    let currentPosition = 0;
    let direction = 1; // 1 for moving right, -1 for moving left

    // Animation loop
    const animationInterval = setInterval(() => {
        // Move the image horizontally
        currentPosition += 5 * direction; // Adjust the increment for speed
        alarmImage.style.transform = `translateX(${currentPosition}px)`;

        // Change direction at the boundaries
        if (currentPosition >= 20 || currentPosition <= -20) {
            direction *= -1;
        }
    }, 100); // Adjust the interval for smoother or faster animation
}

// Start the animation when the page loads
window.onload = animateAlarm;





const video = document.getElementById('myVideo');
video.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);


