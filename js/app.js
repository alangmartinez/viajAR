const email = document.querySelector(".email");
const submitBtn = document.querySelector(".submit-btn");
const userName = document.querySelector(".user-name");
btnGuardar = document.getElementById("btn-guardar"),
btnMostrar = document.getElementById("btn-mostrar"),
textInput = document.getElementById("text-input"),
closePopupBtn = document.getElementById("close-popup-btn"),
popup = document.getElementById("popup"),
form = document.getElementById("form"),
destination = document.querySelector(".destination"),
price = document.querySelector("#price");
const successfullAddedAlert = document.querySelector(".alert-success");
const cartContainer = document.createElement("div");

// Se crea carrito apartir de lo almacenado en el LocalStorage, si no hay nada almacendo carrito = array(vacio)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Se agregan dinamicamente los viajes al DOM
const tripsContainer = document.querySelector(".trips-container");

function showTrips(array) {
    for (const trip of array) {
        tripsContainer.innerHTML+= `<div class="trip ${trip.img}">
        <div class="trip-content">
        <h2 class="trip-content_title">${trip.destination}</h2>
        <p class="trip-content_price">$${trip.price}</p>
        </div>
        <button id="btnAddToCart${trip.id}" onclick ="addToCart(${trip.id})">Agregar !</button>
        </div>`
    }
}
showTrips(trips);


// Funcion "Agregar al carrito" 

function addToCart(id){
    showAlert();
    // Agregar objeto al array "cart"
    const tripToAdd = trips.find(trip => trip.id == id);
    cart.push(tripToAdd);

    const modalCartContent = document.getElementById("modalCartContent");
    console.log(modalCartContent);

    modalCartContent.innerHTML +=`<div class="trip">
    <p class="trip-destination">${tripToAdd.destination}</p>
    <p class="trip-price">Precio:  ${tripToAdd.price}</p>
    <p>Cantidad:  1</p>
    <i class="fas fa-trash" id="btnRemoveTrip"></i>
</div>`;

    showCartIcon();
    saveInLS("cart", JSON.stringify(cart));

    const btnRemoveTrip = document.querySelectorAll("#btnRemoveTrip");
    btnRemoveTrip.forEach(btn => btn.addEventListener("click", ()=> {
        btn.parentElement.remove();
        cart = cart.filter(trip => trip.id !== id);
    }));
    console.log(cart);
}

// Alert successfull added 
function showAlert() {
    successfullAddedAlert.classList.add("fade-in-top");
    setTimeout(()=>{ 
        successfullAddedAlert.classList.remove("fade-in-top")
    },2500);
}

const btnCloseModalCart = document.getElementById("btnCloseModalCart");
btnCloseModalCart.addEventListener("click", ()=> modalCart.classList.add("hidden"));


// Funcion "Guardar en Local Storage"
function saveInLS (key, value){
    localStorage.setItem(key, value);
}

document.body.append(cartContainer);
cartContainer.classList.add("cart-container");

// Funcion "Mostrar Carrito"
function showCartIcon (){
    // El carrito solo se mostrará si la longitud del carrito es mayor a 0
    if(cart.length > 0){
        cartContainer.innerHTML = `<a><i class="fas fa-luggage-cart"></i>
        <div class="cart-indicator">${cart.length}</div></a>`;
        cartContainer.classList.add("fade-in-left");
    }
}

showCartIcon();

const modalCart = document.getElementById("modal-cart");
cartContainer.onclick = ()=> modalCart.classList.toggle("hidden");



const respuesta = document.createElement("p");
submitBtn.addEventListener("click", (e)=> {
    // Scripts
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

console.log(cart);