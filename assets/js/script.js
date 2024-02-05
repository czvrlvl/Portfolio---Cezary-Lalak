document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById('privacyPolicyModal');
    var acceptButton = document.getElementById('acceptButton');

    // Check if the user has previously accepted the privacy policy using cookies
    var privacyAccepted = getCookie('privacyAccepted');

    // Show the modal only if not previously accepted
    if (!privacyAccepted) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }

    // Handle accept button click
    acceptButton.addEventListener('click', function () {
        // Hide the modal
        modal.style.display = 'none';

        // Enable the rest of the website content
        document.body.style.overflow = 'auto'; // Enable scrolling

        // Set a flag in cookie indicating privacy policy acceptance
        setCookie('privacyAccepted', 'true', 365); // Cookie expires in 365 days
    });

    // Function to get the value of a cookie
    function getCookie(name) {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.indexOf(name + '=') === 0) {
                return cookie.substring(name.length + 1, cookie.length);
            }
        }
        return null;
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + date.toUTCString();
        document.cookie = name + '=' + value + '; ' + expires + '; path=/';
    }
});