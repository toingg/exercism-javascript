// console.log(230/22)

// const setering = "test";

// console.log(setering[2]);
// console.log(setering.length);

// const penggabungan = "iya"

// console.log(setering + " " + penggabungan)

function backDoorPassword(word) {
  return word.slice(0, 1).toUpperCase + word.slice(1) + ", please";
}

console.log(backDoorPassword("test"));
