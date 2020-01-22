class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    const sums = [];
    dfs(root);
    return sums;
    function dfs(root, sum = 0) {
        if (!root.left && !root.right) sums.push(sum + root.value);
        if (root.left) dfs(root.left, sum + root.value);
        if (root.right) dfs(root.right, sum + root.value);
    }
}

//  Root
tree = new BinaryTree(10);

// Left Subtree
tree.left = new BinaryTree(9);
tree.left.left = new BinaryTree(6);
tree.left.right = new BinaryTree(10);
tree.left.left.left = new BinaryTree(3);
tree.left.left.right = new BinaryTree(7);
tree.left.right.right = new BinaryTree(10);

//  Right Subtree
tree.right = new BinaryTree(18);
tree.right.left = new BinaryTree(16);
tree.right.right = new BinaryTree(19);

console.log(branchSums(tree));
