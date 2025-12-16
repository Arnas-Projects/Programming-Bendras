


const buttonBMI = document.querySelector('button');

function calculateBMI() {
    const heightTag = Number(document.querySelector('input.height').value);
    const weightTag = Number(document.querySelector('input.weight').value);

    const BMIresult = Number((weightTag / ((heightTag/100)**2)).toFixed(2));

    const outputTag = document.querySelector('.bmi');
    outputTag.value = BMIresult;


    const weightCondition = document.querySelector('span');

    if (BMIresult < 18.5) {
        weightCondition.innerText = 'Underweight';
    } else if (BMIresult <= 24.9) {
        weightCondition.innerText = 'Healthy';
    } else if (BMIresult <= 29.9) {
        weightCondition.innerText = 'Overweight';
    } else {
        weightCondition.innerText = 'Obesity';
    }
}

buttonBMI.addEventListener('click', calculateBMI);











// Task 1 ------------------------------------------------------------------------------------------------------
console.log('\nTask 1');










// Task 2 ------------------------------------------------------------------------------------------------------
console.log('\nTask 2');












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











