//Modal Registro

let modalBtn = document.querySelector('.modal-btn')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active')
  event.preventDefault();
})
modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active')
})