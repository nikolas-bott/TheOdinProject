const container = document.querySelector("body");

const heading = document.createElement("h1");
heading.classList.add("heading");
heading.textContent= "THE TITLE OF  YOUR WEBPAGE";

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!"

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.cssText = "color: red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!"
h3.style.cssText = "color: blue";

const divTemp = document.createElement("div");
divTemp.style.border = "black solid";
divTemp.style.backgroundColor = "pink";

const anotherH1 = document.createElement("h1");
anotherH1.textContent = "I'm in a div";

const anotherP = document.createElement("p");
anotherP.textContent = "ME TOO!"

container.appendChild(heading);
container.appendChild(content);
container.appendChild(divTemp);

content.appendChild(para);
content.appendChild(h3);

divTemp.appendChild(anotherH1);
divTemp.appendChild(anotherP);
