/*
Binary Tree In-order Traversal
Given a binary tree, return the in-order traversal of its nodes values.
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

function inOrderTraversal(root) {
    // Write your code here.
    const stack = [];
    const output = [];
    let current = root;
    while (stack.length > 0 || current) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            current = stack.pop();
            output.push(current.value);
            current = current.right;
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

console.log(inOrderTraversal(n1));
