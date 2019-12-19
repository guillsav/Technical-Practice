const NodeTree = require('./NodeTree');
const validateBST = require('./validateBST');

describe('Solution', () => {
    it('testCase_1 should return false', () => {
        let node = new NodeTree(3);
        node.left = new NodeTree(2);
        node.left.left = new NodeTree(1);
        node.right = new NodeTree(4);
        node.right.left = new NodeTree(5);
        node.right.right = new NodeTree(6);
        expect(validateBST(node)).toBe(false);
    });

    it('testCase_2 should return false', () => {
        let node = new NodeTree(3);
        node.left = new NodeTree(2);
        node.left.left = new NodeTree(1);
        node.right = new NodeTree(5);
        node.right.left = new NodeTree(6);
        node.right.right = new NodeTree(1);
        expect(validateBST(node)).toBe(false);
    });

    it('testCase_3 should return true', () => {
        let node = new NodeTree(4);
        node.left = new NodeTree(2);
        node.left.left = new NodeTree(1);
        node.left.right = new NodeTree(3);
        node.right = new NodeTree(6);
        node.right.left = new NodeTree(5);
        node.right.right = new NodeTree(7);
        expect(validateBST(node)).toBe(true);
    });
});
