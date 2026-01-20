


/*
    Padaryti puslapį su analoginiu ir skaitmeniniu laikrodžiu su sekundėmis:
    Naudojamos technologijos: HTML, CSS, JAVASCRIPT
 
    Papildomi reikalavimai: padaryti du laukus, kuriuose galima 
    būtų įvesti "priminimo" laiką. 

    Likus 15min prieš pasikeičia minutinės rodyklės spalva.

    Likus mažiau negu minutei pasikeičia ir sekundinės rodyklės spalva. 
    
    Atėjus laikui ir 45min po jo rodyklių spalva pasilieka ta pati, bet 
    ir tuo metu ciferblatas tampa rausvas.
*/


function updateClock() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    // Skaitmeninis laikrodis
    document.getElementById('digital-clock').innerText = 
        `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

    // Analoginio laikrodžio sukimasis
    const sDeg = s * 6;
    const mDeg = m * 6 + s * 0.1;
    const hDeg = (h % 12) * 30 + m * 0.5;

    const sHand = document.getElementById('sec-hand');
    const mHand = document.getElementById('min-hand');
    const hHand = document.getElementById('hour-hand');
    const face = document.getElementById('clock-face');

    sHand.style.transform = `rotate(${sDeg}deg)`;
    mHand.style.transform = `rotate(${mDeg}deg)`;
    hHand.style.transform = `rotate(${hDeg}deg)`;

    // Priminimo logika
    const remH = parseInt(document.getElementById('rem-hour').value);
    const remM = parseInt(document.getElementById('rem-min').value);

    if (!isNaN(remH) && !isNaN(remM)) {
        document.getElementById('target-display').innerText = 
            `${remH.toString().padStart(2, '0')}:${remM.toString().padStart(2, '0')}`;

        const nowMs = now.getTime();
        const target = new Date();
        target.setHours(remH, remM, 0, 0);
        
        let diffSec = (target.getTime() - nowMs) / 1000;
        let diffAfter = (nowMs - target.getTime()) / 1000;

        // Reset spalvų
        mHand.style.background = "black";
        sHand.style.background = "red";
        face.style.background = "white";

        // 1. Likus mažiau nei 15 min (900s) iki priminimo
        if (diffSec > 0 && diffSec <= 900) {
            mHand.style.background = "orange";
        }

        // 2. Likus mažiau nei 1 min (60s) iki priminimo
        if (diffSec > 0 && diffSec <= 60) {
            sHand.style.background = "blue";
        }

        // 3. Atėjus laikui ir 45 min (2700s) po jo
        if (diffAfter >= 0 && diffAfter <= 2700) {
            face.style.background = "pink";
            // Spalvos lieka tos pačios kaip buvo nustatytos prieš pat pabaigą
            mHand.style.background = "orange";
            sHand.style.background = "blue";
        }
    }
}

setInterval(updateClock, 1000);
updateClock();










