



class Car { // deklaruojam klasę

    constructor(brand, year) { // spec. funkcija, kuri pasileidžia visada
        this.brand = brand;
        this.year = year;
    }

    getInfo() { // metodas, veiksmas kurį padaro mūsų objektas
        console.log(`${this.brand}, ${this.year}`)
    }
}

const myFirstCar = new Car('Audi', 2005);  // kuriam naują objektą

myFirstCar.getInfo();







// Task 1 ------------------------------------------------------------------------------------------------------
/*
    Sukurti klasę bankAccount (bankoSaskaita),
    kuri turi 1 sąvybę - balance (saskaitosLikutis)

    sukurti metodą idetiPinigu() arba deposit()
*/
console.log('\nTask 1');


class BankAccount {

    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        // this.balance -= amount;

        if (amount > this.balance) {
            console.log("You don't have enough money in your account");
        } else {
            this.balance -= amount;
        }
    }

    getBalance() {
        console.log(`Sąskaitos likutis: ${this.balance}`);
    }
}


const acc1 = new BankAccount();

acc1.deposit(100);
console.log(acc1);

acc1.withdraw(50);
console.log(acc1);

acc1.getBalance();









// Task 2 ------------------------------------------------------------------------------------------------------
console.log('\nTask 2');

/*
    Sukurti klasę Student. Sąvybės - (vardas, gimimo metai) bus priskirtos 
    objekto kūrimo metu. + savybę pažymiai (grades) - tuščias masyvas.
*/

class Student {

    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this.grades = [];
    }

    addGrade(dalykas, pazymys) {
        this.grades.dalykas = dalykas;
        this.grades.pazymys = pazymys;
    }

    addGrade2(grade) {
        this.grades.push(grade);
    }

    addGradeToFront(grade) {
        this.grades.unshift(grade);
    }
}

const S1 = new Student('Paulius', 2005);

console.log(S1.addGrade('Chemija', 8));

console.log(S1);

S1.addGrade2(7);
S1.addGrade2(9);

console.log(S1);













// Task 3 ------------------------------------------------------------------------------------------------------
console.log('\nTask 3');









// Task 4 ------------------------------------------------------------------------------------------------------
console.log('\nTask 4');










// Task 5 ------------------------------------------------------------------------------------------------------
console.log('\nTask 5');










// Task 6 ------------------------------------------------------------------------------------------------------
console.log('\nTask 6');










// Task 7 ------------------------------------------------------------------------------------------------------
console.log('\nTask 7');










// Task 8 ------------------------------------------------------------------------------------------------------
console.log('\nTask 8');











