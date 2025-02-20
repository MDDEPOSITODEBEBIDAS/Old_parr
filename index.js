document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".img-pk");

    img.addEventListener("animationend", function (event) {
        if (event.animationName === "backInLeft") {
            img.classList.add("rotate");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let quantidade = 1;
    const precoUnitario = 99.99;
    const precoTotalElemento = document.getElementById("preco-total");
    const quantidadeElemento = document.getElementById("quantidade");
    const botaoAumentar = document.getElementById("aumentar");
    const botaoDiminuir = document.getElementById("diminuir");

    function atualizarPreco() {
        precoTotalElemento.textContent = (quantidade * precoUnitario).toFixed(2);
    }

    botaoAumentar.addEventListener("click", function () {
        quantidade++;
        quantidadeElemento.textContent = quantidade;
        atualizarPreco();
    });

    botaoDiminuir.addEventListener("click", function () {
        if (quantidade > 1) {
            quantidade--;
            quantidadeElemento.textContent = quantidade;
            atualizarPreco();
        }
    });

    atualizarPreco();
});
