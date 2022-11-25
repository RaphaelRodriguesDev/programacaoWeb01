let resultado = document.querySelector(".result");

const dados = [
	{
		nome: "Raphael",
    idade: 31,
		cpf: "123.123.122-67"
  },

  {
		nome: "Andre",
		idade: 17,
		cpf: "123.123.122-67"
	},

  {
		nome: "Gabriel",
		idade: 27,
		cpf: "123.123.122-67"
	},

	{
		nome: "Erisvan",
		idade: 27,
		cpf: "123.123.122-67"
	},

	{
		nome: "Erisvan",
		idade: 27,
		cpf: "123.123.122-67"
	},
];

dados.forEach((dado) => {
	
	//Enviando arquivos para o local storage
	localStorage.setItem("nome", dado.nome);
	localStorage.setItem("idade", dado.idade);
	localStorage.setItem("cpf", dado.cpf);

	//Capturando arquivos do local storage
	const nome = localStorage.getItem("nome");
	const idade = localStorage.getItem("idade");
	const cpf = localStorage.getItem("cpf");

	//Exibindo Resultado
	resultado.innerHTML += `
	
		<tr>
			<td>${nome}</td> 
			<td>${idade}</td> 
			<td>${cpf}</td>
		</tr>
	`;

});


console.log(resultado);
