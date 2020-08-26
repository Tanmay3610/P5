class Cell{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  renderCell(){
    fill(51);
    stroke(255);
    rect(this.x * cellWidth, this.y * cellHeight, cellWidth, cellHeight);
  }
  
  highlight(){
    fill(224, 206, 0);
    stroke(1);
    rect(currentX * cellWidth, currentY * cellHeight, cellWidth, cellHeight);
}
  
  renderObstacle(){
    fill(255, 0, 0);
    noStroke();
    rect(this.x * cellWidth, this.y * cellHeight, cellWidth, cellHeight);
  }
}