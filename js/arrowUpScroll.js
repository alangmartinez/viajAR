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