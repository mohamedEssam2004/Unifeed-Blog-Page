const menu_btn = document.getElementById("menu-btn");
const menu_links = document.querySelector(".menu-links");
console.log(menu_btn);
menu_btn.onclick = function () {
    menu_links.classList.toggle("menu-open")
}