const integer = {
  1: 10,
  2: 50,
  3: 100,
};
const gameHistory = [];
const object = [];
const game = () => {
  let process = true;
  while (process) {
    const userValue = parseInt(prompt("Select the level/1, 2, 3/"));
    if (userValue === -1) {
      process = false;
      break;
    }

    const formattedValue = integer[userValue];
    console.log(formattedValue);
    let number = Math.floor(Math.random() * formattedValue + 1);
    console.log("randomNUmber", number);
    let i = 1;

    while (i < 5) {
      const userInput = parseInt(
        prompt(`Choose number between 1-${formattedValue}`)
      );
      if (userInput === number) {
        console.log("you win!!!");
        gameHistory.push(userInput);
        break;
      } else if (userInput < number) {
        console.log("Baga baina.");
      } else {
        console.log("Ih baina.");
      }
      i++;
      gameHistory.push(userInput);
    }

    object.push({
      level: userValue,
      computer: number,
      user: gameHistory,
      game: i,
    });
    console.log(object);
  }
};
game();
