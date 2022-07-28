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


/*=============== FOOTER ===============*/
