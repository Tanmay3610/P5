class PriorityQueue{

  constructor(){    
    this.heapArr = [];
    this.heapArr.push(-1);    
  }
  
  isEmpty(){
    if(this.heapArr.length <= 1){
      return true;
    }
    return false;
  }
  
  swap(index1, index2){
    let temp = this.heapArr[index1];
    this.heapArr[index1] = this.heapArr[index2];
    this.heapArr[index2] = temp;
  }
  
  pushData(data){
    let current = this.heapArr.length;
    this.heapArr.push(data);
    while(this.parent(current) > 0){
      if(this.heapArr[this.parent(current)][0] < data[0]){
        break;
      }
      this.swap(this.parent(current), current);
      current = this.parent(current);      
    }
  }
  
  popData(){
    if(this.isEmpty() === false){
      let result = this.heapArr[1];
      this.heapArr[1] = this.heapArr[this.heapArr.length - 1];
      this.heapArr.pop();
      this.heapify(1);
      return result;
    }
    console.log('Underflow');
  }
  
  heapify(index){
    var smallestIndex = index;
    var smallest = this.heapArr[index][0];
    var right = this.rightChild(smallestIndex);
    var left = this.leftChild(smallestIndex);
    
    if(right > 0 && right < this.heapArr.length && smallest > this.heapArr[right][0]){
      smallestIndex = right;
    }
    
    if(left > 0 && left < this.heapArr.length && this.heapArr[smallestIndex][0] > this.heapArr[left][0]){
      smallestIndex = left;
    }
    
    if(smallestIndex != index){
      this.swap(smallestIndex, index);
      this.heapify(smallestIndex);
    }
  }
  
  rightChild(index){
    return (2 * index) + 2;
  }
  
  leftChild(index){
    return (2 * index) + 1;
  }
  
  parent(index){
    return Math.floor((index) / 2);
  }
  
  printQueue(){
    console.log(this.heapArr);
  }
}