


console.log('Grybas');
console.log('\n');


class Grybas {

    constructor() {
        this.valgomas = !this.rand(0, 1); // rand(0, 1) ===> 0 arba 1 ===> !0 --> true arba !1 --> false
        this.sukirmijes = !this.rand(0, 1);
        this.svoris = this.rand(5, 45);
    }


    rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
};



class Krepsys {

    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }

    deti(grybas) {

        if (grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.dydis > this.prikrauta; // true ===> krepšyje dar yra vietos       
    }
};


const k1 = new Krepsys();

while (k1.deti(new Grybas())) {};

console.log(k1);


