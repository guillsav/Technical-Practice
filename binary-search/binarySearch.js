function binarySearchIterative(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] > target) end = middle - 1;
        else if (arr[middle] < target) start = middle + 1;
        else return middle;
    }
    return -1;
}

function binarySearchRecursive(arr, target, start, end) {
    // base case
    if (start > end) return -1;

    // Find middle index
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] < target) {
        // Get ride of the left half of the array.
        return binarySearchRecursive(arr, target, middle + 1, end);
    } else if (arr[middle] > target) {
        // Get ride of the right half of the array.
        return binarySearchRecursive(arr, target, start, middle - 1);
    } else {
        return middle;
    }
}

module.exports = {binarySearchIterative, binarySearchRecursive};
