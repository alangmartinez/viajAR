import { trips } from "./trips.js";
import { tripsContainer } from "./app.js";

const searchInput = document.getElementById("searchInput");
const searchIcon = document.querySelector(".fa-search");

searchIcon.addEventListener("click", ()=> {
    let search = searchInput.value.toLowerCase();
    let searchResult = trips.filter( travel => {
        travel.destination.toLowerCase().includes(search);
    });

    console.log("Esta funcionando");
    console.log(searchResult);

    searchResult.forEach( travel => {
        let div = document.createElement("div");
            div.className = `trip ${travel.img}`;
            div.innerHTML = `
            <div class="trip-content">
            <h2 class="trip-content_title">${travel.destination}</h2>
            <p class="trip-content_price">$${travel.price}</p>
            </div>
            <button id="btnAddToCart${travel.id}">Agregar !</button>`;
            tripsContainer.appendChild(div);
    })
})
