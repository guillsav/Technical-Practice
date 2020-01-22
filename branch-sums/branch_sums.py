class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(root):
    # Write your code here.
    stack = []
    count = 0
    res = []

    stack.append(root)

    while len(stack) > 0:
        current = stack.pop()

        # Increment the count with the value of the current node.
        count += current.value

        print(current.value)
        #  If right child add it to the stack.
        if current.right:
            stack.append(current.right)

        # If left child add it to the stack.
        if current.left:
            stack.append(current.left)

        #  If no left / right child append count to the res array & decrement the count variable.
        if  not current.left and not current.right:
            res.append(count)
            count -= current.value

    print('count: ', count)
    return res

tree = BinaryTree(1)

#  Left Subtree
tree.left = BinaryTree(2)
tree.left.left = BinaryTree(4)
tree.left.right = BinaryTree(5)
tree.left.left.left = BinaryTree(8)
tree.left.left.right = BinaryTree(9)
tree.left.right.right = BinaryTree(10)

# Right Subtree
tree.right = BinaryTree(3)
tree.right.left = BinaryTree(6)
tree.right.right = BinaryTree(7)

print(branchSums(tree))