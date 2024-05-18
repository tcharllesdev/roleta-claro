const btn = document.querySelector(".btn");
const roleta = document.querySelector(".roleta");

function removerGiroClasses() {
  roleta.classList.remove("giro1", "giro2", "giro3", "giro4");
}

btn.addEventListener("click", () => {
  removerGiroClasses();

  const randomGiro = Math.floor(Math.random() * 4) + 1;

  roleta.classList.add(`giro${randomGiro}`);

  // setTimeout(() => {
  //   btn.style.display = "none";
  // }, 4000);
});
