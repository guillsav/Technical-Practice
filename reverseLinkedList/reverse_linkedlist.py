# This problem was asked by Google.
# Given the head of a singly linked list, reverse it in-place.


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return f"{self.value}"


class Singly_linked_list:
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
        self.tail = node

    def size(self):
        print(self.length)
        return self.length

    def print(self):
        if self.length > 0:
            current = self.head
            print('\n')
            while current:
                print(current.value , end=' -> ')
                current = current.next
            print('\n')
            return


def reverse_linked_list(linked_list: Singly_linked_list)-> Singly_linked_list:
    previous = linked_list.head
    current = previous.next

    linked_list.tail = linked_list.head
    linked_list.tail.next = None

    while(current):
        # nextNode = current.next
        # current.next = previous
        # previous = current
        # current = nextNode
        
        current.next, previous, current = previous, current, current.next
    linked_list.head = previous
    return 


linked_list = Singly_linked_list();

linked_list.insert(2);
linked_list.insert(1);
linked_list.insert(3);
linked_list.insert(4);

linked_list.print();
reverse_linked_list(linked_list);
linked_list.print();