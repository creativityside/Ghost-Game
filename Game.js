let player = { x: 100, y: 200 };
let reticle = { x: 200, y: 200 };
let moving = 0;
let playerspeed = 1.5;
let ghost;
let pumpkin;
let projectiles = []; // Array to store projectiles
let starterscreen = 1;

let myFont;
let target1 = {x: 400, y: 200, living :true};
let target2 = {x: 150, y: 100, living:true};
let target3 = {x: 100, y: 400, living:true, speed:3};
let target8 = {x: 100, y: 400, living:true, speed:3};
let target5 = {x: 400, y: 40, living:true};
let target6 = {x: 30, y: 35, living:true};
let target7 = {x: 70, y: 370, living:true, speed:3};
let target4 = {x: 475, y: 475, living:true};
let wall1 = {x: 150, y: 300};
let wall2 = {x: 110, y: 300};
let wall3 = {x: 400, y: 400};
let wall4 = {x: 370, y: 100};
let wall5 = {x: 30, y: 90};
let wall6 = {x: 370, y: 400};
//variables


function preload() {
  ghost = loadImage("ghost_1.png");
  pumpkin = loadImage("Pum.png");
  myFont = loadFont("Eater-Regular.ttf");
}

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  imageMode(CENTER); 
}

function draw() {

  switch (starterscreen) {  //TITLE SCREEN
    case 1: 
      background(200,150,90);
      textAlign(CENTER);
      textFont(myFont);
      textSize(50);
      text('Halloween Game', width/2, 150);
      textSize(30);
      text('Begin', width/2, 300);
      text('Press [S]', width/2, 350);

      if (target8.x >= 300){ //moving pumpkin
        target8.speed = -300;
       } else if (target3.x <= 300){
        target8.speed = 300;
       }

     
  if (target3.living == true){
    image(pumpkin, target8.x, target8.y, 50, 50);
    target8.x = target8.x + target8.speed;
    }
       

    if (keyCode == 83) {  //leave screen
      starterscreen = 2;
    }
      break;

    case 2:  // MAIN GAMEPLAY
  background(220, 90, 150);
  textSize(16);
  stroke(2);
  text('Press [f] if finished ', 370, 30);


  // Targets 
  if (target1.living == true){
    image(pumpkin, target1.x, target1.y, 50, 50);
    }

  if (target2.living == true){
    image(pumpkin, target2.x, target2.y, 50, 50);
    }  

  if (target3.living == true){
    image(pumpkin, target3.x, target3.y, 50, 50);
    target3.x = target3.x + target3.speed;
    }
      
 if (target3.x >= 200){ //moving pumpkin
  target3.speed = -3;
 } else if (target3.x <= 100){
  target3.speed = 3;
 }
  if (target4.living == true){
    image(pumpkin, target4.x, target4.y, 50, 50);
    }    

  noStroke;
  fill(150);
  circle(wall1.x, wall1.y, 50); //rock visuals, feel free to update
  circle(wall2.x, wall2.y, 50);
  circle(wall3.x, wall3.y, 50);

  // Draw the ghost image at player position
  image(ghost, player.x, player.y, 50, 50);

  // Update reticle position
  cursor(CROSS); 
  noFill();
  stroke(255);
  circle(reticle.x,reticle.y,50);
  reticle.x = mouseX;
  reticle.y = mouseY;

  // Player movement 
  if (keyIsPressed) {  
    if (keyIsDown(38) || keyIsDown(87)) 
      player.y -= playerspeed; // Up
  }
  if (keyIsPressed) {  
    if (keyIsDown(37) || keyIsDown(65)) 
      player.x -= playerspeed; // Left
  }
  if (keyIsPressed) {  
    if (keyIsDown(39) || keyIsDown(68)) 
      player.x += playerspeed; // Right
  }
  if (keyIsPressed) {  
    if (keyIsDown(40) || keyIsDown(83)) 
      player.y += playerspeed; // Down
  }

  // Update and draw projectiles
  for (let i = projectiles.length - 1; i >= 0; i--) {
    let projectile = projectiles[i];
    projectile.update();
    projectile.show();
    projectile.collide();
    // Remove the projectile if it moves out of bounds
    if (projectile.pos.x < 0 || projectile.pos.x > width || projectile.pos.y < 0 || projectile.pos.y > height) {
      projectiles.splice(i, 1);
    }
  }
    if (keyCode == 70) {  //leave screen
      starterscreen = 3;
    }

    break;
    
  case 3:  // MAIN GAMEPLAY
background(148, 0, 211);

  // Targets 
  if (target5.living == true){
    image(pumpkin, target5.x, target5.y, 50, 50);
    }

  if (target6.living == true){
    image(pumpkin, target6.x, target6.y, 50, 50);
    }  

  if (target7.living == true){
    image(pumpkin, target7.x, target7.y, 50, 50);
    target3.x = target3.x + target3.speed;
    }
      
 if (target7.x >= 200){ //moving pumpkin
  target7.speed = -3;
 } else if (target7.x <= 100){
  target3.speed = 3;
 }
  if (target4.living == true){
    image(pumpkin, target4.x, target4.y, 50, 50);
    }    

  noStroke;
  fill(150);
  circle(wall4.x, wall4.y, 50); //rock visuals, feel free to update
  circle(wall5.x, wall5.y, 50);
  circle(wall6.x, wall6.y, 50);


  // Draw the ghost image at player position
  image(ghost, player.x, player.y, 50, 50);

  // Update reticle position
  cursor(CROSS); 
  noFill();
  stroke(255);
  circle(reticle.x,reticle.y,50);
  reticle.x = mouseX;
  reticle.y = mouseY;

  // Player movement 
  if (keyIsPressed) {  
    if (keyIsDown(38) || keyIsDown(87)) 
      player.y -= playerspeed; // Up
  }
  if (keyIsPressed) {  
    if (keyIsDown(37) || keyIsDown(65)) 
      player.x -= playerspeed; // Left
  }
  if (keyIsPressed) {  
    if (keyIsDown(39) || keyIsDown(68)) 
      player.x += playerspeed; // Right
  }
  if (keyIsPressed) {  
    if (keyIsDown(40) || keyIsDown(83)) 
      player.y += playerspeed; // Down
  }

  // Update and draw projectiles
  for (let i = projectiles.length - 1; i >= 0; i--) {
    let projectile = projectiles[i];
    projectile.update();
    projectile.show();
    projectile.collide();
    // Remove the projectile if it moves out of bounds
    if (projectile.pos.x < 0 || projectile.pos.x > width || projectile.pos.y < 0 || projectile.pos.y > height) {
      projectiles.splice(i, 1);
    }

  
  }

  break; //end of core game section
}
}

// Create a projectile when the mouse is pressed
function mousePressed() {
  let direction = createVector(reticle.x - player.x, reticle.y - player.y);
  direction.normalize();
  projectiles.push(new Projectile(player.x, player.y, direction));
}

function keyReleased() {
  moving = 0;
}

// Projectile class
class Projectile {
  constructor(x, y, direction) {
    this.pos = createVector(x, y);
    this.vel = direction.copy().mult(5); // Speed of the projectile
    this.size = 10; 
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    fill(0, 0, 255); // Color of the projectile
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  collide(){ //collision for each object individually because i'm too stubborn for arrays
  var d1 = dist(this.pos.x, this.pos.y, target1.x, target1.y)
  if (d1 <= 25){
    target1.living = false;
    this.pos.x = -50;
    this.pos.y = -50;
  }
  
  var d2 = dist(this.pos.x, this.pos.y, target2.x, target2.y)
  if (d2 <= 25){
    target2.living = false;
    this.pos.x = -50;
    this.pos.y = -50;    
  }

  var d3 = dist(this.pos.x, this.pos.y, target3.x, target3.y)
  if (d3 <= 25){
    target3.living = false;
    this.pos.x = -50;
    this.pos.y = -50;    
  }

  
  var d3 = dist(this.pos.x, this.pos.y, target8.x, target8.y)
  if (d3 <= 25){
    target8.living = false;
    this.pos.x = -50;
    this.pos.y = -50;    
  }

  var d4 = dist(this.pos.x, this.pos.y, target4.x, target4.y)
  if (d4 <= 25){
    target4.living = false; 
    this.pos.x = -50;
    this.pos.y = -50; 
  }
  var d5 = dist(this.pos.x, this.pos.y, target5.x, target5.y)
  if (d5 <= 25){
    target5.living = false;
    this.pos.x = -50;
    this.pos.y = -50;
  }
  
  var d6 = dist(this.pos.x, this.pos.y, target6.x, target6.y)
  if (d6 <= 25){
    target6.living = false;
    this.pos.x = -50;
    this.pos.y = -50;    
  }

  var d7 = dist(this.pos.x, this.pos.y, target7.x, target7.y)
  if (d7 <= 25){
    target7.living = false;
    this.pos.x = -50;
    this.pos.y = -50;    
  }
//rocks below
  var d5 = dist(this.pos.x, this.pos.y, wall1.x, wall1.y)
  if (d5 <= 25){
    this.pos.x = -50; 
    this.pos.y = -50;
  }

  var d6 = dist(this.pos.x, this.pos.y, wall2.x, wall2.y)
  if (d6 <= 25){
    this.pos.x = -50; 
    this.pos.y = -50;
  }

  var d7 = dist(this.pos.x, this.pos.y, wall3.x, wall3.y)
  if (d7 <= 25){
    this.pos.x = -50;
    this.pos.y = -50;
  }

  var d9 = dist(this.pos.x, this.pos.y, wall4.x, wall4.y)
  if (d9 <= 25){
    this.pos.x = -50; 
    this.pos.y = -50;
  }

  var d10 = dist(this.pos.x, this.pos.y, wall5.x, wall5.y)
  if (d10 <= 25){
    this.pos.x = -50; 
    this.pos.y = -50;
  }
  
  var d11 = dist(this.pos.x, this.pos.y, wall6.x, wall6.y)
  if (d11 <= 25){
    this.pos.x = -50; 
    this.pos.y = -50;
  }
}
}



  
