class Cell{
  constructor(x, y){
    this.data = 0;
    this.direction = '.';
    this.x = x;
    this.y = y;
  }
  
  renderCell(){
    stroke(255);
    fill(0);
    rect(this.x*width, this.y*width, width, width);
  }
  
  renderData(){
    var data = `${this.data}/${this.direction}`
    textSize(12)
    fill(255, 0, 0);
    text(data, this.x * width + width/2, this.y * width + width/2);    
  }
}
