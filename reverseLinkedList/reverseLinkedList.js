/*
This problem was asked by Google.
Given the head of a singly linked list, reverse it in-place.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        let node = new Node(value);
        this.length++;

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        let tail = this.tail;
        tail.next = node;
        this.tail = node;
    }

    size() {
        console.log(this.length);
        return this.length;
    }

    print() {
        if (this.length > 0) {
            let current = this.head;
            const output = [];
            let str;
            while (current) {
                output.push(current.value);
                str = output.join(' -> ');
                current = current.next;
            }
            console.log('\n', str, '\n');
        }
    }
}

function reverseLinkedList(list) {
    let previous = list.head;
    let current = previous.next;

    list.tail = previous;
    list.tail.next = null;
    while (current) {
        // let next = current.next;
        // current.next = previous;
        // previous = current;
        // current = next;

        // With array desructuring technique
        [current.next, previous, current] = [previous, current, current.next];
    }
    list.head = previous;
    return list;
}

const linkedList = new SinglyLinkedList();

linkedList.insert(2);
linkedList.insert(1);
linkedList.insert(3);
linkedList.insert(4);

linkedList.print();
reverseLinkedList(linkedList);
linkedList.print();
