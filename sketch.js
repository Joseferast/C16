
//Declare a variável para PLAY e END

var PLAY =1;
var END =0;
//inicialize o valor para a variável

//Atribua o valor de gameState como PLAY

var gameState = PLAY;

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 redB= new Group();
 blueB= new Group();
 pinkB= new Group();
 greenB= new Group();
 
  arrowGroup= new Group();
}

function draw() {
 background(0);
//Adicione a condição para gameState = PLAY
if (gameState === PLAY) {
  bow.y = World.mouseY;
  scene.velocityX = -3;
if (scene.x < 0){
      scene.x = scene.width/2;
    }
if (keyWentDown("space")) {
  //o código das flechas foram concertadas.
    createArrow();
  }
  var select_balloon = Math.round(random(1,4));
 if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1:redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }
if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score += 1 ;
    // OBS: a pontuação não foi definida no site, então estarei colocando como 1.
}
if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score += 2;
}
if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score += 1;
}
if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score += 3;
}
if (bow.isTouching(redB) || bow.isTouching(blueB) || bow.isTouching(pinkB) || bow.isTouching(greenB)) {
  gameState = END;
  redB.destroyEach();
  arrowGroup.destroyEach();
  blueB.destroyEach();
  greenB.destroyEach();
  pinkB.destroyEach();
} }

 //escreva uma condição para o estado END
 if (gameState === END) {
 //Adicione o código para destruir o arco
  bow.destroy();
 //defina a velocidade do fundo como 0
  scene.velocityX = 0;
  arrowGroup.destroyEach();
 }
  drawSprites();
//Adicione a condição de texto para exibir a pontuação.

text("Pontos: " + score,175,300);
}



function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
pinkB.add(pink);
}

// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}
