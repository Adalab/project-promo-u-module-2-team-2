'use strict';
// Variables
const nameInput = document.querySelector('.js_name_input');
const emailInput = document.querySelector('.js_email_input');
const jobInput = document.querySelector('.js_job_input');

const namePreviewTitle = document.querySelector('.js_name_preview');
const emailPreviewLink = document.querySelector('.js_email_preview');
const jobPreviewTitle = document.querySelector('.js_job_preview');

// LOS PARÁMETROS DEL OBJETOS TIENEN LOS MISMOS NOMBRES QUE EN EL ANEXO!!
const data = {
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
  emailPreviewLink.href = `mailto:${data.email}`;
  jobPreviewTitle.innerHTML = data.job;
  namePreviewTitle.innerHTML = data.name;
}

// Funciones eventos
function handleInputName(event) {
  event.preventDefault();
  data.name = nameInput.value;
  if (nameInput.value === '') {
    namePreviewTitle.innerHTML = 'Nombre Apellido';
  }
  updatePreview();
}

function handleInputEmail() {
  data.email = emailInput.value;
  updatePreview();
}

function handleInputJob(event) {
  event.preventDefault();
  data.job = jobInput.value;
  if (jobInput.value === '') {
    jobPreviewTitle.innerHTML = 'Front-end Developer';
  }
  updatePreview();
}

//Eventos
nameInput.addEventListener('input', handleInputName);
emailInput.addEventListener('input', handleInputEmail);
jobInput.addEventListener('input', handleInputJob);
