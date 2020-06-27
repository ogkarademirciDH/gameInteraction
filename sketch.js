/*

The Game Project

Week 3

Game interaction

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var collectable;
var canyon;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  collectable = {
    x_pos: 300,
    y_pos: floorPos_y,
    size: 48,
    isFound: false
  };

  canyon = {
    x_pos: 600,
    y_pos: floorPos_y,
    width: 100
  };

  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;
}

function draw() {
  ///////////DRAWING CODE//////////

  background(100, 155, 255); //fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

  //draw the canyon

  fill(100, 155, 255);
  rect(canyon.x_pos, canyon.y_pos, canyon.width, floorPos_y);
  fill(168, 167, 186);
  triangle(
    canyon.x_pos + canyon.width / 6,
    canyon.y_pos + 40,
    canyon.x_pos,
    height,
    canyon.x_pos + canyon.width / 3,
    height
  );
  triangle(
    canyon.x_pos + canyon.width / 2,
    canyon.y_pos + 40,
    canyon.x_pos + canyon.width / 3,
    height,
    canyon.x_pos + (canyon.width / 3) * 2,
    height
  );
  triangle(
    canyon.x_pos + (canyon.width / 6) * 5,
    canyon.y_pos + 40,
    canyon.x_pos + (canyon.width / 3) * 2,
    height,
    canyon.x_pos + (canyon.width / 3) * 3,
    height
  );

  //collectable
  if (
    dist(gameChar_x, gameChar_y, collectable.x_pos + 10, collectable.y_pos) <=
    20
  ) {
    collectable.isFound = true;
  }
  if (collectable.isFound == false) {
    fill(186, 51, 51);
    ellipse(
      collectable.x_pos + 14,
      collectable.y_pos - 20,
      collectable.size - 19,
      collectable.size - 11
    );
    ellipse(
      collectable.x_pos + 30,
      collectable.y_pos - 20,
      collectable.size - 19,
      collectable.size - 11
    );
    stroke(88, 70, 70);
    strokeWeight(3);

    line(
      collectable.x_pos + 30,
      collectable.y_pos - 42,
      collectable.x_pos + 22,
      collectable.y_pos - 32
    );
  }

  //the game character
  strokeWeight(1);
  if (isLeft && isFalling) {
    // add your jumping-left code
    //hair
    fill(0);
    ellipse(gameChar_x + 2, gameChar_y - 54, 42, 33);
    //face
    fill(255, 227, 206);
    stroke(65);
    ellipse(gameChar_x, gameChar_y - 53, 22, 22);
    //eyes
    fill(255);
    stroke(65);
    // ellipse(gameChar_x - 8, gameChar_y - 55, 8, 8);
    ellipse(gameChar_x - 7, gameChar_y - 56, 10, 10);
    // ellipse(gameChar_x - 8, gameChar_y - 54, 2, 2);
    ellipse(gameChar_x - 8, gameChar_y - 54, 2, 2);
    //mouth
    line(gameChar_x - 6, gameChar_y - 46, gameChar_x - 2, gameChar_y - 46);
    //legs
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //left leg
    rect(gameChar_x - 8, gameChar_y - 22, 6, 12, 2);
    //right leg
    rect(gameChar_x + 2, gameChar_y - 22, 12, 6, 2);
    //arms
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //right arm
    rect(gameChar_x, gameChar_y - 38, 17, 4, 2);

    //body
    fill(248, 123, 142);
    noStroke();
    rect(gameChar_x - 8, gameChar_y - 42, 15, 24, 5);
    //arms
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //left arm
    rect(gameChar_x - 20, gameChar_y - 38, 17, 4, 2);
  } else if (isRight && isFalling) {
    // add your jumping-right code
    //hair
    fill(0);
    ellipse(gameChar_x - 2, gameChar_y - 54, 42, 33);
    //face
    fill(255, 227, 206);
    stroke(65);
    ellipse(gameChar_x, gameChar_y - 53, 22, 22);
    //eyes
    fill(255);
    stroke(65);
    ellipse(gameChar_x + 8, gameChar_y - 55, 8, 8);
    // ellipse(gameChar_x - 7, gameChar_y - 56, 10, 10);
    ellipse(gameChar_x + 8, gameChar_y - 54, 2, 2);
    // ellipse(gameChar_x - 8, gameChar_y - 54, 2, 2);
    //mouth
    line(gameChar_x + 6, gameChar_y - 46, gameChar_x + 2, gameChar_y - 46);
    //legs
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //left leg
    //rect(gameChar_x - 8, gameChar_y - 22, 6, 12);
    rect(gameChar_x - 15, gameChar_y - 22, 12, 6, 2);
    //right leg
    rect(gameChar_x, gameChar_y - 22, 6, 12, 2);
    //arms
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //left arm
    rect(gameChar_x - 20, gameChar_y - 38, 17, 4, 2);
    //body
    fill(248, 123, 142);
    noStroke();
    rect(gameChar_x - 8, gameChar_y - 42, 15, 24, 5, 2);
    //arms
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);

    //right arm
    rect(gameChar_x, gameChar_y - 38, 17, 4, 2);
  } else if (isLeft) {
    // add your walking left code
    //hair
    fill(0);
    ellipse(gameChar_x + 2, gameChar_y - 54, 42, 33);
    //face
    fill(255, 227, 206);
    stroke(65);
    ellipse(gameChar_x, gameChar_y - 53, 22, 22);
    //eyes
    fill(255);
    stroke(65);
    // ellipse(gameChar_x - 8, gameChar_y - 55, 8, 8);
    ellipse(gameChar_x - 7, gameChar_y - 56, 10, 10);
    // ellipse(gameChar_x - 8, gameChar_y - 54, 2, 2);
    ellipse(gameChar_x - 8, gameChar_y - 54, 2, 2);
    //mouth
    line(gameChar_x - 6, gameChar_y - 46, gameChar_x - 2, gameChar_y - 46);
    //legs
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //left leg
    rect(gameChar_x - 8, gameChar_y - 15, 6, 12, 2);
    //right leg
    rect(gameChar_x, gameChar_y - 15, 6, 12, 2);
    //body
    fill(248, 123, 142);
    noStroke();
    rect(gameChar_x - 8, gameChar_y - 42, 15, 30, 5);
    //arms
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //left arm
    // rect(gameChar_x - 15, gameChar_y - 38, 4, 17);
    //right arm
    rect(gameChar_x, gameChar_y - 38, 4, 17, 2);
  } else if (isRight) {
    // add your walking right code
    //hair
    fill(0);
    ellipse(gameChar_x - 2, gameChar_y - 54, 42, 33);
    //face
    fill(255, 227, 206);
    stroke(65);
    ellipse(gameChar_x, gameChar_y - 53, 22, 22);
    //eyes
    fill(255);
    stroke(65);
    ellipse(gameChar_x + 8, gameChar_y - 55, 8, 8);
    // ellipse(gameChar_x - 7, gameChar_y - 56, 10, 10);
    ellipse(gameChar_x + 8, gameChar_y - 54, 2, 2);
    // ellipse(gameChar_x - 8, gameChar_y - 54, 2, 2);
    //mouth
    line(gameChar_x + 6, gameChar_y - 46, gameChar_x + 2, gameChar_y - 46);
    //legs
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //left leg
    rect(gameChar_x - 8, gameChar_y - 15, 6, 12, 2);
    //right leg
    rect(gameChar_x, gameChar_y - 15, 6, 12, 2);
    //body
    fill(248, 123, 142);
    noStroke();
    rect(gameChar_x - 8, gameChar_y - 42, 15, 30, 5);
    //arms
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //left arm
    // rect(gameChar_x - 15, gameChar_y - 38, 4, 17);
    //right arm
    rect(gameChar_x - 4, gameChar_y - 38, 4, 17, 2);
  } else if (isFalling || isPlummeting) {
    // add your jumping facing forwards code
    //hair
    fill(0);
    ellipse(gameChar_x, gameChar_y - 54, 42, 33);
    //face
    fill(255, 227, 206);
    stroke(65);
    ellipse(gameChar_x, gameChar_y - 53, 22, 22);
    //eyes
    fill(255);
    stroke(65);
    ellipse(gameChar_x - 8, gameChar_y - 55, 8, 8);
    ellipse(gameChar_x + 7, gameChar_y - 56, 10, 10);
    ellipse(gameChar_x - 8, gameChar_y - 54, 2, 2);
    ellipse(gameChar_x + 8, gameChar_y - 54, 2, 2);
    //mouth
    line(gameChar_x - 2, gameChar_y - 46, gameChar_x + 2, gameChar_y - 46);
    //arms
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //left arm
    rect(gameChar_x - 15, gameChar_y - 55, 4, 17, 2);
    //right arm
    rect(gameChar_x + 10, gameChar_y - 55, 4, 17, 2);
    //left leg
    rect(gameChar_x - 9, gameChar_y - 22, 6, 12, 2);
    //right leg
    rect(gameChar_x + 2, gameChar_y - 22, 6, 12, 2);
    //body
    fill(248, 123, 142);
    noStroke();
    rect(gameChar_x - 9, gameChar_y - 42, 18, 24, 5);
  } else {
    // add your standing front facing code

    //hair
    fill(0);
    ellipse(gameChar_x, gameChar_y - 54, 42, 33);
    //face
    fill(255, 227, 206);
    stroke(65);
    ellipse(gameChar_x, gameChar_y - 53, 22, 22);
    //eyes
    fill(255);
    stroke(65);
    ellipse(gameChar_x - 8, gameChar_y - 55, 8, 8);
    ellipse(gameChar_x + 7, gameChar_y - 56, 10, 10);
    ellipse(gameChar_x - 8, gameChar_y - 54, 2, 2);
    ellipse(gameChar_x + 8, gameChar_y - 54, 2, 2);
    //mouth
    line(gameChar_x - 2, gameChar_y - 46, gameChar_x + 2, gameChar_y - 46);
    //arms
    fill(255, 227, 206);
    stroke(65);
    strokeWeight(1);
    //left arm
    rect(gameChar_x - 15, gameChar_y - 38, 4, 17, 2);
    //right arm
    rect(gameChar_x + 10, gameChar_y - 38, 4, 17, 2);
    //left leg
    rect(gameChar_x - 9, gameChar_y - 15, 6, 12, 2);
    //right leg
    rect(gameChar_x + 2, gameChar_y - 15, 6, 12, 2);
    //body
    fill(248, 123, 142);
    noStroke();
    rect(gameChar_x - 9, gameChar_y - 42, 18, 30, 5);
  }

  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here
  if (isLeft == true) {
    gameChar_x -= 2;
  }
  if (isRight == true) {
    gameChar_x += 2;
  }
  if (isPlummeting == true && gameChar_y == floorPos_y) {
    gameChar_y -= 5;
    gameChar_y = floorPos_y - 300;
  }

  if (gameChar_y < floorPos_y) {
    gameChar_y += 5;
    isFalling = true;
  } else {
    isFalling = false;
  }
  if (
    gameChar_x > canyon.x_pos &&
    gameChar_x < canyon.x_pos + canyon.width &&
    gameChar_y >= floorPos_y
  ) {
    gameChar_y += 5;
    isFalling = true;
  }
  if (gameChar_y > floorPos_y && isPlummeting == true && isRight == true) {
    gameChar_x = gameChar_x + canyon.width;
    gameChar_x = gameChar_x;
  }
  if (gameChar_y > floorPos_y && isPlummeting == true && isLeft == true) {
    gameChar_x = gameChar_x - canyon.width;
    gameChar_x = gameChar_x;
  }
}

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

  //open up the console to see how these work
  console.log("keyPressed: " + key);
  console.log("keyPressed: " + keyCode);
  if (keyCode == 37) {
    console.log("left arrow");
    isLeft = true;
  } else if (keyCode == 39) {
    console.log("right arrow");
    isRight = true;
  }
  if (keyCode == 32) {
    console.log("space bar");
    isPlummeting = true;
    isFalling = false;
  }
}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.

  console.log("keyReleased: " + key);
  console.log("keyReleased: " + keyCode);
  if (keyCode == 37) {
    console.log("left arrow");
    isLeft = false;
  } else if (keyCode == 39) {
    console.log("right arrow");
    isRight = false;
  }
  if (keyCode == 32) {
    console.log("space bar");
    isPlummeting = false;
    isFalling = true;
  }
}
