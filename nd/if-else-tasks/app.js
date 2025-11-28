function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Task # 1 ----------------------------------------------------------------------------
console.log('TASK #1');

const kauliukas1 = rand(1, 6);
const kauliukas2 = rand(1, 6);
const result = kauliukas1 + kauliukas2;


if (kauliukas1 + kauliukas2 > 8) {
    console.log(result, 'You Won!');
} else {
    console.log(result, 'You Lost!');
}

console.log('\n');
// Task # 2 ----------------------------------------------------------------------------
console.log('TASK #2');

let pilkis = 'Pilkis';
let murklys = 'Murklys';

const svorisPilkis = rand(3, 6);
const svorisMurklys = rand(3, 6);

if (svorisPilkis > svorisMurklys) {
    console.log('Pilkio svoris:', svorisPilkis, '; ', 'Murklio svoris:', svorisMurklys, '; ', murklys, 'yra lengvesnis');
} else if (svorisPilkis < svorisMurklys) {
    console.log('Pilkio svoris:', svorisPilkis, '; ', 'Murklio svoris:', svorisMurklys, '; ', pilkis, 'yra lengvesnis');
} else if (svorisPilkis == svorisMurklys) {
    console.log('Pilkio svoris:', svorisPilkis, '; ', 'Murklio svoris:', svorisMurklys, '; ', 'Abu katinukai vienodo svorio');
}

console.log('\n');

// Task # 3 ----------------------------------------------------------------------------

console.log('TASK #3');

let valtisKatinam;
let valtisKarvem;

// let nojausKatinai = 15;
// let nojausKarves = 15;

let katinai = rand(0, 30);
let karves = rand(0, 30);

if (katinai <= 15) {
    console.log('Atėjo', katinai, 'katinų; ', ' Nojaus valtyje TELPA', katinai, 'katinų');
} else {
    console.log('Atėjo', katinai, 'katinų; ', ' Nojaus valtyje NETELPA', katinai, 'katinų');
}

if (karves <= 15) {
    console.log('Atėjo', karves, 'karvių; ', ' Nojaus valtyje TELPA', karves, 'karvių');
} else {
    console.log('Atėjo', karves, 'karvių; ', ' Nojaus valtyje NETELPA', karves, 'karvių');
}


// if (karves <= 15) {

// } else {

// }



console.log('\n');

// Task # 4 ----------------------------------------------------------------------------

console.log('TASK #4');

let pirkinys = rand(1, 6);

if (pirkinys === 1 || pirkinys === 5) {
    console.log('Iškrito:', pirkinys, '; Antanas perka TELEVIZORIŲ');
} else if (pirkinys === 3 || pirkinys === 4) {
    console.log('Iškrito:', pirkinys, '; Antanas perka SKALBIMO MAŠINĄ');
} else {
    console.log('Iškrito:', pirkinys, '; Antanas perka ŠALDYTUVĄ');
}

console.log('\n');

// Task # 5 ----------------------------------------------------------------------------

// console.log('TASK #5');

// const sk1 = rand(1, 7);
// const sk2 = rand(1, 7);
// const sk3 = rand(1, 7);

// let small;
// let medium;
// let big;

// if (sk1 <= sk2 && sk1 <= sk3) {
//     small = sk1;
// } else if (sk1 >= sk2 && sk1 >= sk3) {
//     big = sk1;
// } else {
//     medium = sk1;
// }

// if (sk2 <= sk1 && sk2 <= sk3) {
//     small = sk2;
// } else if (sk2 >= sk1 && sk2 >= sk3) {
//     big = sk2;
// } else {
//     medium = sk2;
// }

// if(sk3 <= sk1 && sk3 <= sk2) {
//     small = sk3;
// } else if (sk3 >= sk1 && sk3 >= sk2) {
//     big = sk3;
// } else {
//     medium = sk3;
// }

// if (medium === undefined) {
//     medium = small;
// }

// console.log (small, medium, big);

//Task #5 ------------------------------------------------------------------------------------

console.log('TASK #5');

const R1 = rand(1, 7);
const R2 = rand(1, 7);
const R3 = rand(1, 7);

console.log('Neišrūšiuoti skaičiai:', R1, R2, R3);

let pirmas, antras, trecias;

if (R1 <= R2 && R1 <= R3) {
    pirmas = R1;
    if (R2 <= R3) {
        antras = R2;
        trecias = R3;
    } else {
        antras = R3;
        trecias = R2;
    }
} else if (R2 <= R1 && R2 <= R3) {
    pirmas = R2;
    if (R1 <= R3) {
        antras = R1;
        trecias = R3;
    } else {
        antras = R3;
        trecias = R1;
    }
} else {
    pirmas = R3;
    if (R1 <= R2) {
        antras = R1;
        trecias = R2;
    } else {
        antras = R2;
        trecias = R1;
    }
};

console.log('Išrūšiuoti skaičiai:', pirmas, antras, trecias);

console.log(`\n`);


// Bonus Task ------------------------------------------------------------------------------------

console.log('# BONUS TASK');

const a = rand(1, 50);
const b = rand(1, 50);
const c = rand(1, 50);
const d = rand(1, 50);


let first, second, third, fourth;

if (a <= b && a <= c && a <= d) {
    first = a;
    if (b <= c && b <= d) {
        second = b;
        if (c <= d) {
            third = c;
            fourth = d;
        } else {
            third = d;
            fourth = c;
        }
        if (c <= b && c <= d) {
            second = c;
        } else if (b <= d) {
            third = b;
            fourth = d;
        } else {
            third = d;
            fourth = b;
        }
        if (d <= b && d <= c) {
            second = d;
        } else if (b <= c) {
            third = b;
            fourth = c;
        } else {
            third = c;
            fourth = b;
        }
    }
} else if (b <= a && b <= c && b <= d) {
    first = b;
    if (a <= c & a <= d) {
        second = a;
        if (c <= d) {
            third = c;
            fourth = d;
        } else {
            third = d;
            fourth = c;
        }
        if (c <= a && c <= d) {
           second = c; 
        } else if (a <= d) {
            third = a;
            fourth = d;
        } else {
            third = d;
            fourth = a;
        }
        if (d <= a && d <= c) {
            second = d;
        } else if (a <= c) {
            third = a;
            fourth = c;
        } else {
            third = c;
            fourth = a;
        }
    } 
} else if (c <= a && c <= b && c <= d) {
    first = c;
    if (a <= b && a <= d) {
        second = a;
    } else if (b <= d) {
        third = b;
        fourth = d;
    } else {
        third = d;
        fourth = b;
        if (b <= a && b <= d) {
            second = b;
        } else if (a <= d) {
            third = a;
            fourth = d;
        } else {
            third = d;
            fourth = a;
        }
        if (d <= a && d <= b) {
            second = d;
        } else if (a <= b) {
            third = a;
            fourth = b;
        } else {
            third = b;
            fourth = a;
        }
    }
} else {
    first = d;
    if (a <= b && a <= c) {
        second = a;
    } else if (b <= c) {
        third = b;
        fourth = c;
    } else {
        third = c;
        fourth = b;
        if (b <= a && b <= c) {
            second = b;
        } else if (a <= c) {
            third = a;
            fourth = c;
        } else {
            third = c;
            fourth = a;
        } if (c <= a && c <= b) {
            second = c;
        } else if (a <= b) {
            third = a;
            fourth = b;
        } else {
            third = b;
            fourth = a;
        }
    }
}


console.log ('Išrūšiuoti skaičiai:', first, second, third, fourth);





















