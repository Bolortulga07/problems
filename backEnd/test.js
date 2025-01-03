const cards = [];
let i = 2;
while (i < 11) {
  cards.push(i);
  i++;
}
cards.push("Bool");
cards.push("Hatan");
cards.push("Noyon");
cards.push("Tamga");
console.log(cards);

const converter = (a) => {
  switch (a) {
    case "Bool":
    case "Hatan":
    case "Noyon":
      return 10;
    case "Tamga":
      return 11;
    default:
      return a;
  }
};

const game = () => {
  let process = true;
  let sum = 0;
  while (process) {
    const pickcard = Math.floor(Math.random() * cards.length);
    let user = parseInt(prompt("Huzruu sugalna uu!!/1-sugalah, 0-bolih/"));
    if (user === 1) {
      user = converter(cards[pickcard]);
      console.log(user);
      sum += user;
      console.log(sum);
      if (sum > 21) {
        console.log("You lose.");
        process = false;
      } else if (sum === 21) {
        console.log("You win.");
        process = false;
      } else if (user === 0) {
        console.log("Togloomiig duusgalaa.");
        process = false;
      }
    } else {
      break;
    }
  }
};
game();
