const text = document.querySelector(".circular-text .text");
const rotate = new CircleType(text).radius(80);
const img1 = document.getElementById("img-1")
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");
const img4 = document.getElementById("img-4");
const img5 = document.getElementById("img-5");




window.addEventListener("scroll", function(){
    text.style.transform = `rotate(${window.scrollY * .15}deg)`;
});

