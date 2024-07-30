class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Insert Node at the beginning
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

// Insert Node at the End
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = newNode;
  while (last.next) {
    last = last.next;
  }
  last.next = newNode;
};