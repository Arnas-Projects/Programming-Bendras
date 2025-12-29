class Troleibusas2 {

    static visiKeleiviai = [];

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.constructor.visiKeleiviai += keleiviuSkaicius;
    }

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.constructor.keleiviuSkaicius += keleiviuSkaicius;
        console.log(`\nĮlipo keleivių: ${keleiviuSkaicius}`);
    }

    islipa(keleiviuSkaicius) {

        if (keleiviuSkaicius > this.keleiviuSkaicius) {
            this.constructor.keleiviuSkaicius = 0;
            console.log('\nKeleivių skaičius negali būti mažiau nei 0');
        } else {
            this.constructor.keleiviuSkaicius -= keleiviuSkaicius
            console.log(`\nIšlipo keleivių: ${keleiviuSkaicius}`);
        }
    }

    vaziuoja() {

        const KeleiviaiTroleibuse = this.keleiviuSkaicius;
        console.log(`\nKeleivių kiekis: ${KeleiviaiTroleibuse}`);
    }

    keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log(`Visų troleibusų keleivių skaičius: ${this.constructor.visiKeleiviai}`);
    }
}


const T1 = new Troleibusas2();
const T2 = new Troleibusas2();
// const T3 = new Troleibusas2();

T1.ilipa(2);

T1.keleiviuSkaiciusVisuoseTroleibusuose();

// console.log(T1);