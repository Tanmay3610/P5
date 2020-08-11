var grid = [];
var w = 20;
var current;
var stack = [];

//Setup
function setup() {
  createCanvas(600, 600);

  cols = width / w;
  rows = width / w;

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}


function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.highlight();
  var next = current.checkNeighbors();
  if (next) {
    next.visited = true;

    stack.push(current);
    current.highlight();
    removeNeighbors(current, next);

    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }

  if (stack.length == 0) {
    console.log('Completed');
    noLoop();
  }
}

function removeNeighbors(a, b) {
  var x = a.x - b.x;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  }

  if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  var y = a.y - b.y;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  }

  if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
