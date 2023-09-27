'use strict';

const shareBtn = document.querySelector('.js_shareBtn');
const messageBox = document.querySelector('.js_messageBox');
const shareBox = document.querySelector('.js_shareBox'); // Donde se encuentra el link y la clase hidden
const cardLink = document.querySelector('.js_cardLink'); // donde se encuentra el enlace
const twitterLink = document.querySelector('.js_twitterLink');

function handleClickShareBtn(event) {
	console.log(data);
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      // console.log(responseJSON);
      if (responseJSON.success === false) {
        messageBox.innerHTML = 'Oye! Revisa los datos.'; // mensaje de error
      } else if (responseJSON.success === true){
        shareBox.classList.remove('js-hidden');
        cardLink.href = responseJSON.cardURL; // el link
        cardLink.innerHTML = responseJSON.cardURL; // lo que se ve
      }
    });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // para que al hacer click no se envíen los datos del formulario
  // mejor colocárselo al form que al shareBtn para que al escribir
  // en los inputs no se envíe al servidor
});

shareBtn.addEventListener('click', handleClickShareBtn);

