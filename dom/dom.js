// // Seleciona o parágrafo e o botão pelo ID
// const paragrafo = document.getElementById('meu-paragrafo');
// const botao = document.getElementById('meu-botao');

// // Adiciona um event listener ao botão para ouvir o evento de clique
// botao.addEventListener('click', () => {
//     // Altera o texto do parágrafo
//     paragrafo.textContent = 'O texto do parágrafo foi alterado!';
// });// Seleciona os elementos do DOM


// const lista = document.getElementById('minha-lista');
// const input = document.getElementById('novo-item');
// const botaoAdicionar = document.getElementById('adicionar');
// const botaoRemover = document.getElementById('remover');

// // Função para adicionar um novo item à lista
// botaoAdicionar.addEventListener('click', () => {
//     const novoItemTexto = input.value;
//     if (novoItemTexto.trim() !== '') {
//         const novoItem = document.createElement('li');
//         novoItem.textContent = novoItemTexto;
//         lista.appendChild(novoItem);
//         input.value = '';  // Limpa o campo de entrada
//     }
// });

// // Função para remover o último item da lista
// botaoRemover.addEventListener('click', () => {
//     const ultimoItem = lista.lastElementChild;
//     if (ultimoItem) {
//         lista.removeChild(ultimoItem);
//     }
// });

// Seleciona os elementos do DOM
const botaoFechar = document.getElementById('fechar-pagina');
const botaoVoltar = document.getElementById('voltar');
const botaoLocalizacao = document.getElementById('mostrar-localizacao');
const paragrafoLocalizacao = document.getElementById('localizacao');

// Função para fechar a página
botaoFechar.addEventListener('click', () => {
    // Aviso: Este comando não funciona em muitos navegadores modernos devido a restrições de segurança
    window.close();
});

// Função para voltar à página anterior
botaoVoltar.addEventListener('click', () => {
    window.history.back();
});

// Função para mostrar a localização atual do usuário
botaoLocalizacao.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                paragrafoLocalizacao.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        paragrafoLocalizacao.textContent = "Usuário negou a solicitação de geolocalização.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        paragrafoLocalizacao.textContent = "Informação de localização não está disponível.";
                        break;
                    case error.TIMEOUT:
                        paragrafoLocalizacao.textContent = "A solicitação para obter a localização expirou.";
                        break;
                    case error.UNKNOWN_ERROR:
                        paragrafoLocalizacao.textContent = "Ocorreu um erro desconhecido.";
                        break;
                }
            }
        );
    } else {
        paragrafoLocalizacao.textContent = "Geolocalização não é suportada por este navegador.";
    }
});