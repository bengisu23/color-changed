const colorsContainer = document.getElementById("colorsContainer");
const bigColor = document.getElementById("bigColor");
const img=document.getElementById("img")

const buttons = ["red", "purple", "blue", "green", "gray", "#253","pink"];
for (let sayac = 0; sayac < buttons.length; sayac++) {
  const color = document.createElement("div");
  color.id = buttons[sayac];
  color.classList.add("smallBox");
  color.style.backgroundColor = buttons[sayac];
  color.addEventListener("click", function () {
    bigColor.style.backgroundColor = buttons[sayac];
  });
  colorsContainer.appendChild(color);
}
 /*
const images=["./image1.jpeg","./image2.jpeg","./image3.jpeg"]

for (let sayac = 0; sayac < images.length; sayac++) {
    const smallImg=document.createElement("img")

    smallImg.classList.add("smallBox")
    smallImg.setAttribute("src",images[sayac])
  
    smallImg.addEventListener("click", function () {
      img.setAttribute("src",images[sayac])
    });
  
    colorsContainer.appendChild(smallImg);
  } */

