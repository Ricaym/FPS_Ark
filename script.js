let isSearching = false;
let seconds = 0;
let intervalId;
let timeoutId;

const launchButton = document.getElementById("button-launch-game");
const playComponent = document.getElementById("play-component");
const matchScreen = document.getElementById("match-screen");
const header = document.getElementById("header");

launchButton.addEventListener("click", () => {
  if (!isSearching) {
    isSearching = true;
    seconds = 0;
    launchButton.textContent = `${seconds}`;
    launchButton.classList.remove("found");
    launchButton.disabled = false;

    intervalId = setInterval(() => {
      seconds++;
      launchButton.textContent = `${seconds}`;
    }, 1000);

    timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      launchButton.textContent = "Connexion...";
      launchButton.classList.add("found");
      launchButton.disabled = true;

      setTimeout(() => {
        playComponent.style.display = "none";
        matchScreen.style.display = "flex";
        header.style.display = "none";
      }, 2000);

    }, 4000);

  } else {
    isSearching = false;
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    launchButton.textContent = "LANCER";
    launchButton.classList.remove("found");
    launchButton.disabled = false;
  }
});