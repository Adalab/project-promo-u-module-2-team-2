'use strict';
//BOTÓN CREAR TARJETA

//constantes vitales
//const shareCreated = document.querySelector('.js-currentTargetCreated'); //current Target (grandpa) donde se escucha la acción
const btnCreated = document.querySelector('.js-btnCreated'); //target (parent) hace la acción
const hiddenCreated = document.querySelector('.js-hidden');

//funciones
function handleClickCreated(event) {
  event.preventDefault();
  btnCreated.disabled = true;
  btnCreated.classList.add('grey');
  hiddenCreated.classList.remove('js-hidden');
}

//eventos
btnCreated.addEventListener('click', handleClickCreated);
