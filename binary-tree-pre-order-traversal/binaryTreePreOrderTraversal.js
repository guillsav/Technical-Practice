/*
Binary Tree Preorder Traversal
Given a binary tree, return the preorder traversal of its nodes values.
*/

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function preOrderTraversal(root) {
    // Write your code here.
    const stack = [];
    const output = [];
    if (root) {
        stack.push(root);
        while (stack.length > 0) {
            let current = stack.pop();
            output.push(current.value);
            if (current.right) {
                stack.push(current.right);
            }
            if (current.left) {
                stack.push(current.left);
            }
        }
    }
    return output;
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

console.log(preOrderTraversal(n1));
