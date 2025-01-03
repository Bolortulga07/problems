let budget = 100000;

const game = () => {
  const userInput = parseInt(
    prompt(`Tanid ${budget} baina togloh uu?/1-yes or 0-no/`)
  );

  if (userInput === 1) {
    const userBootsoo = parseInt(prompt("Togloh dungee oruul."));

    if (budget > userBootsoo) {
      const comValue = Math.floor(Math.random() * 6);
      const userValue = Math.floor(Math.random() * 6);
      if (userValue === comValue) {
        window.alert("Draw.");
        game();
      } else if (userValue < comValue) {
        budget = budget - userBootsoo;
        window.alert(`Ta hojigdloo. Tanid ${budget} uldsen.`);
        game();
      } else {
        budget = budget + userBootsoo;
        window.alert(`Ta hojloo. Tanid ${budget} baina.`);
        game();
      }
    }
  } else {
    return window.alert("Bayrlalaa bayartai.");
  }
};
game();
