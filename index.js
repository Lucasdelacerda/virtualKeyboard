// Selecione todos os botões com a classe "button"
const botoes = document.querySelectorAll(".button");
const display = document.getElementById("display")
const enterButton = document.getElementById("enter")
const spaceButton = document.getElementById("spacebar")
const backspaceButton = document.getElementById("backspace")
const shiftButton = 




botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valorDoBotao = botao.textContent;
    display.value += valorDoBotao;
    botao.classList.toggle("clicked")

    setTimeout(function(){
      botao.classList.remove("clicked")
    }, 100);

  });
});
function backspace() {
  display.value = display.value.slice(0, -1);
}
function spacebar() {
  display.value += ' '
}
function enter() {
  display.value = '\n'
}

