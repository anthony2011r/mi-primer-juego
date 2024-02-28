
    let nclicks = 0;
    const imagen = document.querySelector(".imagen");
    const intruso = document.querySelector("#intruso");
    const clicks = document.querySelector(".clicks");
    const alerta = document.querySelector(".alerta")
    const alertaMensaje = document.querySelector(".alerta-mensaje")

    intruso.backgroundColor = "rgba(0,0,0,0)";
    
    intruso.addEventListener("click", function() {       
        imagen.style.border = "10px solid green"
        imagen.style.borderRadius = "5px"
        imagen.style.backgroundColor = "green";
        alerta.style.display = "flex"
        
        if (nclicks == 0) {
            alertaMensaje.textContent = "Genial eres un crak Encontraste al impostor a la primera";
        } else if (nclicks < 11) {
            alertaMensaje.textContent = `Buen trabajo, encontraste al impostor despues de ${nclicks} intentos`;
        } else {
            alertaMensaje. textContent = `Eres un ciego,igual lo encontraste despues de ${nclicks} intentos`
        }
    })

    imagen.addEventListener("click", function() {
      nclicks = nclicks + 1;
         clicks.textContent = `Clicks: ${nclicks}`
        if (nclicks == 1) {
             clicks.style.color = "green";
        } else if (nclicks < 11) {
            clicks.style.color = "yellow";      
        } else {
            clicks.style.color = "red"; 
        }
    })

function recargar () {
    location.reload()
}