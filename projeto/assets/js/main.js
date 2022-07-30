/*=============== HEADER ===============*/
function toggleMenu() {
    document.querySelector('.nav__menu').classList.toggle('show')
}

/*=============== HOME ===============*/

/*=============== FEATURES ===============*/


const SelectCard = document.querySelectorAll('.feature__cads')
let selectIcon = document.querySelectorAll('.feature__icon')

function activeCard(){
    SelectCard.forEach(l => l.classList.remove('select__feature'))
    this.classList.add('select__feature')
}


SelectCard.forEach(l => l.addEventListener('click', activeCard))

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
