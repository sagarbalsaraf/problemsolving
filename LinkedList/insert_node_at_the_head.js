const LinkedListNode = class {
    constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
    }
  };
  
  // Complete the function below
  
  function insertNodeAtHead(head, data, printList) {
    if (head === null) {
      head = new LinkedListNode(data);
      printList(head);
      return head;
    } else {
      var current = new LinkedListNode(data);
      current.next = head;
      head = current;
      printList(head);
      return head;
    }
  }
  
  var head = insertNodeAtHead(null, 1, printList);
  console.log(head);
  head = insertNodeAtHead(head, 2, printList);
  head = insertNodeAtHead(head, 3, printList);
  
  function printList(head) {
    var res = "";
    var current = head;
    while (current !== null) {
      res += current.data + " ";
      current = current.next;
    }
    console.log(res);
  }