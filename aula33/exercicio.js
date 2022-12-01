// 1 -  Criar uma Pizzaria
//     a - Criar 3 Objetos (Garçom, Pedido e Cliente)

//     b - Classe Pedido ( Numero do pedido, Bebida, Pizza )

//     c - Classe Cliente ( Nome, CPF )

function Garcom(nome, cpf) {
  this.nome = nome;
  this.cpf = cpf;

  this.levarPedido = (pedido, cliente) => {
    return `O Garçom ${this.nome} está levando o  pedido ${pedido} para o cliente ${cliente}`;
  };
}

function Pedido(numero, bebida, pizza) {
  this.numero = numero;
  this.bebida = bebida;
  this.pizza = pizza;
}

function Cliente(nome, cpf) {
  this.nome = nome;
  this.cpf = cpf;
}

let cliente1 = new Cliente("Helena", "222.367.965-51");
let pedido1 = new Pedido(543, "CocaCola", "Quatro Queijos");
let garcom1 = new Garcom("José", "123.456.345-6");
console.log(garcom1.levarPedido(pedido1.numero, cliente1.nome));



