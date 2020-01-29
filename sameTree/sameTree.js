/*
Given 2 Binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

input:
     1          1
  /   \      /   \
2      3   2      3
[1, 2, 3],  [1, 2, 3]
output: true

Example 2:

input: 
    1       1
  /          \
2             2
[1, 2] ,   [1, null, 2]
output: false
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

function isSameTree(t1, t2) {
    if (!t1 || !t2) return false;
    t1Stack = [];
    t2Stack = [];
    t1Stack.push(t1);
    t2Stack.push(t2);

    while (t1Stack.length > 0 && t2Stack.length > 0) {
        curr1 = t1Stack.pop();
        curr2 = t2Stack.pop();
        if (curr1.value !== curr2.value) return false;
        if (curr1.left) t1Stack.push(curr1.left);
        if (curr1.right) t1Stack.push(curr1.right);
        if (curr2.left) t2Stack.push(curr2.left);
        if (curr2.right) t2Stack.push(curr2.right);
    }
    return true;
}

let t1 = new TreeNode(1);
t1.left = new TreeNode(2);
t1.right = new TreeNode(3);

let t2 = new TreeNode(1);
t2.left = new TreeNode(2);
t2.right = new TreeNode(3);

console.log(isSameTree(t1, t2));
