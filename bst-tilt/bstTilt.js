/*
Binary Tree Tilt

Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example:
Input:
         1
       /   \
      2     3
Output: 1
Explanation:
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function findTilt(root) {
    function helper(root) {
        if (root) {
            let left = helper(root.left);
            let right = helper(root.right);
            sum += Math.abs(left - right);
            return root.val + left + right;
        }
        return 0;
    }
    let sum = 0;
    helper(root, sum);
    return sum;
}

let n1 = new TreeNode(8);
let n2 = new TreeNode(3);
let n3 = new TreeNode(10);
let n4 = new TreeNode(1);
let n5 = new TreeNode(6);
let n6 = new TreeNode(14);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n6;

console.log(findTilt(n1));
