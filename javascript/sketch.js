//your pressed or not variable
let isPressed = false;
let val;

function setup() {
//create a canvas and add to to a 'container'
canvas = createCanvas(windowWidth, windowHeight);
canvas.parent("sketch-container");

//function to add all your button elements
addGUI();
}

function draw() {
//variable that updates the slider value
val = slider.value();

//this value from slider changes the background red colour
background(val, 100, 100);
}

function windowResized() {
  //this is a function that always makes sure that the window size is updated
    resizeCanvas(windowWidth, windowHeight);
}

function addGUI() {
  //button functions go here
    button = createButton("PRESS")//this creates a basic html button
    button.addClass("button");  //this follows the button styling in style.css
    button.position(width/2 - 75, height/2); //controles where the button is on the page
    button.mousePressed(bPress); //controls which function is envoked when button is pressed

    slider = createSlider(0, 255, 0, 1); // creates a basic slider
    slider.addClass("slider"); // adds styling from style.css
    slider.position(width/2 - 75, height/2 + 100);  //sets the slider positon
    //slider.style('width', '80px');
  }

  function bPress() {
    //the button pressed function
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

