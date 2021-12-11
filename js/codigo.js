
// Evento para mostrar y ocultar menu mobile al hacer "click";

let btnMenu = document.getElementById("btnMenu");
let menu = document.getElementById("menu");
let body = document.getElementById("body");

btnMenu.addEventListener("click", function(){
    
    menu.classList.toggle("mostrar");
    body.classList.toggle("noScroll");
    
});

// Evento para mostrar img al hacer "scroll";

window.addEventListener("scroll", function(){
    let animacion = document.getElementById("animar");
    let position = animacion.getBoundingClientRect().top;

    console.log(position);

    
    let ventana = window.innerHeight;

    console.log(ventana);

        if (position <= 290){
            animacion.classList.add("aparece");
        }
        else{
            animacion.classList.remove("aparece");
        }

});
