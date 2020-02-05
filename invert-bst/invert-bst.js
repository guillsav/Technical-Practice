/*
Invert Binary Tree

Given a binary tree invert its nodes.

Example:

input:
          4
     /       \
    2         7
  /  \     /   \
1    3    6    9

ouput:
          4
     /       \
    7         2
  /  \     /   \
9     6    3     1

*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function invertTree(root) {
    function helper(root) {
        if (!root) return null;
        [root.left, root.right] = [root.right, root.left];
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return root;
}

let root = new TreeNode(4);
let n1 = new TreeNode(2);
let n2 = new TreeNode(7);
let n3 = new TreeNode(1);
let n4 = new TreeNode(3);
let n5 = new TreeNode(6);
let n6 = new TreeNode(9);

// Root
root.left = n1;
root.right = n2;

// Left Subtree
n1.left = n3;
n1.right = n4;

// Right Subtree
n2.left = n5;
n2.right = n6;

console.log(invertTree(root));
