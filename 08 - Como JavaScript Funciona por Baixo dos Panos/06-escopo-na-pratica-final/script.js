"use strict";

// function calcularIdade(ano) {
//   const idade = 2060 - ano;

//   function imprimirIdade() {
//     let saida = `Oh, você tem ${idade}, nasceu em ${ano}`;
//     console.log(saida);

//     if ((ano) => 1997 && ano <= 2010) {
//       var genZ = true;

//       saida = "Nova saida";

//       const nome = "João";
//       const mensagem = `Você é genZ, ${nome}`;

//       console.log(mensagem);

//       function subtrair(a, b) {
//         return a - b;
//       }
//     }

//     // console.log(genZ);
//     // console.log(mensagem);

//     // console.log(subtrair(5, 2));
//     console.log(saida);
//   }

//   imprimirIdade();
//   //   console.log(saida);

//   return idade;
// }

// const nome = "Uanela";
// // console.log(idade);
// calcularIdade(2002);
// // console.log(nome)

// console.log(eu);
// // console.log(trabalho);
// // console.log(ano);

// var eu = "Uanela";
// const trabalho = "Dev";
// let ano = 2002;

// // Funções
// console.log(declarSomar(3, 5));
// // console.log(expreSomar(3, 5));
// // console.log(arrowSomar(3, 5));

// function declarSomar(a, b) {
//   return a + b;
// }

// // const expreSomar = function (a, b) {
// //   return a + b;
// // };

// var arrowSomar = (a, b) => {
//   return a + b;
// };

// console.log(cadeiras);

// var cadeiras = 25;

// function deletarTurmas() {
//   console.log("Todas turmas deletas");
// }

// if (!cadeiras) deletarTurmas();

// var a = 10;
// let b = 35;
// const c = 50;

// console.log(a === window.a);
// console.log(b === window.b);
// console.log(c === window.c);

// console.log(window);
// console.log(this);

// const calcularTroco = function (valorRecebido) {
//   console.log(20 - valorRecebido);
//   console.log(this);
// };

// function calcularTrocoDelcar(valorRecebido) {
//   console.log(20 - valorRecebido);
//   console.log(this);
// }

// const calcularTrocoArrow = (valorRecebido) => {
//   console.log(20 - valorRecebido);
//   console.log(this);
// };

// calcularTroco(11);
// calcularTrocoDelcar(9);
// calcularTrocoArrow(15);

// const uanela = {
//   nome: "Uanela",
//   ano: 2002,
//   calcularIdade: function () {
//     console.log(this);
//     console.log(2080 - this.ano);
//   },
// };

// uanela.calcularIdade();

// const dolica = {
//   ano: 1997,
// };

// dolica.calcularIdade = uanela.calcularIdade;
// dolica.calcularIdade();

// const func = uanela.calcularIdade;
// func();

// const nome = "Julieta";

// const pessoa = {
//   nome: "Uanela",
//   ano: 2002,
//   calcularIdade: function () {
//     console.log(this);
//     console.log(2080 - this.ano);
//     const self = this;

//     const genZ = function () {
//       console.log(self);
//       console.log(self.ano >= 1996 && self.ano <= 2010);

//       const imprimaAlgo = function () {
//         console.log(TouchList.ano, "algoi");
//       };

//       imprimaAlgo();
//     };

//     //  2 - solução
//     // const genZ = () => {
//     //   console.log(this);
//     //   console.log(this.ano >= 1996 && this.ano <= 2010);
//     // };

//     genZ();
//   },
//   saudar: () => {
//     console.log(this);
//     console.log(this.nome);
//   },
// };

// pessoa.calcularIdade();
// pessoa.saudar();

// // palavra reservada - arguments

// function somar(a, b) {
//   console.log(arguments);
//   return arguments[0] + arguments[1];
// }

// console.log(somar(4, 9));

// const somarArrow = (...todosArgumentos) => {
//   console.log(todosArgumentos);
//   return todosArgumentos[0] + todosArgumentos[1];
// };
// console.log(somarArrow(10, 8, 10, 4));

// Tipos de Primitivos : strings, numbers, booleans, null, undefined, symbol, bigint
let apelido = "Amili";
let apelidoAntigo = apelido;
apelido = "Como";
console.log(apelido, apelidoAntigo);

// Tipos de Referência
const caclida = {
  nome: "Cacilda",
  apelido: "Uanela",
  age: 22,
};
const cacildaCasada = caclida;
cacildaCasada.apelido = "Como";
console.log(caclida, cacildaCasada);

// cacildaCasada = {};

const dolica = {
  nome: "Dolica",
  apelido: "Como",
  age: 24,
  familia: ["Francisco", "Armando"],
};

// const dolicaCasada = dolica;
const dolicaCasada = Object.assign({}, dolica);
dolicaCasada.apelido = "Roberto";
dolicaCasada.familia.push("Julieta");
dolicaCasada.familia.push("Serafina");
console.log(dolica, dolicaCasada);
