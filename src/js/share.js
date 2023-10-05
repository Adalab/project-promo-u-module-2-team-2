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

  namePreviewTitle.innerHTML = data.name.replace('<', '');
  jobPreviewTitle.innerHTML = data.job.replace('<', '');
  phonePreviewLink.href = `tel:${data.phone}`;
  emailPreviewLink.href = `mailto:${data.email}`;
  linkedinPreviewLink.href = `https://linkedin.com/in/${data.linkedin}`;
  githubPreviewLink.href = `https://github.com/${data.github}`;
  /* previewPhoto.src = data.photo; */

  if (data.name === '') {
    namePreviewTitle.innerHTML = 'Nombre Apellido';
  }
  if (data.job === '') {
    jobPreviewTitle.innerHTML = 'Front-end developer';
  }

}

// Funciones eventos
function handleInputForm(event) {
  if (event.target.name !== 'photo') {
    data[event.target.name] = event.target.value;
    updatePreview();
  }
  else{data[event.target.name] = event.target.files[0];}
}

//Eventos
form.addEventListener('input', handleInputForm);

//share

const shareBtn = document.querySelector('.js_shareBtn');
const messageBox = document.querySelector('.js_messageBox');
const shareBox = document.querySelector('.js_shareBox'); // Donde se encuentra el link y la clase hidden
const cardLink = document.querySelector('.js_cardLink'); // donde se encuentra el enlace
const twitterLink = document.querySelector('.js_twitterLink');


function handleClickShareBtn(event) {
  event.preventDefault();

  //(data);
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(
      (responseJSON) => {
        // (responseJSON);
        //data = responseJSON;

        if (responseJSON.success === false) {
          messageBox.innerHTML = 'Tienes que rellenar todos los datos, amiga.'; // mensaje de error
          if (responseJSON.error === 'Database error: ER_DATA_TOO_LONG') {
            alert('Imagen demasiado grande, prueba con una de menos de 40kb');
            return;
          }
        } else if (responseJSON.success === true) {
          shareBox.classList.remove('js-hidden');
          cardLink.href = responseJSON.cardURL; // el link
          cardLink.innerHTML = responseJSON.cardURL; // lo que se ve
          twitterLink.href = 'https://twitter.com/intent/tweet?text=%C2%A1Creado%20con%20AwesomeCards!%20(crea%20la%20tuya%20en%20http%3A%2F%2Fbeta.adalab.es%2Fproject-promo-u-module-2-team-2%2F)%20Ver%20tarjeta%3A&url=' + responseJSON.cardURL;
          localStorage.setItem('dataForm', JSON.stringify(data));
        }
      }
    );
}

function renderLocalStorage(){
  nameInput.value = data.name;
  jobInput.value = data.job;
  emailInput.value = data.email;
  phoneInput.value = data.phone;
  linkedinInput.value = data.linkedin;
  githubInput.value = data.github;
  namePreviewTitle.innerHTML = data.name;
  jobPreviewTitle.innerHTML = data.job;
  emailPreviewLink.href = data.email;
  phonePreviewLink.href = data.phone;
  linkedinPreviewLink.href = data.linkedin;
  githubPreviewLink.href = data.github;
  profileImage.style.backgroundImage = data.photo;
  profilePreview.style.backgroundImage = data.photo;
}

function getLocalStorage(){
  let storedData = JSON.parse(localStorage.getItem('dataForm'));

  if (storedData) {
    data = storedData;
    renderLocalStorage();

    // eslint-disable-next-line no-undef
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // para que al hacer click no se envíen los datos del formulario
      // mejor colocárselo al form que al shareBtn para que al escribir
      // en los inputs no se envíe al servidor
    });
  }
}

shareBtn.addEventListener('click', handleClickShareBtn);
window.addEventListener('load', getLocalStorage);