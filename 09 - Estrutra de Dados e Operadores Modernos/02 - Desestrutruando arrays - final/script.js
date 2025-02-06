"use script";

// const arr = [5, 7, 9];
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];

// // // Desestruturação Simples
// const [a, b, c] = arr;

// console.log(a, c);
// console.log(arr);

// let [first, , third, fourth] = [4, 5, 6, 7];
// console.log(first, third, fourth);

// [first, third] = [1, 2];
// first = 10;
// console.log(first, third);

// let [starter, main] = restaurant.order(3, 2);

// console.log(starter, main);

// [starter, main] = [main, starter];
// console.log(starter, main);

// // Desestruturação aninhada (nested)
// const nested = [6, 8, [10, 12, [14, 16, 18]]];

// const [d, e, [, , [j, k, l]]] = nested;
// console.log(d, e, j, k, l);

// // Valores iniciais / Default values
// let [starter2 = "salada", main2 = "Big mac", terceiro = "água"] =
//   restaurant.order(31, 11);
// console.log(starter2, main2, terceiro);

// if (starter2) {
//   starter2 = "Uanela Como";
//   console.log("log do starter2", starter2);
// }

// Desestruturação Simples de Objeto

// const { starterMenu, categories, name, location: local } = restaurant;
// const starterMenu = restaurant.starterMenu;
// const categories = restaurant.categories;
// const name = restaurant.name;

// let {
//   starterMenu: menuInicial,
//   categories: tags,
//   name: restaurantName,
//   location: local,
// } = restaurant;

// restaurantName = "Web Pro Max Food";

// console.log(restaurantName, menuInicial, tags, local);

// // Modificando váriaveis independentes usando valores de objetos
// let x = 255;
// let y = 100;
// const position = { x: 40, y: 50, z: 200 };

// // x = position.x;
// // y = position.y;

// console.log(x, y);
// ({ x, y } = position);
// console.log(x, y);

// // Desestruturação aninhada de objetos
// let {
//   openingHours: {
//     friday: sexta,
//     thursday: { open, close = 24 },
//     saturday,
//   },
// } = restaurant;
// // console.log(openingHours);

// // const { friday } = openingHours;

// console.log(sexta, saturday);
// console.log(open, close);

// restaurant.orderDelivery({
//   //   startIndex: 1,
//   //   mainIndex: 2,
//   //   time: "20:00",
//   address: "Rua Sofala",
// });

// The Spread Operator

// const restaurant = {
//   name: "Cacilda e Filhos",
//   location: "Rua Comandante Diogo de Sá, Beira, Moçambique",
//   categories: ["Moçambicana", "Grelhados", "Vegetariana", "Orgânica"],
//   starterMenu: ["Pão de Alho", "Chamussas", "Salada de Abacate", "Maçaroca"],
//   mainMenu: [
//     "Frango à Zambeziana",
//     "Caril de Camarão",
//     "Arroz de Coco",
//     "Feijoada Moçambicana",
//   ],
//   openingHours: {
//     thursday: {
//       open: 8,
//       close: 22,
//     },
//     friday: {
//       open: 16,
//       close: 23,
//     },
//     saturday: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     startIndex = 2,
//     mainIndex = 0,
//     time = "12:00",
//     address,
//   }) {
//     console.log(
//       `Pedido feito! ${this.starterMenu[startIndex]} e ${this.mainMenu[mainIndex]} será entregue em ${address} pelas ${time}.`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Seu prato com ${ing1}, ${ing2}, ${ing3}`);
//   },
// };

// const arr = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// const newArr = [18, 19, arr[0], arr[1], arr[2]];
// console.log(newArr);

// const newArr2 = [18, 19, ...arr];
// console.log(20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);
// console.log(...arr);
// console.log(newArr2);

// const newMenu = [...restaurant.mainMenu, "Batatas loucas"];
// console.log(newMenu);

// // Copiarmos um array
// let mainMenu2 = [...restaurant.mainMenu];
// mainMenu2[0] = 2;

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iteráveis: arrays, strings, maps, sets, NÃO Objetos
// const nome = "Uanela";
// const letras = [...nome, " ", "C"];
// console.log(letras);
// console.log(...nome);

// // Não funciona porque não espera receber valores separados por vírgula
// // console.log(`${...nome} Como`);

// // Exemplo com restaurante
// // const ingredients = [
// //   prompt("Coloque igrediente 1"),
// //   prompt("Coloque igrediente 2"),
// //   prompt("Coloque igrediente 3"),
// // ];

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);

// // Objetos
// const newRestaurant = {
//   ...restaurant,
//   foundedIn: 2024,
//   founder: "Cacilda",
//   name: "Web Pro Max",
// };
// console.log(newRestaurant);

// // Copiar objetos
// const restaurantCopied = { ...restaurant };
// restaurantCopied.name = "Novo restuarante cópia";

// console.log(restaurantCopied.name);
// console.log(restaurant.name);

// const restaurant = {
//   name: "Cacilda e Filhos",
//   location: "Rua Comandante Diogo de Sá, Beira, Moçambique",
//   categories: ["Moçambicana", "Grelhados", "Vegetariana", "Orgânica"],
//   starterMenu: ["Pão de Alho", "Chamussas", "Salada de Abacate", "Maçaroca"],
//   mainMenu: [
//     "Frango à Zambeziana",
//     "Caril de Camarão",
//     "Arroz de Coco",
//     "Feijoada Moçambicana",
//   ],
//   openingHours: {
//     thursday: {
//       open: 8,
//       close: 22,
//     },
//     friday: {
//       open: 16,
//       close: 23,
//     },
//     saturday: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     startIndex = 2,
//     mainIndex = 0,
//     time = "12:00",
//     address,
//   }) {
//     console.log(
//       `Pedido feito! ${this.starterMenu[startIndex]} e ${this.mainMenu[mainIndex]} será entregue em ${address} pelas ${time}.`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Seu prato com ${ing1}, ${ing2}, ${ing3}`);
//   },
//   orderPizza: function (mainIgridient, ...otherIgredients) {
//     console.log(
//       `Ai vai sua pizza com igriedinte principal ${mainIgridient} e com outros igredientes ${otherIgredients}`
//     );
//   },
// };

// // SPREAD, fica do lado direito do sinal de atribuição (=)
// const outroArr = [3, 4, 5, 6, 7];
// const arr = [1, 2, ...outroArr];
// console.log(arr);

// const [first, second, third, ...remaining] = arr;
// console.log(first, second, third, remaining);

// const [firstFood, secondFood, ...otherFoods] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];

// console.log(firstFood, secondFood, otherFoods);

// // Objetos
// const { saturday, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Funções
// const somar = function (...numbers) {
//   let soma = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     soma += numbers[i];
//   }
//   console.log(soma);
// };

// somar(4, 5);
// somar(4, 5, 8, 9, 10, 4, 6, 7, 9);
// somar(4, 5, 8, 9, 10, 4, 6, 7, 9, 20, 59, 43, 53);

// const arr2 = [4, 5, 8, 9, 10, 4, 6, 7, 9, 20, 59, 43];
// somar(...arr2);

// restaurant.orderPizza("Frango", "Tomate", "Cebola", "Queijo");
// restaurant.orderPizza("Camarão");

// const restaurant = {
//   name: "Cacilda e Filhos",
//   location: "Rua Comandante Diogo de Sá, Beira, Moçambique",
//   categories: ["Moçambicana", "Grelhados", "Vegetariana", "Orgânica"],
//   starterMenu: ["Pão de Alho", "Chamussas", "Salada de Abacate", "Maçaroca"],
//   mainMenu: [
//     "Frango à Zambeziana",
//     "Caril de Camarão",
//     "Arroz de Coco",
//     "Feijoada Moçambicana",
//   ],
//   openingHours: {
//     thursday: {
//       open: 8,
//       close: 22,
//     },
//     friday: {
//       open: 16,
//       close: 23,
//     },
//     saturday: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     startIndex = 2,
//     mainIndex = 0,
//     time = "12:00",
//     address,
//   }) {
//     console.log(
//       `Pedido feito! ${this.starterMenu[startIndex]} e ${this.mainMenu[mainIndex]} será entregue em ${address} pelas ${time}.`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Seu prato com ${ing1}, ${ing2}, ${ing3}`);
//   },
//   orderPizza: function (mainIgridient, ...otherIgredients) {
//     console.log(
//       `Ai vai sua pizza com igriedinte principal ${mainIgridient} e com outros igredientes ${otherIgredients}`
//     );
//   },
// };

// console.log("--------OR-------");

// console.log(22 || "Uanela");
// console.log("" || "Uanela");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || "" || "João" || 22 || null);

// const menu = restaurant.secondMenu || ["Batatas", "Cebolas"];
// console.log(menu);

// restaurant.pratos = 0;
// const pratos1 = restaurant.pratos ? restaurant.pratos : 12;

// const pratos2 = restaurant.pratos || 12;
// console.log(pratos1, pratos2);

// console.log("-------AND-----------");

// console.log(22 && "Uanela");
// console.log(22 && "Uanela" && "Como");

// if (restaurant.pratos) {
//   console.log(restaurant.pratos);
// }

// restaurant.orderPizza && restaurant.orderPizza("Frango");

// const restaurant = {
//   name: "Cacilda e Filhos",
//   location: "Rua Comandante Diogo de Sá, Beira, Moçambique",
//   categories: ["Moçambicana", "Grelhados", "Vegetariana", "Orgânica"],
//   starterMenu: ["Pão de Alho", "Chamussas", "Salada de Abacate", "Maçaroca"],
//   mainMenu: [
//     "Frango à Zambeziana",
//     "Caril de Camarão",
//     "Arroz de Coco",
//     "Feijoada Moçambicana",
//   ],
//   openingHours: {
//     thursday: {
//       open: 8,
//       close: 22,
//     },
//     friday: {
//       open: 16,
//       close: 23,
//     },
//     saturday: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     startIndex = 2,
//     mainIndex = 0,
//     time = "12:00",
//     address,
//   }) {
//     console.log(
//       `Pedido feito! ${this.starterMenu[startIndex]} e ${this.mainMenu[mainIndex]} será entregue em ${address} pelas ${time}.`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Seu prato com ${ing1}, ${ing2}, ${ing3}`);
//   },
//   orderPizza: function (mainIgridient, ...otherIgredients) {
//     console.log(
//       `Ai vai sua pizza com igriedinte principal ${mainIgridient} e com outros igredientes ${otherIgredients}`
//     );
//   },
// };

// restaurant.pratos = 0;

// Desafio 1

// const game = {
//   team1: "Real Madrid",
//   team2: "Barcelona",
//   players: [
//     [
//       "Navas",
//       "Carvajal",
//       "Varane",
//       "Ramos",
//       "Marcelo",
//       "Casemiro",
//       "Kroos",
//       "Modric",
//       "Bale",
//       "Benzema",
//       "Ronaldo",
//     ],
//     [
//       "Ter Stegen",
//       "Sergi Roberto",
//       "Piqué",
//       "Umtiti",
//       "Jordi Alba",
//       "Busquets",
//       "Rakitic",
//       "Iniesta",
//       "Messi",
//       "Suárez",
//       "Neymar",
//     ],
//   ],
//   score: "5:1",
//   scored: ["Ronaldo", "Benzema", "Ronaldo", "Messi", "Bale"],
//   date: "23 de Abril 2017",
//   odds: {
//     team1: 1.5,
//     x: 3.75,
//     team2: 2.8,
//   },
// };

// // 1 - Crie um array de jogadores para cada time (variáveis 'players1' e 'players2').
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2 - O primeiro jogador de qualquer array de jogadores é o goleiro, e os outros são jogadores de linha. Para o Reald Madrid (time 1), crie uma variável ('gk') com o nome do goleiro e um array ('fieldPlayers') com os outros 10 jogadores de linha.

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3 - Crie um array 'allPlayers' contendo todos os jogadores de ambos os times (22 jogadores).
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4 - Durante o jogo, o Reald Madrid (time 1) usou 3 jogadores substitutos. Então, crie um novo array ('players1Final') contendo todos os jogadores originais do time1, juntamente  com Nacho, Asensio e Lucas.
// const players1Final = [...players1, "Nacho", "Asensio", "Lucas"];
// console.log(players1Final);

// // 4.5 - crie um outro array 'remainingPlayers' sem os seguintes jogadores Kross, Bale e Carvajal, poís foram Substituidos.

// const substitutedPlayers = ["Kroos", "Bale", "Carvajal"];
// const remainingPlayers = players1Final.filter(
//   (player) => !substitutedPlayers.includes(player)
// );

// // for (const player of players1Final) {
// //   let isSubbed = false;
// //   for (const subsitutedPlayer of substitutedPlayers) {
// //     if (player === subsitutedPlayer) {
// //       isSubbed = true;
// //       break;
// //     }
// //   }
// //   if (!isSubbed) remainingPlayers.push(player);
// // }
// console.log(remainingPlayers);

// // 5 - Com base no objeto game.odds, crie uma variável para cada odd chamada 'team1', 'draw' e 'team2'.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6 - Escreva uma função ('printGoals') que recebe um número arbitrário de nomes de jogadores (NÃO um array) e imprime cada um deles no console, junto com o número total de gols marcados no jogo. ex: Ronaldo marcou 2 golos.

// function printGoals(...players) {
//   players.forEach((player) => {
//     let goalsScored = 0;
//     game.scored.forEach((gol) => {
//       if (player === gol) goalsScored++;
//     });
//     console.log(`${player} marcou ${goalsScored} golos!`);
//   });
// }

// printGoals("Ronaldo", "Benzema", "Modríc", "Casemiro", "Messi");

// // 7 - O time com o odd mais baixa é o mais provável de vencer. Imprima no console qual time é mais provável de ganhar, SEM usar uma declaração if/else ou operador ternário.

// team1 < team2 && console.log("Real Madrid tem mais chances de vencer");
// team1 > team2 && console.log("Barcelona tem mais chances de vencer");

// DADOS DE TESTE PARA O ITEM 6: Use os jogadores 'Ronaldo', 'Benzema', 'Modríc' e 'Casemiro'. Depois, chame a função novamente com jogadores de game.scored.

// // &&, ??
// // null ou undefined
// console.log(restaurant.pratos);
// const pratos2 = restaurant.pratos ?? 12;
// console.log(pratos2);

// // && (AND)
// let token = "1234abcd";
// let usuarioLogado = true;

// usuarioLogado &&= token;

// console.log(usuarioLogado);

// // || (OR)

// let telefone = null;

// telefone ||= "4812345678";
// console.log(telefone);

// // ?? (Coalesência Nula)
// let idioma = null;

// idioma ??= "inglês";
// console.log(idioma);

// const cidades = ["Beira", "Maputo", "Nampula", "Chimoio", "Tete"];

// for (let cidade of cidades) {
//   console.log(cidade);
// }

// const produtos = [
//   { nome: "camiseta", preco: 20 },
//   { nome: "calça", preco: 30 },
//   { nome: "ténis", preco: 300 },
// ];

// for (let produto of produtos) {
//   console.log(`${produto.nome} custa ${produto.preco} MZn`);
// }

// const name = "Uanela";
// const age = 25;

// // const person = {
// //   name: name,
// //   age: age,
// //   greetings: function () {
// //     return `Olá eu sou ${this.name} tenho ${this.age} anos de idade!`;
// //   },
// // };

// // console.log(person.greetings());

// // address {country}

// const person = {
//   name,
//   age,
//   greetings() {
//     return `Olá eu sou ${this.name} tenho ${this.age} anos de idade!`;
//   },
//   // address: {
//   //   country: "Mozambique",
//   // },
// };

// console.log(person.greetings());
// console.log(person.address?.country);
// console.log(person.address.city);

// console.log("linha 480");

// const product = {
//   name: "Galaxy S35",
//   price: 120000,
//   stock: 3500,
//   color: "black",
//   camera: "200MP",
//   available: true,
//   sell() {},
// };

// console.log(Object.keys(product)); // array das chaves do objeto
// console.log(Object.values(product)); // array dos valores do objeto
// console.log(Object.entries(product)); // array de pares de chaves o valores do objeto

// // for, for...of, forEach
// const keys = Object.keys(product);
// const entries = Object.entries(product);

// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i]);
//   console.log(product[keys[i]]);
// }

// const [key, value] = ["name", "Galaxy s35"];

// for (let [key, value] of entries) {
//   console.log(key, value);
// }

// Desafio de Código #2

// const game = {
//   team1: "Real Madrid",
//   team2: "Barcelona",
//   players: [
//     [
//       "Navas",
//       "Carvajal",
//       "Varane",
//       "Ramos",
//       "Marcelo",
//       "Casemiro",
//       "Kroos",
//       "Modric",
//       "Bale",
//       "Benzema",
//       "Ronaldo",
//     ],
//     [
//       "Ter Stegen",
//       "Sergi Roberto",
//       "Piqué",
//       "Umtiti",
//       "Jordi Alba",
//       "Busquets",
//       "Rakitic",
//       "Iniesta",
//       "Messi",
//       "Suárez",
//       "Neymar",
//     ],
//   ],
//   score: "5:1",
//   scored: ["Ronaldo", "Benzema", "Ronaldo", "Messi", "Bale"],
//   date: "23 de Abril 2017",
//   odds: {
//     team1: 1.5,
//     x: 3.75,
//     team2: 2.8,
//   },
// };

// /* Vamos continuar com nosso aplicativo de apostas de futebol! */

// // 1 - Faça um loop sobre o array de game.scored e imprima o nome de cada jogador no console, junto com o número do gol (Exemplo: "Gol 1: Ronaldo")

// for (const [i, scorer] of game.scored.entries()) {
//   console.log(`Gol ${i + 1}: ${scorer}`);
// }

// // 2 - Use um loop para calcular a média das odds e registre-a no console (Já estudamos como calcular médias, você pode verificar se não se lembra)
// const oddsValues = Object.values(game.odds);
// let avarage = 0;
// oddsValues.forEach((odd) => (avarage += odd));
// console.log(avarage / oddsValues.length);

// // 3 - Imprima as 3 odds no console, mas de uma forma bem formatada, exatamente assim:
// // Odd de vitória do Real Madrid: 1.33
// // Odd de empate: 3.25
// // Odd de vitória do Barcelona: 6.5
// // Obtenha os nomes dos times diretamente do objeto do jogo, não os codifique manualmente (exceto para "empate"). DICA: Observe como as odds e os objetos do jogo têm os mesmos nomes de propriedades 😊

// for (const [key, value] of Object.entries(game.odds)) {
//   if (key === "x") console.log(`Odd de empate: ${value}`);
//   else console.log(`Odd de vitória do ${game[key]}: ${value}`);
// }

// // BÔNUS: Crie um objeto chamado 'scorers' que contém os nomes dos jogadores que marcaram gols como propriedades, e o número de gols como valor. Neste jogo, ficará assim:
// // {
// //   Ronaldo: 2,
// //   Messi: 1,
// //   Benzema: 2,
// // }

// /*
// {
//   Ronaldo: 2,
//   Benzema: 1,
//   Messi: 1,
//   Bale: 1
// }
// */

// const scorers = {};
// for (const player of game.scored) {
//   // if (scorers[player]) {
//   //   scorers[player] = scorers[player] + 1;
//   // } else scorers[player] = 1;
//   // scorers[player] = 1;

//   scorers[player] = (scorers[player] || 0) + 1;
// }

// console.log(scorers);

// const arr = {
//   name: "uanela",
//   1: "bede",
//   2: "como",
// };

// // console.log(arr["name"]);

// const numbers = new Set();
// numbers.add(7);
// numbers.add(10);
// numbers.add(10);
// numbers.add(7);
// console.log(numbers);

// fruits.add("apple");
// fruits.add("banana");
// fruits.add("pineapple");

// // Adicionar
// fruits.add("strawberry");

// // remover
// fruits.delete("banana");

// // verificar existência
// console.log(fruits.has("strawberry"));

// // tamanho
// console.log(fruits.size);

// // limpar
// fruits.clear();

// console.log(fruits);

// Usando outros valores

// const setWithOtherValues = new Set([
//   { name: "Bede", age: 75 },
//   true,
//   [1, 2, [3, 4]],
// ]);

// setWithOtherValues.add({ name: "Bede", age: 75 });
// setWithOtherValues.add([1, 2, [3, 4]]);

// const fruits = new Set(["apple", "banana", "orange"]);

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// fruits.forEach((fruit) => console.log(fruit));

// // Não funciona
// // for (let i = 0; i < fruits.size; i++) {
// //   console.log(fruits[i]);
// // }

// const fruitsValuesIterator = fruits.values();

// let i = 0;
// while (i < fruits.size) {
//   console.log(fruitsValuesIterator.next().value);
//   i++;
// }

// // Acessando Carácter
// let palavra = "JavaScript";

// console.log(palavra[2]);

// // Tamanho da palavra
// console.log(palavra.length);

// // Metódos Básicos
// let texto = "    Olá, Mundo!   ";
// console.log(texto.length);
// let maisculas = texto.toUpperCase();
// console.log(maisculas);

// let minusculas = texto.toLowerCase();
// console.log(minusculas);

// let semEspacosNoInicioENoFim = texto.trim();
// console.log(semEspacosNoInicioENoFim);
// console.log(semEspacosNoInicioENoFim.length);

// Metodos de busca e extracao
// indexOf
// let texto = "Aprenda JavaScript com JavaScript";

// console.log(texto);
// console.log(texto.indexOf("JavaScript"));

// // lastIndexOf
// console.log(texto.lastIndexOf("JavaScript"));

// // slice
// const frase = "Aprenda JavaScript hoje!";
// const parte = frase.slice(-10);
// // const parte = frase.slice(3, 7);
// console.log(parte);

// // substring
// const parte2 = frase.substring(-10);
// console.log(parte2);

// // Metodos de substituicao

// // replace
// // const novoTexto = texto.replace("JavaScript", "TypeScript");
// // const novoTexto = texto.replaceAll("JavaScript", "TypeScript");
// const novoTexto = texto.replace(/JavaScript/g, "TypeScript");
// console.log(novoTexto);

// // Metodos de divisao e juncao

// // split
// const palavras = frase.split(" ");
// const chars = frase.split("");
// console.log(palavras);
// console.log(chars);

// // join
// const words = ["Aprenda", "JavaScript", "hoje!"];
// const novaFrase = words.join(" ");

// console.log(novaFrase);

// const texto = "Aprenda JavaScript hoje!";

// // verificar a existencia de um texto em uma string: includes
// console.log(texto.includes("JavaScript"));
// console.log(texto.indexOf("JavaScriptfsfs"));

// // startsWith e endsWith
// console.log(texto.startsWith("Aprenda"));
// console.log(texto.endsWith("hoje! "));

// // limpeza
// // trimStart e trimEnd
// const frase = "   Olá, Mundo!    ";
// console.log(frase);
// console.log(frase.trimStart());
// console.log(frase.trimEnd());
// console.log(frase.trim());

// // transformação

// // padStart e padEnd
// const nome = "Uanela";
// console.log(nome.padStart(12, "fwpm"));
// console.log(nome.padEnd(12, "fwpm"));

// // Trabalhando com match
// const regex = /JavaScript/;

// console.log(texto.match(regex));

/* 
Crie um programa que receba uma lista de nomes de variáveis escritas no estilo underscore_case por exemplo uanela_como e converta ela para o estilo camelCase (uanelaComo).

A lista de nomes virá de um elemento textarea inserido no DOM (veja no código abaixo), e a conversão terá que acontecer ao clicar o botão.

Dados de teste (Deveram ser introduzidos na textarea)
underscore_case
 first_name
Uanela_Como
    calcular_IDADE
voo_adiado

Deverá gerar o seguinte output (5 console.log diferentes)

underscoreCase        🚀
firstName             🚀🚀
uanelaComo            🚀🚀🚀
calcularIdade         🚀🚀🚀🚀
vooAdiado             🚀🚀🚀🚀🚀      

Dica 1: Lembre-se do caracter que define um nova linha em uma textarea ou pesquise para conhecer.

Dica 2: O programa criado apenas precisa funcionar para nomes que contém duas palavras, por exemplo aa_bb

Dica 3: Comece por resolver sem se preocupar com 🚀. Trate inicialmente de transformar aa_bb para aaBb por exemplo.

Dica 4: O desafio é difícil de propositada, então você assistir a solução aos poucos quando estiver difícil de começar sozinho e conforme você for desvendando e descubrindo o passo a seguir enquanto assisti a solução você pausa e tenta implementar até o fim.

Dica 5: Pesquise sobre como transformar a primeira letra de uma palavra em maíscula (Ou primeiro tente por si mesmo).

Depois de concluído teste com seus próprios dados.

BOA SORTE E BOM TRABALHO🚀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.trim().split("_");
    if (first && second) {
      const camelCase = `${first.toLowerCase()}${second
        .toLowerCase()
        .replace(second[0].toLowerCase(), second[0].toUpperCase())}`;

      console.log(`${camelCase.padEnd(20, " ")}${"🚀".repeat(i + 1)}`);
    }
  }
});
