let fonte = 100;
let contrasteAtivo = false;
let noiteAtiva = false;
let linksAtivos = false;

function aumentarFonte() {
  fonte += 10;
  document.body.style.fontSize = fonte + "%";
}

function diminuirFonte() {
  if (fonte > 50) {
    fonte -= 10;
    document.body.style.fontSize = fonte + "%";
  }
}

function ativarContraste() {
  contrasteAtivo = !contrasteAtivo;
  document.body.classList.toggle("contraste", contrasteAtivo);
}

function ativarNoite() {
  noiteAtiva = !noiteAtiva;
  document.body.classList.toggle("noite", noiteAtiva);
}

function realcarLinks() {
  linksAtivos = !linksAtivos;
  document.body.classList.toggle("realce-links", linksAtivos);
}

function resetar() {
  fonte = 100;
  document.body.style.fontSize = "100%";
  contrasteAtivo = false;
  noiteAtiva = false;
  linksAtivos = false;
  document.body.classList.remove("contraste", "noite", "realce-links");
}
