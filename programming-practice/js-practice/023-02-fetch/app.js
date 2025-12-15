


fetch('https://jsonplaceholder.typicode.com/todos/1')  // siunčia užklausą
      .then(response => response.json())  // laukiam duomenų, tada JSON gautą rezultatą
      .then(json => console.log(json));  // kai yra JSON, tada console loginam
      

// Turiu objektą

const namas = {
    kaminas: true,
    kambariai: 5,
    adresas: 'Pievų g. 15'
};

// Reikia perduoti per internetą, todėl reikia versti į stringą (tekstą)

const objektasKaipStringas = JSON.stringify(namas);

console.log(namas);
console.log(objektasKaipStringas);

// Perduodam

// Reikia vėl atversti į objektą

const namasVelObjektas = JSON.parse(objektasKaipStringas);

console.log(namasVelObjektas);



const usersUl = document.querySelector('ul#users-container');

const printUserList = users => {

    users.forEach(user => {
        const liTag = document.createElement('li');  // tuščias li elementas
        const userName = user.name;  // paimu iš struktūros name
        const phrase = user.company.catchPhrase;  // paimu frazę
        const id = user.id;
        const idVat = id - (id / 1.21);
        liTag.innerText = userName + ': ' + phrase; // į li dedu paimtą name ir frazę
        liTag.classList.add('user');
        usersUl.appendChild(liTag);
        const liVat = document.createElement('li');
        liVat.innerText = Number(idVat.toFixed(2));
        liVat.classList.add('vated');
        usersUl.appendChild(liVat);
    });
};




fetch('https://jsonplaceholder.typicode.com/users')  // siunčia užklausą
      .then(res => res.json())  // laukiam duomenų, tada JSON gautą rezultatą
      .then(users => {
        console.log(users);
        printUserList(users);
    });  // kai yra JSON, tada console loginam













