

import axios from 'axios';


/*
    Prekės pavadinimas;
    Kaina;
    Kiekis sandėlyje;
    Trumpas aprašymas;
    ---Nuotrauka.
*/


const serverUrl = 'http://localhost/items';

// Ši funkcija pasileidžia pačioje pradžioje
const initApp = _ => {
    console.log('App started');
    initCreateForm();
    initProductsList();

    // Modalų uždarymo mygtukų logika
    const allCloseButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
    allCloseButtons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            const modal = button.closest('.modal'); // Surandam artimiausią tėvinį .modal elementą
            modal.style.display = 'none';
        });
    });
};


const initCreateForm = _ => {
    // Randam formą ir mygtuką
    const form = document.querySelector('[data-create-form]');
    const createBtn = form.querySelector('[data-create-btn]');

    // Pridedam mygtuko paspaudimo eventą
    createBtn.addEventListener('click', e => {
        e.preventDefault(); // sustabdom formos siuntimą
        // Surandam visus inputus su name atributu
        const allInputs = form.querySelectorAll('[name]');
        // Sukuriam objektą prekės duomenims saugoti
        const itemData = {};

        // Einam per visus inputus ir įdedam jų reikšmes į objektą
        allInputs.forEach(input => {
            const name = input.getAttribute('name'); // pavadinimas, kaina, kiekis, aprašymas
            const value = input.value; // input reikšmė
            itemData[name] = value; // itemData['pavadinimas'] = 'Tokia tai prekė'
        });

        console.log('Creating item with data:', itemData);

        axios.post(serverUrl, itemData) // dirba serverio kodas
            .then(res => { // sėkmingas atsakymas iš serverio ir toliau dirba kliento kodas
                // res --> pilnas atsakymo duomenų objektas
                // res.data --> atsakymo duomenys iš serverio
                console.log('New item created successfully', res.data);
                // Išvalom formą
                form.reset();
                // Atnaujinam prekių sąrašą
                initProductsList();
            })
            .catch(err => { // klaidingas atsakymas iš serverio ir toliau dirba kliento kodas
                console.error('Klaida kuriant prekę:', err);
            });
    });
};


const initProductsList = _ => {

    // Surandam prekių sąrašo vietą ir šabloną
    const productsListEl = document.querySelector('[data-products-list]');
    productsListEl.innerHTML = ''; // išvalome esamą turinį, kad atnaujinus prekių sąrašą jis nesidvigubintų vizualiai
    const productItemTemplate = document.querySelector('[data-product-template]');

    axios.get(serverUrl)
        .then(res => {
            const products = res.data.items; // gaunam prekių masyvą (items) iš serverio atsakymo (data)

            products.forEach(product => { // einame per visas prekes

                // Kuriam naują prekę iš HTML šablono <template>
                // Klonuojam tuščią šabloną
                const productEl = productItemTemplate.content.cloneNode(true);
                // Užpildom duomenis
                // productEl.querySelector('[data-name]') --> suranda elementą su data-name atributu klonuotam šablone
                // product.productName --> prekės pavadinimas iš serverio
                // .textContent --> įterpia tekstą į elementą
                productEl.querySelector('[data-name]').textContent = product.productName;
                productEl.querySelector('[data-price]').textContent = `Kaina: ${product.productPrice} EUR`;
                productEl.querySelector('[data-quantity]').textContent = `Kiekis sandėlyje: ${product.productQuantity}`;
                productEl.querySelector('[data-description]').textContent = product.productDescription;

                const deleteButton = productEl.querySelector('[data-delete-btn]');
                deleteButton.addEventListener('click', e => {
                    e.preventDefault();
                    // console.log(`Trinama prekė su ID: ${product.id}`);
                    initDeleteModal(product);
                });

                const editButton = productEl.querySelector('[data-edit-btn]');
                editButton.addEventListener('click', e => {
                    e.preventDefault();
                    initEditModal(product);
                });

                // Pridedam šabloną (template tag'as) su prekėm į sąrašą (ul tag'as);
                productsListEl.appendChild(productEl);

            });
        })
        .catch(err => {
            console.error('Klaida gaunant prekes:', err);
        });

};


const initDeleteModal = product => {
    // Čia bus modalo atidarymo logika
    const deleteModal = document.querySelector('[data-delete-modal]');

    // Randame elementą <span>, kuriame bus rodomas prekės pavadinimas
    const productNameSpan = deleteModal.querySelector('[data-delete-product-name]');
    // Įdedame prekės pavadinimą į modalą
    productNameSpan.textContent = product.productName;
    // Kadangi default nustatymu modalas nesimato, padarome, kad paspaudus delete mygtuką modalo langas pasirodytų
    deleteModal.style.display = 'block';

    // Darome, kad delete mygtukas ištrintų elementą (prekę) iš sąrašo
    const destroyButton = deleteModal.querySelector('[data-destroy-btn]');

    const destroyFunction = e => {
        // Čia bus prekės ištrynimo logika

        e.preventDefault();
        // užklausos pvz.: http://localhost/items/15 perdavimas per parametrą
        axios.delete(`${serverUrl}/${product.id}`) // užklausos metodas DELETE
            .then(res => {
                console.log('Prekė ištrinta sėkmingai:', res);
                deleteModal.style.display = 'none'; // uždarome modalą
                // nuim EventListener, kad paspaudus kitą kartą neveiktu sena funkcija
                destroyButton.removeEventListener('click', destroyFunction);
                // Papildomai atnaujiname prekių sąrašą, kad ištrinta prekė nebebūtų matoma
                initProductsList();
            })
            .catch(err => {
                console.error('Klaida trinant prekę:', err);
            });
    };

    // Pridedam mygtuko paspaudimo eventą
    destroyButton.addEventListener('click', destroyFunction);
};


const initEditModal = product => {

    const editModal = document.querySelector('[data-edit-modal]');
    // Čia bus modalo atidarymo logika
    editModal.style.display = 'block';
    // Užpildome formą esamais duomenimis
    const form = editModal.querySelector('form');
    form.productName.value = product.productName; // form.elements['productName'].value = product.productName;
    form.productPrice.value = product.productPrice; // paėmimas per name atributą supaprastintai
    form.productQuantity.value = product.productQuantity;
    form.productDescription.value = product.productDescription;

    const updateButton = editModal.querySelector('[data-update-btn]'); // surandam save mygtuką

    const updateFunction = e => {
        e.preventDefault();
        // Čia bus prekės atnaujinimo logika
        const updateData = {
            productName: form.productName.value,
            productPrice: form.productPrice.value,
            productQuantity: form.productQuantity.value,
            productDescription: form.productDescription.value
        };

        // užklausos pvz.: http://localhost/items/15 perdavimas per parametrą
        // updatedData yra body dalis
        axios.put(`${serverUrl}/${product.id}`, updateData) // užklausos metodas PUT
            .then(res => {
                console.log('Prekė atnaujinta sėkmingai:', res);
                editModal.style.display = 'none'; // uždarom modalą
                // Nuimam EventListener, kad paspaudus dar kartą neveiktų sena funkcija
                updateButton.removeEventListener('click', updateButton);
                // Papildomai reikia atnaujinti prekių sąrašą, akd matytųsi atnaujinti duomenys
                initProductsList();
            })
            .catch(err => {
                console.error('Klaida atnaujinant prekę', err);
            });
    };

    updateButton.addEventListener('click', updateFunction);

};






// Čia paleidžiame pradžios funkciją
initApp();




