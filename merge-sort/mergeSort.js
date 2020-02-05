function mergeSort(arr) {
    const len = arr.length;
    if (len <= 1) return arr;
    const halfLength = Math.floor(len / 2);
    let left = arr.slice(0, halfLength);
    let right = arr.slice(halfLength);
    return helper(mergeSort(left), mergeSort(right), len);
}

function helper(arrA, arrB, length) {
    const sortedArray = new Array(length).fill(0);
    let i = (j = k = 0);
    const lenA = arrA.length;
    const lenB = arrB.length;
    while (i < lenA && j < lenB) {
        if (arrA[i] <= arrB[j]) sortedArray[k++] = arrA[i++];
        sortedArray[k++] = arrB[j++];
    }
    while (i < lenA) sortedArray[k++] = arrA[i++];
    while (j < lenB) sortedArray[k++] = arrB[j++];
    return sortedArray;
}

let numbers = [3, 1, 2];
console.log(mergeSort(numbers));

module.exports = mergeSort;
