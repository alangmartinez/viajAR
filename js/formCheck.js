const email = document.querySelector(".email");
const submitBtn = document.querySelector(".submit-btn");
const userName = document.querySelector(".user-name");
const form = document.getElementById("form");
const destination = document.getElementById("destination");
const price = document.getElementById("price");

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
    }
});
formCheck = ()=> {
    let error = [];
    if(destination.value == ""){
        error[0] = true;
        error[1] = "* Debe indicar un destino.";
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