class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head, null);
  if (this.head !== null) {
    this.head.prev = newNode;
  }
  this.head = newNode;
  if (this.tail == null) {
    this.tail = newNode;
  }
};

DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, null);
  if (this.tail !== null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  if (this.tail === null) {
    this.tail = newNode;
  }

  if (this.head === null) {
    this.head = newNode;
  }
};

DoublyLinkedList.prototype.insertAfterGivenNode = function (data, prevNode) {
  if (prevNode == null) {
    console.log("Invalid Prev Node");
    return;
  }

  const newNode = new Node(data, prevNode.next, prevNode);

  if (prevNode.next !== null) {
    prev.next.prev = newNode;
  }
  prevNode.next = newNode;
  if (newNode.next == null) {
    this.tail = newNode;
  }
};
