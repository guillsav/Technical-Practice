/*
Find the Start of Linked List Cycle

Given the head of a singly linked list that may or may not contain a cycle, design an algorithm that returns a reference to the node that is the start of the cycle (assuming the list contains a cycle). If the list doesn't contain a cycle, return the head of the linked list.
*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function findCycleStart(A) {}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n3;

console.log(findCycleStart(n1));
