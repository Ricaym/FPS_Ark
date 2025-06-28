let isSearching = false;
let seconds = 0;
let intervalId;

const launchButton = document.getElementById("button-launch-game");

launchButton.addEventListener("click", () => {
  if (!isSearching) {

    isSearching = true;
    seconds = 0;
    launchButton.textContent = `RECHERCHE DE PARTIE... ${seconds}`;
    launchButton.classList.remove("found");
    launchButton.disabled = false;

    intervalId = setInterval(() => {
      seconds++;
      launchButton.textContent = `RECHERCHE DE PARTIE... ${seconds}`;
    }, 1000);

    timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      launchButton.textContent = "PARTIE TROUVÉE !";
      launchButton.classList.add("found");
      launchButton.disabled = true;
    }, 15000);

  } else {
    isSearching = false;
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    launchButton.textContent = "LANCER";
    launchButton.classList.remove("found");
    launchButton.disabled = false;
  }
});