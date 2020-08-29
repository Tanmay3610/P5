var sqr = number => {
  return number * number;
}
class Point{
  constructor(x, y){
    this.obstacle = false;
    this.id = counter;
    this.x = x;
    this.y = y;
    this.heuristic = Math.sqrt(sqr(numberOfPoints - this.x - 1) + sqr(numberOfPoints - this.y - 1));
    this.distance = width/numberOfPoints;
    counter = counter + 1;
    if(counter === sqr(numberOfPoints)){
      counter = 0;
    }
  }
  
  renderPoint(){
      strokeWeight(1);
      stroke(0);
      fill(51);
      if(this.x === 0 && this.y === 0){
        fill(12, 237, 83);
      }
      if(this.x === numberOfPoints - 1 && this.y === numberOfPoints - 1){
        fill(255, 0, 0);
      }
      rect(margin + this.y * this.distance, margin + this.x * this.distance, this.distance, this.distance);
    }
  
  highlight(){
    strokeWeight(1);
    fill(219, 172, 0);
    rect(margin + this.y * this.distance, margin + this.x * this.distance, this.distance, this.distance);
  }
  
  highlightVisited(){
    strokeWeight(1);
    fill(224, 47, 16);
    rect(margin + this.y * this.distance, margin + this.x * this.distance, this.distance, this.distance);
  }
  
  obstaclesHighlight(){
    strokeWeight(1);
    fill(255);
    rect(margin + this.y * this.distance, margin + this.x * this.distance, this.distance, this.distance);
  }
}