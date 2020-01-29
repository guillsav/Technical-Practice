class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function swapNodes(head) {
    let current = head;
    let count = 1;

    // if (!head) return null;

    while (current) {
        [current, current.next] = [current.next, current];
        current = current.next;
    }

    console.log('TEST');
}

let l1 = new Node(1);
l1.next = new Node(2);
// l1.next.next = new Node(3);
// l1.next.next.next = new Node(4);

console.log(swapNodes(l1));

while (l1) {
    console.log(l1.value);
    l1 = l1.next;
}
