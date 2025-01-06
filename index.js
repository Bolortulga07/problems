let budget = 10000;
const gameHistory = [];

const gameChooser = () => {
  const game = parseInt(
    prompt("Select the game/1 - Dice, 2 - CoinToss, 3 - haichChuluu/")
  );

  switch (game) {
    case 1:
      dice();
      break;
    case 2:
      coinToss();
      break;
    case 3:
      haichChuluu();
      break;
    default:
      window.alert("Buruu hariu.");
      gameChooser();
  }
};

const game = () => {
  const switchGame = parseInt(prompt("Togloomoo solihuu (1 - Yes 0 - No)"));
  if (switchGame === 1) {
    gameChooser();
  }
};

const dice = () => {
  const userInput = parseInt(
    prompt(`Tanid ${budget} baina. Togloh uu? (1 - Yes 0 - No)`)
  );

  if (userInput === 1) {
    const userBootsoo = parseInt(prompt("Bootsoogoo oruulna uu."));

    if (userBootsoo <= budget) {
      const userValue = Math.floor(Math.random() * 6);
      const comValue = Math.floor(Math.random() * 6);

      if (userValue === comValue) {
        window.alert("Draw!");
        gameHistory.push({ game: "Dice", winner: "Draw", bet: 0 });
      } else if (userValue < comValue) {
        budget -= userBootsoo;
        window.alert(`Hojigdloo. Tanid ${budget} uldsen.`);
        gameHistory.push({
          game: "Dice",
          winner: "Computer",
          bet: -userBootsoo,
        });
      } else {
        budget += userBootsoo;
        window.alert(`Hojson! Tanid ${budget} baina.`);
        gameHistory.push({ game: "Dice", winner: "User", bet: userBootsoo });
      }
    } else {
      window.alert("Tusuv hurehgui baina");
    }
    game();
  }
};

const coinToss = () => {
  const userBootsoo = parseInt(
    prompt(`Bootsoogoo oruulna uu. Tanid ${budget} baina.`)
  );

  if (userBootsoo <= budget) {
    window.alert("Zoos hayj baina.");
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    const userGuess = prompt("heads or tails").toLowerCase();

    if (userGuess === result) {
      budget += userBootsoo;
      window.alert(`Zuv baina. Tanid ${budget} baina.`);
      gameHistory.push({ game: "Coin Toss", winner: "User", bet: userBootsoo });
    } else {
      budget -= userBootsoo;
      window.alert(`Buruu baina. Tanid ${budget} baina.`);
      gameHistory.push({
        game: "Coin Toss",
        winner: "Computer",
        bet: -userBootsoo,
      });
    }
    game();
  }
};
const haichChuluu = () => {
  const userWinableValues = [1, 2, 0];
  const convertToString = (value) => {
    let result;

    switch (value) {
      case 0:
        result = "chuluu";
        break;

      case 1:
        result = "haich";
        break;

      case 2:
        result = "daawuu";
        break;
    }

    return result;
  };

  const resultAlert = (message, userValue, compValue) => {
    const userString = convertToString(userValue);
    const comString = convertToString(compValue);

    return window.alert(
      `${message} useriin gargasan utga =  ${userString} computer iin gargasan utga = ${comString}`
    );
  };

  const game = () => {
    let userValue = prompt("Yu gargah we (haich/chuluu/daawuu)");

    const userStrings = {
      chuluu: 0,
      haich: 1,
      daawuu: 2,
    };

    userValue = userStrings[userValue];

    if (userValue) {
      const compValue = Math.floor(Math.random() * 3 + 0);
      if (userValue === compValue) {
        resultAlert("Draw", userValue, compValue);
        window.alert(`Tentslee. Tanid ${budget} baina.`);
      } else if (userWinableValues[userValue] === compValue) {
        resultAlert("User win", userValue, compValue);
        budget += userBootsoo;
        window.alert(`Hojloo. Tanid ${budget} baina.`);
      } else {
        resultAlert("Com win", userValue, compValue);
        budget -= userBootsoo;
        window.alert(`Hojigdloo. Tanid ${budget} baina.`);
      }
    } else {
      window.alert("Buruu utga!!!!");
    }

    game();
  };
};
const showGameHistory = () => {
  console.log("Тоглолтын түүх:");
  for (let i = 0; i < gameHistory.length; i++) {
    const push = gameHistory[i];
    console.log(
      `${i + 1}. Game: ${push.game}, Winner: ${push.winner}, Bet: ${push.bet}`
    );
  }
};

gameChooser();
showGameHistory();
