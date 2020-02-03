/*
Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:
Given binary tree [3, 9, 20, null, null, 15, 7],

   3
 /   \
9    20
    /  \
  15    7

return its depth = 3.
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function solution(tree) {
    // Write your code here.
    if (!tree) return 0;

    let depth = 0;
    let stack = [];
    stack.push(tree);
    while (stack.length > 0) {
        let current = stack.pop();
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
        if (!current.right || !current.left) depth++;
    }
    return depth;
}

// function solution(tree) {
//     if (!tree) {
//         return 0;
//     } else {
//         let left = solution(tree.left);
//         let right = solution(tree.right);
//         return Math.max(left, right) + 1;
//     }
// }

let root = new TreeNode(3);
let n1 = new TreeNode(9);
let n2 = new TreeNode(20);
let n3 = new TreeNode(15);
let n4 = new TreeNode(7);

root.left = n1;
root.right = n2;
n2.left = n3;
n2.right = n4;

console.log(solution(root));
