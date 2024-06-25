const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    burger.classList.toggle("active");
})

menu.addEventListener("click", (event) => {
    const isAnchorLink = event.target.closest("a");
    if (isAnchorLink) {
        menu.classList.remove("open");
        burger.classList.remove("active");
    }
})