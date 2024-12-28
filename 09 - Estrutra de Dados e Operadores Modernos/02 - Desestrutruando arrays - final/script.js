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

const restaurant = {
  name: "Cacilda e Filhos",
  location: "Rua Comandante Diogo de Sá, Beira, Moçambique",
  categories: ["Moçambicana", "Grelhados", "Vegetariana", "Orgânica"],
  starterMenu: ["Pão de Alho", "Chamussas", "Salada de Abacate", "Maçaroca"],
  mainMenu: [
    "Frango à Zambeziana",
    "Caril de Camarão",
    "Arroz de Coco",
    "Feijoada Moçambicana",
  ],
  openingHours: {
    thursday: {
      open: 8,
      close: 22,
    },
    friday: {
      open: 16,
      close: 23,
    },
    saturday: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    startIndex = 2,
    mainIndex = 0,
    time = "12:00",
    address,
  }) {
    console.log(
      `Pedido feito! ${this.starterMenu[startIndex]} e ${this.mainMenu[mainIndex]} será entregue em ${address} pelas ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Seu prato com ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIgridient, ...otherIgredients) {
    console.log(
      `Ai vai sua pizza com igriedinte principal ${mainIgridient} e com outros igredientes ${otherIgredients}`
    );
  },
};

restaurant.pratos = 0;

// &&, ??
// null ou undefined
console.log(restaurant.pratos);
const pratos2 = restaurant.pratos ?? 12;
console.log(pratos2);
