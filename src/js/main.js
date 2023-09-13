'use strict';

//creamos variables
const form = document.querySelector('.js-currentTarget'); /* form */
const designForm = document.querySelector('.js_design_form'); /* divs */
const fillForm = document.querySelector('.js_fill_form');
const shareForm = document.querySelector('.js_share_form');

//funciones
function openDiv(div) { /* para abrir los divs */
  div.classList.remove('collapsed');
  if (div === designForm) {
    fillForm.classList.add('collapsed');
    shareForm.classList.add('collapsed');
  } else if (div === fillForm) {
    designForm.classList.add('collapsed');
    shareForm.classList.add('collapsed');
  } else if (div === shareForm) {
    designForm.classList.add('collapsed');
    fillForm.classList.add('collapsed');
  }
}

// Evento para manejar el clic en las leyendas
function handleClickLegend(event) {
  if (event.target.classList.contains('form__title') || event.target.classList.contains('form__icon')) {
    if (designForm.contains(event.target)) {
      openDiv(designForm);
    } else if (fillForm.contains(event.target)) {
      openDiv(fillForm);
    } else if (shareForm.contains(event.target)) {
      openDiv(shareForm);
    }
  }
}

//eventos
form.addEventListener('click', handleClickLegend);
