const btn = document.querySelector(".btn");
const roleta = document.querySelector(".roleta");
const popup = document.querySelector(".popup");
const rouletteAudio = document.getElementById("rouletteAudio");
const rouletteSuccess = document.getElementById("rouletteSuccess");
const notification = document.getElementById("notification");
const aviso1 = document.querySelector(".aviso1");
const aviso2 = document.querySelector(".aviso2");
const warning = document.querySelector(".warning");
const todosElementos = document.querySelectorAll("*");

function removerGiroClasses() {
  roleta.classList.remove("giro1", "giro2", "giro3", "giro4");
}

btn.addEventListener("click", () => {
  removerGiroClasses();

  //const randomGiro = Math.floor(Math.random() * 4) + 1;

  btn.style.display = "none";
  roleta.classList.add("giro1");
  rouletteAudio.play();

  setTimeout(() => {
    removerGiroClasses();
    roleta.classList.add("giro2");
    rouletteAudio.play();
    warning.classList.add("ativo");
    aviso1.classList.add("aviso-ativo");
    notification.play();

    setTimeout(() => {
      aviso2.classList.add("aviso-ativo");
      notification.play();
    }, 2000);
    
    setTimeout(() => {
      popup.style.display = "flex";
      rouletteSuccess.play();
      todosElementos.forEach((element) => {
        element.style.overflowY = "hidden";
      });
    }, 13500);
  }, 13000);

  // setTimeout(() => {
  //   popup.style.display = "flex";
  //   rouletteSuccess.play();
  // }, 14500);
});
