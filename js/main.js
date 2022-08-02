const navMenuBtn = document.querySelector("button.nav-menu");
const closeBtn = document.querySelector("button.close-btn");
const navDrawer = document.querySelector(".nav-drawer");

// Navbar drawer activation
navMenuBtn.addEventListener("click", () => {
  navDrawer.toggleAttribute("drawer-active");
  document.body.style.overflowY = "hidden";
});

closeBtn.addEventListener("click", () => {
  navDrawer.removeAttribute("drawer-active");
  document.body.style.overflowY = "visible";
});