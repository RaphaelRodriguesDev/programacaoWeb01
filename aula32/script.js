const dados = [
    {
        nome: "Raphael",
        idade: 30,
    },
    {
        nome: "Erisvan",
        idade: 30,
    },
    {
        nome: "Gabriel",
        idade: 30,
    },
    {
        nome: "André",
        idade: 30,
    },
];

dados.forEach((dado) => {
    localStorage.setItem("nome", dado.nome);
    localStorage.setItem("idade", dado.idade);
    //-------------------------
    const nome = localStorage.getItem("nome");
    const idade = localStorage.getItem("idade");

    //-------------------------

    document.write(`<h2>Nome: ${nome} | Idade: ${idade} </h2>`);
});

document.write(nome);
