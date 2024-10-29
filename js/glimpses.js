// function initialize() {
//   // Register an event listener to  call the resizeCanvas() function each time
//   // the window is resized.
//   window.addEventListener('resize', resizeCanvas, false);
//
//   // Draw canvas border for the first time.
//   resizeCanvas();
// }
//
// // Display custom canvas. In this case it's a blue, 5 pixel border that
// // resizes along with the browser window.
// function redraw() {
//   context.strokeStyle = 'blue';
//   context.lineWidth = '5';
//   context.strokeRect(0, 0, window.innerWidth * 0.8, window.innerHeight * 0.6);
// }
//
// // Runs each time the DOM window resize event fires.
// // Resets the canvas dimensions to match window, then draws the new borders accordingly.
// function resizeCanvas() {
//   canvas.width = window.innerWidth * 0.8;
//   canvas.height = window.innerHeight * 0.6;
//   redraw();
// }

//the levels are defined in coords.js
var levels = [level0, level1, level2, level3, level4];

function Next() {
  clearLevel();
  if (current_level < levels.length - 1) {
    current_level = current_level + 1;
  }
  // redraw();
}

function Previous() {
  clearLevel();
  if (current_level > 0) {
    current_level = current_level - 1;
  }
  // redraw();
}

function DrawCircle(point) {
  var centerX = point[0] + canvas.width / 2;
  var centerY = point[1] + canvas.height / 2;
  var radius = point[2];
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2.0 * Math.PI, false);
  context.fillStyle = "blue";
  context.fill();
  context.stroke();
}

function DrawLevel(levelArray) {
  var arrayLength = levelArray.length;
  for (var i = 0; i < arrayLength; i++) {
    DrawCircle(levelArray[i]);
  }
  // redraw();
}

function clearLevel() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // redraw();
}

function GlimpseLevel(levelArray) {
  DrawLevel(levelArray);
  setTimeout(clearLevel, 50);
  // redraw();
}
