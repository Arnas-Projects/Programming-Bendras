



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

    static count = 0;

    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this.grades = [];
        Student.count++;
    }

    static getStudentCount() {
        return Student.count;
    }

    // addGrade(dalykas, pazymys) {
    //     this.grades.dalykas = dalykas;
    //     this.grades.pazymys = pazymys;
    // }

    addGrade(grade) {
        this.grades.push(grade);
    }

    addGradeToFront(grade) {
        this.grades.unshift(grade);
    }

    highestGrade() {
        return this.grades.length ? Math.max(...this.grades) : null;
    }

    lowestGrade() {
        return this.grades.length ? Math.min(...this.grades) : null;
    }

    averageGrades() {
        if (this.grades.length === 0) {
            console.log('Pažymių nėra');
        }

        let sum = 0;

        this.grades.forEach(grade => {
            sum += grade;
        });

        return Number((sum / this.grades.length).toFixed(2));
    }

    addScholarship() {
        if ( this.grades.length === 0) {
            console.log('Pažymių nėra');
        }

        const average = this.averageGrades();

        if (average >= 8) {
            console.log(`${this.name} is assigned higher scholarship`);
        } else if (average >= 6) {
            console.log(`${this.name} is assigned regular scholarship`);
        } else {
            console.log(`The average grade is too low, no scholarship for ${this.name} this semester`);
        }

    }
}


class OnlineStudent extends Student {

    constructor(name, birthYear, platform) {
        super(name, birthYear); // iškviečiam Student constructor
        this.platform = platform;
    }

    averageGradesOnline() {
        const onlineAverage = super.averageGrades();
        return Number((onlineAverage * 0.8).toFixed(2));
    }
}


const S2 = new OnlineStudent('Aldona', 2007, 'Zoom');

console.log(S2);  
S2.addGrade(7);
S2.addGrade(9);
S2.addGrade(10);

console.log(S2.averageGradesOnline());

const S1 = new Student('Paulius', 2005);

console.log(Student.getStudentCount());

// console.log(S1.addGrade('Chemija', 8));

console.log(S1);

S1.addGrade(7);
S1.addGrade(9);

console.log(S1);

console.log(S1.highestGrade());
console.log(S1.lowestGrade());
console.log(S1.averageGrades());

S1.addScholarship();
S2.addScholarship();


// sukurti metodą kuris vidurki * 0,8
 












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











