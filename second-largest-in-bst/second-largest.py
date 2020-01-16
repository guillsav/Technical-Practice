"""
This problem was asked by Dropbox.
Given the root to a binary search tree, find the second largest node in the tree.

===========================   

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
"""

class TreeNode:

  def __init__(self, value: int) -> None:
    self.value = value
    self.left = None
    self.right = None

  def __str__(self) -> str:
    return f"{self.value}"


def find_second_largest(node: TreeNode ) -> int:
  #  Depth-first traversal approach.
  stack, second_largest = [], 0

  stack.append(node)

  while len(stack) > 0:
    current = stack.pop()

    if not current.right:
      while current:
        if current.right:
          second_largest = current.right.value
        current = current.left
    else:  
      second_largest = current.value
      stack.append(current.right)

  return second_largest

# Bst root
node = TreeNode(10)

# Left subtree
node.left = TreeNode(7)
node.left.right = TreeNode(9) # Second largest in Bst if no right subtree exist.
node.left.left = TreeNode(6)
node.left.left.left = TreeNode(3)

# Right subtree
node.right = TreeNode(18)
node.right.left = TreeNode(16)
node.right.right = TreeNode(19) # Second largest in Bst if right subtree exist.
node.right.right.right = TreeNode(20)

print(find_second_largest(node)) 
