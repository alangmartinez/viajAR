
const menuBtn = document.querySelector(".menu-btn");
const list = document.querySelector(".list");
const title = document.querySelector(".title");
const carousel = document.querySelector(".carousel")
const destination = document.querySelector(".destination");
const email = document.querySelector(".email");
const boton = document.querySelector(".submit-btn");
const userName = document.querySelector(".user-name");
const price = document.getElementById("price");

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
    price.value = precioViaje;

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

// Feed back User about trip price;

// Validacion de datos

class Trips {
    constructor(destination, price, fees, name, mail){
        this.destination = destination;
        this.price = Number(price);
        this.fees = Number(fees);
        this.name = name;
        this.mail = mail
    }
    feesCalc = ()=> {
        const pricePerMonth = 0;
        switch(this.fees){
            case(3):
                pricePerMonth = Number((this.price * 1.05) / this.fees);
                break;
            case(6):
                pricePerMonth = Number((this.price * 1.12) / this.fees);
                break;
            case(9):
                pricePerMonth = Number((this.price * 1.15) / this.fees);
                break;
            case(12):
                pricePerMonth = Number((this.price * 1.21) / this.fees);
                break;
            default:
                pricePerMonth = this.price;
                break;
        }
        return pricePerMonth;
    }
}

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
        document.querySelector(".respuesta").innerHTML = error[1];
        document.querySelector(".respuesta").classList.add("green");
        document.querySelector(".respuesta").classList.remove("red");

        const viaje1 = new Trips(
            destination.value,
            price.value,
            fees.value,
            userName.value,
            email.value);

        for(const props in viaje1){
            console.log(`${props}: ${viaje1[props]}`);
        }
        viaje1.feesCalc();
    }
});

const validarDatos = ()=>{
    let error = [];
    if(fees.value == ""){
        error[0] = true;
        error[1] = "* Cantidad cuotas invalido.";
        return error;
    }
    if(userName.value.length < 3){
        error[0] = true;
        error[1] = "* Nombre debe tener al menos 4 caracteres.";
        return error;
    }
    if(userName.value.length > 20){
        error[0] = true;
        error[1] = "* Nombre debe tener menos de 20 caracteres.";
        return error;
    }
    if(email.value.length < 4 ||
        email.value.length > 30 ||
        email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1){
            error[0] = true;
            error[1] = " * E-mail ingresado invalido."
            return error;
        }
    error[0] = false;
    error[1] = "Solicitud enviada correctamente.";
    return error;
}

const numbers = [1, 5, 112, 234, 543, 123, 45, 788];

const impares = (arr)=>{ // Declaramos la funcion;
    const nuevoArray = arr.filter(number => number % 2 != 0); // Filtramos los numberos impares del array;
    console.log(nuevoArray); // Imprimimos en consola el nuevoArray de numero impares;
}

impares(numbers);  // Llamamos la funcion; 

const paresEImpares = (arr)=>{
    let pares = [];
    let impares = [];
    arr.map(number => {
        if(number % 2 == 0){
            pares.push(number);
        }
        else{
            impares.push(number);
        }
    })
    console.log(`Los numeros pares son: ${pares}`);
    console.log(`Los numeros impares son: ${impares}`);
}

paresEImpares(numbers);
console.log(numbers.slice(start = 0, end = 5));

const armarMenuDesktop = confirm("Deseas armar un menu para desktop?");
alert("Este menu solo sera visible para un dispositivo mayor a 1280px de ancho.");

if(window.innerWidth >= 1280){
    const desktopMenu = document.getElementById("desktop-menu");
    const cantItems = prompt("Cuantos items quieres que tenga el menu?");
    for(let index = 0; index < cantItems; index++){
        const listItem = document.createElement("LI");
        listItem.innerHTML = prompt(`Ingresa valor item ${index + 1}`);
        desktopMenu.appendChild(listItem);
        listItem.setAttribute("class","list-item");
    }
}
else{
    alert("Usted no dispone de un dispositivo con un ancho mayor o igual a 1280px");
}