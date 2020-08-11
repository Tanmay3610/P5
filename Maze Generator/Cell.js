function Cell(i, j){
  this.x = i;
  this.y = j;
  this.walls = [true, true, true, true];
  this.visited = false;
  
  
  this.highlight = ()=>{
    var x = this.x * w;
    var y = this.y * w;
    noStroke();
    fill(0, 255, 255, 200);
    rect(x, y, w, w);
  }
  
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
