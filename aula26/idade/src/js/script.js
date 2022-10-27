function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let txtAno = document.getElementById("txtano");
  let res = document.querySelector("div#res");

  if (txtano.value.length === 0 || txtAno.value > ano) {
    window.alert("Verifique os dados e tente novamente! ==> ERRO <==");
  } else {
    let sexo = document.getElementsByName("sexo");
    let idade = ano - Number(txtAno.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (sexo[0].checked) {
      genero = "Homem";
    } else if (sexo[1].checked) {
      genero = "Mulher";
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
  }
}
