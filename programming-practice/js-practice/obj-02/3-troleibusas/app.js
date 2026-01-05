


console.log('Troleibusas');
console.log('\n');



class Troleibusas {

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviai) {
        this.keleiviuSkaicius += keleiviai;
    }

    islipa(keleiviai) {

        const likesKeleiviuSkaicius = Math.max(0, this.keleiviuSkaicius - keleiviai);
        // Jeigu keleivių buvo 10 ir išlipo 20 ---> max(0, -10) ---> 0;
        // 10 ---> 4 max(0, 6) ---> 6;
        this.keleiviuSkaicius = likesKeleiviuSkaicius;

    //     if (keleiviai > this.keleiviuSkaicius) {
    //         this.keleiviuSkaicius == 0;
    //         console.log('Keleivių skaičius negali būti neigiamas!');
    //     } else {
    //         this.keleiviuSkaicius -= keleiviai;
    //     }

    }

    vaziuoja() {
        console.log(`Važiuojantys keleiviai: ${this.keleiviuSkaicius}`);
    }
};

const T1 = new Troleibusas();
const T2 = new Troleibusas();









