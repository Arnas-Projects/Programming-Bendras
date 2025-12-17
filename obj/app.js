


console.log('OOP');

class Bebras {
    // instrukcija objekto gamybai

    // metodas (funkcija) kuri AUTOMATIŠKAI pasileidžia objekto kūrimo metu

    constructor() {
        console.log('KONSTRUOJAM!');

            this.bebroMetai = 12;
    }

}


// Gaminame objektą pagal instrukciją
const b1 = new Bebras();

// b1 yra objektas pagamintas pagal Bebras klasės instrukcijas

console.log(b1);

// galim tokių prisigaminti daug

const b2 = new Bebras();
const b3 = new Bebras();

b3.bebroMetai = 14;

console.log(b1, b2, b3);