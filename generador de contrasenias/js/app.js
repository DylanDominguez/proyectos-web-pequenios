const btnEl = document.querySelector(".btn");
const input = document.getElementById("input");
const copiarIcono = document.querySelector("i");
const alertContainer = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    crearContrasenia();
});

copiarIcono.addEventListener("click", () => {
    copiarContrasenia();
    if (input.value) {
        alertContainer.classList.remove("active");
        setTimeout(() => {
            alertContainer.classList.add("active");
        }, 2000);
    }
});

function crearContrasenia() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }

    input.value = password;
    alertContainer.innerText = password + " copiado";
}

function copiarContrasenia() { 
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
}