/*
Check BST

For the purposes of this challenge, we define a binary search tree to be a binary tree with the following properties:

The  value of every node in a node's left subtree is less than the data value of that node.
The  value of every node in a node's right subtree is greater than the data value of that node.
The  value of every node is distinct.
For example, the image on the left below is a valid BST. The one on the right fails on several counts:
- All of the numbers on the right branch from the root are not larger than the root.
- All of the numbers on the right branch from node 5 are not larger than 5.
- All of the numbers on the left branch from node 5 are not smaller than 5.
- The data value 1 is repeated.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

// function checkBST(root) {
//     return isSorted(inOrderTraverse(root))
// }

// function inOrderTraverse(root, res = []) {
//     if (root) {
//         inOrderTraverse(root.left)
//         res.push(root.data)
//         inOrderTraverse(root.right)
//         return res
//     }
// }

// function isSorted(arr) {
//     const len = arr.length
//     for (let i = 1; i < len; i++) {
//         if (arr[i] < arr[i - 1]) return false
//     }
//     return true
// }

function checkBST(root) {
    return helper(root, -Infinity, Infinity);
}

function helper(root, min, max) {
    if (!root) return true;
    if (root.data <= min || root.data >= max) return false;
    return (
        helper(root.left, min, root.data) && helper(root.right, root.data, max)
    );
}

let n1 = new Node(8);
let n2 = new Node(3);
let n3 = new Node(10);
let n4 = new Node(1);
let n5 = new Node(6);
let n6 = new Node(14);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n6;

console.log(checkBST(n1));
