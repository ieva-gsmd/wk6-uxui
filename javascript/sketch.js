let isPressed = false;
let val;

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.parent("sketch-container");
addGUI();
}

function draw() {

val = slider.value();
background(val, 100, 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function addGUI() {
    button = createButton("PRESS")
    button.addClass("button");
    button.position(width/2 - 75, height/2);
    button.mousePressed(bPress);

    slider = createSlider(0, 255, 0, 1);
    slider.addClass("slider");
    slider.position(width/2 - 75, height/2 + 100);
    //slider.style('width', '80px');
  }

  function bPress() {
    console.log('button pressed')
    if (isPressed) {
      isPressed = false;
      button.html("PRESS");
      //button.removeClass("inactive");
    } else {
      isPressed = true;
      button.html("PRESSED");
    }
  }

