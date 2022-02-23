const menuBtn = document.querySelector(".menu-btn");
const list = document.querySelector(".list");
const title = document.querySelector(".title");
const carousel = document.querySelector(".carousel")
const destination = document.querySelector(".destination");
const email = document.querySelector(".email");
const submitBtn = document.querySelector(".submit-btn");
const userName = document.querySelector(".user-name");
const price = document.getElementById("price"),
btnGuardar = document.getElementById("btn-guardar"),
btnMostrar = document.getElementById("btn-mostrar"),
textInput = document.getElementById("text-input"),
closePopupBtn = document.getElementById("close-popup-btn"),
popup = document.getElementById("popup"),
form = document.getElementById("form");

// Se ejecuta el evento cuando la ventana esta cargando.
onload = ()=>{
    // Scripting
    title.classList.add("visible");
    carousel.classList.add("visible");
};

class Trips {
    constructor(destination, price, fees, name, mail){
        this.destination = destination;
        this.price = Number(price);
        this.fees = Number(fees);
        this.name = name;
        this.mail = mail
        }
}

mostrar = ()=>{
        clase = menuBtn.firstElementChild.getAttribute("class");
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
}

const respuesta = document.createElement("p");

submitBtn.addEventListener("click", (e)=> {
    // Scripting
    e.preventDefault();
    let error = formCheck(); 
    if(error[0]){
        respuesta.textContent = error[1];
        respuesta.classList.add("red");
        respuesta.classList.remove("green");
        form.appendChild(respuesta);
    }
    else{
        var trip = new Trips(
            destination.value,
            price.value,
            fees.value,
            userName.value,
            email.value
            );
            
            respuesta.textContent = error[1];
            respuesta.classList.add("green");
            respuesta.classList.remove("red");
            form.appendChild(respuesta);
            popup.classList.add("aparecer");
            agregarCarrito();
    }
});
formCheck = ()=> {
    let error = [];
    if(destination.value == ""){
        error[0] = true;
        error[1] = "* Debe seleccionar un destino";
        return error;
    }
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
};

const verDatosBtn = document.createElement("button");
verDatosBtn.textContent = "Ver Datos";
verDatosBtn.classList.add("button");
popup.appendChild(verDatosBtn);

const datos = document.createElement("p");

// Evento click en button "Ver Datos"
verDatosBtn.onclick = ()=> {
    //Scripting
    datos.textContent = `Destino: ${destination.value}.
    Precio: ${price.value}.
    Cuotas: ${fees.value}.
    Nombre: ${userName.value}.
    E-mail: ${email.value}`
    popup.appendChild(datos);
}

closePopupBtn.onclick = ()=> popup.classList.remove("aparecer");

const nombre = "Pedrasdo";

const promesa = new Promise((resolve, reject)=>{
    if(nombre !== "Pedro"){
        reject("Lo siento el nombre no es Pedro")
    }else{
        resolve (nombre);
    }   
});

promesa.then(resultado => console.log(resultado)).catch(e => console.log(e))

const agregarCarrito = ()=> {
    // Scripts
    const cardContainer = document.createElement("div");
    document.body.append(cardContainer)
    cardContainer.classList.add("cart-container")
    cardContainer.classList.add("aparecer")
    cardContainer.innerHTML = `<i class="fa-solid fa-cart-flatbed-suitcase"></i>`
    // Luego de 3 seg se remueve la clase "aparecer"
    setTimeout(()=> cardContainer.classList.remove("aparecer"),3000)
}