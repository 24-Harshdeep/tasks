const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const para = document.createElement("p");
para.innerText = "Hello, World!";
container.appendChild(para);

const btn = document.createElement("button");
btn.innerText = "Change Text";
container.appendChild(btn);

btn.onclick = function() {
  para.innerText = "Hello, JavaScript DOM!";
  para.style.color = "blue";
  para.style.fontSize = "20px";
};
