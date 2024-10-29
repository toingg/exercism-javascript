// console.log(230/22)

// const setering = "test";

// console.log(setering[2]);
// console.log(setering.length);

// const penggabungan = "iya"

// console.log(setering + " " + penggabungan)

// function backDoorPassword(word) {
//   return word.slice(0, 1).toUpperCase() + word.slice(1) + ", please";
// }

// console.log(backDoorPassword("test"));

// console.log(2 === "2");

// const list = ["a", "b", "c"];
// console.log(list.length);
let i = 0;

// while (i < 100) {
//   i = i + 2;

//   if (i % 3 === 0) {
//     // continue; // ketemu 6 (i%3 === 0) langsung berhenti dan loop lanjut kembali kode dibawahnya tidak dieksekusi
//     // break; // ketemu 6 langsung berhenti dan loop berhenti
//   }

//   console.log(i);

//   // The code here will only be executed when i was not divisible
//   // by 3 in the check above.
// }

// function timeToMixJuice(name) {
//   let time = 0;
//   switch (name) {
//     case "Pure Strawberry Joy":
//       time = 0.5;
//       break;
//     case "Energizer":
//       time = 1.5;
//       break;
//     case "Green Garden":
//       time = 1.5;
//       break;
//     case "Tropical Island":
//       time = 3;
//       break;
//     case "All or Nothing":
//       time = 5;
//       break;
//     default:
//       time = 2.5;
//       break;
//   }
//   return time;
// }

function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let wedges = 0;
  while (wedges < wedgesNeeded && i < limes.length) {
    switch (limes[i]) {
      case "small":
        wedges = wedges + 6;
        break;
      case "medium":
        wedges = wedges + 8;
        break;
      case "large":
        wedges = wedges + 10;
        break;
      default:
        break;
    }
    i++;
  }
  console.log(wedges);
  console.log(i);
  return i;
}

// limesToCut(25, ["small", "small", "large", "medium", "small"]);
// wedges < wedgesNeeded
// limesToCut(50, ["small", "small"]); // wedges hanya 12, tapi membutuhkan 50 wedges maka akan loop terus makanya run testnya gak selesai"

// function remainingOrders(timeLeft, orders) {
//   do {
//     let i = 0;
//     timeLeft = timeLeft - timeToMixJuice(orders[i]);
//     console.log(timeToMixJuice(orders[i]));
//     orders.shift();
//   } while (timeLeft > 0);
//   console.log(timeLeft);
//   return orders;
// }

// // console.log(remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"]));
// const obj = { greeting: "hello world" };

// obj.greeting = "Hi there!";
// obj["greeting"] = "Welcome.";

// obj.nama = "new value 1";
// obj.test = "test";
// obj["new key 2"] = "new value 2";

// delete obj.test;

// console.log(obj);

// console.log(obj.hasOwnProperty('greeting'))
// console.log(obj.hasOwnProperty('age'))

// const objTwo = {
//   name: 'Ali',
//   age: 65,
// };

// for (let key in objTwo) {
//   console.log(key, objTwo[key]);
// }
// // name Ali
// // age 65

// function ticketStatus(tickets, ticketId) {
//   for (let key in tickets) {
//     if (key === ticketId) {
//       return `sold to ${tickets[key]}`;
//     } else if (key !== ticketId) {
//       return "unknown ticket id";
//     }
//   }
// }

// const tickets = {
//   AAA: null,
//   BBB: "Amanda",
//   CCC: "Bla",
// };

// console.log(ticketStatus(tickets, "BBB"));
// x = [1,2,3]
// console.log(x.length)
// x = x.join('')
// y = String([1, 2, 3])

// console.log(x)
// console.log(y)

// function luckyNumber(value) {
//   const numStr = String(value);
//   let test = 0;
//   let j = numStr.length - 1;
//   for (let i = 0; i < numStr.length / 2; i++) {
//     test++
//     console.log(test);
//     if (numStr[i] !== numStr[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }

// luckyNumber(1234321)

// input = 'abc'
// console.log(Boolean(Number(String(input))))

// function testDefaultValue(a = 2, b) {
//   console.log(a);
//   console.log(b);

//   return a + b
// }

// function testDefaultValue2(a, b = 2) {
//   console.log(a);
//   console.log(b);

//   return a + b
// }

// console.log(testDefaultValue(5));
// console.log(testDefaultValue2(5));

// const func = (a, b) => {

// }

// function empty(a) {
//   console.log(a)
// }

// empty();

// function scaleRecipe(recipe, portion){
//   const scaledRecipe = {}
//   for (const ingredient in recipe){
//       scaledRecipe[ingredient] = recipe[ingredient] * portion
//       console.log(ingredient)
//       console.log(recipe[ingredient])
//   }

//   return scaledRecipe

// }

// const recipe2 = {
//   'sauce': 0.6,
//   'noodles': 300,
//   'carrots': 1,
//   'mozzarella': 0.5,
//   'ricotta': 50,
//   'béchamel': 0.1,
//   'tofu': 100,
// };
// scaleRecipe(recipe2, 2)\

// const tes = "Happy Birthday!"
// console.log(tes.length);
// function getDataFromServer(budi) {
//   console.log("Mengambil data dari server...");

//   // Simulasi tugas asinkron (misalnya, fetch data)
//   setTimeout(() => {
//     const data = { id: 1, name: "Fachrizal" }; // Data simulasi
//     console.log("Data berhasil diambil");
//     budi(data); // Memanggil callback function dengan data
//   }, 2000);
// }

// function processData(data) {
//   console.log("Memproses data:", data);
// }

// console.log("Mulai");

// // Memanggil getDataFromServer dengan processData sebagai callback
// getDataFromServer(processData);

// console.log("Selesai");

// const numberOfMoons = [0, 2, 14];
// const [venus, mars, neptune] = numberOfMoons;

// console.log(neptune);
// // => 14

// const moreThan = (num) => {
//   return num > 7
// }
// const numbers = [1, 3, 5, 7, 9];
// console.log(numbers.findIndex(moreThan));
// // => 4
// console.log(numbers.findIndex((num) => num > 9));
// // => -1

// class Car {
//   constructor(color, weight) {
//     this.color = color;
//     this.weight = weight;
//     this.engineRunning = false;
//   }

//   startEngine() {
//     this.engineRunning = true;
//   }

//   addGas(litre) {
//     // ...
//   }
// }

// const myCar = new Car();
// myCar.startEngine();
// console.log(myCar.engineRunning);

// class Car {
//   constructor() {
//     this._mileage = 0;
//   }

//   // get mileage() {
//   //   return this._mileage;
//   // }

//   set mileage(value) {
//     throw new Error(`Mileage cannot be manipulated, ${value} is ignored.`);
//     // Just an example, usually you would not provide a setter in this case.
//   }
// }

// const myCar = new Car();
// console.log(myCar.mileage); // => Undefined, but if myCar._mileage = 0. Cause the method get mileage
// // => 0
// // myCar.mileage = 100;
// // => Error: Mileage cannot be manipulated, 100 is ignored.

// class Size {
//   //   constructor(width = 80, height = 60) {
//   //     this.width = width;
//   //     this.height = height;
//   //   }
//   //   resize(newWidth, newHeight) {
//   //     this.width = newWidth;
//   //     this.height = newHeight;
//   //   }
//   constructor(width = 80, height = 60) {
//     this._width = width;
//     this._height = height;
//   }
//   resize(newWidth, newHeight) {
//     this._width = newWidth;
//     this._height = newHeight;
//   }
//   get width() {
//     return this._width;
//   }
//   get height() {
//     return this._height;
//   }
// }

// class Position {
//   constructor(x = 0, y = 0) {
//     this._x = x;
//     this._y = y;
//   }
//   move(newX, newY) {
//     this._x = newX;
//     this._y = newY;
//   }
//   get x() {
//     return this._x;
//   }
//   get y() {
//     return this._y;
//   }
// }

// class ProgramWindow {
//   constructor() {
//     this._screenSize = new Size(800, 600);
//     this._size = new Size();
//     this._position = new Position();
//   }
//   resize(newSize) {
//     // Calculate the maximum width and height based on position and screen size
//     const maxWidth = this._screenSize.width - this.position.x;
//     const maxHeight = this._screenSize.height - this.position.y;

//     this.size._width = Math.min(Math.max(newSize.width, 1), maxWidth);

//     this.size._height = Math.min(Math.max(newSize.height, 1), maxHeight);
//   }

//   get screenSize() {
//     return this._screenSize;
//   }
//   get size() {
//     return this._size;
//   }
//   get position() {
//     return this._position;
//   }
// }

// const newWind = new ProgramWindow();

// // console.log(newWind.screenSize);
// // console.log(newWind.size);
// // console.log(newWind.position);

// const programWindow1 = new ProgramWindow();
// const newSize1 = new Size(300, 200);
// programWindow1.resize(newSize1);
// console.log(programWindow1.position)
// console.log(programWindow1.size);

// const programWindow2 = new ProgramWindow();
// const newSize2 = new Size(0, -10);
// programWindow2.resize(newSize2);
// console.log(programWindow2.size);

const re = /home/gi;
const reg = /home/;

const str = 'Home, sweet home.';
const myArray = str.match(reg);
console.log(myArray);

const funnyQuote =
  'If you see someone crying, ask if it is because of their haircut.';
const regex1 = /someone/;
const regex2 = /happy/;

console.log(funnyQuote.match(regex1));
// => ["someone", index: 3, input: "If you see someone crying, ask if it is because of their haircut.", groups: undefined]

funnyQuote.match(regex2);
// => null