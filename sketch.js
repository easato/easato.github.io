function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(0,width);
  y = random(0,height);
  velx = windowWidth/100;
  vely = windowHeight/120;
}

function draw() {
  background(0);
  ellipse(x,y,50,50);
  x+=velx;
  y+=vely;

  if(x >= width || x <= 0){
    velx = - velx;
  }

  if(y<= 0 ||y >= height){
    vely = - vely;
  }
}

function mousePressed() {
  if(mouseIsPressed) {
    var fs = fullscreen();
    fullscreen(!fs);
      if(!fs){
        resizeCanvas(displayWidth, displayHeight);
      }
      else{
        resizeCanvas(windowWidth, windowHeight);
      }
  }
}
