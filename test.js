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

function ticketStatus(tickets, ticketId) {
  for (let key in tickets) {
    if (key === ticketId) {
      return `sold to ${tickets[key]}`;
    } else if (key !== ticketId) {
      return "unknown ticket id";
    } 
  }
}

const tickets = {
  AAA: null,
  BBB: "Amanda",
  CCC: "Bla",
};

console.log(ticketStatus(tickets, "BBB"));
