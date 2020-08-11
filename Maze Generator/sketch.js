var grid = [];
var w = 40;
var current;

function Cell(i, j){
  this.x = i;
  this.y = j;
  this.walls = [true, true, true, true];
  this.visited = false;
  
  
  function index(i, j){
    if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1)
        return -1;
    return i + j * cols;
  }
  
  this.checkNeighbors = ()=>{
    var neighbors = [];
    
    var top = grid[index(i, j - 1)];
    var right = grid[index(i + 1, j)];
    var bottom = grid[index(i, j + 1)];
    var left = grid[index(i - 1, j)];
    
    if(top && !top.visited)
      neighbors.push(top);
    if(right && !right.visited)
      neighbors.push(right);
    if(bottom && !bottom.visited)
      neighbors.push(bottom);
    if(left && !left.visited)
      neighbors.push(left);
    
    if(neighbors.length > 0){
      return neighbors[floor(random(0, neighbors.length))]
    }
    else{
      return undefined;
    }
  }
  
  this.show = ()=>{
    noFill();
    stroke(255);
    if(this.walls[0])
      line(this.x*w, this.y*w, this.x*w + w, this.y*w);
    if(this.walls[1])
      line(this.x*w + w, this.y*w, this.x*w + w, this.y*w + w);
    if(this.walls[2])  
      line(this.x*w + w, this.y*w + w, this.x*w, this.y*w + w);
    if(this.walls[3])  
      line(this.x*w, this.y*w + w, this.x*w, this.y*w);
    
    if(this.visited){
      noStroke();
      fill(255, 0, 255, 100);
      rect(this.x * w, this.y * w, w, w);
    }
  }  
}

//Setup
function setup(){
  createCanvas(400, 400);
  
  cols = width/w;
  rows = width/w;
  frameRate(5);
  
  for(var j = 0; j < rows; j++){
    for(var i = 0; i < cols; i++){
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
  
  current = grid[0];
}


function draw(){
  background(51);
  for(var i = 0; i < grid.length; i++){
    grid[i].show();
  }
  
  var next = current.checkNeighbors();
  console.log(next);
  if(next){
    next.visited = true;
    
    removeNeighbors(current, next);
    
    current = next;
  }
}





function removeNeighbors(a, b){
  var x = a.x - b.x;
  if(x === 1){
    a.walls[3] = false;
    b.walls[1] = false;
  }
  
  if(x === -1){
    a.walls[1] = false;
    b.walls[3] = false;
  }
  
  var y = a.y - b.y;
  if(y === 1){
    a.walls[0] = false;
    b.walls[2] = false;
  }
  
  if(y === -1){
    a.walls[2] = false;
    b.walls[0] = false;
  }
}