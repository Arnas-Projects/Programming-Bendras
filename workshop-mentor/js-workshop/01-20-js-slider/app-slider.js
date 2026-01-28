


/*
    Padaryti "sliderį" su ~10 jūsų pasirinktų paveiksliukų. 
    Prie kievieno paveiksliuko pridėti trumpą tekstą 
    (kaip "{nuotraukos tekstas}" makete), 
    kuris "slidintusi" irgi kartu su paveiksliuku.
 
    Reikalavimai:
    Technologijos - Html, Css, JavaScript

    Responsive - Maksimalus CONT konteinerio plotis 1024px. 
    Minimalus - 480px.

    Atsidarius puslapį užsikrauna automatiškai beveikiantis slideris 
    kas 3s su begalybiniu ciklu (atėjus paskutinei skaidrei kraunama pirmoji)
    Ciklą galima sustabdyti paspaudus po slideriu per vidurį PAUSE mygtuką
    Ciklą galima prasukti spaudžiant po slideriu kairėje ir dešnėje mygtukus next ir previous
    Nuotraukų "Thumbnails" po slideriu turi būti aktyvūs, 
    slidinami į šonus jeigu nuotraukų daugiau negu 6 ir 
    paspaudus cliklas turi iškart nueiti į tą nuotrauką ir testi atitinkamai.
*/


// const slides = [

//     { img: './images/1.jpeg', text: 'Image 1' },
//     { img: './images/2.jpeg', text: 'Image 2' },
//     { img: './images/3.jpeg', text: 'Image 3' },
//     { img: './images/4.jpeg', text: 'Image 4' },
//     { img: './images/5.jpeg', text: 'Image 5' },
//     { img: './images/6.jpeg', text: 'Image 6' },
//     { img: './images/7.jpeg', text: 'Image 7' },
//     { img: './images/8.jpeg', text: 'Image 8' },
//     { img: './images/9.jpeg', text: 'Image 9' },
// ];


const slides = [

    { img: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Image 1' },
    { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Image 2' },
    { img: 'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Image 3' },
    { img: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Image 4' },
    { img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Image 5' },
    { img: 'https://images.unsplash.com/photo-1516821371801-280cf8069a4e?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Image 6' },
    { img: 'https://plus.unsplash.com/premium_photo-1668756498138-e6590e05ffa9?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Image 7' },
    { img: 'https://images.unsplash.com/photo-1588336899284-950764f07147?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Image 8' },
    { img: 'https://plus.unsplash.com/premium_photo-1690576837112-f897ce619358?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Image 9' },
];


let currentIndex = 0;
let isPaused = false;
let timer = null;

const currentImg = document.querySelector('div.container img');
const imgText = document.querySelector('h3');
const navigationButtons = document.querySelectorAll('div.btns-container button');


const updateSlider = (index, direction = 'next') => {
    const transitionClass = direction === 'next' ? 'slide-next' : 'slide-prev';

    currentImg.classList.add(transitionClass);

    setTimeout(() => {
        currentImg.src = slides[index].img;
        imgText.textContent = `${slides[index].text}`;
        currentIndex = index;

        // Reset position instantly before fading back in
        currentImg.style.transition = 'none';
        // Place it on the opposite side so it "slides in"
        currentImg.style.transform = direction === 'next' ? 'translateX(100px)' : 'translateX(-100px)';
        currentImg.style.opacity = '0';

        // Force a reflow to make the browser notice the position reset
        currentImg.offsetHeight;

        // Slide back to center
        currentImg.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        currentImg.classList.remove('slide-next', 'slide-prev');
        currentImg.style.transform = 'translateX(0)';
        currentImg.style.opacity = '1';

        // Update Thumbnails
        const allThumbs = document.querySelectorAll('.btns-container button');
        allThumbs.forEach((btn, i) => {
            btn.style.opacity = (i === index) ? "1" : "0.5";
            btn.style.transform = (i === index) ? "scale(1.1)" : "scale(1)";
        });

        const activeBtn = allThumbs[index];
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }, 500);
};


const startTimer = () => {
    // First, clear any existing timer to prevent "speeding up"
    stopTimer();

    timer = setInterval(() => {
        let nextIndex = (currentIndex + 1) % slides.length;
        updateSlider(nextIndex, 'next');
    }, 4000);
};

const stopTimer = () => {
    clearInterval(timer);
};

// Start the auto-cycle when the page loads
startTimer();


const playPauseBtn = document.querySelector('.play-btn');

playPauseBtn.addEventListener('click', () => {
    if (isPaused) {
        startTimer();
        playPauseBtn.textContent = '||'; // Show pause icon
    } else {
        stopTimer();
        playPauseBtn.textContent = '▶'; // Show play icon
    }
    isPaused = !isPaused; // Toggle the true/false value
});


const rightBtn = document.querySelector('.right-btn');
rightBtn.addEventListener('click', () => {
    let nextIndex = (currentIndex + 1) % slides.length;
    updateSlider(nextIndex, 'next'); // Pass 'next'
    if (!isPaused) startTimer();
});

// Example for Thumbnail buttons
navigationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        updateSlider(index);
        if (!isPaused) startTimer();
    });
});

const leftBtn = document.querySelector('.left-btn');

leftBtn.addEventListener('click', () => {
    let prevIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlider(prevIndex, 'prev'); // Pass 'prev'
    if (!isPaused) startTimer();
});

const btnsContainer = document.querySelector('.btns-container');

const createThumbnails = () => {
    // Clear existing placeholder buttons
    btnsContainer.innerHTML = '';

    slides.forEach((slide, index) => {
        const btn = document.createElement('button');
        // Create an image element inside the button
        btn.innerHTML = `<img src="${slide.img}" style="width: 100px; height: 50px; object-fit: cover; border-radius: 4px;">`;

        btn.addEventListener('click', () => {
            updateSlider(index);
            if (!isPaused) startTimer();
        });
        btnsContainer.appendChild(btn);
    });
};

createThumbnails();


const masyvas =
    [
        {
            'name': ['Paulius']
        }
    ];

masyvas.forEach(item => {
    console.log(item.name[0]);
});

console.log(masyvas[0].name[0]);