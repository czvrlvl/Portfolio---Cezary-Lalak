
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("privacyPolicyModal");
    var acceptButton = document.getElementById("acceptButton");

    function showModal() {
        modal.style.display = "flex";
        document.body.classList.add("no-scroll");
    }

    function hideModal() {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    var privacyAccepted = localStorage.getItem("privacyAccepted");

    if (!privacyAccepted) {
        showModal();
    }

    acceptButton.addEventListener("click", function() {
        hideModal();
        localStorage.setItem("privacyAccepted", "true");
    });
});
