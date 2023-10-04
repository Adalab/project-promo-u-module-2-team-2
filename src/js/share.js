'use strict';
//card_input
// Variables
const nameInput = document.querySelector('.js_name_input');
const jobInput = document.querySelector('.js_job_input');
const emailInput = document.querySelector('.js_email_input');
const phoneInput = document.querySelector('.js_phone_input');
const linkedinInput = document.querySelector('.js_linkedin_input');
const githubInput = document.querySelector('.js_github_input');

const namePreviewTitle = document.querySelector('.js_name_preview');
const jobPreviewTitle = document.querySelector('.js_job_preview');
const emailPreviewLink = document.querySelector('.js_email_preview');
const phonePreviewLink = document.querySelector('.js_phone_preview');
const linkedinPreviewLink = document.querySelector('.js_linkedin_preview');
const githubPreviewLink = document.querySelector('.js_github_preview');

// LOS PARÁMETROS DEL OBJETOS TIENEN LOS MISMOS NOMBRES QUE EN EL ANEXO!!
let data = {
  palette: 1, // el que viene por defecto
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

// Funciones
function updatePreview() {
  if (data.name === '') {
    namePreviewTitle.innerHTML = 'Nombre Apellido';
  } else {
    namePreviewTitle.innerHTML = data.name;
  }

  if (data.job === '') {
    jobPreviewTitle.innerHTML = 'Front-end Developer';
  } else {
    jobPreviewTitle.innerHTML = data.job;
  }

  emailPreviewLink.href = 'mailto:' + data.email;
  phonePreviewLink.href = data.phone;
  linkedinPreviewLink.href = 'https://linkedin.com/in/' + data.linkedin;
  githubPreviewLink.href = 'https://github.com/' + data.github;
  console.log('data', data);
}

// Funciones eventos
function handleInputName() {
  data.name = nameInput.value;
  updatePreview();
}

function handleInputJob() {
  data.job = jobInput.value;
  updatePreview();
}

function handleInputEmail() {
  data.email = emailInput.value;
  updatePreview();
}

function handleInputPhone() {
  data.phone = phoneInput.value;
  updatePreview();
}

function handleInputLinkedin() {
  data.linkedin = linkedinInput.value;
  updatePreview();
}
function handleInputGithub() {
  data.github = githubInput.value;
  updatePreview();
}

//Eventos
nameInput.addEventListener('input', handleInputName);
jobInput.addEventListener('input', handleInputJob);
emailInput.addEventListener('input', handleInputEmail);
phoneInput.addEventListener('input', handleInputPhone);
linkedinInput.addEventListener('input', handleInputLinkedin);
githubInput.addEventListener('input', handleInputGithub);

//share

const shareBtn = document.querySelector('.js_shareBtn');
const messageBox = document.querySelector('.js_messageBox');
const shareBox = document.querySelector('.js_shareBox'); // Donde se encuentra el link y la clase hidden
const cardLink = document.querySelector('.js_cardLink'); // donde se encuentra el enlace
const twitterLink = document.querySelector('.js_twitterLink');

/*
let data = '';*/
let dataLS = [];

/**
 * data = JSON.parse(localStorage.getItem('pepinos'));
if (data !== null) {
  console.log('Tiene datos');
} else {
  console.log('No tiene datos');
}

 */

function handleClickShareBtn() {
  console.log(data);
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(
      (responseJSON) => {
        // console.log(responseJSON);
        //data = responseJSON;
        if (responseJSON.success === false) {
          messageBox.innerHTML = 'Tienes que rellenar todos los datos, amiga.'; // mensaje de error
        } else if (responseJSON.success === true) {
          shareBox.classList.remove('js-hidden');
          cardLink.href = responseJSON.cardURL; // el link
          cardLink.innerHTML = responseJSON.cardURL; // lo que se ve
          //data = dataLS;
        }
        dataLS = data;
      }
      //aquí
    );

  localStorage.setItem('pepinos', JSON.stringify(data));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // para que al hacer click no se envíen los datos del formulario
  // mejor colocárselo al form que al shareBtn para que al escribir
  // en los inputs no se envíe al servidor
});

shareBtn.addEventListener('click', handleClickShareBtn);
