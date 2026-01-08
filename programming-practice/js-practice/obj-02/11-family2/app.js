


console.log('Extending Classes: Part 2');
console.log('\n');


class Box {

    getColor() {
        return 'crimson';
    }

    getWeight() {
        return 15;
    }
};


class Ball extends Box { // class Vaikas extends Tevas

    getColor() {
        return 'blue';
    }

    getMaterial() {
        return 'steel';
    }
};


const ball1 = new Ball();

console.log(ball1.getMaterial()); // nuosavas metodas
console.log(ball1.getWeight()); // šitas metodas --> getWeight() paveldėtas iš tėvinės klasės, kuri šiuo atveju yra Box
console.log(ball1.getColor()); // metodas yra nuosavas ir jis overwritina tėvo metodą

console.log('\n');


class Elder {

    static sidabras = '25kg';

    #auksas = '5kg';

    constructor() {
        console.log('Elder', this.#auksas);
        this.pinigai = 10000;
    }

    getSocial() {
        return 'Facebook';
    }

    getHouse() {
        return 'House';
    }

    get getGold() {
        return this.#auksas;
    }
};


class Adult extends Elder {

    static sidabras = '15kg';

    constructor() {
        super(); // jeigu vaikinėje klasėje yra constructor(), jis turi turėti pasikreipimą į tėvo constructor()
        console.log('Adult');
    }

    getSocial() {
        return 'Instagram';
    }
};


class Teenager extends Adult {

    constructor() {
        super(); // jeigu vaikinėje klasėje yra constructor(), jis turi turėti pasikreipimą į tėvo constructor()
        console.log('Teenager');
    }

    getSocial() {
        return 'Tik Tok';
    }
};


const elder65 = new Elder();
const adult40 = new Adult();
const teenager20 = new Teenager();

console.log('\n');

console.log(elder65.getSocial());
console.log(adult40.getSocial());
console.log(teenager20.getSocial());

console.log('\n');

console.log(teenager20.getHouse()); // metodas paveldėtas iš senelio
console.log(teenager20.pinigai);

console.log(teenager20); // konsolėj rodo, kad vaikas paveldi senelio auksą, bet iš tikro nepaveldi, nes savybė privati... -_-
// Privačių savybių ar metodų niekas nepaveldėja

console.log(teenager20.getGold);

console.log(Elder.sidabras);
console.log(Teenager.sidabras); // statiniai metodai taip pat yra paveldimi









