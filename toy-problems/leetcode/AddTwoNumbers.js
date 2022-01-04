// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// https://leetcode.com/problems/add-two-numbers/

//testing
var addTwoNumbers = function(l1, l2) {
  let node = l1
  while (true){
      console.log(node.val);
      if (!node.next) break
      node = node.next
  }
  console.log(l1)

};