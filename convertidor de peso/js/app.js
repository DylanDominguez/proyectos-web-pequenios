const inputEl = document.getElementById("pounds");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

let errorTime;

function updateResults() {
    if (inputEl.value <= 0 || isNaN(inputEl.value)) {
        errorEl.textContent = "Please enter a valid number!";
    
    //Hace que el temporizador se renueve cada que detecta un cambio en el input
    //Antes esos dos segundos se acumulaban cuando se detectaba un cambio en el input
    //con la funcion clearTimeout() ya no pasa eso
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
        errorEl.textContent = "";
        inputEl.value = "";
    }, 2000);
    }else{
        resultEl.textContent =  (Number(inputEl.value) / 2.2).toFixed(2);
    }
}

//Realiza una funcion cuando detecta algun valor en el input
inputEl.addEventListener("input", updateResults);