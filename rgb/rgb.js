/*
This problem was asked by Google.
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
Do this in linear time and in-place.
For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/

function rgb(arr) {
    pointer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'R') {
            swap(arr, i, pointer);
            pointer++;
        }
    }

    for (let i = pointer + 1; i < arr.length; i++) {
        if (arr[i] === 'G') {
            swap(arr, i, pointer);
            pointer++;
        }
    }
    return arr;
}

function swap(arr, i, p) {
    [arr[i], arr[p]] = [arr[p], arr[i]];
}

arr = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
console.log(rgb(arr));
