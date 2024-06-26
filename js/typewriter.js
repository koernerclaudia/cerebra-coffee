document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.typewriter-text');
    const texts = ["Täglich geöffnet!", "Hunde Willkommen!", "Frische Kuchen!"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 100;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            speed = 50; // Speed up when deleting
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            speed = 40; // Regular speed when typing
        }

        if (!isDeleting && charIndex === currentText.length) {
            speed = 1500; // Pause before starting to delete
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 500; // Pause before starting to type the next text
        }

        setTimeout(type, speed);
    }

    type();
});