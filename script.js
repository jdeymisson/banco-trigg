const inputRange = document.querySelector("#simulate");

inputRange.addEventListener("input", () => {
  let display = (document.querySelector(".simulate").innerText = `R$ ${
    inputRange.value * 1.0
  }`.replace(".", ","));
});

const btnMobile = document.querySelector(".btn-mobile");

function menuToggle() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", menuToggle);
