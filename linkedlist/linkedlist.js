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

// Insert at give node
LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("PrevNode cannot be Null");
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// Delete First node or Delete Head
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    console.log("Head doesn't exist");
    return;
  }
  this.head = head.next;
};

// Delete Last Node of the linkedlist
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; // Head doesn't exist. Nothing to delete
  }
  if (!this.head.next) {
    this.head = null; //There's only one node
    return;
  }
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};
