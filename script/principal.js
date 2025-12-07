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
                <div class="game-card">
                    <div class="game-image-wrapper">
                        <span class="tipo-jogo">Jogo Base</span>
                        <img src="${jogo.imagem}" class="game-image" alt="Jogo">

                        <div class="game-info">
                                <h5 class="cardTitle">${jogo.nome}</h5>
                                
                                <div class="discount-badge">
                                    <img src="../assets/Logo.png" class="selo" alt="">
                                    <p class="card-text precos">
                                        <span class="precoAntigo">R$ ${jogo.preco_original}</span>
                                        <span class="novoPreco">R$ ${jogo.preco_atual}</span>
                                    </p>
                                </div>

                            <span class="tagLoja ${jogo.plataforma}">${jogo.plataforma}</span>
                        </div>
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

        trocarCards(novoNome.replace(/\s+/g, "")); 
    });
});




window.onload = () => {
    const intro = document.getElementById("intro-container");
    const logo = document.getElementById("intro-logo");

    // 1 — logo gira no centro perfeitamente
    logo.style.transform = "rotate(360deg)";

    // 2 — volta ao normal
    setTimeout(() => {
        logo.style.transform = "rotate(0deg)";
    }, 900);

    // 3 — fundo começa a expandir
    setTimeout(() => {
        intro.classList.add("expand-background");
    }, 950);

    // 4 — logo corre para a esquerda
    setTimeout(() => {
        logo.style.transition = "transform 0.9s cubic-bezier(.25,.8,.25,1)";
        logo.style.transform = "translateX(-150px)";
    }, 1500);

    // 5 — aparece o texto no centro alinhado com a logo
    setTimeout(() => {
        intro.classList.add("show-name");
    }, 1850);

    // 6 — some tudo
    setTimeout(() => {
        intro.style.opacity = "0";
        intro.style.pointerEvents = "none";
    }, 3000);
};



