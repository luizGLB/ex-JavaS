const botaoFechar = document.getElementById('fechar-pagina');
const botaoVoltar = document.getElementById('voltar');
const botaoLocalizacao = document.getElementById('mostrar-localizacao');
const paragrafoLocalizacao = document.getElementById('localizacao');


botaoFechar.addEventListener('click', () => {
    
    window.close();
});


botaoVoltar.addEventListener('click', () => {
    window.history.back();
});
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
