/*=============== HEADER ===============*/


/*=============== HOME ===============*/


/*=============== FEATURES ===============*/

console.log('pegou')
const SelectCard = document.querySelectorAll('.feature__cads')
      selectIcon = document.querySelectorAll('.feature__icon')

function activeCard(){
    SelectCard.forEach(l => l.classList.remove('select__feature'))
    this.classList.add('select__feature')
}

function activeIcon(){
    selectIcon.forEach(i => i.classList.remove('select__icon'))
    this.classList.add('select__icon')
}

SelectCard.forEach(l => l.addEventListener('click', activeCard))

selectIcon.forEach(i => i.addEventListener('click', activeIcon))
/*=============== TESTIMONIALS ===============*/


/*=============== CONTENT ===============*/


/*=============== PRICING ===============*/


/*=============== CONTACT ===============*/


/*=============== FOOTER ===============*/
