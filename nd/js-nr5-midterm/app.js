


console.log('Tarpinis žinių patikrinimas #5');
console.log('\n');


/*
    Reikalavimui JS kodui: turi būti sukurti 1. masyvas balls ir 2. klasė ColorBall. 
    
    Reikalavimui HTML: turi būti sukurti du laukeliai duomenims įvesti- spalvai ir numeriui; 
    vieta, kurioje bus atvaizduojami sukurti rutuliukai, du mygtukai- “sukurti naują” ir 
    “ištrinti seniausią”. 
    
    Klases ar kitus elementų atributus galite pridėti jeigu manote, kad jie jums yra reikalingi. 
    
    Galite naudoti CSS tiek atskirame faile, tiek <style> viduje ar inline be jokių ribojimų.
*/





// ---------------------------------------------------------------------------------------------------------
console.log('%c\n\n************ TASK 1 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Sukurti klasę ColorBall, kuri turėtų dvi savybes: color ir number. 
    
    Savybės turi būti įrašomos objekto kūrimo metu. 
    
    Kiekvienas sukurtas naujas objektas turi būti pridedamas į masyvą balls.
*/


const colorInput = document.querySelector('[data-color-input]');
const numberInput = document.querySelector('[data-number-input]');
const renderSection = document.querySelector('[data-render-section]');
const createButton = document.querySelector('[data-create-button]');
const deleteButton = document.querySelector('[data-delete-button]');



const balls = [];


class ColorBall {

    constructor(color, number) {
        this.color = color;
        this.number = number;

        balls.push(this);
    }
};


// const b1 = new ColorBall('skyblue', 20);

// console.log(b1);

// console.log(balls);



// ---------------------------------------------------------------------------------------------------------
console.log('%c\n\n************ TASK 2 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Mygtukas “sukurti naują” turi inicijuoti kodą, 
    kuris perskaitytų duomenis iš laukelių ir pagal 
    juos sukurtų naują objektą. 
*/

createButton.addEventListener('click', _ => {

    const colorValue = colorInput.value;
    const numberValue = numberInput.value;

    if (numberValue != '') {
        new ColorBall(colorValue, numberValue);
        console.log(`New ball created. Total balls: ${balls.length}`);
    }

    numberInput.value = '';

    renderBalls();
});



// ---------------------------------------------------------------------------------------------------------
console.log('%c\n\n************ TASK 3 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Masyvas turi būti atvaizduojamas vizualiai HTML’e. 
    
    Jame esantys objektai turi būti atvaizduojami kaip 
    atitinkamos spalvos apskritimai su numeriu viduryje.
*/


const renderBalls = _ => {
    
    renderSection.innerHTML = '';

    balls.forEach(ball => {
        const divTag = document.createElement('div');
        divTag.style.backgroundColor = ball.color;
        divTag.innerText = ball.number;
        divTag.classList.add('ball');
        renderSection.appendChild(divTag);
    });
};



// ---------------------------------------------------------------------------------------------------------
console.log('%c\n\n************ TASK 4 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Mygtukas “ištrinti seniausią” turi inicijuoti kodą, 
    kuris iš masyvo pašaliną seniausią kamuoliuką 
    (seniausias yra masyvo pradžioje)
*/


deleteButton.addEventListener('click', _ => {

    if (balls.length === 0) {
        console.log('Masyvas yra tuščias.');
        renderSection.innerText = 'Masyvas yra tuščias.';
        return;
    }
    
    balls.shift();

    renderBalls();
});



// ---------------------------------------------------------------------------------------------------------
console.log('%c\n\n************ TASK 5 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Pasikeitus masyvo elementams (pridėjus, ištrynus) 
    vizualinis masyvo atvaizdas HTML’e turi keistis 
    dinamiškai.
*/

renderBalls();






