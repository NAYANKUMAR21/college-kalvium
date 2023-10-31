// Define a Node class to represent individual nodes in the linked list
class ListNode {
  data: number;
  next: ListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

// Define a LinkedList class to manage the linked list
class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // Add a new node to the end of the linked list
  public append(data: number) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Print the linked list
  public print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

myList.print(); // Output: 1 2 3
