'use strict';
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

const colorPaletteOne = document.querySelector('.color_palette_1');
const colorPaletteTwo = document.querySelector('.color_palette_2');
const colorPaletteThree = document.querySelector('.color_palette_3');
const colorPaletteFour = document.querySelector('.color_palette_4');
const colorPaletteFive = document.querySelector('.color_palette_5');
const colorPaletteSix = document.querySelector('.color_palette_6');
const card = document.querySelector('.js_card');




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
  phonePreviewLink.href =  data.phone;
  linkedinPreviewLink.href =  'https://linkedin.com/in/' + data.linkedin;
  githubPreviewLink.href = 'https://github.com/' + data.github;

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


function handleColorOne() {
  card.classList.remove('card--palette2');
  card.classList.remove('card--palette3');
  card.classList.remove('card--palette4');
  card.classList.remove('card--palette5');
  card.classList.remove('card--palette6');
  card.classList.add('card--palette1');
}

function handleColorTwo() {
  card.classList.remove('card--palette1');
  card.classList.remove('card--palette3');
  card.classList.remove('card--palette4');
  card.classList.remove('card--palette5');
  card.classList.remove('card--palette6');
  card.classList.add('card--palette2');
}

function handleColorThree() {
  card.classList.remove('card--palette1');
  card.classList.remove('card--palette2');
  card.classList.remove('card--palette4');
  card.classList.remove('card--palette5');
  card.classList.remove('card--palette6');
  card.classList.add('card--palette3');
}

function handleColorFour() {
  card.classList.remove('card--palette1');
  card.classList.remove('card--palette2');
  card.classList.remove('card--palette3');
  card.classList.remove('card--palette5');
  card.classList.remove('card--palette6');
  card.classList.add('card--palette4');
}

function handleColorFive() {
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
}

//Eventos
nameInput.addEventListener('input', handleInputName);
jobInput.addEventListener('input', handleInputJob);
emailInput.addEventListener('input', handleInputEmail);
phoneInput.addEventListener('input', handleInputPhone);
linkedinInput.addEventListener('input', handleInputLinkedin);
githubInput.addEventListener('input', handleInputGithub);

colorPaletteOne.addEventListener('click', handleColorOne);
colorPaletteTwo.addEventListener('click', handleColorTwo);
colorPaletteThree.addEventListener('click', handleColorThree);
colorPaletteFour.addEventListener('click', handleColorFour);
colorPaletteFive.addEventListener('click', handleColorFive);
colorPaletteSix.addEventListener('click', handleColorSix);


