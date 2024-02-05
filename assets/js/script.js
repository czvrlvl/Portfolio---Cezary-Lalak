document.addEventListener("DOMContentLoaded", function() {
    // Pobierz referencje do modalu, przycisku akceptacji i body
    var modal = document.querySelector(".modal");
    var acceptButton = document.getElementById("acceptButton");

    // Funkcja do pokazania modala
    function showModal() {
        modal.style.display = "flex";
    }

    // Funkcja do ukrycia modala
    function hideModal() {
        modal.style.display = "none";
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