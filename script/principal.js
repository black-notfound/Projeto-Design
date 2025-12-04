const areaJogos = document.querySelector(".jogos");

carregarJogos("EpicGames");

//Troca os cards de acordo com a loja escolhida pelo usuário
function trocarCards(loja) {
    areaJogos.style.opacity = 0;
    areaJogos.style.transform = "translateY(20px)";

    setTimeout(() => {
        carregarJogos(loja);

        areaJogos.style.opacity = 1;
        areaJogos.style.transform = "translateY(0)";
    }, 300);
}

//Carregar os jogos usando dados extraidos de JSONs
function carregarJogos(loja) {
    areaJogos.innerHTML = "";

    fetch(`./script/jogos_${loja}.json`)
        .then(res => res.json())
        .then(jogos => {
            jogos.forEach(jogo => {
                areaJogos.innerHTML += `
                <div class="card meuCard">
                    <img src="${jogo.imagem}" class="card-img-top cardImg" alt="Jogo">

                    <div class="card-body">
                        <h5 class="cardTitle">${jogo.nome}</h5>

                        <img src="assets/Logo.png" class="selo" alt="">

                        <p class="card-text precos">
                            <span class="precoAntigo">R$ ${jogo.preco_original}</span>
                            <span class="novoPreco">R$ ${jogo.preco_atual}</span>
                        </p>

                        <span class="tagLoja ${jogo.plataforma}">${jogo.plataforma}</span>

                        <button class="btn btn-primary w-100 accept-btn">
                            Aceitar contrato
                        </button>
                    </div>
                </div>
                `;
            });

            new Sortable(areaJogos, {
    animation: 150,
    multiDrag: true,
    selectedClass: "selecionado",  
    fallbackOnBody: true,
    dragClass: "arrastando"
});
        });
}

//Muda o nome exibido no HTML de acordo com a loja selecionada
const nomeLoja = document.getElementById("lojaAtual");
const botoes = document.querySelectorAll(".botaoLoja");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const novoNome = botao.dataset.loja;

        // animação suave
        nomeLoja.style.opacity = 0;

        setTimeout(() => {
            nomeLoja.textContent = novoNome;
            nomeLoja.style.opacity = 1;
        }, 300);

        trocarCards(novoNome.replace(/\s+/g, "")); // Tira os espaços nos nomes do HTNL
    });
});


