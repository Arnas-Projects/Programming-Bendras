


console.log('OOP');

class Bebras {
    // instrukcija objekto gamybai

    // metodas (funkcija) kuri AUTOMATIŠKAI pasileidžia objekto kūrimo metu

    constructor(metai) {
        console.log('KONSTRUOJAM!');

        this.bebroMetai = metai; // this === b1, kitą kartą this === b2, dar kitą kartą this === b3;

        // this nuoroda į dar neegzistuojantį objektą "tas"
    }

    kiekMetu() {
        console.log('Bebrui yra: ' + this.bebroMetai + ' metų');
    }

}


// Gaminame objektą pagal instrukciją
const b1 = new Bebras(10);

// b1 yra objektas pagamintas pagal Bebras klasės instrukcijas

console.log(b1);

// galim tokių prisigaminti daug

const b2 = new Bebras(12);
const b3 = new Bebras(16);

b3.bebroMetai = 14;

console.log(b1, b2, b3);

b1.kiekMetu();


console.log('*********************');
// Sukurti 3 namų objektus iš klasės Namas. Kiekvienas namas turi turėti skirtingą kambarių ir kaminų kiekį
 

class Namas {

    constructor(kambarys, kaminas) {
        this.NamoKambariai = kambarys; 
        this.NamoKaminai = kaminas; 
    }
    // Parašyti metodą kuris atspausdina kaminų ir kambarių sandaugą

    kiekKambariuKaminu() {
        const sandauga = this.NamoKambariai * this.NamoKaminai;
        console.log('Sandauga: ' + sandauga);
        console.log(this.NamoKambariai * this.NamoKaminai);
    }
};

const n1 = new Namas(2, 4);
const n2 = new Namas(4, 3);
const n3 = new Namas(6, 5);


console.log(n1, n2, n3);


n1.kiekKambariuKaminu();







