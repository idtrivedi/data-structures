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

// Delete a node with a given key
LinkedList.prototype.deleteWithAGiveKey = function (key) {
  // Head doesn't exist, nothing to delete
  if (!this.head) {
    return;
  }

  // Data found at Head
  if (this.head.data == key) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  while (current.next != null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }

  console.log("No Node found with key " + key);
};

// Search key in the linkedlist
LinkedList.prototype.search = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
    current = current.next;
  }
  return false;
};

// Traverse the linkedlist
LinkedList.prototype.printList = function () {
  let current = this.head;
  let listValues = [];
  while (current) {
    listValues.push(current.data);
    current = current.next;
  }
  if (listValues.length > 0) {
    console.log(listValues.join(" -> "));
  } else {
    console.log("LinkedList is Empty");
  }
};

LinkedList.prototype.reverseLinkedList = function () {
  let current = this.head;
  let next = null;
  let prev = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
};
