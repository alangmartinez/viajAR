
const menuBtn = document.querySelector(".menu-btn");
const list = document.querySelector(".list");
const title = document.querySelector(".title");
const carousel = document.querySelector(".carousel")
const destination = document.querySelector(".destination");
const email = document.querySelector(".email");
const boton = document.querySelector(".submit-btn");
const userName = document.querySelector(".user-name");
const userSurname = document.querySelector(".user-surname");

addEventListener("load", ()=>{
    title.classList.add("visible");
    // Se agrega la clase "visible" al titulo de la pagina;
    carousel.classList.add("visible");
    // Se agrega la clase "visible" al carousel principal;
});

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

const financiacion = (precioViaje, viaje)=>{
    const  confirmacion = confirm(`¿Deseas comenzar a financiar tu viaje?`);

    destination.value = viaje;
    if(confirmacion){
        let cuotas = parseInt(prompt(`¿En cuantas cuotas deseas abonar tu viaje?
        - 1 cuota (sin interes).
        - 3 cuotas (5% de interes).
        - 6 cuotas (12% de interes).
        - 9 cuotas (15% de interes).
        - 12 cuotas (21% de interes).`));
        // Dependiendo el numero de cuotas elegidas se realiza el respectivo calculo.
            if(cuotas == 1 || cuotas == 3 || cuotas == 6 || cuotas == 9 || cuotas == 12){
                let interes = 0;
                switch(cuotas){
                    case 3:
                        interes = 1.05;
                        break;
                    case 6: 
                        interes = 1.12;
                        break;
                    case 9:
                        interes = 1.15;
                        break;
                    case 12:
                        interes = 1.21;
                        break;
                    default:
                        break;
                }
                let valorCuota = parseInt((precioViaje * interes) / cuotas);
                alert(`El monto abonar en cada cuota es de $ ${valorCuota}`);
            }
            else{
                alert("El valor ingresado no es valido.")
            }
        }
    else{
        alert("Te esperamos pronto.")
    }
}

// Validacion de datos


boton.addEventListener("click", (e)=>{
    console.log(e);
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
});

const validarDatos = ()=>{
    let error = [];
    if(userName.value.length < 3){
        error[0] = true;
        error[1] = "El nombre debe tener al menos 4 caracteres.";
        return error;
    }
    if(userName.value.length > 10){
        error[0] = true;
        error[1] = "El nombre debe tener menos de 10 caracteres.";
        return error;
    }
    if(userSurname.value.length < 3){
        error[0] = true;
        error[1] = "El apellido debe tener al menos 4 caracteres.";
        return error;
    }
    if(userSurname.value.length > 10){
        error[0] = true;
        error[1] = "El apellido debe tener menos de 10 caracteres."
        return error;
    }
    if(email.value.length < 4 ||
        email.value.length > 30 ||
        email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1){
            error[0] = true;
            error[1] = "El email ingresado no es valido."
            return error;
        }
    error[0] = false;
    return error;
}

alumnos = [
    {
        nombre: "Alan Martinez",
        email: "alan@gmail.xcom",
        materia: "matematica"
    },
    {
        nombre: "Manuela Godio",
        email: "manuela@gmail.com",
        materia: "ingles"
    }
]