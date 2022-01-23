
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
                    alert(`El monto abonar es de $${valorCuota}`);
                    break;
                case 6:
                    valorCuota = precioViaje / cuotas;
                    alert(`El monto abonar es de $${valorCuota}`);
                    break;
                case 9:
                    valorCuota = precioViaje / cuotas;
                    alert(`El monto abonar es de ${valorCuota}`);
                    break;
                case 12:
                    valorCuota = precioViaje / cuotas;
                    alert(`El monto abonar es de $${valorCuota}`);
                    break;
                default:
                alert(`El monto abonnar es de $${precioViaje}`);
                break;
            }
    }
    else{
        alert("Te esperamos pronto.")
    }
}

// Validacion de datos

const nombre = document.querySelector(".name");
const email = document.querySelector(".email");
const boton = document.querySelector(".submit-btn");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarDatos();
    if(error[0]){
        document.querySelector(".respuesta").innerHTML = error[1];
        document.querySelector(".respuesta").classList.add("red");
        document.querySelector(".respuesta").classList.remove("green");
    }
    else{
        document.querySelector(".respuesta").innerHTML = "Solicitud enviada correctamente.";
        document.querySelector(".respuesta").classList.add("green");
        document.querySelector(".respuesta").classList.remove("red");
    }
})

const validarDatos = ()=>{
    let error = [];
    if(nombre.value.length < 4){
        error[0] = true;
        error[1] = "Nombre debe tener más de 4 caracteres.";
        return error;
    }
    else if(nombre.value.length > 15){
        error[0] = true;
        error[1] = "Nombre debe tener menos de 15 caracteres.";
        return error;
    }
    else if(email.value.length < 4 ||
        email.value.length > 30 ||
        email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1){
            error[0] = true;
            error[1] = "El email ingresado es invalido."
            return error;
        }
    error[0] = false;
    return error;
}