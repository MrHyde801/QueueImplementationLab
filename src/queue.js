class Queue {
  constructor() {
    this.data = [];
    this.index = 0;
  }

  enqueue(element) {
    this.data.push(element);
    this.index++;;
  }

  dequeue() {
    this.data.shift();;
    this.index--;
    
  }

  peek() {
    if(this.data.length === 0){
    return undefined
    } else {
      return this.data[0];
    }
  }

  size() {
    return this.index;
  }
}
