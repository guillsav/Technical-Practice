# This problem was asked by Google.
# Given k sorted singly linked lists, write a function to 
# merge all the lists into one sorted singly linked list.


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def __str__(self):
        return f"{self.value}"


def merge(listA: Node, listB: Node)-> Node:
    if not listA:
        return listB
    if not listB:
        return listA
    if not listA and not listB:
        return None
    
    output = main = off = None

    if listA.value < listB.value:
        output = main = listA
        off = listB
    output = main = listB
    off = listA

    while main.next:
        if main.next.value <= off.value:
            main = main.next
        main.next, off = off, main.next

    main.next = off
    return output


l1 = Node(1);
l1.next = 3;
# l1.next.next = 5;

l2 = Node(4);
l2.next = 6;
# l2.next.next = 7;

print(merge(l1, l2))