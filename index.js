

class Node {
  constructor(value, next = null) {
    this.value = value,
    this.next = next
  }
}  

class LinkedList {
  constructor() {
    this.head = null
  }
  prepend(value) {
    let newNode = new Node(value);
    // newNode.next = this.head = newNode;
    this.head = newNode;
    return this.head;
  }
  append(value) {
    let newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      return this.head;
    } else {
      let tail = this.head;
      while(tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
      return this.head;
    }
  }
  getNodeAt(index) {
    let counter = 0;
    let node = this.head;
    while(node) {
      if(counter === index) {
        return node
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  insertAt(value, index) {
    if(!this.head) {
      this.head = new Node(value);
      return;
    } else {
      const prev = this.getNodeAt(index-1);
      let newNode = new Node(value);
      newNode.next = prev.next;
      prev.next = newNode;
      return this.head;
    }
  }
  deleteHead() {
    if(!this.head) {
      return;
    }
    this.head = this.head.next;
    return this.head;
  }

  deleteLast() {
    if(!this.head) {
      return null;
    }
    if(!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let tail = this.tail.next;
    while(tail.next !== null) {
      prev = tail;
      tail = tail.next;
    }
    prev.next = null;
    return this.head;
  }
  deleteAt(index) {
    if (!this.head) {
         this.head = new Node(data);
         return;
     }
    if (index === 0) {
      this.head = this.head.next;
      return;
     }
     else {
       const prev = this.getNodeAt(index-1);
       if(!prev || !prev.next) {
         return;
       }
       prev.next = prev.next.next;
       return this.head;
     }
  }
  deleteList() {
    this.head = null;
  }
}

let list = new LinkedList();

list.prepend(5);
list.append(23)
list.insertAt(245, 2);

console.log(list);