const inputRange = document.querySelector("#simulate");

inputRange.addEventListener("input", () => {
  let display = (document.querySelector(".simulate").innerText = `R$ ${
    inputRange.value * 1.0
  }`.replace(".", ","));
});

const btnMobile = document.querySelector(".btn-mobile");

function menuToggle(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
  nav.classList.contains("active")
    ? event.currentTarget.setAttribute("aria-expendes", "true")
    : event.currentTarget.setAttribute("aria-expendes", "false");
}

btnMobile.addEventListener("click", menuToggle);
