document.addEventListener("DOMContentLoaded", function () {
    let quantidade = 1;
    const precoUnitario = 99.99;
    const quantidadeNumeroEl = document.querySelector(".quantidade-numero");
    const precoTotalEl = document.getElementById("precoTotal");
    const quantidadeFinalEl = document.getElementById("quantidadeFinal");
  
    function atualizarTotal() {
      precoTotalEl.textContent = (quantidade * precoUnitario).toFixed(2);
      quantidadeFinalEl.textContent = quantidade;
    }
  
    document.querySelector(".aumentar").addEventListener("click", function () {
      quantidade++;
      quantidadeNumeroEl.textContent = quantidade;
      atualizarTotal();
    });
  
    document.querySelector(".diminuir").addEventListener("click", function () {
      if (quantidade > 1) {
        quantidade--;
        quantidadeNumeroEl.textContent = quantidade;
        atualizarTotal();
      }
    });
  
    atualizarTotal();
  });
  
  // Função para finalizar compra
  function finalizarCompra() {
    const rua = document.getElementById("rua").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const cep = document.getElementById("cep").value.trim();
    
    if (!rua || !cidade || !estado || !cep) {
      alert("Por favor, preencha todos os campos de endereço.");
      return;
    }
    
    alert(`Compra finalizada!\n\nQuantidade: ${document.getElementById("quantidadeFinal").textContent} garrafa(s)\nTotal: R$ ${document.getElementById("precoTotal").textContent}\nEndereço: ${rua}, ${cidade} - ${estado}, CEP: ${cep}`);
  }
  
