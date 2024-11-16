const btn = document.getElementById("bar");
const overlay = document.getElementById("overlay");
const openav =  document.getElementById("side-bar");




btn.addEventListener("click",navOpen);

function navOpen(){
    btn.classList.toggle("open");
    overlay.classList.toggle("overlay-show");
    openav.classList.toggle("open-bar");

}
