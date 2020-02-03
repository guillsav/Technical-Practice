/*
Delete Node in a BST

Given a root node reference of a BST and a key, delete the node with the given key in the BST.
Return the root node reference (possibly updated) of the BST.

Example:
root = [5, 3, 6, 2, 4, null, 7]
key = 3

        5
      /  \
    3     6
  /  \     \
2     4     7

Given key to delete is 3. So find the node with value 3 and delete it.
One valid answer is [5, 4, 6, 2, null, null, 7], shown in the following BST.

        5
      /  \
    4     6
  /        \
2           7
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
        if (root.val === val) {
            if (!root.left && !root.right) return null;
            if (!root.right) return root.left;
            let temp = nextNode(root.right);
            root.val = temp.val;
            root.right = solution(root.right, temp.val);
            return root;
        }

        if (root.val > val) root.left = solution(root.left, val);
        else if (root.val < val) root.right = solution(root.right, val);
        return root;
    }
    return root;
}

function nextNode(root) {
    while (root.left) {
        root = root.left;
    }
    return root;
}

let tree = new TreeNode(5);
let n1 = new TreeNode(3);
let n2 = new TreeNode(6);
let n3 = new TreeNode(2);
let n4 = new TreeNode(4);
let n5 = new TreeNode(7);

// Root
tree.left = n1;
tree.right = n2;

// Left subtree
n1.left = n3;
n1.right = n4;

// Right subtree
n2.right = n5;

console.log(solution(tree, 3));
