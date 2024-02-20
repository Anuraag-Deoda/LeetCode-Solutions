/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var listNode = new ListNode(0);
    var headNode = listNode;

    var sum = 0;
    var carry = 0;

    var a = l1;
  var b = l2;
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    headNode.next = new ListNode(sum % 10);
    headNode= headNode.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) headNode.next = new ListNode(carry);
  return listNode.next;
};