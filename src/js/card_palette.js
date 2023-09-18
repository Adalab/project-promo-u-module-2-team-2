'use strict';
// Variables
const colorPaletteOne = document.querySelector('.color_palette_1');
const colorPaletteTwo = document.querySelector('.color_palette_2');
const colorPaletteThree = document.querySelector('.color_palette_3');
const colorPaletteFour = document.querySelector('.color_palette_4');
const colorPaletteFive = document.querySelector('.color_palette_5');
const colorPaletteSix = document.querySelector('.color_palette_6');
const card = document.querySelector('.js_card');

// Funciones
function handleColorOne() {
  card.classList.remove('card--palette2');
  card.classList.remove('card--palette3');
  card.classList.remove('card--palette4');
  card.classList.remove('card--palette5');
  card.classList.remove('card--palette6');
  card.classList.add('card--palette1');
  if (card.classList.contains('card--palette1')) {
    const img = document.querySelector('.card__image'); // ?
    img.src = '../assets/images/cardExample_palette1.jpg';
  }
}

function handleColorTwo() {
  card.classList.remove('card--palette1');
  card.classList.remove('card--palette3');
  card.classList.remove('card--palette4');
  card.classList.remove('card--palette5');
  card.classList.remove('card--palette6');
  card.classList.add('card--palette2');
  if (card.classList.contains('card--palette2')) {
    const img = document.querySelector('.card__image'); // ?
    img.src = '../assets/images/cardExample_palette1.jpg';
  }
}

function handleColorThree() {
  card.classList.remove('card--palette1');
  card.classList.remove('card--palette2');
  card.classList.remove('card--palette4');
  card.classList.remove('card--palette5');
  card.classList.remove('card--palette6');
  card.classList.add('card--palette3');
  if (card.classList.contains('card--palette3')) {
    const img = document.querySelector('.card__image'); // ?
    img.src = '../assets/images/cardExample_palette2.jpg';
  }
}

function handleColorFour() {
  card.classList.remove('card--palette1');
  card.classList.remove('card--palette2');
  card.classList.remove('card--palette3');
  card.classList.remove('card--palette5');
  card.classList.remove('card--palette6');
  card.classList.add('card--palette4');
  if (card.classList.contains('card--palette4')) {
    const img = document.querySelector('.card__image'); // ?
    img.src = '../assets/images/cardExample_palette3.jpg';
  }
}

/* function handleColorFive() {
  card.classList.remove('card--palette1');
  card.classList.remove('card--palette2');
  card.classList.remove('card--palette3');
  card.classList.remove('card--palette4');
  card.classList.remove('card--palette6');
  card.classList.add('card--palette5');
}

function handleColorSix() {
  card.classList.remove('card--palette2');
  card.classList.remove('card--palette3');
  card.classList.remove('card--palette4');
  card.classList.remove('card--palette5');
  card.classList.remove('card--palette1');
  card.classList.add('card--palette6');
} */

//Eventos
colorPaletteOne.addEventListener('click', handleColorOne);
colorPaletteTwo.addEventListener('click', handleColorTwo);
colorPaletteThree.addEventListener('click', handleColorThree);
colorPaletteFour.addEventListener('click', handleColorFour);
/* colorPaletteFive.addEventListener('click', handleColorFive);
colorPaletteSix.addEventListener('click', handleColorSix); */
