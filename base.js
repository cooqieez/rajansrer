let logoImg;

function preload() {
  // Load the logo image
  logoImg = loadImage('https://raw.githubusercontent.com/cooqieez/rajansrer/refs/heads/main/logo_w.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(246, 246, 246);

  // Draw yellow bar at the top
  fill(7, 53, 144); // bright yellow
  noStroke();
  rect(0, 0, width, 60);

if (logoImg) {
  imageMode(CORNER);
  let barHeight = 60;
  let padding = 20;
  let logoHeight = barHeight - (padding * 2);
  let logoWidth = logoImg.width * (logoHeight / logoImg.height);
  // Zmieniamy pozycję x na padding, a y na padding
  image(logoImg, padding, padding, logoWidth, logoHeight);
}
  

  // Tu możesz dodać swój kod rysujący
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
