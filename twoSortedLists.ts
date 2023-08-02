class ListNode {
    val: number; 
    next: ListNode | null; 
  
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
  }
  
  function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let merged: ListNode | null = new ListNode(-1);
    let current: ListNode | null = merged;
  
    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next; 
      } else {
        current.next = list2;
        list2 = list2.next; 
      }
      current = current.next;
    }

    if (list1 !== null) {
      current.next = list1;
    }
    if (list2 !== null) {
      current.next = list2;
    }

    return merged.next;
  }
