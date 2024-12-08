"use strict";

// let podeViajar;
// const passouNoTeste = true;

// if (passouNoTeste) podeVijar = true;
// if (podeVijar) console.log("Você pode viajar");

// const interface = "Teste";

// Funções
// function registrador() {
//   console.log("Meu nome é Uanela");
// }

// // Chamar, executar, invocar
// registrador();
// registrador();
// registrador();
// registrador();

// function forno(mangas, laranjas) {
//   const bolo = `Bolo de ${mangas} mangas e ${laranjas} laranjas!`;
//   return bolo;
// }

// const boloDeManga = forno(10, 0);
// console.log(boloDeManga);

// const boloDeLaranja = forno(2, 8);
// console.log(boloDeLaranja);

// const num = Number("7");

// Declaração de Função vs Expressão de Função

// function calcularTroco(valor) {
//   return valor - 150;
// }
// const troco = calcularTroco(300);
// console.log(troco);

// const calcularTrocoNovo = function (valor) {
//   return valor - 150;
// };
// const trocoNovo = calcularTrocoNovo(200);
// console.log(calcularTrocoNovo);

// Arrow Functions (Funções de seta)
// const calcularTroco = (valor) => valor - 150;
// const troco = calcularTroco(500);
// console.log(troco);

// const anosAteFaseAdulta = (anoDeNascimento, nome) => {
//   const idade = 2040 - anoDeNascimento;
//   const restante = 21 - idade;
//   return `${nome} será adulto daqui a ${restante} anos`;
// };

// console.log(anosAteFaseAdulta(2030, "Júnior"));
// console.log(anosAteFaseAdulta(2021, "Alberto"));

// Chamando função dentro de uma função
// const cortarFruta = (fruta) => {
//   return fruta * 4;
// };

// function forno(mangas, laranjas) {
//   const pedacosDeManga = cortarFruta(mangas);
//   const pedacosDeLaranja = cortarFruta(laranjas);

//   const bolo = `Bolo de ${pedacosDeManga} pedaços de manga e ${pedacosDeLaranja} pedaços de laranja!`;
//   return bolo;
// }

// console.log(forno(3, 5));

// Revisando sobre funções
// const calcularIdade = (c) => {
//   return 2040 - c;
// };

// const anosAteFaseAdulta = function (anoDeNascimento, nome) {
//   const idade = calcularIdade(anoDeNascimento);
//   const restante = 21 - idade;

//   if (restante > 0) {
//     console.log("Olá mundo");
//     return `${nome} será adulto daqui a ${restante} anos`;
//   } else {
//     return `${nome} já é adulto :)`;
//   }
// };

// console.log(anosAteFaseAdulta(2025, "João"));

/* DESAFIO #5
De volta aos times de basquete, os Bulls e Warriors. Temos um novo 
campeonato, que funciona de uma maneira diferente. Cada time compete 
3 vezes e a média das 3 pontuações é calculada (apenas uma pontuação 
média por time).
Uma time vence apenas se tiver no minímo o Dobro da pontuação média da 
time adversária. Se não for isso ninguém vence.
1. crie uma função/function ‘calcularMedia’ para calcular a média de 
3 pontuações.
2. Use a função criada acima para calcular a pontuação média de ambas
times e guarde-as em variáveis com nomes descritivos.
3. Crie uma função/function ‘verificarVencedor’ que recebe as pontuações
médias de cada time como parâmetro.
Ex: function (mediaDosBulls, mediaDosWarrios){}.
4.	Use a função/function ‘verificarVencedor’ para determinar o vencedor
para os Dados A e Dados B.
5.	Ignore a possibilidade de empate desta vez.
Dados:
A: Bulls 37, 30 e 65. Warriors  70, 45 e 68.
B: Bulls 90, 50 e 73. Warriors  23, 43 e 18.
Dicas:
1.	Para calcular a média de 3 valores, some-os e divida-os por 3
2.	Para verificar se número A é pelo menos o dobro de B, 
podes verificar por A >= B * 2
*/

// const calcularMedia = (a, b, c) => (a + b + c) / 3;
// let mediaDosBulls = calcularMedia(37, 30, 65);
// let mediaDosWarriors = calcularMedia(70, 45, 68);
// console.log(mediaDosBulls, mediaDosWarriors);

// const verificarVencedor = (mediaDosBulls, mediaDosWarriors) => {
//   if (mediaDosBulls >= mediaDosWarriors * 2)
//     console.log(`Bulls vence. (${mediaDosBulls}) vs (${mediaDosWarriors})`);
//   else if (mediaDosWarriors >= mediaDosBulls * 2)
//     console.log(`Bulls vence. (${mediaDosWarriors}) vs (${mediaDosBulls})`);
//   else console.log(`Nenhum dos times vence ):`);
// };

// verificarVencedor(mediaDosBulls, mediaDosWarriors);

// mediaDosBulls = calcularMedia(90, 50, 73);
// mediaDosWarriors = calcularMedia(23, 43, 18);

// verificarVencedor(mediaDosBulls, mediaDosWarriors);

// Introdução a Arrays
// let fruta1 = "Maça";
// const fruta2 = "Laranja";
// const fruta3 = "Manga";
// const fruta4 = "Pera";
// fruta1 = "Papaia";

// const frutas = ["Maça", "Laranja", "Manga", "Pera", 10, true];
// // console.log(frutas);

// const u = new Array(1, 55, 10);
// // console.log(u);

// frutas[2] = "Uva";
// // console.log(frutas[1]);
// // console.log(frutas);
// // frutas = ["Uva", "Morango"];

// // console.log(frutas.length);
// // console.log(frutas[0]);
// console.log(frutas[frutas.length - 1]);

// const nome = "Uanela";
// const pessoa = [nome, "Como", 2040 - 2022, "Tutor", frutas];
// console.log(pessoa);

// const calcularIdade = (anoDeNascimento) => {
//   return 2040 - anoDeNascimento;
// };
// const anos = [2000, 1980, 1967, 2015, 1870];

// const idade1 = calcularIdade(anos[0]);
// const idade2 = calcularIdade(anos[1]);
// const idade3 = calcularIdade(anos[anos.length - 1]);
// console.log(idade1, idade2, idade3);

// const idades = [
//   calcularIdade(anos[0]),
//   calcularIdade(anos[1]),
//   calcularIdade(anos[anos.length - 1]),
//   idade3,
// ];
// console.log(idades);

// Operações Básicas com Arrays (Metodós)
// const frutas = ["Maça", "Laranja", "Manga", "Pera"];

// // Adicionar elementos
// // console.log(frutas.length);
// const novoTamanho = frutas.push("Morango"); // adiciona na última posição
// // console.log(frutas);

// frutas.unshift("Uva"); // adiciona na primeira posição
// // console.log(frutas);

// // Remover elementos
// const elementoRemovido = frutas.pop(); // remove na última posição
// console.log(elementoRemovido);
// console.log(frutas);

// frutas.shift(); // remove na primeira posição
// // console.log(frutas);

// // console.log(frutas.indexOf("Manga"));

// // console.log(frutas.includes("Papaia"));
// // console.log(frutas.includes("Pera"));

// frutas.push(7);
// console.log(frutas.includes(7));
// if (frutas.includes("Laranja")) {
//   console.log("Você tem uma Laranja em sua cesta!");
// } else {
//   console.log("Você não tem uma Laranja em sua cesta!");
// }

/* 
Desafio #6
O grupo de amigos ainda está calculando o valor da contribuição para 
a festa, usando as mesmas regras com antes: 
Regra: haverá uma contribuição dentre 15% ou 20% do salário mínimo do
país onde vivem que é 7500.  Se a idade da pessoa for menor ou igual
que 24 ela irá com 15% do salário mínimo mais 850 e se a idade for 
maior á 24 anos irá contribuir com 20% do salário mínimo mais 850. 
Lembrando que ela deve ter no mínimo 18 anos.

1.Crie uma função ‘calcularPercentagem’ que recebe qualquer idade
como entrada e retorna o valor da percentagem a pagar correspondente,
calculado baseando-se nas regras acima (Você pode verificar o código
do primeiro desafio sobre este tema (Desafio #4) se você precisar).
Use qualquer tipo de função que você desejar.
2. Agora usando arrays, crie uma array contendo as idades listadas 
abaixo.
3. Crie um array ‘percentagensAContribuir’ contendo a percentagem a 
contribuir para cada idade, calculada a partir da função 
‘calcularPercentagem’.
4. Bónus: Crie um array ‘valoresTotaisAContribuir’ contendo todos 
os valores totais a contribuir, valor da percentagem + 850.
Dados:
Idades: 28, 22 e 17 
*/

// const salario = 7500;
// const calcularPercentagem = (idade) =>
//   idade < 18 ? 0 : idade <= 24 ? salario * 0.15 : salario * 0.2;

// const idades = [28, 22, 17];
// const percentagensAContribuir = [
//   calcularPercentagem(idades[0]),
//   calcularPercentagem(idades[1]),
//   calcularPercentagem(idades[2]),
// ];

// const valoresTotaisAContribuir = [
//   percentagensAContribuir[0] + 850,
//   percentagensAContribuir[1] + 850,
// ];

// console.log(idades, percentagensAContribuir, valoresTotaisAContribuir);

// Introdução a objectos
// const pessoaArray = [
//   "Uanela",
//   "Como",
//   2040 - 2002,
//   "Tutor",
//   ["Alberto", "Israel", "Arnaldo"],
// ];

// const pessoa = {
//   nome: "Uanela",
//   apelido: "Como",
//   idade: 2040 - 2002,
//   profissao: "Tutor",
//   amigos: ["Alberto", "Israel", "Arnaldo"],
// };

// Notação de ponto vs Notação de parênteses recto
// const pessoa = {
//   primeiroNome: "Uanela",
//   ultimoNome: "Como",
//   idade: 2040 - 2002,
//   profissao: "Programador",
//   amigos: ["Alberto", "Israel", "Arnaldo"],
// };
// // console.log(pessoa);

// console.log(pessoa.profissao);
// console.log(pessoa["idade"]);

// const chave = "Nome";
// // console.log(pessoa["primeiro" + chave]);
// // console.log(pessoa["ultimo" + chave]);

// // pessoa.'primeiro'+chave

// // const pesquisa = prompt("O que você gostaria de saber sobre a pessoa?");

// // if (pessoa[pesquisa]) {
// //   console.log(pessoa[pesquisa]);
// // } else {
// //   console.log("Nós não temos esta informação sobre a pessoa ):");
// // }

// // pessoa.primeiroNome = "Cristiano";
// // pessoa["ultimoNome"] = "Ronaldo";
// // pessoa.cidade = "Madrid";
// // pessoa["altura"] = 1.95;
// // console.log(pessoa);

// // delete pessoa["ultimoNome"];
// // console.log(pessoa);

// console.log(pessoa);
// // Desafio
// // Uanela tem 3 amigos, e seu amigo programador é Arnaldo
// console.log(
//   `${pessoa.primeiroNome} tem ${pessoa.amigos.length} amigos, e seu amigo programador é ${pessoa.amigos[2]}`
// );

// METODOS DE OBJECTOS
// const pessoa = {
//   primeiroNome: "Uanela",
//   ultimoNome: "Como",
//   anoDeNascimento: 2002,
//   profissao: "Programador",
//   amigos: ["Alberto", "Israel", "Arnaldo"],
//   //   calcularIdade: function () {
//   //     return 2040 - anoDeNascimento;
//   //   },
//   //   calcularIdade: function () {
//   //     return 2040 - this.anoDeNascimento;
//   //   },
//   calcularIdade: function () {
//     this.idade = 2040 - this.anoDeNascimento;
//     return this.idade;
//   },
//   //   mostrarApresentacao: function (primeiroNome) {
//   //     return `Eu sou ${primeiroNome}`;
//   //   },
//   mostrarApresentacao: function () {
//     return `${this.primeiroNome} tem ${this.calcularIdade()} anos, ele é ${
//       pessoa.profissao
//     } e seu amigo de Portugal é o ${pessoa.amigos[1]}`;
//   },
// };

// // console.log(pessoa.calcularIdade());
// console.log(pessoa.idade);
// console.log(pessoa.mostrarApresentacao());

// Desafio
// Uanela tem 38 anos, ele é programador e seu amigo de Portugal é o Israel

// DESAFIO #7
/* 
Voltando para Bill e Steve comparando seus IMC, agora que já tens 
conhecimentos de objectos vamos usá-lo para implementar os cálculos. 
Você tem as fórmulas abaixo caso você tenha esquecido:
IMC = peso / altura ** 2
IMC = peso / (altura * altura)
1.	Para cada um deles, crie um objecto com seu nome completo, peso e 
altura. (Bill Gates e Steve Jobs)
2.	Crie um método ‘calcularIMC’ em cada um dos objectos para calcular o 
IMC (o mesmo método em cada um dos objectos). Guarde o valor do IMC em 
uma propriedade no objecto e também retorne o mesmo valor atráves do 
método.
3.	Escreva no console quem tem IMC maior, juntamente com seu IMC. Exemplo
“O IMC (22.7) do Steve Jobs é maior que o IMC (20.5) do Bill Gates!”
Dados:
Bill pesa 78 kg e tem 1.69 m de altura
Steve pesa 92kg e tem 1.95 m de altura
*/

// const bill = {
//   nomeCompleto: "Bill Gates",
//   peso: 78,
//   altura: 1.69,
//   calcularIMC: function () {
//     this.imc = this.peso / this.altura ** 2;
//     return this.imc;
//   },
// };

// const steve = {
//   nomeCompleto: "Steve Jobs",
//   peso: 92,
//   altura: 1.95,
//   calcularIMC: function () {
//     this.imc = this.peso / this.altura ** 2;
//     return this.imc;
//   },
// };

// bill.calcularIMC();
// steve.calcularIMC();
// console.log(bill.imc, steve.imc);

// // O IMC (22.7) do Steve Jobs é maior que o IMC (20.5) do Bill Gates!

// if (bill.imc > steve.imc) {
//   console.log(
//     `O IMC (${bill.imc}) do ${bill.nomeCompleto} é maior que o IMC (${steve.imc}) do ${steve.nomeCompleto}`
//   );
// } else if (steve.imc > bill.imc) {
//   console.log(
//     `O IMC (${steve.imc}) do ${steve.nomeCompleto} é maior que o IMC (${bill.imc}) do ${bill.nomeCompleto}`
//   );
// }

// O Laço/Loop for

// console.log("Contando ovelha número 1🐑");
// console.log("Contando ovelha número 2🐑");
// console.log("Contando ovelha número 3🐑");
// console.log("Contando ovelha número 4🐑");
// console.log("Contando ovelha número 5🐑");
// console.log("Contando ovelha número 6🐑");
// console.log("Contando ovelha número 7🐑");
// console.log("Contando ovelha número 8🐑");
// console.log("Contando ovelha número 9🐑");
// console.log("Contando ovelha número 10🐑");

// for (let ovelha = 1; ovelha <= 1000; ovelha++) {
//   // console.log(ovelha);
//   console.log(`Contando ovelha número ${ovelha}🐑`);
// }

// Percorendo arrays
// const dados = [
//   "Uanela",
//   2040 - 2002,
//   true,
//   undefined,
//   ["banana", "manga", "uva"],
//   null,
// ];
// const tipos = [];

// // console.log(dados[0]);
// for (let i = 0; i <= dados.length; i++) {
//   // tipos[i] = typeof dados[i];
//   tipos.push(typeof dados[i]);
//   // console.log(dados[i]);
// }
// // console.log(tipos);

// // 185
// const valores = [200, 500, 1000, 2000];
// const trocos = [];

//  4
// 0, 1, 2, 3,
// for (let i = 0; i < valores.length; i++) {
//   const troco = valores[i] - 185;
//   trocos.push(troco);
// }
// // console.log(valores, trocos);

// for (let i = 0; i <= dados.length; i++) {
//   // tipos[i] = typeof dados[i];
//   // tipos.push(typeof dados[i]);
//   // console.log(dados[i]);

//   console.log(typeof dados[i]);
//   if (typeof dados[i] === "number") break;
// }
// console.log("Saimos do loop for com break");

// for (let i = 0; i <= dados.length; i++) {
//   // tipos[i] = typeof dados[i];
//   // tipos.push(typeof dados[i]);
//   // console.log(dados[i]);
//   console.log(typeof dados[i]);
//   if (typeof dados[i] === "number") continue;
// }
// console.log("Saimos do loop for com continue");

// Loops reverso e Loops aninhados

// for (let ovelha = 10; ovelha >= 1; ovelha--) {
//   // console.log(ovelha);
//   // console.log(`Contando ovelha número ${ovelha}🐑`);
// }

// const dados = [
//   "Uanela",
//   2040 - 2002,
//   true,
//   undefined,
//   ["banana", "manga", "uva"],
//   null,
// ];

// // for (let i = dados.length; i >= 1; i--) {
// //   console.log(i, dados[i]);
// // }

// const criancas = ["Uanela", "Cristiano", "Jeiseline", "Graciela", "Sheuzia"];

// for (let i = 0; i < criancas.length; i++) {
//   console.log(criancas[i]);
//   for (let ovelha = 1; ovelha <= 10; ovelha++) {
//     // console.log(ovelha);
//     console.log(`${criancas[i]} - Contando ovelha número ${ovelha}🐑`);
//   }
// }

// for (let ovelha = 1; ovelha <= 10; ovelha++) {
//   // console.log(ovelha);
//   console.log(`Contando ovelha número ${ovelha}🐑`);
// }

// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// .....
// 1 x 12 = 12

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// .....
// 2 x 12 = 24

// for (let i = 1; i <= 10; i++) {
//   console.log(`Tabela de ${i}`); // i = 2
//   for (let j = 1; j <= 12; j++) {
//     // j = 2
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log("--------------");
// }

//
// Loop while e do while

// for (let ovelha = 1; ovelha <= 10; ovelha++) {
//   // console.log(ovelha);
//   // console.log(`Contando ovelha número ${ovelha}🐑`);
// }

// let ovelha2 = 1;
// while (ovelha2 <= 10) {
//   // console.log(`While: Contando ovelha número ${ovelha2}🐑`);
//   ovelha2++;
// }

// let dado = Math.trunc(Math.random() * 6) + 1;
// // let dado = 6;

// // while (dado !== 6) {
// //   console.log(`While: Você lançou um ${dado}`);
// //   dado = Math.trunc(Math.random() * 6) + 1;
// //   if (dado === 6)
// //     console.log(`While: O jogo terminou você conseguiu o ${dado}`);
// // }

// do {
//   console.log(`Do:Você lançou um ${dado}`);
//   dado = Math.trunc(Math.random() * 6) + 1;
//   if (dado === 6) console.log(`Do: O jogo terminou você conseguiu o ${dado}`);
// } while (dado !== 6);

/*
Desafio #8
Vamos mais uma vez alterar a calculadora de contribuições das festa 
usando loops desta vez.
1.Crie um array ‘idades’ contendo todas as idades (10) listadas 
abaixo
2.Crie dois arrays vazios um para valores da percentagem outro para
 valores totais a contribuir.
3.Use a função ‘calcularPercentagem’ que criamos antes para calcular
 o valor da percentagem e o valor total para cada idade no array idades. Use o laço for para realizar 10 cálculos.
4.Desta vez ao invés do valor total a contribuir ser igual ao valor 
da percentagem mais 850, ele tem de ser igual ao valor da percentagem 
mais a idade multiplicada por 45.
valorTotal = valorDaPercentagem + (idade * 45)

Idades: 20, 23, 26, 30, 28, 25, 35, 38, 32 e 21

Dica: Invoque a função ‘calcularPercentagem’ dentro do loop e usa o
método push para adicionar valores nos arrays de valores de percentagem
e de valores totais a contribuir.

5.Bónus: Crie uma função ‘calcularMedia’ que receba um array 
chamado ‘arr’ como argumento. Este função calcula a média  de 
todos os números em um determinado array.
Dicas para resolver este ponto:
5.1.Primeiro, você vai precisar somar todos os números dentro do 
array, para fazer a soma crie uma variável ‘soma’ e inicialize com 0. 
Dai então use a loop for e em cada iteração (volta) você soma o valor 
actual ao valor actual da variável ‘soma’, deste modo até ao fim do 
loop você terá todos valores somados e guardados na variável ‘soma’.
5.2.Para calcular a média entre eles, divida ‘soma’ pelo tamanho do
 array que contém os números que foram somados.
5.3.Invoque a fun¬ção ‘calcularMedia’ passando o array ‘valoresTotais’
*/

const salario = 7500;
const idades = [20, 23, 26, 30, 28, 25, 35, 38, 32, 21];
const valoresDePercentagens = [];
const valoresTotais = [];

const calcularPercentagem = (idade) =>
  idade < 18 ? 0 : idade <= 24 ? salario * 0.15 : salario * 0.2;

for (let i = 0; i < idades.length; i++) {
  const valorDaPercentagem = calcularPercentagem(idades[i]);
  valoresDePercentagens.push(valorDaPercentagem);
  valoresTotais.push(valorDaPercentagem + idades[i] * 45);
}
console.log(idades, valoresDePercentagens, valoresTotais);

const calcularMedia = (arr) => {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    // soma = soma + arr[i];
    soma += arr[i];
  }
  return soma / arr.length;
};

console.log(calcularMedia(valoresTotais));
console.log(calcularMedia(valoresDePercentagens));
console.log(calcularMedia(idades));
