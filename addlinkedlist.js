
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var addTwoNumbers = function(l1, l2) {
    function ListNode(val) {
      this.val = val;
      this.next = null;
    }

    var l3 = new ListNode((l1.val+l2.val)%10);


    while(l1.next && l2.next){
      l1 = l1.next;
      l2 = l2.next;

      l3.next = new ListNode((l1.val+l2.val)%10);
    }
};