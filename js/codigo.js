
const menuBtn = document.querySelector(".menu-btn");
const list = document.querySelector(".list");
const title = document.querySelector(".title");
const carousel = document.querySelector(".carousel")


addEventListener("load", ()=>{
    title.classList.add("visible");
    // Se agrega la clase "visible" al titulo de la pagina;
    carousel.classList.add("visible");
    // Se agrega la clase "visible" al carousel principal;
})


const mostrar = ()=>{
        const clase = menuBtn.firstElementChild.getAttribute("class");
        // Se obtiene el contenido del atributo class;
        list.classList.toggle("visible");
        if(clase == "fas fa-bars"){
            menuBtn.firstElementChild.setAttribute("class", "fas fa-times");
        }
        else{
            menuBtn.firstElementChild.removeAttribute("class", "fas fa-times");
            menuBtn.firstElementChild.setAttribute("class", "fas fa-bars");
        }
    }

// Simulador Iteractivo

const financiacion = (precioViaje)=>{
    const  confirmacion = confirm(`¿Deseas comenzar a financiar tu viaje?`);

    if(confirmacion){
        let valorCuota = 0;
        let cuotas = parseInt(prompt("¿ En cuantas cuotas deseas abonar tu viaje ?"));
            // Dependiendo el numero de cuotas elegidas se realiza el respectivo calculo.
            switch(cuotas){
                case 3:
                    valorCuota = precioViaje / cuotas;
                    swal(`El monto abonar es de $${valorCuota}`);
                    break;
                case 6:
                    valorCuota = precioViaje / cuotas;
                    swal(`El monto abonar es de $${valorCuota}`);
                    break;
                case 9:
                    valorCuota = precioViaje / cuotas;
                    swal(`El monto abonar es de ${valorCuota}`);
                    break;
                case 12:
                    valorCuota = precioViaje / cuotas;
                    swal(`El monto abonar es de $${valorCuota}`);
                    break;
                default:
                swal(`El monto abonnar es de $${precioViaje}`);
                break;
            }
    }
    else{
        swal("Te esperamos pronto.")
    }
}