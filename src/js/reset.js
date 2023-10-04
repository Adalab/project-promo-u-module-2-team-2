'use strict';
//variable
const buttonReset = document.querySelector('.js_buttonReset');
const checkReset = document.querySelector('.js_checkReset'); // resetea la paleta
// Variables
//las coge de card_input.js

//funciones
function handleReset(event) {
  event.preventDefault();

  nameInput.value = '';
  jobInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  linkedinInput.value = '';
  githubInput.value = '';

  namePreviewTitle.innerHTML = 'Nombre Apellido';
  jobPreviewTitle.innerHTML = 'Front-end unicorn';
  profileImage.style.backgroundImage = ''; //url("./assets/images/cardExample_palette1.jpg")
  profilePreview.style.backgroundImage = '';
  emailPreviewLink.href = '';
  phonePreviewLink.href = '';
  linkedinPreviewLink.href = '';
  githubPreviewLink.href = '';

  // los valores de data vacíos
  data = {
    palette: 1, // el que viene por defecto
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  };

  checkReset.checked = true;

  btnCreated.disabled = false;
  hiddenCreated.classList.add('js-hidden');
  shareBox.classList.add("js-hidden");
  btnCreated.classList.remove('grey');

  messageBox.innerHTML ='';

  handleColorOne();
}

//evento
buttonReset.addEventListener('click', handleReset);
