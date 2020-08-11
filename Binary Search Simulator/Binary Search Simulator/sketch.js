var grid = []
var w = 0;
var numberOfGrids = 0;
var currentCell;
var startIndex = 0;
var endIndex;
var flag = false;

function setup() {
  createCanvas(600, 100);

  numberOfGrids = 20
  w = floor(width / numberOfGrids);

  frameRate(1);
  endIndex = numberOfGrids;

  for (var i = 0; i < numberOfGrids; i++) {
    cell = new LinearGrid(i, w, i);
    grid.push(cell)
  }

  currentCell = grid[0];
}

function find(x) {
  if (startIndex < endIndex) {
    var mid = floor((startIndex + endIndex) / 2);
    if (grid[mid].value > x) {
      endIndex = mid - 1;
      currentCell = grid[endIndex];
    } else if (grid[mid].value < x) {
      startIndex = mid + 1;
      currentCell = grid[startIndex];
    } else {
      currentCell = grid[mid];
      flag = true;
    }
  }
}

function draw() {
  background(51);
  for (var j = 0; j < numberOfGrids; j++) grid[j].show();
  currentCell.highlight();
  if (flag === true) {
    currentCell.found();
  }
  find(15);

  if (startIndex >= numberOfGrids) {
    console.log('Not Found');
    noLoop();
  }
}