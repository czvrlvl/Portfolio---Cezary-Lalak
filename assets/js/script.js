document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById('privacyPolicyModal');
    var acceptButton = document.getElementById('acceptButton');

    // Always show the modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scrolling

    // Handle accept button click
    acceptButton.addEventListener('click', function () {
        // Hide the modal
        modal.style.display = 'none';

        // Enable the rest of the website content
        document.body.style.overflow = 'auto'; // Enable scrolling

        // Optional: Set a flag in local storage indicating privacy policy acceptance
        localStorage.setItem('privacyAccepted', 'true');
    });

    // Optional: Handle close button click
    var closeButton = document.getElementById('closeButton');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        });
    }
});