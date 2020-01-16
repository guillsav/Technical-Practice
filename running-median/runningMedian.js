/*
This problem was asked by Microsoft.

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.
Recall that the median of an even-numbered list is the average of the two middle numbers.
For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:
2
1.5
2
3.5
2
2
2
*/

function runningMedian(arr) {
    const medianArr = [];
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
        res.sort();
        let middle = Math.floor(res.length / 2);
        if (res.length % 2 === 0) {
            let median = (res[middle - 1] + res[middle]) / 2;
            medianArr.push(median);
        } else {
            let median = res[middle];
            medianArr.push(median);
        }
    }

    for (const num of medianArr) {
        console.log(num);
    }
}

const arr = [2, 1, 5, 7, 2, 0, 5];
runningMedian(arr);
