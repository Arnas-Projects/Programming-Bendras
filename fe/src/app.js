

import axios from 'axios';


/*
    Prekės pavadinimas;
    Kaina;
    Kiekis sandėlyje;
    Trumpas aprašymas;
    ---Nuotrauka.
*/


const serverUrl = 'http://localhost/items';


const initApp = _ => {
    console.log('App started');
    initCreateForm();
    initProductsList();
};


////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////// CREATE FORM
////////////////////////////////////////////////////////////////////////////////////////////


const initCreateForm = _ => {

    // Randam formą ir mygtuką
    const form = document.querySelector('[data-create-form]');
    const createBtn = form.querySelector('[data-create-btn]');

    // Pridedam mygtuko mygtuko paspaudimo eventą
    createBtn.addEventListener('click', e => {
        e.preventDefault(); // sustabdom formos siuntimą
        // Surandam visus inputus su name atributu
        const allInputs = form.querySelectorAll('[name]');
        // Sukuriam tuščią objektą prekės duomenims laikyti
        const itemData = {};

        // Einam per visus inputus ir įdedam jų reikšmes į objektą
        allInputs.forEach(input => {
            const name = input.getAttribute('name'); // pavadinimas, kaina, kiekis, aprašymas
            const value = input.value; // input reikšmė
            itemData[name] = value; // itemData['pavadinimas'] = 'Tokia tai prekė'
        });

        // Duomenų validacija
        if (!itemData.productName || !itemData.productPrice) {
            const errorFields = [];
            if (!itemData.productName) errorFields.push('productName');
            if (!itemData.productPrice) errorFields.push('productPrice');
            showAlert('Product name and price are required', 'danger');
            // pažymim klaidingus laukus
            allInputs.forEach(input => {
                const name = input.getAttribute('name');
                if (errorFields.includes(name)) {
                    input.classList.add('is-invalid'); // bootstrap klasė
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            return;
        }


        loader();

        axios.post(serverUrl, itemData) // dirba serverio kodas
            .then(res => { // sėkmingas atsakymas iš serverio ir toliau dirba kliento kodas
                // res --> pilnas atsakymo duomenų atsakymas
                // data --> pilnas atsakymas iš serverio
                // console.log(res.data.message);
                loader(false);
                showAlert(res.data.message, res.data.messageType);
                // Išvalom formą
                form.reset();
                // atnaujinam prekių sąrašą
                initProductsList();

                // nuimam klaidų žymes iš inputų
                allInputs.forEach(input => {
                    input.classList.remove('is-invalid'); // bootstrap klasė
                });
            })
            .catch(err => {
                // console.error('Klaida kuriant prekę:', err);
                showAlert(err.response.data.message, err.response.data.messageType);
                loader(false);
                if (err.response.data.errorFields) {
                    // pažymime klaidingus laukelius
                    const errorFields = err.response.data.errorFields;
                    allInputs.forEach(input => {
                        const name = input.getAttribute('name');
                        if (errorFields.includes(name)) {
                            input.classList.add('is-invalid'); // bootstrap klasė
                        } else {
                            input.classList.remove('is-invalid');
                        }
                    });
                }
            });
    });
};



////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////// PRODUCT LIST
////////////////////////////////////////////////////////////////////////////////////////////

const initProductsList = _ => {
    console.log('Kraunam prekių sąrašą iš serverio...');
    // Surandam prekių sąrašo vietą ir šabloną
    const productsListEl = document.querySelector('[data-products-list]');
    productsListEl.innerHTML = ''; // išvalom esamą turinį
    const productItemTemplate = document.querySelector('[data-product-template]');
    axios.get(serverUrl)
        .then(res => {
            const products = res.data.items; // gaunam prekių masyvą (items) iš serverio atsakymo (data)
            products.forEach(product => { // einame per visas prekes
                // Kuriam naują prekę iš šablono
                // Klonuojam tuščią šabloną
                const productEl = productItemTemplate.content.cloneNode(true);
                // Užpildom duomenis
                // productEl.querySelector('[data-name]') - suranda elementą su data-name atributu klonuotame šablone
                // product.productName - prekės pavadinimas iš serverio
                // .textContent - įterpia tekstą į elementą
                productEl.querySelector('[data-name]').innerHTML = product.productName;
                productEl.querySelector('[data-name]').textContent = product.productName;
                productEl.querySelector('[data-price]').textContent = `Kaina: ${product.productPrice} EUR`;
                productEl.querySelector('[data-quantity]').textContent = `Kiekis sandėlyje: ${product.productQuantity}`;
                productEl.querySelector('[data-description]').textContent = product.productDescription;


                // DELETE

                const delBtn = productEl.querySelector('[data-delete-btn]');
                delBtn.addEventListener('click', e => {
                    e.preventDefault();
                    // console.log(`Trinama prekė su ID: ${product.id}`);
                    e.preventDefault();
                    initDeleteModal(product);
                    // čia bus trynimo kodas
                });



                // EDIT

                const editBtn = productEl.querySelector('[data-edit-btn]');
                editBtn.addEventListener('click', e => {
                    e.preventDefault();
                    initEditModal(product);
                });

                // Pridedam šabloną su prekėm į sąrašą
                productsListEl.appendChild(productEl);

            });
        })
        .catch(err => {
            console.error('Klaida gaunant prekes:', err);
        });
};


////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////// DELETE MODAL
////////////////////////////////////////////////////////////////////////////////////////////

const initDeleteModal = product => {
    const deleteModal = document.querySelector('[data-delete-modal]');
    // Randame elementą, kuriame bus rodomas prekės pavadinimas
    const productNameSpan = deleteModal.querySelector('[data-delete-product-name]');
    // Įdedame prekės pavadinimą į modalą
    productNameSpan.textContent = product.productName;
    deleteModal.style.display = 'block';
    const destroyBtn = deleteModal.querySelector('[data-destroy-btn]');
    const destroyFunction = e => {
        // čia bus prekės ištrynimo logika
        e.preventDefault();
        // užklausos pvz.: http://localhost/items/15 perdavimas per parametrą
        axios.delete(`${serverUrl}/${product.id}`) // užklausos metodas DELETE
            .then(res => { // visi 200-299 statusai
                showAlert(res.data.message, res.data.messageType);
                deleteModal.style.display = 'none'; // uždarom modalą
                // nuimam išklausytoją, kad paspaudus kitą kartą neveiktų sena funkcija
                destroyBtn.removeEventListener('click', destroyFunction);
                // Papildomai reikėtų atnaujinti prekių sąrašą, kad ištrinta prekė nebebūtų matoma
                initProductsList();
            })
            .catch(err => { // visi kiti statusai
                // išvedam klaidos pranešimą
                showAlert(err.response.data.message, err.response.data.messageType);
                deleteModal.style.display = 'none'; // uždarom modalą
                destroyBtn.removeEventListener('click', destroyFunction);
            });
    }
    // Čia bus modalo uždarymo logika
    const closeBtns = deleteModal.querySelectorAll('[data-bs-dismiss="modal"]');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            deleteModal.style.display = 'none';
            // nuimam išklausytoją, kad paspaudus kitą kartą neveiktų sena funkcija
            destroyBtn.removeEventListener('click', destroyFunction);
        });
    });
    // Pridedam mygtuko paspaudimo eventą
    destroyBtn.addEventListener('click', destroyFunction);
};




////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////// EDIT MODAL
////////////////////////////////////////////////////////////////////////////////////////////

const initEditModal = product => {
    const editModal = document.querySelector('[data-edit-modal]');
    // čia bus modalo atidarymo logika
    editModal.style.display = 'block';
    // užpildome formą esamais duomenimis
    const form = editModal.querySelector('form');
    form.productName.value = product.productName; // form.elements['productName'].value = product.productName;
    form.productPrice.value = product.productPrice; // paėmimas per name atributą supaprastintai
    form.productQuantity.value = product.productQuantity;
    form.productDescription.value = product.productDescription;
    const updateBtn = editModal.querySelector('[data-update-btn]'); // surandam save mygtuką
    const updateFunction = e => {
        e.preventDefault();
        // čia bus prekės atnaujinimo logika
        const updatedData = {
            productName: form.productName.value,
            productPrice: form.productPrice.value,
            productQuantity: form.productQuantity.value,
            productDescription: form.productDescription.value
        };
        // užklausos pvz.: http://localhost/items/15 perdavimas per parametrą
        // updatedData yra body dalis
        axios.put(`${serverUrl}/${product.id}`, updatedData) // užklausos metodas PUT
            .then(res => {
                showAlert(res.data.message, res.data.messageType);
                editModal.style.display = 'none'; // uždarom modalą
                // nuimam išklausytoją, kad paspaudus kitą kartą neveiktų sena funkcija
                updateBtn.removeEventListener('click', updateFunction);
                // Papildomai reikėtų atnaujinti prekių sąrašą, kad matytųsi atnaujinti duomenys
                initProductsList();
            })
            .catch(err => {
                // išvedam klaidos pranešimą
                showAlert(err.response.data.message, err.response.data.messageType);
                editModal.style.display = 'none'; // uždarom modalą
                updateBtn.removeEventListener('click', updateFunction);
            });
    }
    // čia bus modalo uždarymo logika
    const closeBtns = editModal.querySelectorAll('[data-bs-dismiss="modal"]');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            editModal.style.display = 'none';
            // nuimam išklausytoją, kad paspaudus kitą kartą neveiktų sena funkcija
            updateBtn.removeEventListener('click', updateFunction);
        });
    });
    // Pridedam mygtuko paspaudimo eventą
    updateBtn.addEventListener('click', updateFunction);
}


const showAlert = (message, type = 'success') => {
    // Čia bus alerto rodymo logika
    const bin = document.querySelector('[data-messages-bin]');
    // kuriam naują alert elementą
    const alert = document.createElement('div');
    // prideda klasę pagal Boostrap alert sistemą
    alert.className = `alert alert-${type}`;
    // pridedam role atributą
    alert.setAttribute('role', 'alert');
    // pridedam tekstą
    alert.textContent = message;
    // įdedam alert į bin
    bin.insertBefore(alert, bin.firstChild);

    const timeoutId = setTimeout(_ => {
        alert.remove();
    }, 10000);

    alert.addEventListener('click', _ => {
        clearTimeout(timeoutId); // sustabdom timeout kad nebandytų pašalinti jau pašalinto elemento
        alert.remove();
    });
};


const loader = (show = true) => {
    const loader = document.querySelector('[data-loader]');
    loader.style.display = show ? 'flex' : 'none';
};





// Va čia pasileidžia funkcija
initApp();
