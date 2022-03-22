let list = document.querySelector("ul");

function Menu(e) {
   e.name === "menu" ? ((e.name = "close"), list.classList.add("left-0"), list.classList.remove("-left-[48rem]")) : ((e.name = "menu"), list.classList.remove("left-0"), list.classList.add("-left-[48rem]"));
}
