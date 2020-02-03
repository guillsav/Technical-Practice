/*
Insert into a BST

Given the root of a BST and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion.
You can return any of them.

Example:

       4
     /  \
    2    7
  /  \
1     3

And the value to insert: 5
You can return this BST:

         4
     /      \
    2        7
  /  \     /
1     3   5
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function solution(root, val) {
    // Write your code here.
    const node = new TreeNode(val);
    if (!root) {
        root.val = val;
        return root;
    }

    if (root.val > val) {
        if (!root.left) {
            root.left = node;
        } else {
            solution(root.left, val);
        }
    }

    if (root.val <= val) {
        if (!root.right) {
            root.right = node;
        } else {
            solution(root.right, val);
        }
    }

    return root;
}

let root = new TreeNode(4);
let n1 = new TreeNode(2);
let n3 = new TreeNode(1);
let n4 = new TreeNode(3);

let n2 = new TreeNode(7);

// Left subrtree
root.left = n1;
n1.left = n3;
n1.right = n4;

// Right subtree
root.right = n2;

console.log(solution(root, 5));
console.log(n2.left);
