const navBtn = document.querySelector("#nav-btn");
const colseBtn = document.querySelector("#colse-btn");
const sidebar = document.querySelector("#sidebar");

//show sidebar
navBtn.addEventListener("click" , function () {
    sidebar.classList.add("show-sidebar");
});

//close sidebar

colseBtn.addEventListener("click" , function () {
    sidebar.classList.remove("show-sidebar");
});