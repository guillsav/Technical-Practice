/*
This problem was asked by Google.
Determine whether a doubly linked list is a palindrome. 
What if it's singly linked?
For example, 1 -> 4 -> 3 -> 4 -> 1 returns True 
while 1 -> 4 returns False.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        let node = new Node(value);
        this.length++;

        if (!this.head) {
            this.tail = node;
            this.head = node;
        }
        let tail = this.tail;
        tail.next = node;
        node.prev = tail;
        this.tail = node;
        this.tail.next = null;
    }

    size() {
        console.log(this.length);
        return this.length;
    }

    print() {
        const output = [];
        let str;
        let current = this.head;
        while (current) {
            output.push(current.value);
            str = output.join(' -> ');
            current = current.next;
        }
        console.log('\n', str, '\n');
    }
}

function isPalindrome(list) {
    let start = list.head;
    let end = list.tail;

    while (start !== end) {
        if (start.value !== end.value) {
            list.print();
            return false;
        }

        start = start.next;
        end = end.prev;
    }
    list.print();
    return true;
}

const linkedlist = new DoublyLinkedList();
linkedlist.insert(1);
linkedlist.insert(4);
linkedlist.insert(3);
linkedlist.insert(4);
linkedlist.insert(1);

console.log(isPalindrome(linkedlist));
