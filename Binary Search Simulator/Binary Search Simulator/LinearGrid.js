class LinearGrid{
  constructor(x, w, value){
    this.x = x;
    this.w = w;
    this.value = value;
  }
  
  show(){
    strokeWeight(1);
    line(this.x * this.w, 50, this.x * this.w + this.w, 50);
    line(this.x * this.w + this.w, 50, this.x * this.w + this.w, this.w + 50);
    line(this.x * this.w + this.w, 50 + this.w, this.x * this.w, this.w + 50);
    line(this.x * this.w, this.w + 50, this.x * this.w, 50);
    
    text(this.value, this.x*this.w + (this.w)/2, 50 + (this.w)/2);
    fill(255);
  }
  
  highlight(){
    fill(0, 255, 255, 100);
    rect(this.x * w, 50, w, w);
  }
  
  found(){
    fill(0, 0, 255, 100);
    rect(this.x * w, 50, w, w);
  }
  
  notFound(){
    fill(255, 0, 0, 100);
    rect(this.x * w, 50, w, w);
  }
}