


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



// Task #1 ------------------------------------------------------------------------------------------------------------
console.log('Task #1');

const h2First = document.querySelector('h2');
const h2Second = document.querySelector('h2 + h2');
const mygtukas = document.querySelector('button');

mygtukas.addEventListener('click', function () {
    h2First.innerText = rand(1, 6);
    h2Second.innerText = rand(1, 6);

    if (h2First.innerText == h2Second.innerText) {
        h2First.style.color = 'crimson';
        h2Second.style.color = 'crimson';
    } else {
        h2First.style.color = 'white';
        h2Second.style.color = 'white';
    }
});



// Task #2 ------------------------------------------------------------------------------------------------------------
console.log('Task #2');







































