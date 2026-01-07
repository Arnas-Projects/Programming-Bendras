


class Buttons {

    constructor() {
        this.buttons = document.querySelectorAll('button');
        this.h1 = document.querySelector('h1');
        this.addEventToButton1();
        this.addEventToButton2();
        this.addEventToButton3();
    }

    addEventToButton1() {
        // Arrow funkcija | neturi savo "this"
        this.buttons[0].addEventListener('click', _ => {
            console.log(this);
            this.h1.textContent = 'Button 1 clicked!';
        });
    }


    addEventToButton2() {
        // Paprasta funkcija | turi savo "this"
        this.buttons[1].addEventListener('click', function() {
            // Čia "this" nurodo į mygtuką, ant kurio buvo paspausta
            console.log(this);
            // this.h1.textContent = 'Mygtukas 2 paspaustas!';

            // Pats mygtukas yra "this" ir mes keičiame jo tekstą
            this.textContent = 'Text changed!';
        });
    }


    // senovinis variantas su bind
    addEventToButton3() {
        this.buttons[2].addEventListener('click', function() {
            console.log(this);
            this.h1.textContent = 'Roar!';
            // Čia "this" nurodo į mygtuką, ant kurio buvo paspausta
            // Kadangi mums reikia "this" iš Buttons klasės,
            // naudojame bind(this), kuris priskiria "this" reikšmę iš Buttons klasės
        }.bind(this));
    }
};


new Buttons(); // Paleidžiame klasę Buttons. Objekto niekam nepriskiriame, nes mums nereikia į jį vėliau kreiptis








