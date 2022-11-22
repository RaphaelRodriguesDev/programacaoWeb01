window.addEventListener("DOMContentLoaded", () => {
  let parcela = document.querySelector("#parcela");
  let vencimento = document.querySelector("#vencimento");
  let valor = document.querySelector("#valor");

  let dados = document.querySelector("#dados");

  let botao = document.querySelector(".btn");

  const adicionarDados = () => {
    if (
      parcela.value.length !== 0 &&
      vencimento.value.length !== 0 &&
      valor.value.length !== 0
    ) {
    } else {
      alert("ERRO! DIGITE VALORES NAS CAIXAS");
    }
  };

  botao.addEventListener("click", () => {
    adicionarDados();
  });
});
