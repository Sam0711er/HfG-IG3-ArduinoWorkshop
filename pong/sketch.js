var gameStart = false;
var paddleL = {
  x: 10,
  y: 100,
  w: 15,
  h: 100,
};
var paddleR = {
  x: screen.width-30,
  y: 100,
  w: 15,
  h: 100,
};
var ball = {
  x: 50,
  y: 20,
  diam: 25,
  speedX: 5,
  speedY: 5,
};
var speedX = 5;
var speedY = 5;
var paddleSpeed = 12;
var s = "Welcome to Infinte Pong! Player one controlls their paddle with the a and z keys. Player two controls their paddle with the /? key and the '\" key. Press the space bar to begin";
var yModifier = 110;

var player1Score = 0;
var player2Score = 0;

var lastGoalWasMadeByPlayer1 = false;

function setup() {
  createCanvas(screen.width, screen.height-yModifier);
  smooth();
  background(0);
}

function draw() {

  //if (keyPressed(32) === true) {
  gameStart === true;
  //}

  background(64, 161, 76);
  noStroke();
  checkForGameEnd();


  createLeftPaddle();
  createRightPaddle();
  createBall();
  ballBounceTopAndBottom();
  ballBounceRight();
  ballBounceLeft();

  textSize(32);
  textAlign(CENTER);


  var scoreString = player1Score + " : " + player2Score;
  text(scoreString, width/2, 50);
}

function createBall() {
  //Create ball
  fill(198, 237, 44);
  ellipse(ball.x, ball.y, ball.diam, ball.diam);

  ball.x = ball.x + speedX;
  ball.y = ball.y + speedY;
}

function createLeftPaddle() {
  //Create the left paddle
  fill(0, 50, 50);
  paddleL.y = round(map(player1Y, 0, 1024, screen.height-yModifier-100, 0))
  rect(paddleL.x, paddleL.y, paddleL.w, paddleL.h);
}

function createRightPaddle() {
  //Create the right paddle
  fill(50, 50, 0);


  paddleR.y = round(map(player2Y, 0, 1024, screen.height-yModifier-100, 0))
  rect(paddleR.x, paddleR.y, paddleR.w, paddleR.h);
  //Control the right paddle
}

function ballBounceTopAndBottom() {

  //If if the ball hits the top or bottom of the court it bounces
  if (ball.y + 12.5 > height || ball.y < 12.5 && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
    speedY = speedY * -1; //reverse the direction of the motion
    ball.y = ball.y + speedY; //keeps things moving
    print("wham");

  }

}

function ballBounceRight() {
  //if the x of the edge ball is more than the x of the right paddle and
  //the y of the ball is greater than the y of the rectangle and
  //less than the y of the rectangle plus the height
  if (ball.x + 12.5 > paddleR.x && ball.y + 12.5 > paddleR.y && ball.y + 12.5 < paddleR.y + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
    speedX = speedX * -1; //This reverses the direction, I think
    ball.x = ball.x + speedX; //This keeps the ball moving
    print("bam");


  }
  //if the edge of the ball is lower than rect y and
  //the x of the ball is greater than the x of the rect and less than the width
  else if (ball.y + 12.5 > paddleR.y && ball.y < paddleR.y + paddleR.y + paddleR.h && ball.x + 12.5 > paddleR.x && ball.x < paddleR.x + paddleR.x && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
    speedY = speedY * -1; //reverse the direction of the motion
    ball.y = ball.y + speedY; //keeps things moving
    print("bam top");
  }

  //if the edge of the ball is higher than rect y plus height and
  //the x of the ball is greater than the x of the rect and less than the width
  else if (ball.y + 12.5 < paddleR.y + paddleR.h && ball.y > paddleR.y && ball.x > paddleR.x && ball.x < paddleR.x + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
    speedY = speedY * -1; //reverse the direction of the motion
    ball.y = ball.y + speedY; //keeps things moving
    print("bam bottom");
  }
}

function ballBounceLeft() {
  //if the ball hits the left wall
  /* if (ball.x < 0) {
     speedX = speedX * -1; //This reverses the direction, I think
     ball.x = ball.x + speedX; //This keeps the ball moving
     print("pow");*/

  //if the ball hits the front of the left paddle
  if (ball.x - 12.5 < paddleL.x + paddleL.w && ball.y + 12.5 > paddleL.y && ball.y + 12.5 < paddleL.y + paddleL.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
    speedX = speedX * -1; //This reverses the direction, I think
    ball.x = ball.x + speedX; //This keeps the ball moving
    print("pow");
  }
}

function checkForGameEnd(){
  if (ball.x < 0){
    player2Score++;
    lastGoalWasMadeByPlayer1 = false;
    relaunchGame();
  }

  if (ball.x > screen.width){
    player1Score++;
    lastGoalWasMadeByPlayer1 = true;
    relaunchGame();
  }
}

function relaunchGame(){

  if (lastGoalWasMadeByPlayer1 == true) {
    ball.x = screen.width-(screen.width/3);
    ball.y = screen.height/10;
    ball.diam = 25;
    ball.speedX = -5;
    ball.speedY = -5;
    speedX = -5;
    speedY = -5;
  }else{
    ball.x = screen.width/3;
    ball.y = screen.height/10;
    ball.diam = 25;
    ball.speedX = 5;
    ball.speedY = 5;
    speedX = 5;
    speedY = 5;
  }
}
