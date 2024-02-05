document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById('privacyPolicyModal');
    var acceptButton = document.getElementById('acceptButton');

    // Check if the user has previously accepted the privacy policy using hash
    var privacyAccepted = window.location.hash === '#accepted';

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

        // Set a flag in the hash indicating privacy policy acceptance
        window.location.hash = 'accepted';
    });
});