const paragrafo = document.getElementById('meu-paragrafo');
const botao = document.getElementById('meu-botao');


botao.addEventListener('click', () => {
   
    paragrafo.textContent = 'O texto do parágrafo foi alterado!';
});