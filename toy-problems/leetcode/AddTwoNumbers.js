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

//intermediate solution
var addTwoNumbers = function(l1, l2) {
  let sum = 0
  let multiplier = 1
  let l1_node = l1
  let l2_node = l2
  while (true){
      // console.log(node.val);
      sum += multiplier * (l1_node.val + l2_node.val)
      console.log(sum)
      if (!l1_node.next && !l2_node.next) break
      l1_node = l1_node.next ? l1_node.next : {val:0}
      l2_node = l2_node.next ? l2_node.next : {val:0}
      multiplier = multiplier*10

  }
  console.log(sum)

};

//solution
var addTwoNumbers = function(l1, l2) {
  let l1_node = l1
  let l2_node = l2
  let carry = 0;
  let sum = 0;
  let curr_node = new ListNode();
  let count = 0;
  let head;
  while (true){
      if (count === 0){
          head = curr_node
      }
      count++
      if (l1_node.val+l2_node.val < 10){
          sum = l1_node.val+l2_node.val + carry
          carry = 0
      } else {
          sum = (l1_node.val+l2_node.val + carry) % 10
          carry = 1
      }

      curr_node.val = sum;
      if (!l1_node.next && !l2_node.next) break
      let next_node  = new ListNode();
      curr_node.next = next_node
      l1_node = l1_node.next ? l1_node.next : {val:0}
      l2_node = l2_node.next ? l2_node.next : {val:0}
      curr_node = next_node
  }
   return head
};