let level =10;
let slider
let shadow =0; // variable to hold the start of shadow
let box;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
  angleMode(DEGREES)
  background(90);
  noStroke();
  fill(0);
  //drawShape(300, 300, 200);
  slider = createSlider(2,200,100,1);
  slider.changed(changeit)
  box = createCheckbox(' randomly placed', true);
  box.changed(changeit)
  drawShape(300, 300, 200)
}

function changeit(){
  background(90)
  drawShape(300, 300, 200)
  shadow = random(0,6)
}

function drawShape(x, y, d) {
  // just using the carpet function to change the size and number of circles
  let craterx,cratery
  fill(160);
  stroke(230);
  strokeWeight(d*0.1)
  if (box.checked()){

    craterx = random(width) // craters dont use carpet coordinates
    cratery = random(height) // they are randomly placed
  } else{
    craterx =x;
    cratery =y;
  } 
  ellipse(craterx,cratery, d, d);
  stroke(0) // arc stroke is black, giving a shadow 
  //fill(0) // arc is filled with the same color as the circle
  arc(craterx,cratery, d, d, 90, 270); //using degrees
  //ellipse(x,y,d,d);
  if (d > slider.value()) {
    let newD = d * 0.3333333;
    drawShape(x + d, y, newD);
    drawShape(x - d, y, newD);
    drawShape(x , y + d, newD);
    drawShape(x , y - d, newD);
    drawShape(x + d, y + d, newD);
    drawShape(x - d, y - d, newD);
    drawShape(x- d , y + d, newD);
    drawShape(x +d , y - d, newD);
  }
}