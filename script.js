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


<script>
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentElement;
            const content = accordionItem.querySelector('.accordion-content');

            // Aktiv-Klasse umschalten (für den drehenden Pfeil)
            accordionItem.classList.toggle('active');

            // Logik zum Auf- und Zuklappen
            if (accordionItem.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
</script>



/* Alle Überschriften in den rechtlichen Texten auf Schwarz umstellen */
.legal-container h1,
.legal-content h1,
.legal-content h2,
.legal-content h3,
.legal-content h4 {
    font-family: 'Cinzel', serif !important;
    color: #111111 !important;
    background: none !important;
    -webkit-text-fill-color: #111111 !important;
    text-shadow: none !important;
}

/* Hauptüberschrift (z.B. ALLGEMEINE GESCHÄFTSBEDINGUNGEN) */
.legal-container h1 {
    font-size: 2.2rem !important;
    font-weight: 600 !important;
    letter-spacing: 3px !important;
    text-transform: uppercase !important;
    text-align: center !important;
    margin-top: 40px !important;
    margin-bottom: 30px !important;
}

/* Abschnitts-Überschriften (z.B. 1. Geltungsbereich) */
.legal-content h3 {
    font-size: 1.1rem !important;
    letter-spacing: 1.5px !important;
    margin-top: 25px !important;
    margin-bottom: 10px !important;
    border-bottom: 1px solid #c5a059 !important; /* Dezenter goldener Trennstrich */
    padding-bottom: 5px !important;
}