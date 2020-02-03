/*
Symmetric Tree
Given a binary tree, check weither it is a mirror of itself (ie, symmetric around its center).
For example, this binary tree [1, 2, 2, 3, 4, 4, 3] is symmetric:
         1
       /   \
    2       2
  /  \     /  \
3    4   4     3

Output: true
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function solution(tree) {
    // Write your code here.
    if (!tree) return false;
    const q = [];
    q.push(tree);
    while (q.length > 0) {
        let current = q.pop();
        console.log(current.val);
        if (current.left) q.push(current.left);
        if (current.right) q.push(current.right);
    }

    return true;
}

let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(2);
let n4 = new TreeNode(3);
let n5 = new TreeNode(4);
let n6 = new TreeNode(4);
let n7 = new TreeNode(3);

// Root
n1.left = n2;
n1.right = n3;
// Left
n2.left = n4;
n2.right = n5;
// Right
n3.left = n6;
n3.right = n7;

console.log(solution(n1));
