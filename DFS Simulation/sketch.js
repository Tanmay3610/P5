var rows = 10;
var cols = 10;
var cellWidth = 0;
var cellHeight = 0;
var mesh = new Array(rows);
var obstacle = new Array(rows);
var numberOfObstacle = 20;
var currentX = 0;
var currentY = 0;
var openSet = [];
var closedSet = [];
var currentCell;
var endCell = [rows - 1, cols - 1];

function renderHinderence(){
  for(let i = 0; i < numberOfObstacle; i++){
    let x = Math.floor(Math.random() * (rows));
    let y = Math.floor(Math.random() * (cols));
    if(x == rows - 1 && y == cols - 1) continue;
    if(x == 0 && y == 0) continue;
    obstacle[x][y] = true;    
    mesh[x][y].renderObstacle();
  }  
}

function setup() {
  //Few necessary commands
  createCanvas(400, 400);
  
  frameRate(5);
  
  //Defining the cell Height and Width
  cellWidth = width/cols;
  cellHeight = height/rows;
  
  //Building 2D Array
  for(let i = 0; i < rows; i++){
    mesh[i] = new Array(cols);
    obstacle[i] = new Array(cols);
  }
  
  //Building Mesh
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      mesh[i][j] = new Cell(i, j);
      mesh[i][j].renderCell();
      obstacle[i][j] = false;
    }
  }  
  
  //Rendering Obstacle
  renderHinderence();
  
  //Pushing first cell in open Set
  openSet.push([currentX, currentY]);
  currentCell = mesh[currentX][currentY];
}

function highlightCurrent(){
    fill(224, 206, 0);
    stroke(1);
    rect(currentX * cellWidth, currentY * cellHeight, cellWidth, cellHeight);
}

function findNeighbour(){
    var dirX = [1, -1, 0, 0];
    var dirY = [0, 0, 1, -1];
    for(let i = 0; i < 4; i++){
      var tempX = currentX + dirX[i];
      var tempY = currentY + dirY[i];
      if(tempX >= 0 && tempX < rows && tempY >= 0 && tempY < cols){
        if(obstacle[tempX][tempY] == false){
          openSet.push([tempX, tempY]);
        }        
      }
    }
  }

function draw() {  
  if(currentX == endCell[0] && currentY == endCell[1]){
    noLoop();
  }
  if(openSet.length > 0){
    [currentX, currentY] = openSet.pop();
    currentCell = mesh[currentX][currentY];
    if(!closedSet.includes(currentCell)){
      closedSet.push(currentCell);
      highlightCurrent();
      findNeighbour();
      
    }
  }else{
    noLoop();
  }
}