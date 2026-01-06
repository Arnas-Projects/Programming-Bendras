


console.log('(STATIC) Troleibusas 2');
console.log('\n');



class Troleibusas2 {

    static #visiKeleiviai = 0;

    #keleiviuSkaicius = 0;

    constructor(name) {
        this.name = name;
    }


    ilipa(keleiviai) {
        this.#keleiviuSkaicius += keleiviai;
        Troleibusas2.#visiKeleiviai += keleiviai;
    }

    islipa(keleiviai) {

        const islipo = Math.min(this.#keleiviuSkaicius, keleiviai);

        this.#keleiviuSkaicius -= islipo;
        Troleibusas2.#visiKeleiviai -= islipo;


        // if (keleiviai > this.#keleiviuSkaicius) {
        //     this.#keleiviuSkaicius == 0;
        //     console.log('Keleivių skaičius negali būti neigiamas!');
        // } else {
        //     this.#keleiviuSkaicius -= keleiviai;
        // }
    }

    vaziuoja() {
        console.log(`${this.name} važiuojantys keleiviai: ${this.#keleiviuSkaicius}`);
    }

    keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log('\x1b[36m%s\x1b[0m', 'Visų troleibusų keleivių skaičius: ' + Troleibusas2.#visiKeleiviai);
    }
};


const T1 = new Troleibusas2('Nr. 1:');


T1.ilipa(10);
T1.vaziuoja();
T1.ilipa(5);
T1.vaziuoja();
T1.islipa(3);
T1.vaziuoja();
T1.islipa(20);
T1.vaziuoja();


console.log('\n');


const T2 = new Troleibusas2('Nr. 2:');
T2.ilipa(20);
T2.vaziuoja();
T2.islipa(5);
T2.vaziuoja();
T2.ilipa(1);
T2.vaziuoja();



console.log('\n');


T1.keleiviuSkaiciusVisuoseTroleibusuose();
T2.keleiviuSkaiciusVisuoseTroleibusuose();









