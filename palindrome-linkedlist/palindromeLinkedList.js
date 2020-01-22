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

    insertHead(value) {
        let node = new Node(value);
        this.length++;

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        let head = this.head;
        head.prev = node;
        node.next = head;
        this.head = node;
        this.head.prev = null;
    }

    insertTail(value) {
        let node = new Node(value);
        this.length++;

        if (!this.tail) {
            this.tail = node;
            this.head = node;
        }
        let tail = this.tail;
        tail.next = node;
        node.prev = tail;
        this.tail = node;
        this.tail.next = null;
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
    size() {
        console.log(this.length);
        return this.length;
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
linkedlist.insertHead(1);
linkedlist.insertTail(4);
linkedlist.insertTail(3);
linkedlist.insertTail(4);
linkedlist.insertTail(1);

console.log(isPalindrome(linkedlist));
