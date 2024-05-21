const btn = document.querySelector(".btn");
const roleta = document.querySelector(".roleta");
const popup = document.querySelector(".popup");
const rouletteAudio = document.getElementById("rouletteAudio");
const rouletteSuccess = document.getElementById("rouletteSuccess");
const aviso = document.querySelector(".warning");

function removerGiroClasses() {
  roleta.classList.remove("giro1", "giro2", "giro3", "giro4");
}

btn.addEventListener("click", () => {
  removerGiroClasses();

  //const randomGiro = Math.floor(Math.random() * 4) + 1;

  btn.style.display = "none";
  roleta.classList.add("giro1");
  rouletteAudio.play();
  aviso.style.display = "block";

  setTimeout(() => {
    removerGiroClasses();
    roleta.classList.add("giro2");
    rouletteAudio.play();
    setTimeout(() => {
      popup.style.display = "flex";
      rouletteSuccess.play();
    }, 12000);
  }, 16000);

  // setTimeout(() => {
  //   popup.style.display = "flex";
  //   rouletteSuccess.play();
  // }, 14500);
});
