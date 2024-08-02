let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    // Seleciona um elemento na pagina dentro do gameClicado // .(ponto) para dizer que é uma classe
    let imagem = gameClicado.querySelector('.dashboard__item__img'); 
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeDoJogo = gameClicado.querySelector('.dashboard__item__name');
    
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Tem certeza de que deseja devolver este jogo? (${nomeDoJogo.textContent})`)) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();
}
//Este exemplo adiciona um evento DOMContentLoaded que é acionado quando a página é carregada. Nesse momento, ele conta a quantidade inicial de jogos alugados.
document.addEventListener('DOMContentLoaded', function() { 
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

// Uma classe pode ser compartilhada entre várias tags e uma tag pode ter múltiplas classes
// O ID é único na página e cada elemento tem apenas um ID

