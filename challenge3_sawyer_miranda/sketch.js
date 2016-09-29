///Challenge 3 Sawyer and Miranda


////declaring an array
var points = [];

///setting up canvas
function setup() {
  createCanvas(800, 500);
}

///will draw again and again
function draw() {
  background('#222222');
  var point = { //instantiating coordinates to be mouse coordinates
    x: mouseX,
    y: mouseY
  }
  points.push(point); ///add point to the end of array on each draw
  
  
  ///referenced the code from 
  ///DM-1133-C-CreativeCoding-FA16-Bennett/wk4/P5_arrayExamples/example_09_08_mouse_history/

  if (points.length > 50) { /// if the number of values in array is more than 50
    points.splice(0, 1); ///add 1 to each value over 50 starting from beginning
  }
  for (var i = 0; i < points.length; i++) { 
    // Draw an triangle for each element in the arrays. 
    // Color and size are tied to the loop's counter: i.
    noStroke();
    fill(255 - i * 5, random(255), random(255), 255 - i);
    triangle(points[i].x, points[i].y, 0, 10, 10, 0);
    triangle(points[i].x, points[i].y, 800, 10, 790, 0); //these triangles come together at mouseX, mouseY

    triangle(points[i].x, points[i].y, points[i].x + 10, points[i].y - 20, points[i].x - 10, points[i].y - 20);
    ///draw a small triangle at cursor point 
  }




}