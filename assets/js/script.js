document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById('privacyPolicyModal');
    var acceptButton = document.getElementById('acceptButton');


    var privacyAccepted = localStorage.getItem('privacyAccepted');


    if (!privacyAccepted) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    }


    acceptButton.addEventListener('click', function () {

        modal.style.display = 'none';


        document.body.style.overflow = 'auto'; 


        localStorage.setItem('privacyAccepted', 'true');
    });
});