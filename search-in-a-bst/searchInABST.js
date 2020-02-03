/*
Search in a BST

Given the root node of a BST and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. if such node doesn't exist, you should return NULL.
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function solution(root, val) {
    // Write your code here.
    if (root) {
        if (root.val === val) return root;
        if (root.val > val) return solution(root.left, val);
        if (root.val < val) return solution(root.right, val);
    }
    return null;
}

let tree = new TreeNode(4);
let n1 = new TreeNode(2);
let n2 = new TreeNode(7);
let n3 = new TreeNode(1);
let n4 = new TreeNode(3);

tree.left = n1;
tree.right = n2;

n1.left = n3;
n1.right = n4;

console.log(solution(tree, 9)); // Should return null.
console.log(solution(tree, 2)); // Should return [2, 1, 3].
