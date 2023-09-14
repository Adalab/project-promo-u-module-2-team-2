'use strict';

//hacer imagen
//poner variables nombre completo, puesto, email, teléfono, linkedin, github
//un evento que recoge todos los input

//si rellenas nombre (currentTarget) contenido != vacío tiene que aparecer en la tarjeta

//innerHTML no sabemos muy bien para qué

const nombreCompleto = document.querySelector('.js-nombre_completo');
const nombreValue = document.querySelector('.nombre_value');
const puesto = document.querySelector('.js-puesto');
const puestoValue = document.querySelector('.puesto_value');
const email = document.querySelector('.js-email');
const emailValue = document.querySelector('.email_value');
//const phone = document.querySelector('.js-phone');
//const phoneValue = document.querySelector('.phone_value');
const linkedin = document.querySelector('.js-linkedin');
const linkedinValue = document.querySelector('.linkedin_value');
const github = document.querySelector('.js-github');
const githubValue = document.querySelector('.github_value');

function updateValueNombre(event) {
  nombreValue.textContent = event.target.value;

  if (event.target.value === '') {
    nombreValue.textContent = 'Nombre Apellido';
  }
}

function updateValuePuesto(event) {
  puestoValue.textContent = event.target.value;

  if (event.target.value === '') {
    puestoValue.textContent = 'Front Developer';
  }
}

function updateValueEmail(event) {
  emailValue.href = event.target.value;
}

/*function updateValuePhone(event) {
  phoneValue.href = event.target.value;
}*/

function updateValueLinkedin(event) {
  linkedinValue.href = event.target.value;
}

function updateValueGithub(event) {
  githubValue.href = event.target.value;
}
//evento
nombreCompleto.addEventListener('input', updateValueNombre);
puesto.addEventListener('input', updateValuePuesto);
email.addEventListener('input', updateValueEmail);
//phone.addEventListener('input', updateValuePhone);
linkedin.addEventListener('input', updateValueLinkedin);
github.addEventListener('input', updateValueGithub);
