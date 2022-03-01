const email = document.querySelector(".email");
const submitBtn = document.querySelector(".submit-btn");
const userName = document.querySelector(".user-name");
btnGuardar = document.getElementById("btn-guardar"),
btnMostrar = document.getElementById("btn-mostrar"),
textInput = document.getElementById("text-input"),
closePopupBtn = document.getElementById("close-popup-btn"),
popup = document.getElementById("popup"),
form = document.getElementById("form");

// Se ejecuta el evento cuando la ventana esta cargando.
const carousel = document.querySelector(".carousel")
onload = ()=> carousel.classList.add("visible");

const btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", ()=>{
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
    });
    
    const tripsContainer = document.querySelector(".trips-container");
    for(let index = 0; index < trips.length; index++){
        tripsContainer.innerHTML+= `<div class="trip-container ${trips[index].img}">
        <div class="trip">
            <h2 class="trip_title">${trips[index].destination}</h2>
            <p class="trip_price">$${trips[index].price}</p>
        </div>
        <button id="agregar-viaje">Agregar !</button>
    </div>`
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
    }else{   
            respuesta.textContent = error[1];
            respuesta.classList.add("green");
            respuesta.classList.remove("red");
            form.appendChild(respuesta);
            popup.classList.add("aparecer");
            carrito.push(trip);
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

closePopupBtn.onclick = ()=> popup.classList.remove("aparecer");

const agregarViaje = document.querySelectorAll("#agregar-viaje");
const alertAgregado = document.querySelector(".alert-success");
console.log(agregarViaje);

agregarViaje.forEach((button)=>{
    button.addEventListener("click", ()=> {
        alertAgregado.classList.add("fade-in-top");
        // Se remueve fade in, luego de 2500ms
        setTimeout(()=>{
            alertAgregado.classList.remove("fade-in-top")
        },2500);
        // agregar objeto al array "carrito", el objeto debe tener destino y precio
        agregarCarrito();
    })
})


const cartContainer = document.createElement("div");
const agregarCarrito = ()=> {
    // Scripts
    if(carrito.length > 0){
        document.body.append(cartContainer)
        cartContainer.classList.add("cart-container");
        cartContainer.innerHTML = `<a><i class="fas fa-luggage-cart"></i>
        <div class="cart-indicator">${carrito.length}</div></a>`;
        cartContainer.classList.add("fade-in-left");
    }
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
