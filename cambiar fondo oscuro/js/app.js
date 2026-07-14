const inputEl = document.querySelector(".input");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

function updateBody() {
    if (inputEl.checked) {
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.backgroundColor = "white";
    }
}

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}