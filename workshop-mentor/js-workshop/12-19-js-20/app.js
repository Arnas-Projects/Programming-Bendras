

const month = document.querySelector('div.month');
const weekday = document.querySelector('div.weekday');
const dayNumber = document.querySelector('div.day-number');
const year = document.querySelector('div.year');


const DateNow = new Date();

const AllMonths = [
    "Sausis",
    "Vasaris",
    "Kovas",
    "Balandis",
    "Gegužė",
    "Birželis",
    "Liepa",
    "Rugpjūtis",
    "Rugsėjis",
    "Spalis",
    "Lapkritis",
    "Gruodis"
];

month.innerText = AllMonths[DateNow.getMonth()];
// weekday.innerText = day.getDay();


const AllWeekDays = [
    "Sekmadienis",
    "Pirmadienis",
    "Antradienis",
    "Trečiadienis",
    "Ketvirtadienis",
    "Penktadienis",
    "Šeštadienis"
];

weekday.innerText = AllWeekDays[DateNow.getDay()];

dayNumber.innerText = DateNow.getDate();

year.innerText = DateNow.getFullYear();







