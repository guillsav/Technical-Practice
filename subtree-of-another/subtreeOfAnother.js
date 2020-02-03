/*
Subtree of Another Tree

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A siubtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:

Given tree s:

         3
      /   \
    4      5
  /  \
1     2


 Given tree t:

    4
  /  \
1     2

return true, because t has the same structure and node values with a subtree of s.


Example 2:

Given tree s:

         3
      /   \
    4      5
  /  \
1     2
    /
  0

   Given tree t:

    4
  /  \
1     2

return false.
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function solution(s, t) {
    // Write your code here.
    if (!s) return !t;
    return helper(s, t) || helper(s.left, t) || helper(s.right, t);
}

function helper(root1, root2) {
    // Base case.
    if (!root1 || !root2) return !root1 && !root2;
    if (root1.val !== root2.val) return false;
    return helper(root1.left, root2.left) && helper(root1.right, root2.right);
}

let s = new TreeNode(3);
let s1 = new TreeNode(4);
let s2 = new TreeNode(5);
let s3 = new TreeNode(1);
let s4 = new TreeNode(2);
// let s5 = new TreeNode(0);

s.left = s1;
s.right = s2;
s1.left = s3;
s1.right = s4;
// s4.left = s5;

let t = new TreeNode(4);
let t1 = new TreeNode(1);
let t2 = new TreeNode(2);

t.left = t1;
t.right = t2;

console.log(solution(s, t));
