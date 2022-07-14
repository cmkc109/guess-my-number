const secretNumber = Math.trunc(Math.random() * 50) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    document.querySelector(".message").textContent = "Please enter a number.";
  } else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent =
      "Bingo! You got the right number";
  } else if (guessNumber > secretNumber) {
    document.querySelector(".message").textContent =
      "Incorrect. The number is too high";
  } else if (guessNumber < secretNumber) {
    document.querySelector(".message").textContent =
      "Incorrect. The number is too low";
  }
});
