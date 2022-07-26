/*=============== HEADER ===============*/

/*=============== HOME ===============*/

/*=============== FEATURES ===============*/

/*=============== TESTIMONIALS ===============*/

/*=============== CONTENT ===============*/

/*=============== PRICING ===============*/

/*=============== CONTACT ===============*/

// Email modal
function modalInit(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('modal--show');
}

const button = document.getElementById('subscribe');

button.addEventListener('click', function (event) {
  event.preventDefault;
  modalInit('modal--success');
});
//close modal
function modalClose(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('modal--show');
}

const buttonClose = document.getElementById('close');

buttonClose.addEventListener('click', function (event) {
  event.preventDefault;
  modalClose('modal--success');
});

/*=============== FOOTER ===============*/
