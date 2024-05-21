const lista = document.getElementById('minha-lista');
const input = document.getElementById('novo-item');
const botaoAdicionar = document.getElementById('adicionar');
const botaoRemover = document.getElementById('remover');


botaoAdicionar.addEventListener('click', () => {
    const novoItemTexto = input.value;
    if (novoItemTexto.trim() !== '') {
        const novoItem = document.createElement('li');
        novoItem.textContent = novoItemTexto;
        lista.appendChild(novoItem);
        input.value = '';  
    }
});


botaoRemover.addEventListener('click', () => {
    const ultimoItem = lista.lastElementChild;
    if (ultimoItem) {
        lista.removeChild(ultimoItem);
    }
});