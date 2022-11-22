window.addEventListener("DOMContentLoaded", () => {
  let parcela = document.querySelector("#parcela");
  let vencimento = document.querySelector("#vencimento");
  let valor = document.querySelector("#valor");

  let dados = document.querySelector("#dados");

  let botao = document.querySelector(".btn");

  const adicionarDados = (data) => {
    if (
      parcela.value.length !== 0 &&
      vencimento.value.length !== 0 &&
      valor.value.length !== 0
    ) {
      preencherDados(data)
    } else {
      alert("ERRO! DIGITE VALORES NAS CAIXAS");
    }
  };

  botao.addEventListener("click", () => {
    adicionarDados(dados);
  });

  const preencherDados = (data) => {
    data.innerHTML += `
        <tr>
          <td>${parcela.value}</td>
          <td>${vencimento.value}</td>
          <td>${valor.value}</td>
        </tr>
      `;
  }
});
