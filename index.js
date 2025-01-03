game = () => {
  const random = Math.random();

  return random < 0.5 ? "Heads" : "Tails";
};
game();
window.alert("Tossing the coin.");
const result = game();
window.alert(`Result: ${result}`);
