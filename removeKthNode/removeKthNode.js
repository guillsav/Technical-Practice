/* 
Remove Kth Node From End
Write a function that takes in the head of a Singly Linked List and an integer k( assume that the list has at least k nodes ).The function should remove the kth node from the end of the list.Note that every node in the Singly Linked List has a "value" property storing its value as well as a "next" property pointing to the next node in the list or None( null ) if it is the tail of the list.

Sample input: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9,  k=4
Sample output: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Singly {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        const node = new Node(value);
        this.length++;

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
    }

    size() {
        console.log(this.length);
        return this.length;
    }

    print() {
        if (this.size === 0) return null;
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

function removeKthNodeFromEnd(head, k) {
    let kPointer = head;
    let current = head;
    let count = 1;
    let removed;

    while (count <= k) {
        kPointer = kPointer.next;
        count += 1;
        if (!kPointer) {
            head.value = head.next.value;
            head.next = head.next.next;
            return;
        }
    }

    while (kPointer.next) {
        current = current.next;
        kPointer = kPointer.next;
    }
    let temp = current.next.next;
    removed = current.next;
    current.next = temp;
    return removed.value;
}

let l1 = new Node(0);
// l1.insert(0);
// l1.insert(1);
// l1.insert(2);
// l1.insert(3);
// l1.insert(4);
// l1.insert(5);
// l1.insert(6);
// l1.insert(7);
// l1.insert(8);
// l1.insert(9);

l1.next = new Node(1);
l1.next.next = new Node(2);
l1.next.next.next = new Node(3);
l1.next.next.next.next = new Node(4);

console.log(removeKthNodeFromEnd(l1, 3), '\n');
// l1.print();
while (l1) {
    console.log(l1.value);
    l1 = l1.next;
}
