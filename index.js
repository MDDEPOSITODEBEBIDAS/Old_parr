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



(function(f, b, e, v, n, t, s) {
    if (f.fbq) return; 
    n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '538125645348867'); 
fbq('track', 'PageView');