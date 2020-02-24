"""
This problem was asked by Google.
Determine whether a doubly linked list is a palindrome.
What if it's singly linked?
For example, 1 -> 4 -> 3 -> 4 -> 1 returns True
while 1 -> 4 returns False.
"""


class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

    def __str__(self):
        return f'{self.value}'


class Doubly_linked_list:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def insert(self, value):
        node = Node(value)
        self.length += 1

        if not self.head:
            self.head = node
            self.tail = node

        tail = self.tail
        tail.next = node
        node.prev = tail
        self.tail = node
        self.tail.next = None

    def size(self):
        print(self.length)
        return self.length

    def print(self):
        current = self.head
        print('\n')
        while current:
            print(current.value, end= ' -> ')
            current = current.next
        print('\n')
        return


def is_palindrome(linked_list: Doubly_linked_list) -> bool:
    start, end = linked_list.head, linked_list.tail

    while start != end:
        if start.value != end.value:
            linked_list.print()
            return False

        start = start.next
        end = end.prev
    linked_list.print()
    return True


linked_list = Doubly_linked_list();
linked_list.insert(1);
linked_list.insert(4);
linked_list.insert(3);
linked_list.insert(4);
linked_list.insert(1);

print(is_palindrome(linked_list))



def reverseInParentheses(s):
    # Write your code here
    start = 0
    end = len(s) - 1

    while start <= end:
        if s[start] == "(":
            j = i = start + 1
            while s[j] != ")":
                j += 1
            swapLetters(s, i, j - 1)
        start += 1
    s.replace("(", "")
    s.replace(")", "")
    return s


def swapLetters(s, i, j):
    while i != j:
        s[i], s[j] = s[j], s[i]
        i += 1
        j -= 1


def condense(head):
    # Write your code here
    currentNode = head
    previousNode = None

    data = {}

    while currentNode:
        if currentNode.data not in data:
            data[currentNode.data] = 1
        elif currentNode.data in data:
            previousNode.next = None if not currentNode.next else currentNode.next
        previousNode = currentNode
        currentNode = currentNode.next

    print(data)

    return head