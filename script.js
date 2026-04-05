// 1. Das Formular im HTML finden
const meinFormular = document.querySelector('.contact-form');

// 2. Den "Senden"-Event abfangen
meinFormular.addEventListener('submit', async function(event) {
    event.preventDefault(); // Stoppt das Neuladen der Seite

    // Die eingegebenen Daten (Name, E-Mail, Nachricht) einsammeln
    const formData = new FormData(event.target);

    // Der "Funkspruch" an Formspree
    const response = await fetch(event.target.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    // 3. Checken, ob der Funkspruch angekommen ist
    if (response.ok) {
        // Erfolg! Wir zeigen die Bestätigung
        meinFormular.innerHTML = `
            <div style="text-align: center; padding: 40px; border: 1px solid #d4af37; border-radius: 10px;">
                <h2 style="color: #d4af37;">Vielen Dank!</h2>
                <p>Deine Nachricht ist sicher bei mir angekommen.</p>
                <span style="font-size: 40px;">📧✨</span>
            </div>
        `;
    } else {
        // Fehler-Fall (z.B. Internet weg)
        alert("Hoppla! Da ist was schiefgelaufen. Versuchs bitte nochmal.");
    }
});