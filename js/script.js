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

let itemsLibrary = '';

for (let i = 0; i < img.length; i++) {
    itemsLibrary += `
    <div class="img-box">
        <img src=${img[i]} alt="${title[i]} anteprima">
    </div > `
    console.log(itemsLibrary);
}

const boxImmagini = document.querySelector('.box-immagini');
boxImmagini.innerHTML = itemsLibrary;

const imgBox = document.getElementsByClassName('img-box');
let activeImgbox = 0
imgBox[activeImgbox].classList.add('active');

const up = document.querySelector('.up');
const down = document.querySelector('.down');

down.addEventListener("click", function () {

    if (activeImgbox < img.length - 1) {

        imgBox[activeImgbox].classList.remove('active');

        activeImgbox++;

        imgBox[activeImgbox].classList.add('active');

    }
});

up.addEventListener("click", function () {

    if (activeImgbox > 0) {

        imgBox[activeImgbox].classList.remove('active');

        activeImgbox--;

        imgBox[activeImgbox].classList.add('active');

    }



})