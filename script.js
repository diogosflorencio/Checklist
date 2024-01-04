const inputDoUsuario = document.getElementById("inputDoUsario");
const botaoAdicionar = document.getElementById('botaoAdicionar');

const item1 = document.getElementById("item-1");

botaoAdicionar.addEventListener("click", () => {
    item1.innerHTML = inputDoUsuario.value;
    inputDoUsuario.value = ""
});
