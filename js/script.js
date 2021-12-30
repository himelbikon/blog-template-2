const menu_btn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".res-menu");
var open = false;

const menu_handler = () => {
  if (!open) {
    menu.style.maxHeight = "300px";
    menu.style.display = "block";
  } else {
    menu.style.maxHeight = "0px";
    // menu.style.display = "flex";
  }

  open = !open;
};
