let botonmenu = document.getElementById("btn-menu");
let menu = document.querySelector(".menu"); 
let link = document.querySelectorAll(".menu_links");


botonmenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar');
    for(let i = 0; i < link.length; i++){
       link[i].addEventListener('click', function(){
           menu.classList.remove('mostrar');
       })
    }
  
})


const btnContacto = document.querySelector('.icono_principal');
const caja = document.querySelector('.contactos');
let contacto = document.querySelector(".contacto"); 
btnContacto.addEventListener('click', function(){
    caja.classList.toggle('aparecer');
    contacto.style.display = "none";

})






