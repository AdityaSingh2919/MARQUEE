// SELECT
document.getElementById("id");

document.getElementsByClassName("class");

document.querySelector(".class");

document.querySelectorAll(".class");


// TEXT
element.innerText = "Hello";

element.textContent = "Hello";

element.innerHTML = "<b>Hello</b>";


// STYLE
element.style.color = "red";

element.style.backgroundColor = "blue";


// CLASSES
element.classList.add("active");

element.classList.remove("active");

element.classList.toggle("active");

element.classList.contains("active");


// ATTRIBUTES
element.getAttribute("src");

element.setAttribute("src", "image.jpg");

element.removeAttribute("src");


// CREATE
let div = document.createElement("div");


// ADD
parent.append(div);

parent.prepend(div);

element.before(div);

element.after(div);


// REMOVE
element.remove();


// EVENTS
element.addEventListener("click", (e) => {
    console.log(e.target);
});


// INPUT
e.target.value;


// STOP DEFAULT
e.preventDefault();
