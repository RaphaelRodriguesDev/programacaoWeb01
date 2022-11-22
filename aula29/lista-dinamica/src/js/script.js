
const criarLista = () => {
  let lista = Array();
  let listaItem = document.getElementById("itemLista");
  let listaResultado = document.querySelector("div#resultado ul");
  // console.log(listaItem.value.trim().toLowerCase());

  if (listaItem.value.length !== 0) {
    addItems(lista, listaItem.value);
    exibirLista(lista, listaResultado);
  } else {
    exibirErro();
  }
};

const addItems = (array, item) => {
  array.push(item);
};

const exibirErro = () => {
  alert("ERRO! Digite algo para adicionar a lista");
};

const exibirLista = (array, result) => {
  for (let i = 0; i < array.length; i++) {
    result.innerHTML += `<li>${array[i]}</li>`;
  }
};
