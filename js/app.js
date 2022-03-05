const successfullAddedAlert = document.querySelector(".alert-success");
const tripRomvedAlert = document.querySelector(".alert-danger");
const cartIconContainer = document.createElement("div");
const modalCart = document.getElementById("modal-cart");


// Cart is created form what we have storage in LS, if there is nothing storage:  cart = array[];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.forEach(element => {
    // If the cart already have items inside, it will show them on the modal cart
    showCart(element);
});

// Trips are dynamically added to the DOM
const tripsContainer = document.querySelector(".trips-container");

showTrips(trips);

function showTrips(array) {
    for (const trip of array) {
        let div = document.createElement("div");
        div.className = `trip ${trip.img}`;
        div.innerHTML = `
        <div class="trip-content">
        <h2 class="trip-content_title">${trip.destination}</h2>
        <p class="trip-content_price">$${trip.price}</p>
        </div>
        <button id="btnAddToCart${trip.id}">Agregar !</button>`;
        tripsContainer.appendChild(div);

        const btnAddToCart = document.getElementById(`btnAddToCart${trip.id}`);
        btnAddToCart.addEventListener("click", ()=> {
            addToCart(trip.id);
        })
    }
}

// Function Add To Cart

function addToCart(id) {
    let repetido = cart.find(search => search.id == id);
    if(repetido){
        repetido.count = repetido.count + 1;
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<i class="far fa-user"></i>Pasajes: ${repetido.count}`;
    }else{
        const tripToAdd = trips.find(trip => trip.id == id);
        // Add a count value
        tripToAdd.count = 1;
        // Object saved in cart & Local Storage
        cart.push(tripToAdd);
        showCartIcon();
        // Object show in cart
        showCart(tripToAdd);
    }
    showAlert();
    saveInLS("cart", cart);
}

// Function Show Cart

function showCart(tripToAdd) {
    const modalCartContent = document.getElementById("modalCartContent");
    let div = document.createElement("div");
    div.className = "trip";
    div.innerHTML = `<p class="trip-destination">${tripToAdd.destination}</p>
    <p class="trip-price">Precio:  $${tripToAdd.price}</p>
    <p id="cantidad${tripToAdd.id}"><i class="far fa-user"></i>Pasajes: ${tripToAdd.count}</p>
    <i class="fas fa-trash" id="btnRemoveTrip${tripToAdd.id}"></i>`;
    modalCartContent.appendChild(div);

    // let totalPrice = 0;
    // totalPrice = tripToAdd.price;
    // let p = document.createElement("p");
    // p.className = "total-price";
    // p.textContent = `Precio Total: $${totalPrice}`
    // modalCart.appendChild(p);

    const btnRemoveTrip = document.getElementById(`btnRemoveTrip${tripToAdd.id}`);
    btnRemoveTrip.addEventListener("click", ()=>{
            if(tripToAdd.count == 1){
                // Remove the father element of the trash icon when count is below 1 
                btnRemoveTrip.parentElement.remove();
                console.log(tripToAdd.id);
                cart = cart.filter(trip => trip.id != tripToAdd.id);
                // Update Cart
                saveInLS("cart", cart);
                // Update Cart Icon
                showCartIcon();
                removedAlert();
            }else{
                // Reduce the count in 1
                console.log(tripToAdd.id);
                tripToAdd.count = tripToAdd.count - 1;
                document.getElementById(`cantidad${tripToAdd.id}`).innerHTML = `<i class="far fa-user"></i>Pasajes: ${tripToAdd.count}`;
                removedAlert();
            }
        })
    }

// Function Save in Local Storage

function saveInLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function Show Cart Icon

function showCartIcon (){
    // The cart only will show if cart´s length is higher than 0
    if(cart.length > 0){
        cartIconContainer.innerHTML = `<a><i class="fas fa-luggage-cart"></i>
        <div class="cart-indicator">${cart.length}</div></a>`;
        cartIconContainer.classList.add("fade-in-left");
    }else{
        cartIconContainer.classList.remove("fade-in-left");
        modalCart.classList.add("hidden");
    }
}

showCartIcon();

// Alert Trip Successfully Added 

function showAlert() {
    successfullAddedAlert.classList.add("fade-in-top");
    setTimeout(()=>{ 
        successfullAddedAlert.classList.remove("fade-in-top")
    },1500);
}

// Alert Trip Removed

function removedAlert() {
    tripRomvedAlert.classList.add("fade-in-top");
    setTimeout(()=>{ 
        tripRomvedAlert.classList.remove("fade-in-top")
    },1500);
}

const btnCloseModalCart = document.getElementById("btnCloseModalCart");
btnCloseModalCart.addEventListener("click", ()=> modalCart.classList.add("hidden"));


document.body.append(cartIconContainer);
cartIconContainer.classList.add("cart-container");

cartIconContainer.addEventListener("click", ()=>{
    modalCart.classList.toggle("hidden");
})