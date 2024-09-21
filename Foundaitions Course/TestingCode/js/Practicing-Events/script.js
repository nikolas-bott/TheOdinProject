const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btnn = document.querySelector("#btnn");
btnn.addEventListener("click", function(e){
    e.target.style.background = "blue";
});
btn.addEventListener("click", function(e){
    e.target.style.background = "red";
});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        alert(button.id);
    });
});