


// random funkcija
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

// atsitiktinės spalvos funkcija
function randColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
};





// Task # 10 ---------------------------------------------------------------------------------------------------------
console.log('\nTask #10');
console.log('\n');

/* 
    Uždavinį atlikite atskirame html faile. 
    Visame ekrane atsitiktine tvarka “išmėtykite“ 
    444 pusiau permatomus atsitiktinės spalvos ir 
    atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. 
    
    Apskritimai turi tolygiai (pagal funkciją rand()) dengti 
    visą ekraną.
*/


const bodyTag = document.querySelector('body');



for (let i = 0; i < 444; i++) {

    const spalva = randColor();
    const skersmuo = rand(44, 144);

    const divTag = document.createElement('div');
    divTag.style.position = 'absolute';
    divTag.style.top = rand(0, window.innerHeight) + 'px';
    divTag.style.left = rand(1, window.innerWidth) + 'px';
    divTag.style.backgroundColor = spalva + '70';
    divTag.style.width = skersmuo + 'px';
    divTag.style.height = skersmuo + 'px';
    divTag.style.borderRadius = '50%';
    bodyTag.appendChild(divTag);

};








