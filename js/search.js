const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");


searchInput.addEventListener("keyup", ()=>{
    if(searchInput.value.length > 0){
        trips.forEach( trip => {
            let tripDestination = trip.destination;
            if(tripDestination.toLowerCase().includes(searchInput.value.toLowerCase())){
                searchResult.innerHTML = "";
                searchResult.innerHTML += `<p>${tripDestination} ${trip.price}</p>`;
            }
        })
    }
})