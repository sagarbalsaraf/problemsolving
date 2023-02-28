const LinkedListNode = class {
    constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
    }
  };
  
  // Complete the function below
  
  function insertNodeAtTail(head, data, printList) {
    if (head == null) {
      head = new LinkedListNode(data);
      printList(head);
      return head;
    } else {
      var current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new LinkedListNode(data);
      printList(head);
      return head;
    }
  }

  
  var head = insertNodeAtTail(null, 1, printList);
  head = insertNodeAtTail(head, 2, printList);
  head = insertNodeAtTail(head, 3, printList);
  head = insertNodeAtTail(head, 4, printList);
  // console.log(head);
  
  function printList(head) {
    var res = "";
    var current = head;
    while (current !== null) {
      res += current.data + " ";
      current = current.next;
    }
    console.log(res);
  }