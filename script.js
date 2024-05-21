const btn = document.querySelector(".btn");
const roleta = document.querySelector(".roleta");
const popup = document.querySelector(".popup");
const rouletteAudio = document.getElementById("rouletteAudio");
const rouletteSuccess = document.getElementById("rouletteSuccess");

function removerGiroClasses() {
  roleta.classList.remove("giro1", "giro2", "giro3", "giro4");
}

btn.addEventListener("click", () => {
  removerGiroClasses();

  const randomGiro = Math.floor(Math.random() * 4) + 1;

  roleta.classList.add(`giro${randomGiro}`);
  rouletteAudio.play();

  btn.style.display = "none";
  setTimeout(() => {
    popup.style.display = "flex";
    rouletteSuccess.play();
  }, 14500);
});
