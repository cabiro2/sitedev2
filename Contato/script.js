const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const assunto = document.getElementById('assunto')
const mensagem = document.getElementById('textarea')

form.addEventListener("submit", (e) =>{
  e.preventDefault()
  checkInputs()
})

function checkInputs(){
  const usernameValue = username.value
  const emailValue = email.value
  const assuntoValue = assunto.value
  const mensagemValue = mensagem.value

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (assuntoValue === "") {
    setErrorFor(assunto, "O assunto é obrigatório.");
  } else {
    setSuccessFor(assunto);
  }

  if (mensagemValue === "") {
    setErrorFor(mensagem, "A mensagem é obrigatória.");
  } else {
    setSuccessFor(mensagem);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//--------------------------------------------------------------------
//Modal registro

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