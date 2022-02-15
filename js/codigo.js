
const menuBtn = document.querySelector(".menu-btn");
const list = document.querySelector(".list");
const title = document.querySelector(".title");
const carousel = document.querySelector(".carousel")
const destination = document.querySelector(".destination");
const email = document.querySelector(".email");
const boton = document.querySelector(".submit-btn");
const userName = document.querySelector(".user-name");
const price = document.getElementById("price"),
btnGuardar = document.getElementById("btn-guardar"),
btnMostrar = document.getElementById("btn-mostrar"),
textInput = document.getElementById("text-input"),
closePopupBtn = document.getElementById("close-popup-btn"),
popup = document.getElementById("popup");


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

const financiacion = (precioViaje, viaje)=>{
    destination.value = viaje;
    price.value = precioViaje;
// Validacion de datos
}
class Trips {
    constructor(destination, price, fees, name, mail){
        this.destination = destination;
        this.price = Number(price);
        this.fees = Number(fees);
        this.name = name;
        this.mail = mail
        }
}

let tripsArray = []; // Se declara un array vacio para almacenar objetos.

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = validarDatos();
    if(error[0]){
        document.querySelector(".respuesta").innerHTML = error[1];
        document.querySelector(".respuesta").classList.add("red");
        document.querySelector(".respuesta").classList.remove("green");
    }
    else{
        let trip = new Trips(
            destination.value,
            price.value,
            fees.value,
            userName.value,
            email.value
            );
            document.querySelector(".respuesta").innerHTML = error[1];
            document.querySelector(".respuesta").classList.add("green");
            document.querySelector(".respuesta").classList.remove("red");
            document.getElementById("tripData").innerHTML = `- Destination: ${trip.destination} </br> - Price: ${trip.price} </br> - Fees: ${trip.fees} </br> - Name: ${trip.name} </br> - E-mail: ${trip.mail}`;
            popup.classList.add("aparecer");
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
closePopupBtn.addEventListener("click", ()=> popup.classList.remove("aparecer"));

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


// const armarMenuDesktop = confirm("Deseas armar un menu para desktop?");
// if(armarMenuDesktop){
//     alert("Este menu solo sera visible para un dispositivo mayor a 1280px de ancho.");
//     if(window.innerWidth >= 1280){
//         const desktopMenu = document.getElementById("desktop-menu");
//         const cantItems = prompt("Cuantos items quieres que tenga el menu?");
//         for(let index = 0; index < cantItems; index++){
//             const listItem = document.createElement("LI");
//             listItem.innerHTML = prompt(`Ingresa valor item ${index + 1}`);
//             desktopMenu.appendChild(listItem);
//             listItem.setAttribute("class","list-item");
//         }
//     }
//     else{
//         alert("Usted no dispone de un dispositivo con un ancho mayor o igual a 1280px");
//     }
// }
// else{
//     alert("Goodbye!");
// }

// for(let index = 0; index < 2; index++){
//     let tienda = new Tienda(
//         this.nombre = prompt("Ingrese nombre de la tienda"),
//         this.direccion = prompt("Ingrese direccion de la tienda."),
//         this.propietario = prompt("Nombre del propietario."),
//         this.rubro = prompt("Ingrese rubro")
//     )
//     tiendas += `Nombre Tienda: ${this.nombre}
//     Direccion: ${this.direccion}
//     Propietario: ${this.propietario}
//     Rubro: ${this.rubro}\n`
// }
// console.log(tiendas);

// const numericArray = [1,45,765,234,6,999];

// let len = numericArray.length;
// let max = -Infinity;
// for(let index = 0; index < len; index++){
//     if(numericArray[index] > max){
//         max = numericArray[index];
//     }
// }
// console.log(max);

// Actividad 2 (Ejercicio 4)

// class Tienda{
//     constructor(nombre, direccion, propietario, rubro){
//         // Propiedades del objeto;
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro
//     }
//     // Metodo para verificar si en X horario la tienda se encuentra abierta o cerrada;
//     estaAbierto(hora){
//         if((hora >= 9 && hora <= 12) || (hora >=15 && hora <= 19)){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     // Metodo para verificar si X nombre es propietario de alguna de las tiendas;
//     esPropietario(nombre){
//         return nombre == this.propietario;
//     }
// }

// const tienda1 = new Tienda("Delivery Pet Food", "Almafuerte 3124", "EMILIANO MARTINEZ", "Alimento para Mascotas");
// const tienda2 = new Tienda("Viajes.net", "Leon de Iraeta 979", "MANUELA GODIO", "Viajes");
// const tienda3 = new Tienda("Pavitas", "asdasda", "asdasd", "adsasdasd");


// for(let index = 0; index < 5; index++){
//     let entrada = prompt("Ingresar nombre propietario.");
//     if(tienda1.esPropietario(entrada)){
//         alert(`${tienda1.propietario} es propietario de ${tienda1.nombre}!`);
//     }
//     if(tienda2.esPropietario(entrada)){
//         alert(`${tienda2.propietario} es propietario de ${tienda2.nombre}!`);
//     }
//     if(tienda3.esPropietario(entrada)){
//         alert(`${tienda3.propietario} es propietario de ${tienda3.nombre}!`);   
//     }
// }

const numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(numeros.toString());

// Utilizando objeto Math y sus metodos
const menorAMayor = (arr)=>{
    console.log(arr.sort((a, b)=> b - a));
}
menorAMayor(numeros);

let randomNum = 0;
for (let index = 0; index < 10; index++) {
    randomNum = Math.random();
    console.log(randomNum);
}
const fecha = new Date();
console.log(fecha);
// El metodo .getDate() devuelve el dia de la fecha actual del ordenador
console.log(fecha.getDate());
// El metodo .getFullYear() devuelve el año completo de la fecha actual del ordenador
console.log(fecha.getFullYear());
// El metodo .getDay() devuelve el dia de la semana
console.log(fecha.getDay());
// Se muestra hora utilizando dos metodos del objeto Date
console.log(`La hora actual es: ${fecha.getHours()}:${fecha.getMinutes()}hs`);
btnMostrar.addEventListener("click", (e)=>{
    e.preventDefault();
    saludar("Alan");
});

const saludar = (nombre)=>{
    textInput.value = `Hola ${nombre}`;
}

const arr = [1,2,3,4,5];

const newArr = arr.map(n => n * 2);
console.log(`Arr: ${arr}`);
console.log(`newArr: ${newArr}`);
console.log(arr.toString());
console.log(arr.join(" - "));

const destinos = [
    {
        nombre: "Brasil",
        precio: 130000,
        disponible: true,
        img: "../assets/img/rio-de-janeiro.jpg"
    },
    {
        nombre: "La Havana",
        precio: 90000,
        disponible: false,
        img: "../assets/img/havana.jpg"
    }
];
// El metodo forEach() aplica una funcion a cada elemento del array;
destinos.forEach(destino => {
    const imagenDestino = document.createElement("img");
    imagenDestino.src= destino.img;
    imagenDestino.classList.add("img-fluid");
    imagenDestino.style.marginTop = "1rem";
    document.body.append(imagenDestino);
});