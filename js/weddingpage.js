  // Show the popup ad when the page loads
  
  $(document).ready(function() {
    $('#popupModal').modal('show');
});



// number copy

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


// ad close

function closeCard() {
    document.getElementById('offer-card-1').style.display = 'none';
    document.querySelector('.ad-overlay').style.display = 'none'; // Hide the overlay
}



// wedding summery animation

$(document).ready(function() {
    $('.wedding-summery-box').show();
});