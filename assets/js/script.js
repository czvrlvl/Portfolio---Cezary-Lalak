document.addEventListener("DOMContentLoaded", function() {
    // Pobierz referencje do modalu, przycisku akceptacji i body
    var modal = document.querySelector(".modal");
    var acceptButton = document.getElementById("acceptButton");
    var body = document.body;

    // Funkcja do pokazania modala i zablokowania scrolla
    function showModal() {
        modal.style.display = "flex";
        body.style.overflow = "hidden";
    }

    // Funkcja do ukrycia modala i odblokowania scrolla
    function hideModal() {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }

    // Pokaż modal po załadowaniu strony
    showModal();

    // Dodaj obsługę kliknięcia przycisku akceptacji
    acceptButton.addEventListener("click", function() {
        // Tutaj możesz dodać dodatkowe działania po zaakceptowaniu, jeśli są potrzebne

        // Ukryj modal
        hideModal();
    });
});