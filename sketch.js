function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
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
