const NodeTree = require('./NodeTree');

function validateBST(node) {
    return helper(node, -Infinity, Infinity);
}

function helper(node, lower, larger) {
    if (!node) {
        return true;
    }
    if (node.value < lower || node.value >= larger) {
        return false;
    }
    return (
        helper(node.left, lower, node.value) &&
        helper(node.right, node.value, larger)
    );
}

module.exports = validateBST;
