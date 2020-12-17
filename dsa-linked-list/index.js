//The linked list has a head to indicate the beginning of the list. 
//The head always contains the 1st node. 
//In this case, we start with an empty list, represented by null.

  class LinkedList {
    constructor() {
      this.head = null;
    }

    push = (val) => {
      const node = {
        value: val,
        next: null
      }
      if (!this.head) {
        this.head = node;
      }
      else {
        let current = this.head;
        while(current.next){
          current = current.next;
        }
        current.next =node;
      }
    }
  }

  const sll = new LinkedList();

  //push node
  sll.push("Apollo");
  sll.push("Boomer");
  sll.push("Helo");
  sll.push("Husker");
  sll.push("Starbuck");
  sll.push("Tauhida")
  //check values by traversing LinkedList
  sll.head; //object {value: apollo, next: Object}
  sll.head.next; //Object {value: boomer, next: Object}
  sll.head.next.next; //Object {value: helo, next: null}
  sll.head.next.next.next;
  sll.head.next.next.next.next;
  sll.head.next.next.next.next.next;

  console.log(sll)
 