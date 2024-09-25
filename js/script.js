document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
        updateStars(rating); // Sterne aktualisieren
        console.log('Bewertung:', rating);
        // Hier kannst du die Bewertung speichern
    });
});

function updateStars(rating) {
    document.querySelectorAll('.star').forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function saveRating() {
    const selectedStars = document.querySelectorAll('.star.selected');
    if (selectedStars.length > 0) {
        const rating = selectedStars.length;
        alert(`Bewertung gespeichert: ${rating} Sterne`);
        // Hier kannst du die Bewertung in einer Datenbank speichern
		
		// Seite automatisch schließen
        window.close();
    } else {
        alert('Bitte wähle eine Bewertung aus.');
    }
}

// Textbox-Eingabe überwachen
document.getElementById('textbox').addEventListener('input', function() {
    console.log('Text eingegeben: ', this.value);
});
