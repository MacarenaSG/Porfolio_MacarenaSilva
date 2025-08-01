let lanzador = "#menu-toggle";
let desplegable = "#nav";
let despliegaClase = "menudesplegado";

function nav(){
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click",despliegaMenu);
}

function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

nav();

const popup = document.getElementById("cookiePopup");
const btn = document.getElementById("acceptCookies");

if (!localStorage.cookiesAccepted){
    popup.classList.add("show");
}

btn.addEventListener("click",function(){
    localStorage.cookiesAccepted = "true";
    popup.classList.remove("show");
});