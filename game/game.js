const Img1 = new Image;
Img1.src = 'game-images/wc3.png';


const Img2 = new Image;
Img2.src = 'game-images/shadow-one.png';


const Img3 = new Image;
Img3.src = 'game-images/concord.png';


const Img4 = new Image;
Img4.src = 'game-images/galaxy-foams.png';

const begin = document.querySelector('.start')

Img1.style.borderRadius = '50%;'


const Imgs = [Img2, Img3, Img4]

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

canvas.style.backgroundColor = 'black';

function drawSneakers(round){
    start = 5 + round;
    for (let i = 0; i < start; i++) {
      ctx.drawImage(
        Imgs[Math.floor(Math.random() * 3)],
        (Math.random() * canvas.width) - 50,
        Math.floor(Math.random() * canvas.height) + 200,
        100,
        100
      );
    }
    ctx.drawImage(
        Img1,
        (Math.random() * canvas.width) - 50,
        Math.floor(Math.random() * canvas.height) + 200,
        100,
        50
    );
}

function animate(){
    ctx.drawImage(Img1, canvas.width/2.3, canvas.height * .08, 150, 100);
    drawSneakers(0);

    requestAnimationFrame(animate);

}



animate();









/* Spawn Images randomly on grid



*/