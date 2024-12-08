'use strict';

// const calcularTroco = valor => valor - 200;
// const nome = 'Uanela';

// // TODO:
// // Fazer log da variável nome
// console.log(nome);

// PROBLEMA:
//  Nós trabalhamos em uma escolinha e as crianças acabaram
// de chegar no recinto das escolinha, mas para elas entrarem
// na sala elas devem estar organizadas na seguinte ordem
// começando do mais novo para o mais velho. tenha em mente
// que alguns deles não conhecem a sua idade.

// const idades = [4, 2, 5, 1, 3, 7, 'desconhecida', 3, 10, 8, 2];

// const ordenarIdadesEmOrdemCrescente = idades => {
//   const idadesConhecidas = [];
//   for (let i = 0; i < idades.length; i++) {
//     // if (isNaN(idades[i])) continue;
//     if (typeof idades[i] !== 'number') continue;
//     idadesConhecidas.push(idades[i]);
//   }
//   return idadesConhecidas.sort((a, b) => a - b);
// };

// console.log(ordenarIdadesEmOrdemCrescente(idades));
//  1 - Procure Entender O Problema:
// - Como determinar a idade de cada criança?
// - Como organizar as crianças em ordem crescente de idade?
// - O que fazer se a idade de uma criança for desconhecida?

// 2 - Divida e resolva:
// - Verificar se a idade de uma criança é conhecida.
// - Organizar as crianças em ordem crescente de acordo com a idade.
// - Lidar com o caso de crianças cuja idade é desconhecida.

// 3 - Pesquise:
// - Como verificar se um valor é um número em JavaScript?
// - Como ordenar um array em ordem crescente em JavaScript?

// 4 - Escreva pseudo código:
//     function organizarIdades(idades) {
//     // Verifica se a idade é conhecida
//     // Ordena as idades em ordem crescente
//     // Retorna as idades organizadas
//     }

// BÓNUS:
//  Agora com as crianças organizadas, matenha em salas diferentes os alunos com mesmas idades.
// const sala1 = [];
// const sala2 = [];
// const idadesOrdenadas = ordenarIdadesEmOrdemCrescente(idades);

// for (let i = 0; i < idadesOrdenadas.length; i++) {
//   const idadeActual = idadesOrdenadas[i];
//   if (sala1.includes(idadeActual)) sala2.push(idadeActual);
//   else sala1.push(idadeActual);
// }

// console.log(sala1, sala2);

// PROBLEMA:
//  Nós trabalhamos em uma escolinha e as crianças acabaram
// de chegar no recinto das escolinha, mas para elas entrarem
// na sala elas devem estar organizadas na seguinte ordem
// começando do mais novo para o mais velho. tenha em mente
// que alguns deles não conhecem a sua idade.

//  1 - Procure Entender O Problema:
// - Como determinar a idade de cada criança?
// - Como organizar as crianças em ordem crescente de idade?
// - O que fazer se a idade de uma criança for desconhecida?

// 2 - Divida e resolva:
// - Verificar se a idade de uma criança é conhecida.
// - Organizar as crianças em ordem crescente de acordo com a idade.
// - Lidar com o caso de crianças cuja idade é desconhecida.

// 3 - Pesquise:
// - Como verificar se um valor é um número em JavaScript?
// - Como ordenar um array em ordem crescente em JavaScript?

// 4 - Escreva pseudo código:
//     function organizarIdades(idades) {
//     // Verifica se a idade é conhecida
//     // Ordena as idades em ordem crescente
//     // Retorna as idades organizadas
//     }

// BÓNUS:
//  Agora com as crianças organizadas, matenha em salas diferentes os alunos com mesmas idades.

// 1. Tenha em mente que você entende 100% do problema:
// - Como verificar se há idades repetidas entre as crianças?
// - Como manter apenas as crianças com idades diferentes?

// 2. Divida e resolva:
// - Verificar se há idades repetidas.
// - Filtrar apenas as crianças com idades diferentes.

// 3. Pesquise:
// - Como verificar se há elementos repetidos em um array em JavaScript?
// - Como filtrar elementos duplicados de um array em JavaScript?

// 4. Escreva pseudo código:
//     function manterIdadesDiferentes(idades) {
//     // Verifica se há idades repetidas
//     // Filtra apenas as idades diferentes
//     // Retorna as idades sem repetições
//     }

// const idades = [4, 2, 5, 1, 3, 7, 'desconhecida', 3, 10, 8, 2];

// const isNumber = value => typeof value === 'number';

// const ordenarIdadesEmOrdemCrescente = idades => {
//   const idadesConhecidas = [];
//   for (let i = 0; i < idades.length; i++) {
//     if (!isNumber(idades[i])) continue;
//     idadesConhecidas.push(idades[i]);
//   }
//   return idadesConhecidas.sort((a, b) => a - b);
// };

// console.log(ordenarIdadesEmOrdemCrescente(idades));

// // BONUS
// const separarCriancasPelaIdade = idades => {
//   const sala1 = [];
//   const sala2 = [];
//   // const idadeEmSala1 = {};

//   for (let idade of idades) {
//     // console.log(idade, idadeEmSala1);
//     if (sala1.includes(idade)) sala2.push(idade);
//     else sala1.push(idade);
//   }

//   return { sala1, sala2 };
// };

// const idadesOrdenadas = ordenarIdadesEmOrdemCrescente(idades);
// console.log(separarCriancasPelaIdade(idadesOrdenadas));

// const idades = [4, 2, 5, 1, 3, 7, 'desconhecida', 3, 10, 8, 2];
// const idadesOrdenadas = [];

// // Separa as idades conhecidas e as ordena
// idades.forEach(idade => {
//   if (typeof idade === 'number') {
//     idadesOrdenadas.push(idade);
//   }
// });

// idadesOrdenadas.sort((a, b) => a - b);

// console.log(idadesOrdenadas);

// const calculadora = {
//   // 3.Corrigir
//   valor1: Number(prompt('Primeiro número')),
//   operador: prompt('Operador (+ - / *)'),
//   // 4. Previnir
//   valor2: Number(prompt('Segundo número')),
//   calcular: function () {
//     switch (this.operador) {
//       case '+':
//         return this.valor1 + this.valor2;
//       case '-':
//         return this.valor1 - this.valor2;
//       case '/':
//         return this.valor1 / this.valor2;
//       case '*':
//         return this.valor1 * this.valor2;
//       default:
//         return `${this.operador} é um operador inválido4`;
//     }
//   },
// };

// console.log(calculadora);

// // 1. Identificar: somando os valores
// console.log(calculadora.calcular());

// PROBLEMA:
// Crie uma função que verifica se uma palavra é um palíndromo?

const verificarPalindromo = palavra => {
  if (typeof palavra !== 'string') return 'Passe uma string';
  //   const arrayPalavra = palavra.split('');
  //   const arrayPalavraInvertida = arrayPalavra.reverse();
  //   const palavraInvertida = arrayPalavraInvertida.join('');
  //   console.log(arrayPalavra);
  //   console.log(arrayPalavraInvertida);
  //   console.log(palavraInvertida);
  return palavra === palavra.split('').reverse().join('');
};

console.log(verificarPalindromo('ana'));

// 1. Tenha em mente que você entende 100% do problema:
//  O que é um palindromo: palavras que lidase ao contrários é mesmo que ler normalmente
// Palavra: String

// 2. Divida e resolva:
// - verificar se o valor passado é uma string
// - Como inverter uma string
// - Como comparar strings

// 3. Pesquise:
// - como inverter uma string

// 4. Escreva pseudo código:
/*
funcao verificarPalindromo(palavra) {
    verificar se palavra é string
    inverter
    comparar se sao iguais
    retornar se é palindromo
}
*/
