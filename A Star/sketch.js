var numberOfPoints = 100
var margin = 0;
var currentX = 0;
var currentY = 0;
var points = new Array(numberOfPoints);
var visited = [];
var queue;
var steps = 0;
var counter = 0;
var visitedCells = [];
var numberOfObstacles = 500;
var obstacles = [];

function setup() {
  createCanvas(400, 400);
  queue = new PriorityQueue();
  for(let i = 0; i < numberOfPoints; i++){
    points[i] = new Array(numberOfPoints);
  }
  for(let i = 0; i < numberOfObstacles; i++){
    let x = Math.floor(Math.random() * numberOfPoints);
    let y = Math.floor(Math.random() * numberOfPoints);
    if(x === 0 && y === 0 || x === numberOfPoints - 1 && y === numberOfPoints - 1){
      continue;
    }
    obstacles.push([x, y])
  }
}

var renderPoints = () => {
  for(let i = 0; i < numberOfPoints; i++){
    for(let j = 0; j < numberOfPoints; j++){
      points[i][j] = new Point(i, j);
      points[i][j].renderPoint();
    }
  }
}

var discover = () => {
  var dirX = [1, -1, 0];
  var dirY = [0, 1, -1];
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(dirX[i] === 0 && dirY[j] === 0) continue;
    var tempX = currentX + dirX[i];
    var tempY = currentY + dirY[j];
     
    if( tempX < numberOfPoints && tempX >= 0 && tempY < numberOfPoints && tempY >= 0){
       if(visited.includes(points[tempX][tempY].id) === false){  
          if(points[tempX][tempY].obstacle === true) continue;  
        queue.pushData([steps + points[tempX][tempY].heuristic,[tempX, tempY]]);
       }       
    }   
    }
  }       
}

var highlightVisitedPath = () => {
  for(let i = 0; i < visitedCells.length; i++){
    visitedCells[i].highlightVisited();
  }
}

var renderObstacles = () => {
  for(let i = 0; i < obstacles.length; i++){
    points[obstacles[i][0]][obstacles[i][1]].obstaclesHighlight();
    points[obstacles[i][0]][obstacles[i][1]].obstacle = true;
  }
}

function draw() {
  if(currentX === numberOfPoints - 1 && currentY === numberOfPoints - 1){
    noLoop();
  }
  steps = steps + 1;
  background(51);
  renderPoints();
  renderObstacles();
  highlightVisitedPath();
  discover();
  points[currentX][currentY].highlight();
  visited.push(points[currentX][currentY].id);
  visitedCells.push(points[currentX][currentY]);              
  data = queue.popData();
  currentX = data[1][0];
  currentY = data[1][1];
}