const pupille = document.getElementById('pupille');

document.addEventListener('mousemove', (e) => {
    // 1. Position der Maus holen
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 2. Mittelpunkt des Auges finden
    const auge = document.querySelector('.auge');
    const rekt = auge.getBoundingClientRect();
    const augeX = rekt.left + rekt.width / 2;
    const augeY = rekt.top + rekt.height / 2;

    // 3. GEO-LOGIK: Winkel berechnen
    // Wir berechnen den Winkel zwischen Maus und Auge in Radiant
    const winkel = Math.atan2(mouseY - augeY, mouseX - augeX);
    
    // 4. GEO-LOGIK: Distanz festlegen
    // Wie weit darf die Pupille von der Mitte weg? (Radius)
    const distanz = 30; 
    
    // 5. Den Winkel zurück in X- und Y-Koordinaten umwandeln
    const x = Math.cos(winkel) * distanz;
    const y = Math.sin(winkel) * distanz;

    // 6. Die Pupille bewegen
    pupille.style.transform = `translate(${x}px, ${y}px)`;
});
// Hier holen wir uns das Auge nochmal für den Klick (außerhalb der Mausbewegung)
const dasGanzeAuge = document.querySelector('.auge');

dasGanzeAuge.addEventListener('click', () => {
    // Die Pupille (die du oben schon mit getElementById geholt hast) wird rot
    pupille.style.backgroundColor = 'red';
    
    setTimeout(() => {
        pupille.style.backgroundColor = '#333';
    }, 200);
});