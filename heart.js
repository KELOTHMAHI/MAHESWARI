const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove",(event) =>{
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanE1 = document.createElement("span");
  spanE1.style.left = xPos + "px";
  spanE1.style.top = yPos + "px";
  bodyE1.appendChild(spanE1);
});
