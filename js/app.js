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
    let repetido = cart.find(search => search.id == id);
    if(repetido){
        repetido.count = repetido.count + 1;
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id="cantidad${repetido.id}">Cantidad:  ${repetido.count}</p>`
    }else{
        showAlert();
        // Agregar objeto al array "cart"
        const tripToAdd = trips.find(trip => trip.id == id);
        cart.push(tripToAdd);
        
        const modalCartContent = document.getElementById("modalCartContent");
        
        modalCartContent.innerHTML +=`<div class="trip">
        <p class="trip-destination">${tripToAdd.destination}</p>
        <p class="trip-price">Precio:  ${tripToAdd.price}</p>
        <p id="cantidad${tripToAdd.id}">Cantidad:  1</p>
        <i class="fas fa-trash" id="btnRemoveTrip"></i>
</div>`;

    showCartIcon();
    saveInLS("cart", JSON.stringify(cart));
    console.log(cart);
    
    const btnRemoveTrip = document.querySelectorAll("#btnRemoveTrip");
    btnRemoveTrip.forEach(btn => btn.addEventListener("click", ()=> {
        btn.parentElement.remove();
        cart = cart.filter(trip => trip.id !== id);
        showCartIcon();
        console.log(cart);
        saveInLS("cart", JSON.stringify(cart));
    }));
    }
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

// Funcion "Mostrar Icono Carrito"
function showCartIcon (){
    // El carrito solo se mostrará si la longitud del carrito es mayor a 0
    if(cart.length > 0){
        cartContainer.innerHTML = `<a><i class="fas fa-luggage-cart"></i>
        <div class="cart-indicator">${cart.length}</div></a>`;
        cartContainer.classList.add("fade-in-left");
    }else{
        cartContainer.classList.remove("fade-in-left");
    }
}

showCartIcon();

const modalCart = document.getElementById("modal-cart");
cartContainer.onclick = ()=> modalCart.classList.toggle("hidden");




console.log(cart);