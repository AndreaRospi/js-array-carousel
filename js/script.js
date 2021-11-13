const img = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const news = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const boxImmagini = document.querySelector('.box-immagini');
const boxFull = document.querySelector('.box-fullimg');
const boxNews = document.querySelector('.box-news');

for (let i = 0; i < img.length; i++) {
    // ciclo libreria
    boxImmagini.innerHTML += `
    <div class="img-box">
        <img src=${img[i]} alt="${title[i]} anteprima">
    </div> `


    // ciclo fullimg immagini
    boxFull.innerHTML += `
    <div class="full-img-box">
        <img src=${img[i]} alt="${title[i]} anteprima">
    </div>
    `

    // ciclo news
    boxNews.innerHTML += `
    <div class="text-box">
        <h2>${title[i]}</h2> 
        <p>${news[i]}</p>
    </div>
    `
}


const imgBox = document.getElementsByClassName('img-box');
const fullImgBox = document.getElementsByClassName('full-img-box');
const textBox = document.getElementsByClassName('text-box');
let activeImgbox = 0;
imgBox[activeImgbox].classList.add('active');
fullImgBox[activeImgbox].classList.add('active');
textBox[activeImgbox].classList.add('active');

const up = document.querySelector('.up');
const down = document.querySelector('.down');

down.addEventListener("click", function () {
    imgBox[activeImgbox].classList.remove('active');
    fullImgBox[activeImgbox].classList.remove('active');
    textBox[activeImgbox].classList.remove('active');

    if (activeImgbox < img.length - 1) {
        activeImgbox++;
    } else {
        activeImgbox = 0;
    }

    imgBox[activeImgbox].classList.add('active');
    fullImgBox[activeImgbox].classList.add('active');
    textBox[activeImgbox].classList.add('active');
});

up.addEventListener("click", function () {
    imgBox[activeImgbox].classList.remove('active');
    fullImgBox[activeImgbox].classList.remove('active');
    textBox[activeImgbox].classList.remove('active');

    if (activeImgbox > 0) {
        activeImgbox--;
    } else {
        activeImgbox = img.length - 1;
    }

    imgBox[activeImgbox].classList.add('active');
    fullImgBox[activeImgbox].classList.add('active');
    textBox[activeImgbox].classList.add('active');
});