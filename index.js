// Code your solutions in this file
const writeCards = (people, day) => {
  const arr = [];
  for (let i = 0; i < people.length; i++) {
    arr.push(`Thank you, ${people[i]}, for the wonderful ${day} gift!`);
  }
  return arr;
};

writeCards(["Charlie", "Samip", "Ali"], "birthday");

const countDown = (number) => {
  while (number >= 0) {
    console.log(number--);
  }
};
countDown(10);
