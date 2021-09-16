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
    start = 10 + round;
    for (let i = 0; i < start; i++) {
      ctx.drawImage(
        Imgs[Math.floor(Math.random() * 3)],
        (Math.random() * canvas.width),
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

function animate(turn){
  setTimeout(() =>{
    ctx.drawImage(Img1, canvas.width/2.3, canvas.height * .08, 150, 100);
    drawSneakers(turn)}
    , 50)
}





let gameRound = 0;

let isClicked = false;
Img1.addEventListener(onclick, function(){
  if(isClicked == false){
    isClicked = true;
  }else{
    isClicked = false;
  }
});


let play = (isGoing) =>{
  animate(0);
  while(isGoing){
    if(isClicked){
      gameRound += 5
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animate(gameRound)
    }else{
      isGoing = false;
    }
  }
}

play(true);
