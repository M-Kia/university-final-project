const bottomCanvas = document.getElementById("bottom");
const topCanvas = document.getElementById("top");

bottomCanvas.addEventListener("click", (event) => {
  console.log("clicked");
});

topCanvas.addEventListener("click", (event) => {
  bottomCanvas.dispatchEvent(new MouseEvent("click", event));
});

for (let i = 0; i < topCanvas.children.length; i++) {
  topCanvas.children[i].addEventListener("click", (event) => {
    event.stopPropagation();
  });
}
