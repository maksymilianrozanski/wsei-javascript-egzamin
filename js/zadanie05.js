document.addEventListener("DOMContentLoaded", () => {

    let buttons = document.getElementsByTagName("button");
    let container = document.getElementById("container");
    Array.from(buttons).forEach(button => button.addEventListener("click", ev => {
        container.innerText = ev.target.dataset["text"];
    }))
});
