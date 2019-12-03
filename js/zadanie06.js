window.addEventListener("DOMContentLoaded", () => {

    let ul = document.getElementById("shopping-list");
    let button1 = document.getElementById("button-1");

    button1.addEventListener("click", () => {
        let child = document.createElement("LI");
        child.innerText = "chleb";
        ul.appendChild(child);
    });

    let button2 = document.getElementById("button-2");
    button2.addEventListener("click", () => {
        if (ul.lastElementChild !== null) ul.lastElementChild.remove()
    });

    let button3 = document.getElementById("button-3");
    button3.addEventListener("click", () => {
        if (ul.children[1] !== undefined) ul.appendChild(ul.children[1].cloneNode(true))
    });
});
