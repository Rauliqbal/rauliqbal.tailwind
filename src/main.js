let list = document.querySelector("ul");

function Menu(e) {
   e.name === "menu" ? ((e.name = "close"), list.classList.add("left-0"), list.classList.remove("-left-[48rem]")) : ((e.name = "menu"), list.classList.remove("left-0"), list.classList.add("-left-[48rem]"));
}

window.addEventListener("scroll", function () {
   var nav = this.document.querySelector("header");
   nav.classList.toggle("bg-dark/40", window.scrollY > 0);
   nav.classList.toggle("backdrop-blur-sm", window.scrollY > 0);
});
