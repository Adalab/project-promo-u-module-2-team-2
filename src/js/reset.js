'use strict';
//variable
const buttonReset = document.querySelector('.js_buttonReset');
const checkReset = document.querySelector('.js_checkReset');
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
  emailPreviewLink.href = '';
  phonePreviewLink.href = '';
  linkedinPreviewLink.href = '';
  githubPreviewLink.href = '';

  checkReset.checked = true;
  hiddenCreated.classList.add('js-hidden');
  btnCreated.classList.remove('grey');
  handleColorOne();
}

//evento
buttonReset.addEventListener('click', handleReset);
