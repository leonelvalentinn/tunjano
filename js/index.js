let botonmenu = document.getElementById("btn-menu");
let menu = document.querySelector(".menu"); 
let submenu = document.querySelector(".submenu");
let link = document.querySelectorAll(".menu_links");


botonmenu.addEventListener('click', function(){
  let close = document.getElementById("close");
    menu.classList.toggle('mostrar');
    close.addEventListener('click', function(){
      menu.classList.remove('mostrar');
    })
});
function openNav(){
  menu.classList.toggle('mostrar');
}
function closeNav(){
  menu.classList.remove('mostrar');
}


const btnContacto = document.querySelector('.icono_principal');
const caja = document.querySelector('.contactos');
let contacto = document.querySelector(".contacto"); 
btnContacto.addEventListener('click', function(){
    caja.classList.toggle('aparecer');
    contacto.style.display = "none";

})

const open = document.getElementById("servicios");

open.addEventListener('click', openServicios);

function openServicios () {
  if (document.getElementById("submenu").style.display == "flex") {
    document.getElementById("submenu").style.display = "none";
    submenu.classList.toString('aparecer');
  } else {
    document.getElementById("submenu").style.display = "flex";
    submenu.classList.toString('aparecer');
  }
}

let linkClose = document.querySelectorAll("#link-menu-btn");
const openMov = document.getElementById("servicios-mov");
openMov.addEventListener('click', openMob);
function openMob() {
  if (document.getElementById("submenu").style.display == "flex") {
    document.getElementById("submenu").style.display = "none";
    menu.classList.remove('top');
  } else {
    document.getElementById("submenu").style.display = "flex";
    menu.classList.toggle('top');
  }
}
linkClose.addEventListener('click', closeNav);


