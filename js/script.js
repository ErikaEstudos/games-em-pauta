// Selecione os elementos que você deseja tornar clicáveis
const cardReviews = document.querySelectorAll('.cardReview .review-imagem-texto');
const cardNoticias = document.querySelectorAll('.cardNoticia .noticia-imagem-texto');

cardReviews.forEach((card, index) => {
  card.addEventListener('click', () => {
    switch (index) {
      case 0:
        window.location.href = "priscilla.html";
        break;
      case 1:
        window.location.href = "caio.html";
        break;
      case 2:
        window.location.href = "erika.html";
        break;
      case 3:
        window.location.href = "vitor.html";
        break;
      case 4:
        window.location.href = "vivian.html";
        break;
    }
  });
});

cardNoticias.forEach((card, index) => {
  card.addEventListener('click', () => {
    switch (index) {
      case 0:
        window.location.href = "priscilla.html";
        break;
      case 1:
        window.location.href = "caio.html";
        break;
      case 2:
        window.location.href = "erika.html";
        break;
      case 3:
        window.location.href = "vitor.html";
        break;
      case 4:
        window.location.href = "vivian.html";
        break;
    }
  });
});

// Menu hambúrguer
const menuDiv = document.getElementById("menu-mobile");
const btnAnimar = document.getElementById("btn-menu");

menuDiv.addEventListener("click", animarMenu)

function animarMenu(){
    menuDiv.classList.toggle("abrir");
    btnAnimar.classList.toggle("ativar");
};

// Validação do formulário (popup login)

let emailInput = document.getElementById("email")
let emailLabel = document.querySelector("labelfor='email']")
let emailHelper = document.getElementById("email-helper") 
const mensagem = "Por favor, insira um email válido.";

emailInput.addEventListener("change", (evento) => {
  const valor = evento.target.value;

  if (valor.includes("@")) {
    emailInput.classList.add("correto");
    emailInput.classList.remove("erro");
    emailHelper.classList.remove("visible");
  } else {
    emailInput.classList.remove("correto");
    emailInput.classList.add("erro");
    emailHelper.innerText = mensagem;
    emailHelper.classList.add("visible");
  }
});

