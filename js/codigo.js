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
    const carousel = document.querySelector(".carousel")
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
        const list = document.querySelector(".mobile-menu");
        const menuBtn = document.querySelector(".menu-btn");
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
const carrito = [];
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
        let trip = new Trips(
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
            carrito.push(trip);
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
    //Scripts
    if(datos.textContent != "") datos.textContent = ""
    else {
        datos.textContent = `Destino: ${destination.value}.
    Precio: ${price.value}.
    Cuotas: ${fees.value}.
    Nombre: ${userName.value}.
    E-mail: ${email.value}`
    }
    popup.appendChild(datos);
}

closePopupBtn.onclick = ()=> popup.classList.remove("aparecer");

const cartContainer = document.createElement("div");
const agregarCarrito = ()=> {
    // Scripts
    document.body.append(cartContainer)
    cartContainer.classList.add("cart-container");
    cartContainer.innerHTML = `<i class="fas fa-luggage-cart"></i>
    <div class="cart-indicator">${carrito.length}</div>`;
    cartContainer.classList.add("fade-in-left");
}

const arrowContainer = document.createElement("div");
if(window.innerWidth > 1280){
    //Scripts
    arrowContainer.classList.add("arrow-container");
    arrowContainer.innerHTML = `<a href="#menu-desktop"><i class="fas fa-angle-up"></i></a>`;
    document.body.append(arrowContainer);
    window.addEventListener("scroll", ()=> {
        if(this.scrollY > 95){
            arrowContainer.classList.add("fade-in-right");
        }else{arrowContainer.classList.remove("fade-in-right")}
    })
}

class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram
    }
}