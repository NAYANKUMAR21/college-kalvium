class ListNode {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(num) {
    let newNode = new ListNode(num);
    let current = this.head;
    if (this.head == null) {
      this.head = newNode;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.print();
console.log(list);
