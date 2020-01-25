/*
This problem was asked by Google.
Given k sorted singly linked lists, write a function to 
merge all the lists into one sorted singly linked list.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function merge(listA, listB) {
    // Write your code here.
    if (!listA) {
        if (listB) return listB;
        else return null;
    } else if (!listB) return listA;

    let output = (main = off);

    if (listA.value < listB.value) {
        output = main = listA;
        off = listB;
    } else {
        output = main = listB;
        off = listA;
    }

    while (main.next) {
        if (main.next.value <= off.value) {
            main = main.next;
        } else {
            [main.next, off] = [off, main.next];
        }
    }
    main.next = off;
    return output;
}

let l1 = new Node(1);
l1.next = 3;
l1.next.next = 5;
// console.log(l1.next);
let l2 = new Node(4);
l2.next = 6;
l2.next.next = 7;

console.log(merge(l1, l2)); // Should return  ->
// 6 -> 3 -> 4 -> 5   1 -> 7 -> 8 -> 9
