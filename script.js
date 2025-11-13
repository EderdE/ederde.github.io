// Pega o botão
const backToTopButton = document.getElementById("backToTopBtn");

// Quando o usuário rolar 20px para baixo a partir do topo do documento, mostre o botão
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// Quando o usuário clicar no botão, role suavemente para o topo do documento
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
