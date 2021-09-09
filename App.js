const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let painting = false;

function write(e){
    painting = true;
    ctx.lineWidth = 10;
    ctx.lineCap = "square";
    ctx.strokeStyle = "black";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener("mousemove", write);                         
