const _ = require('./palindromeLinkedList');
const DoublyLinkedList = new _.DoublyLinkedList();
const Node = new _.Node();
const isPalindrome = new _.isPalindrome();

describe('Solution', () => {
    it('testCase1', () => {
        const linkedList = DoublyLinkedList();
        linkedList.insertHead(1);
        linkedList.insertTail(4);
        linkedList.insertTail(3);
        linkedList.insertTail(4);
        linkedList.insertTail(1);
        expect(isPalindrome(linkedList)).toEqual(true);
    });
});
