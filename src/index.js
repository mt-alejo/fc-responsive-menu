const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

const toggleMenu = () => {
  if (menu.classList.contains("responsive")) {
    menu.classList.remove("responsive");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("responsive");
    toggle.querySelector("a").innerHTML = "<i>X</i>";
  }
};

toggle.addEventListener("click", toggleMenu);
console.log("Working");
