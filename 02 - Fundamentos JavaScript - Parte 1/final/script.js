/* 
// let nome = "Uanela";
// if (nome == "Como") alert("é dev web pro max");

40 + 10 + 25;
console.log(40 + 10 + 35);
// console.log(nome);

console.log(40); // Escrevendo o número 40 no console do navegador
console.log("Javascript");
*/

/*
005 - Valores e Variaveis
let linguagem = "JavaScript";
let $linguagem = "JavaScript";

// console.log($linguagem);

//  Caracteres válidos em nomes de variaveis:
// letra maiscula ou minuscula, $, _, 3

let nome;
// console.log(nome);

// Como nomear uma variável
// camelCase
let nomeDeUanela = "Uanela Como 54";
// snake_case

console.log(nomeDeUanela);
console.log(nomeDeUanela);
console.log(nomeDeUanela);
console.log(nomeDeUanela);
nomeDeUanela = "Cristiano Ronaldo";
console.log(nomeDeUanela);

let PI = 3.1415;
let Nome = "Uanela";

let escola1 = "Bons Sonhos";
let escola2 = " Nossa Senhora de Fátima";

let minhaPrimeiraEscola = "Bons Sonhos";
let minhaSegundaEscola = "Nossa Senhora Fátima";

*/

/*
// Tipos de Dados
let idade = 25;
let nome = "Uanela Como";
let sabeJavaScript = true;
let JavaScriptEDivertido = null;
let javascript;

console.log(typeof idade);
console.log(typeof nome);
console.log(typeof sabeJavaScript);
console.log(typeof JavaScriptEDivertido);
console.log(typeof javascript);

idade = "Cristiano";
console.log(typeof idade);
*/

/*
// let, const, var
let idade = 22;
console.log(idade);
idade = "Teste";
console.log(idade);

let nome;
console.log(nome);
nome = "Uanela";
console.log(nome);

const PI = 3.1415;
// console.log(PI);
// PI = 1;
// console.log(PI);

// VAR
var ano;
console.log(ano);
ano = 2050;
console.log(ano);

apelido = "Como";
console.log(apelido);
*/

/*
// 08 - Operadores Básicos

// Operadores Aritméticos  ou matemáticos
// + - * / % **
const a = 10;
const b = 5;
console.log(a + b, a - b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(2 ** 3);

// Concatenação
const nome = "Uanela";
const apelido = "Como";
console.log(nome + " " + apelido);

// typeof

// Operadores de atribuição
let c = 2;
c += 6;
c -= 3;
c *= 3;
// c = c + 5;
console.log(c);

// Operadores de comparação
// > < >= <= == ===
console.log(3 == 2);

console.log(5 - 2 > 8 + 9);
console.log(5 - 2, 8 + 9);
*/

/*
// Precêdencia de operadores
console.log(5 - 2 > 8 + 9);

let a, b;
a = b = (5 - 2) * (8 + 9);
// b = 5;
console.log(a, b);

const idadeBill = 16;
const idadeSteve = 20;

const idadeMedia = (idadeBill + idadeSteve) / 2;
console.log(idadeMedia);
*/

// DESAFIO #1
/*
    Bill e Steve estão tentando comparar seus IMCs 
    (Índice de Massa Corporal), que é calculado usando a 
    fórmulas: 
    IMC = peso / altura ** 2  
    IMC = peso / (altura * altura).

    NB: peso em kg e altura em metro.
    1. Armazene a peso e a altura de Bill e Steve em variáveis.
    2. Calcule o IMC de ambos usando a fórmula.
    3. Crie uma variável booleana 'billTemIMCMaior' contendo 
    informações sobre se Bill tem um IMC maior que Steve.

    Teste os dados:
    Dados 1: Bill pesa 78 kg e tem 1,69 m de altura. 
    Steve pesa 92 kg e tem 1,95 m de altura.

    Dados 2: Bill pesa 95 kg e tem 1,88 m de altura.
     Steve pesa 85 kg e tem 1,76 m de altura.
*/

/*
const pesoBill = 92;
const alturaBill = 1.88;
const pesoSteve = 85;
const alturaSteve = 1.76;

const IMCBill = pesoBill / alturaBill ** 2;
const IMCSteve = pesoSteve / (alturaSteve * alturaSteve);
console.log("IMC Bill " + IMCBill);
console.log("IMC Steve " + IMCSteve);
const billTemIMCMaior = IMCBill > IMCSteve;

console.log(billTemIMCMaior);
*/

/*
// STRING E TEMPLATE LITERALS
//

const nome = `Uanela`;
const profissao = `tutor`;
const anoDeNascimento = 2002;
const ano = 2040;

const uanela =
  "Eu sou " +
  nome +
  " um " +
  profissao +
  " de " +
  (ano - anoDeNascimento) +
  " anos!";
console.log(uanela);

const novoUanela = `Eu sou ${nome} um ${profissao} de ${
  ano - anoDeNascimento
} anos!`;
console.log(novoUanela);

// String de múltiplas linhas
console.log(
  "String com \n\
Múltiplas\n\
Linhas"
);

console.log(`String com
Múltiplas
Linhas`);
*/

/*
// TOMADA DE DECISÃO COM IF ELSE
const horas = 19;
const bomDia = horas < 12;
let mensagem;

// if (horas < 12) {
//   console.log(`Bom dia!`);
// } else if (horas < 18) {
//   const resto = 24 - horas;
//   console.log(`Boa tarde! faltam ${resto} horas para final do dia`);
// } else {
//   console.log(`Boa noite!`);
// }

if (horas < 12) {
  mensagem = `Bom dia! são ${horas} horas☀️`;
} else if (horas < 18) {
  mensagem = `Boa tarde! faltam ${24 - horas} horas para final do dia`;
} else {
  mensagem = `Boa noite! são ${horas} horas!😃`;
}
console.log(mensagem);
*/

// DESAFIO #2
/* 
DESAFIO #2
1. Imprima uma mensagem no console, informando quem tem maior IMC. A mensagem
deve ser:
"Bill tem IMC de (25) que é maior do que do Steve que é (26)!" ou 
"Steve tem IMC de (25) que é maior do que do Bill que é (25)!"
2. Use template literal para incluir os valores de IMC na mensagem imprimida. Ex:
"Bill tem IMC de (25) que é maior do que do Steve que é (26)!"

Dicas:
1. Use declarações - if else
2. Reutilize o código do Desafio 1
*/

// const pesoBill = 92;
// const alturaBill = 1.5;
// const pesoSteve = 85;
// const alturaSteve = 1.76;

// const IMCBill = pesoBill / alturaBill ** 2;
// const IMCSteve = pesoSteve / (alturaSteve * alturaSteve);
// console.log(IMCBill, IMCSteve);

// if (IMCBill > IMCSteve) {
//   console.log(
//     `Bill tem IMC de (${IMCBill}) que é maior do que do Steve que é (${IMCSteve})!`
//   );
// } else {
//   console.log(
//     `Steve tem IMC de (${IMCSteve}) que é maior do que do Bill que é (${IMCBill})!`
//   );
// }

// CONVERSÃO E COERÇÃO DE TIPOS
// const num1 = prompt("Primeiro número");
// const num2 = prompt("Segundo número");
// const nome = Number("Uanela");
// console.log(typeof NaN);

// // NaN = Not a Number
// console.log(String(34), 34);
// const idade = 25;

// console.log("Eu tenho " + idade + " anos");
// console.log("5" - "2");
// console.log("6" * "2");

// VALORES FALSOS E VERDADEIROS
// Valores: 0, "", null, undefined, NaN
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean({}));
// console.log("---------------");

// const saldo = "";

// if (saldo) console.log(`Seu saldo é ${saldo}`);
// else console.log(`Infelizmente você não tem saldo`);

// let nome = "Uanela";
// if (nome) console.log(`Nome: ${nome}`);
// else console.log(`Você não definiu a variável nome`);

// const idade = "40";
// // Operador de igualdade rigorosa / strict
// if (idade === 40) console.log("Você é adulto! (Rigoroso)");

// // Operador de igualdade frouxa / loose
// if (idade == 40) console.log("Você é adulto! (Frouxo)");
// if (0 === false) console.log("Houve coerção!");

// // const numeroDaSorte = prompt("Digite um número da Sorte!");

// // if (numeroDaSorte === 7) console.log(`Certo!!! ${numeroDaSorte}`);
// // else if (numeroDaSorte === "9") console.log(`Certo!!! ${numeroDaSorte}`);
// // else if (numeroDaSorte === "9") console.log(`Certo!!! ${numeroDaSorte}`);

// const numeroDeAzar = prompt("Digite um número da Sorte!");

// // "10"
// if (numeroDeAzar !== 10) console.log(`Certo!!! ${numeroDeAzar}`);
// else if (numeroDeAzar === "11") console.log(`Certo!!! ${numeroDeAzar}`);

// Operadores Lógicos
// const temCarteiraDeMotorista = true;
// const temBoaVisao = false;

// console.log(temCarteiraDeMotorista && !temBoaVisao);
// console.log(temCarteiraDeMotorista || temBoaVisao);
// console.log(!temCarteiraDeMotorista);

// if (temCarteiraDeMotorista || temBoaVisao) {
//   console.log("Uanela pode dirigir!");
// } else {
//   console.log("Outra pessoa deve dirigir!");
// }

// const cansado = false;
// console.log((temCarteiraDeMotorista && !temBoaVisao) || cansado);
// console.log(!cansado);

/* 
DESAFIO 3
Existem dois times de basquete, Bulls e Warriors. Eles 
competem entre si 3 vezes. O vencedor com a maior média 
de pontos ganha um troféu!
1. Calcule a média de pontos de cada time, usando os dados 
de teste abaixo.
2. Compare as médias de pontos dos times para determinar o
 vencedor da competição e imprima no console. Não se 
 esqueça que pode haver um empate, então teste isso também
(empate significa que ambos têm a mesma média de pontos).
3. Bônus 1: Inclua um requisito para uma pontuação mínima
de 100. Com essa regra, um time só ganha se tiver uma 
pontuação mais alta que o outro time e, ao mesmo tempo, 
uma pontuação de pelo menos 100 pontos. Dica: 
Use um operador lógico para testar a pontuação mínima, 
bem como vários blocos de else-if.
4. Bônus 2: A pontuação mínima também se aplica a um empate!
 Então, um empate só acontece quando ambos os times têm 
 a mesma pontuação e ambos têm uma pontuação maior ou igual
  a 100 pontos. Caso contrário, nenhum time ganha o troféu.
Dados de teste:
- Dados 1: Bulls pontuam 96, 108 e 89. 
Warriors pontuam 88, 91 e 110.
- Dados do Bônus 1: Bulls pontuam 97, 112 e 101. 
Warriors pontuam 109, 95 e 123.
- Dados do Bônus 2: Bulls pontuam 97, 112 e 101. 
Warriors pontuam 109, 95 e 106.
*/

// const bullsPontos = (97 + 112 + 0) / 3;
// const warriorsPontos = (109 + 95 + 0) / 3;
// console.log(`Bulls: ${bullsPontos} vs Warriors: ${warriorsPontos}`);

// if (bullsPontos > warriorsPontos && bullsPontos >= 100) {
//   console.log("Bulls vencem o troféu🥇!");
// } else if (warriorsPontos > bullsPontos && warriorsPontos >= 100) {
//   console.log("Warriors vencem o troféu🥇!");
// } else if (
//   warriorsPontos === bullsPontos &&
//   warriorsPontos >= 100 &&
//   bullsPontos >= 100
// ) {
//   console.log("Houve um empate🥇!");
// } else {
//   console.log("Ninguém ganhou o troféu!😭");
// }

// Declaração Switch
// const dia = "Sábado";

// switch (dia) {
//   case "Segunda":
//     console.log("Prepara flyers para empresa!");
//     break;
//   case "Terça":
//     console.log("Preparar roteiros para YouTube!");
//     break;
//   case "Quarta":
//     console.log("Preparar roteiros para curso!");
//     break;
//   case "Quinta":
//   case "Sexta":
//     console.log("Gravar os vídeos!");
//     break;
//   case "Sábado":
//     console.log("Descansar!");
//     break;
//   case "Domingo":
//     console.log("Vai a igreja!");
//     break;
//   default:
//     console.log("Dia inválido!");
// }

// if (dia === "Segunda") {
//   console.log("Prepara flyers para empresa!");
// } else if (dia === "Terça") {
//   console.log("Preparar roteiros para YouTube!");
// } else if (dia === "Quarta") {
//   console.log("Preparar roteiros para curso!");
// } else if (dia === "Quinta" || dia === "Sexta") {
//   console.log("Gravar os vídeos!");
// } else if (dia === "Sábado") {
//   console.log("Descansar!");
// } else if (dia === "Domingo") {
//   console.log("Vai a igreja!");
// } else {
//   console.log("Dia inválido!");
// }

// DECLARAÇÕES E EXPRESSÕES
// 4;
// 3 + 4;
// ("Uanela");
// 2 > 6;
// (true && false) || false;

// if (20 > 2) {
//   let test = "teste";
// }

// const nome = "Uanela";
// console.log(`Eu ${nome} tenho ${2050 - 2002} anos!`);

// OPEADOR TERNÁRIO OU CONDICIONAL
// const idade = 162;
// // idade >= 18
// //   ? console.log("Eu gosto de trabalhar")
// //   : console.log("Eu gosto de estudar");

// const hobby = idade >= 18 ? "trabalhar" : "estudar";
// const hobby3 = idade >= 18 ? "trabalhar" : idade >= 6 ? "estudar" : "brincar";

// // console.log(`Eu gosto de ${hobby}!!`);
// console.log(`Eu gosto de ${hobby}!!`);
// console.log(`Eu gosto de ${idade >= 18 ? "trabalhar" : "estudar"}!!`);

// let hobby2;
// if (idade >= 18) hobby2 = "trabalhar";
// else if (idade >= 6) hobby2 = "estudar";
// else hobby2 = "brincar";

// console.log(hobby2);

// DESAFIO 4
/* 
Um grupo de amigos esta prestes a organizar uma festa onde 
haverá uma contribuição dentre 15% ou 20% do salário mínimo do 
país onde vivem que é 7500.  Se a idade da pessoa for menor ou 
igual que 24 ela irá com 15% do salário mínimo mais 850 e se a 
idade for maior á 24 anos irá contribuir com 20% do salário 
mínimo mais 850. Lembrando que elá deve ter no mínimo 18 anos.
1.	Calcule o valor de contribuição, dependendo da idade da 
pessoa. Crie uma variável ‘valorDaPercentagem’. Não é 
permitido usar declaração if/else (Se for mais fácil para 
  si, você pode começar pela declaração if/else e depois 
  converter para operador ternário)
2.	Imprima no console uma mensagem contendo a idade, a 
percentagem a contribuir e o valor total a contribuir 
(percentagem + 850). Exemplo: “Jorge tem 25 anos, a percentagem é
 de 1500 e o valor total a contribuir é 2350.”
Dados de Teste:
Dado 1: Jorge, 28 anos.
Dado 2: Joana, 22 anos.
Dicas:
1.	Para calcular 25% de um valor, apenas multiplique
por 25/100 = 0.25
2.	A idade é no minimo 18 e menor ou igual que 24:  
idade >= 18 && idade <= 24
*/

const idade = 17;
const salario = 7500;
const valorDaPercentagem =
  idade >= 18 && idade <= 24 ? salario * 0.15 : salario * 0.2;

if (idade >= 18) {
  console.log(
    `Marcos tem ${idade} anos, a percentagem é de ${valorDaPercentagem} e o valor total a contribuir é ${
      valorDaPercentagem + 850
    }.`
  );
} else {
  console.log("Menores de idade não podem participar da festa.");
}
