/*
This problem was asked by Dropbox.
Given the root to a binary search tree, find the second largest node in the tree.

==========================================   

              10 root
          /      \ 
        7         18
      /   \     /   \ 
    6      9  16     19 * second largest
  /                    \ 
3                       20 largest node

Output: 19

=============================

            10 root and largest node
          /   
        7         
      /   \     
    6      9 * second largest  
  /                   
3

Output: 9
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findSecondLargest(node) {
    const stack = [];
    let secondLargest;

    stack.push(node);

    while (stack.length > 0) {
        let current = stack.pop();

        if (!current.right) {
            while (current.left || current.right) {
                if (current.right) {
                    secondLargest = current.right.value;
                    current = current.right;
                } else {
                    secondLargest = current.left.value;
                    current = current.left;
                }
            }
        } else {
            secondLargest = current.value;
            stack.push(current.right);
        }
    }
    return secondLargest;
}

//  Bst root
let node = new TreeNode(10);

// left subtree
node.left = new TreeNode(7);
node.left.right = new TreeNode(9); // Second largest in Bst if no right subtree exist.
node.left.left = new TreeNode(6);
node.left.left.left = new TreeNode(3);

// Right subtree
node.right = new TreeNode(18);
node.right.left = new TreeNode(16);
node.right.right = new TreeNode(19); // Second largest in Bst if right subtree exist.
node.right.right.right = new TreeNode(20);

console.log(findSecondLargest(node));
