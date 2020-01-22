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

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
        }
        let head = this.head;
        head.prev = node;
        node.next = head;
        this.head = node;
        this.head.prev = null;
        this.length++;
    }

    insertTail(value) {
        let node = new Node(value);

        if (!this.tail) {
            this.tail = node;
            this.head = node;
            this.length++;
        }
        let tail = this.tail;
        tail.next = node;
        node.prev = tail;
        this.tail = node;
        this.tail.next = null;
        this.length++;
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
        console.log(str, '\n');
    }
}

function isPalindrome(list) {
    let start = list.head;
    let end = list.tail;

    while (start !== end) {
        if (start.value !== end.value) return false;
        start = start.next;
        end = end.prev;
    }
    return true;
}

let ll = new DoublyLinkedList();

ll.insertHead(1);
ll.insertTail(4);
ll.insertTail(3);
ll.insertTail(4);
ll.insertTail(1);

ll.print();
console.log(isPalindrome(ll));

module.exports = {DoublyLinkedList, Node, isPalindrome};
