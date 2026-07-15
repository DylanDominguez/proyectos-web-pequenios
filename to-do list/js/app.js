const formEl = document.querySelector(".form");
const inputEl = document.querySelector("input");
const listEl = document.querySelector(".list");

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    toDoList();
});

function toDoList() {
    let newTask = inputEl.value;
    const liEl = document.createElement("li");
    liEl.textContent = newTask;
    listEl.appendChild(liEl);
    inputEl.value = "";
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `
    <i class="fa-solid fa-square-check check"></i>`;
    liEl.appendChild(checkBtnEl);
    const DeleteBtnEl = document.createElement("div");
    DeleteBtnEl.innerHTML = `
    <i class="fa-solid fa-trash-can papelera"></i>`;
    liEl.appendChild(DeleteBtnEl);

    checkBtnEl.addEventListener("click", ()=>{
        liEl.classList.toggle("checked");
    });

    DeleteBtnEl.addEventListener("click", ()=>{
        liEl.remove();
    });
}